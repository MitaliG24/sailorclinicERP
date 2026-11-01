import { t as getDatabase } from "./mongodb.server-DjK6AyEN.mjs";
import { n as createMiddleware, t as createCsrfMiddleware } from "./createCsrfMiddleware-B2To0gPJ.mjs";
import { t as renderErrorPage } from "./ssr.mjs";
import crypto from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/start-1ILI8HJS.js
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart = (getOptions) => {
	return {
		getOptions: async () => {
			const options = await getOptions();
			if (options.serializationAdapters) {
				const deduped = /* @__PURE__ */ new Set();
				dedupeSerializationAdapters(deduped, options.serializationAdapters);
				options.serializationAdapters = Array.from(deduped);
			}
			return options;
		},
		createMiddleware
	};
};
function sessionSecret() {
	const secret = process.env.SESSION_SECRET;
	if (!secret && true) throw new Error("SESSION_SECRET is required in production.");
	return secret || "local-development-only-change-this-secret-before-production";
}
function hashPassword(password) {
	const salt = crypto.randomBytes(16).toString("hex");
	return `scrypt:${salt}:${crypto.scryptSync(password, salt, 64).toString("hex")}`;
}
function verifyPassword(password, stored) {
	if (!stored) return false;
	const parts = stored.split(":");
	if (parts.length !== 3 || parts[0] !== "scrypt") return false;
	const expected = Buffer.from(parts[2], "hex");
	const actual = crypto.scryptSync(password, parts[1], 64);
	return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}
function cookieValue(request, name) {
	const cookie = request.headers.get("cookie") ?? "";
	for (const item of cookie.split(";")) {
		const [key, ...value] = item.trim().split("=");
		if (key === name) return decodeURIComponent(value.join("="));
	}
}
function signPayload(payload) {
	return crypto.createHmac("sha256", sessionSecret()).update(payload).digest("base64url");
}
async function createSessionCookie(user) {
	const payload = Buffer.from(JSON.stringify({
		...user,
		expiresAt: Date.now() + 288e5
	})).toString("base64url");
	const token = `${payload}.${signPayload(payload)}`;
	return `clinic_session=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=28800; Secure`;
}
async function getSession(request) {
	const token = cookieValue(request, "clinic_session");
	if (!token) return null;
	const dot = token.lastIndexOf(".");
	if (dot < 1) return null;
	const payload = token.slice(0, dot);
	const signature = token.slice(dot + 1);
	const expected = signPayload(payload);
	const actualBuffer = Buffer.from(signature);
	const expectedBuffer = Buffer.from(expected);
	if (actualBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(actualBuffer, expectedBuffer)) return null;
	try {
		const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
		if (!parsed.expiresAt || parsed.expiresAt < Date.now()) return null;
		if (!parsed.id || !parsed.email || parsed.role !== "admin" && parsed.role !== "staff") return null;
		return {
			id: parsed.id,
			email: parsed.email,
			name: parsed.name,
			role: parsed.role
		};
	} catch {
		return null;
	}
}
async function bootstrapUsers(users) {
	const adminEmail = (process.env.CLINIC_ADMIN_EMAIL || "medical@sailorsmedical.com").toLowerCase().trim();
	const adminPassword = process.env.CLINIC_ADMIN_PASSWORD || "Admin@123";
	const staffEmail = (process.env.CLINIC_STAFF_EMAIL || "info@sailorsmedical.com").toLowerCase().trim();
	const staffPassword = process.env.CLINIC_STAFF_PASSWORD || "Staff@1";
	const accounts = [{
		email: adminEmail,
		password: adminPassword,
		name: "Dr. Mitali Gadge",
		role: "admin"
	}, {
		email: staffEmail,
		password: staffPassword,
		name: "Rachel Adams",
		role: "staff"
	}];
	for (const account of accounts) {
		const email = account.email.toLowerCase();
		if (!await users.findOne({ email })) await users.insertOne({
			email,
			name: account.name,
			role: account.role,
			active: true,
			passwordHash: hashPassword(account.password),
			createdAt: /* @__PURE__ */ new Date()
		});
		else await users.updateOne({ email }, { $set: {
			email,
			role: account.role,
			active: true,
			passwordHash: hashPassword(account.password)
		} });
	}
}
async function handleAuthRequest(request, pathname) {
	if (!pathname.startsWith("/api/auth/")) return null;
	if (pathname === "/api/auth/login" && request.method === "POST") try {
		const body = await request.json();
		if (typeof body.email !== "string" || typeof body.password !== "string") return Response.json({ message: "Enter an email address and password." }, { status: 400 });
		const email = body.email.trim().toLowerCase();
		const users = (await getDatabase()).collection("clinic_users");
		await bootstrapUsers(users);
		const record = await users.findOne({
			email,
			active: { $ne: false }
		});
		if (!record || !verifyPassword(body.password, record.passwordHash)) return Response.json({ message: "Invalid email or password." }, { status: 401 });
		const user = {
			id: record._id?.toString() || email,
			email,
			name: record.name || (record.role === "admin" ? "Mitali Gadge" : "Rachel Adams"),
			phone: record.phone,
			designation: record.designation,
			regNo: record.regNo,
			department: record.department,
			role: record.role === "admin" ? "admin" : "staff"
		};
		await users.updateOne({ _id: record._id }, { $set: { lastLoginAt: /* @__PURE__ */ new Date() } }).catch(() => void 0);
		return Response.json(user, {
			status: 200,
			headers: {
				"Set-Cookie": await createSessionCookie(user),
				"Cache-Control": "no-store"
			}
		});
	} catch (error) {
		console.error("Clinic login failed:", error);
		return Response.json({ message: "Unable to sign in. Check the clinic configuration." }, { status: 500 });
	}
	if (pathname === "/api/auth/profile" && request.method === "POST") {
		const session = await getSession(request);
		if (!session) return Response.json({ message: "Authentication required." }, { status: 401 });
		try {
			const body = await request.json();
			const db = await getDatabase();
			const users = db.collection("clinic_users");
			const updateData = {};
			if (typeof body.name === "string" && body.name.trim()) updateData.name = body.name.trim();
			if (typeof body.phone === "string") updateData.phone = body.phone.trim();
			if (typeof body.designation === "string") updateData.designation = body.designation.trim();
			if (typeof body.regNo === "string") updateData.regNo = body.regNo.trim();
			if (typeof body.department === "string") updateData.department = body.department.trim();
			await users.updateOne({ email: session.email.toLowerCase() }, { $set: updateData }, { upsert: true });
			const updatedUser = {
				...session,
				name: updateData.name || session.name,
				phone: updateData.phone,
				designation: updateData.designation,
				regNo: updateData.regNo,
				department: updateData.department
			};
			try {
				await db.collection("activity_logs").insertOne({
					id: `ACT-${Date.now()}`,
					user: updatedUser.name,
					action: "Updated administrator profile credentials",
					subject: `${updatedUser.name} (${updatedUser.role})`,
					time: "Just now",
					kind: "Profile"
				});
			} catch {}
			return Response.json({
				success: true,
				user: updatedUser
			}, {
				status: 200,
				headers: {
					"Set-Cookie": await createSessionCookie(updatedUser),
					"Cache-Control": "no-store"
				}
			});
		} catch (error) {
			console.error("Profile update failed:", error);
			return Response.json({ message: "Failed to update profile." }, { status: 500 });
		}
	}
	if (pathname === "/api/auth/me") {
		const user = await getSession(request);
		if (!user) return Response.json(null, {
			status: 401,
			headers: { "Cache-Control": "no-store" }
		});
		try {
			const record = await (await getDatabase()).collection("clinic_users").findOne({ email: user.email.toLowerCase() });
			const enrichedUser = {
				...user,
				name: record?.name || user.name || (user.role === "admin" ? "Mitali Gadge" : "Rachel Adams"),
				phone: record?.phone ?? (user.role === "admin" ? "+91 95614 50104" : "+91 98201 11223"),
				designation: record?.designation ?? (user.role === "admin" ? "Chief Medical Administrator & Director" : "Clinical Coordinator"),
				regNo: record?.regNo ?? (user.role === "admin" ? "MMC-2015-84920 / DG-SMC-04" : "NUR-2019-3381"),
				department: record?.department ?? "Marine Medical Examination & DG Shipping Care"
			};
			return Response.json(enrichedUser, {
				status: 200,
				headers: { "Cache-Control": "no-store" }
			});
		} catch {
			return Response.json(user, {
				status: 200,
				headers: { "Cache-Control": "no-store" }
			});
		}
	}
	if (pathname === "/api/auth/logout" && request.method === "POST") return Response.json({ success: true }, { headers: {
		"Set-Cookie": "clinic_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0",
		"Cache-Control": "no-store"
	} });
	return Response.json({ message: "Auth endpoint not found." }, { status: 404 });
}
var errorMiddleware = createMiddleware().server(async ({ next, request }) => {
	try {
		return await next();
	} catch (error) {
		if (new URL(request.url).pathname.includes("/_server") || request.headers.get("accept")?.includes("application/json") || request.headers.has("x-tanstack-start-rpc")) throw error;
		if (error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
});
var authMiddleware = createMiddleware({ type: "request" }).server(async ({ request, pathname, handlerType, next }) => {
	const authResponse = await handleAuthRequest(request, pathname);
	if (authResponse) return authResponse;
	if (pathname === "/api/feedback/submit" && request.method === "POST") try {
		const body = await request.json();
		const { submitFeedbackServer } = await import("./clinic.server-CScDC1af.mjs").then((n) => n.t);
		const res = await submitFeedbackServer({ data: body });
		return Response.json(res, { status: res.success ? 200 : 400 });
	} catch (err) {
		console.error("Direct feedback endpoint error:", err);
		return Response.json({
			success: false,
			message: "Submission failed."
		}, { status: 500 });
	}
	const authUser = await getSession(request);
	const PUBLIC_SERVER_FN_PATTERNS = ["submitFeedbackServer", "submitFeedback"];
	let decodedServerFn = "";
	if (pathname.includes("/_serverFn/")) {
		const rawSegment = pathname.split("/_serverFn/")[1]?.split("/")[0]?.split("?")[0] || "";
		try {
			decodedServerFn = Buffer.from(rawSegment, "base64url").toString("utf8");
		} catch {
			decodedServerFn = "";
		}
	}
	const isPublicServerFn = handlerType === "serverFn" && PUBLIC_SERVER_FN_PATTERNS.some((name) => pathname.includes(name) || decodedServerFn.includes(name));
	if (handlerType === "serverFn" && !authUser && !isPublicServerFn) return new Response(JSON.stringify({ message: "Authentication required." }), {
		status: 401,
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "no-store"
		}
	});
	return next({ context: { authUser } });
});
var csrfMiddleware = createCsrfMiddleware({ filter: (ctx) => {
	if (ctx.handlerType !== "serverFn") return false;
	let decoded = "";
	if (ctx.pathname.includes("/_serverFn/")) {
		const rawSegment = ctx.pathname.split("/_serverFn/")[1]?.split("/")[0]?.split("?")[0] || "";
		try {
			decoded = Buffer.from(rawSegment, "base64url").toString("utf8");
		} catch {}
	}
	if (ctx.pathname.includes("submitFeedback") || decoded.includes("submitFeedback")) return false;
	return true;
} });
var startInstance = createStart(() => ({ requestMiddleware: [
	errorMiddleware,
	authMiddleware,
	csrfMiddleware
] }));
//#endregion
export { startInstance };
