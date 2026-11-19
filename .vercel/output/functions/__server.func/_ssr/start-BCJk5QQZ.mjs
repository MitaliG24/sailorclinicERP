import { t as getDatabase } from "./mongodb.server-C_u4e3KP.mjs";
import { n as createMiddleware, t as createCsrfMiddleware } from "./createCsrfMiddleware-B2To0gPJ.mjs";
import { t as renderErrorPage } from "./ssr.mjs";
import crypto from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/start-BCJk5QQZ.js
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
var DEFAULT_SESSION_SECRET = "c8d5784a9239857d9b7361a4918f0426d0e82c5f93e43b1238475a2d4869b01c";
function sessionSecret() {
	return process.env.SESSION_SECRET || DEFAULT_SESSION_SECRET;
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
			role: parsed.role,
			phone: parsed.phone,
			designation: parsed.designation,
			regNo: parsed.regNo,
			department: parsed.department
		};
	} catch {
		return null;
	}
}
function getBootstrapAccounts() {
	const adminEmail = (process.env.CLINIC_ADMIN_EMAIL || "medical@sailorsmedical.com").toLowerCase().trim();
	const adminPassword = process.env.CLINIC_ADMIN_PASSWORD || "Admin@123";
	const staffEmail = (process.env.CLINIC_STAFF_EMAIL || "info@sailorsmedical.com").toLowerCase().trim();
	const staffPassword = process.env.CLINIC_STAFF_PASSWORD || "Staff@1";
	const accounts = [{
		email: adminEmail,
		password: adminPassword,
		name: "Dr. Mitali Gadge",
		role: "admin",
		phone: "+91 95614 50104",
		designation: "Chief Medical Administrator & Director",
		regNo: "MMC-2015-84920 / DG-SMC-04",
		department: "Marine Medical Examination & DG Shipping Care"
	}, {
		email: staffEmail,
		password: staffPassword,
		name: "Rachel Adams",
		role: "staff",
		phone: "+91 98201 11223",
		designation: "Clinical Coordinator",
		regNo: "NUR-2019-3381",
		department: "Marine Medical Examination & DG Shipping Care"
	}];
	const aliases = [
		{
			email: "medical@sailorsmedical.com",
			password: adminPassword,
			name: "Dr. Mitali Gadge",
			role: "admin",
			phone: "+91 95614 50104",
			designation: "Chief Medical Administrator & Director",
			regNo: "MMC-2015-84920 / DG-SMC-04",
			department: "Marine Medical Examination & DG Shipping Care"
		},
		{
			email: "medical@sailorsmedicalclinic.com",
			password: adminPassword,
			name: "Dr. Mitali Gadge",
			role: "admin",
			phone: "+91 95614 50104",
			designation: "Chief Medical Administrator & Director",
			regNo: "MMC-2015-84920 / DG-SMC-04",
			department: "Marine Medical Examination & DG Shipping Care"
		},
		{
			email: "info@sailorsmedical.com",
			password: staffPassword,
			name: "Rachel Adams",
			role: "staff",
			phone: "+91 98201 11223",
			designation: "Clinical Coordinator",
			regNo: "NUR-2019-3381",
			department: "Marine Medical Examination & DG Shipping Care"
		},
		{
			email: "staff@sailorsmedical.com",
			password: staffPassword,
			name: "Rachel Adams",
			role: "staff",
			phone: "+91 98201 11223",
			designation: "Clinical Coordinator",
			regNo: "NUR-2019-3381",
			department: "Marine Medical Examination & DG Shipping Care"
		}
	];
	for (const alias of aliases) if (!accounts.some((a) => a.email.toLowerCase() === alias.email.toLowerCase())) accounts.push(alias);
	return accounts;
}
async function bootstrapUsers(users) {
	const accounts = getBootstrapAccounts();
	for (const account of accounts) {
		const email = account.email.toLowerCase();
		const existing = await users.findOne({ email });
		if (!existing) await users.insertOne({
			email,
			name: account.name,
			role: account.role,
			phone: account.phone,
			designation: account.designation,
			regNo: account.regNo,
			department: account.department,
			active: true,
			passwordHash: hashPassword(account.password),
			createdAt: /* @__PURE__ */ new Date()
		});
		else await users.updateOne({ email }, { $set: {
			email,
			role: account.role,
			active: true,
			passwordHash: hashPassword(account.password),
			...existing.name ? {} : { name: account.name },
			...existing.phone ? {} : { phone: account.phone },
			...existing.designation ? {} : { designation: account.designation },
			...existing.regNo ? {} : { regNo: account.regNo },
			...existing.department ? {} : { department: account.department }
		} });
	}
}
async function handleAuthRequest(request, pathname) {
	if (!pathname.startsWith("/api/auth/")) return null;
	if (pathname === "/api/auth/login" && request.method === "POST") try {
		const body = await request.json();
		if (typeof body.email !== "string" || typeof body.password !== "string") return Response.json({ message: "Enter an email address and password." }, { status: 400 });
		const email = body.email.trim().toLowerCase();
		const inputPassword = body.password;
		const matchedAccount = getBootstrapAccounts().find((a) => a.email.toLowerCase() === email);
		let isAuthenticated = false;
		if (matchedAccount && (inputPassword === matchedAccount.password || inputPassword.trim() === matchedAccount.password)) isAuthenticated = true;
		let record = null;
		if (isAuthenticated) (async () => {
			try {
				const users = (await Promise.race([getDatabase(), new Promise((_, reject) => setTimeout(() => reject(/* @__PURE__ */ new Error("DB timeout")), 1500))])).collection("clinic_users");
				await bootstrapUsers(users);
				await users.updateOne({ email }, { $set: { lastLoginAt: /* @__PURE__ */ new Date() } });
			} catch {}
		})();
		else try {
			const users = (await Promise.race([getDatabase(), new Promise((_, reject) => setTimeout(() => reject(/* @__PURE__ */ new Error("DB timeout")), 1200))])).collection("clinic_users");
			await bootstrapUsers(users);
			record = await users.findOne({
				email,
				active: { $ne: false }
			});
			if (record && record.passwordHash && verifyPassword(inputPassword, record.passwordHash)) isAuthenticated = true;
		} catch (dbErr) {}
		if (!isAuthenticated) return Response.json({ message: "Invalid email or password." }, { status: 401 });
		const role = record?.role || matchedAccount?.role || "staff";
		const name = record?.name || matchedAccount?.name || (role === "admin" ? "Dr. Mitali Gadge" : "Rachel Adams");
		const user = {
			id: record?._id?.toString() || email,
			email,
			name,
			phone: record?.phone || matchedAccount?.phone || (role === "admin" ? "+91 95614 50104" : "+91 98201 11223"),
			designation: record?.designation || matchedAccount?.designation || (role === "admin" ? "Chief Medical Administrator & Director" : "Clinical Coordinator"),
			regNo: record?.regNo || matchedAccount?.regNo || (role === "admin" ? "MMC-2015-84920 / DG-SMC-04" : "NUR-2019-3381"),
			department: record?.department || matchedAccount?.department || "Marine Medical Examination & DG Shipping Care",
			role
		};
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
			const updateData = {};
			if (typeof body.name === "string" && body.name.trim()) updateData.name = body.name.trim();
			if (typeof body.phone === "string") updateData.phone = body.phone.trim();
			if (typeof body.designation === "string") updateData.designation = body.designation.trim();
			if (typeof body.regNo === "string") updateData.regNo = body.regNo.trim();
			if (typeof body.department === "string") updateData.department = body.department.trim();
			try {
				const db = await getDatabase();
				await db.collection("clinic_users").updateOne({ email: session.email.toLowerCase() }, { $set: updateData }, { upsert: true });
				await db.collection("activity_logs").insertOne({
					id: `ACT-${Date.now()}`,
					user: updateData.name || session.name,
					action: "Updated administrator profile credentials",
					subject: `${updateData.name || session.name} (${session.role})`,
					time: "Just now",
					kind: "Profile"
				}).catch(() => {});
			} catch (dbErr) {
				console.warn("MongoDB unavailable for profile update, updating session locally:", dbErr);
			}
			const updatedUser = {
				...session,
				name: updateData.name || session.name,
				phone: updateData.phone ?? session.phone,
				designation: updateData.designation ?? session.designation,
				regNo: updateData.regNo ?? session.regNo,
				department: updateData.department ?? session.department
			};
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
			const record = await (await Promise.race([getDatabase(), new Promise((_, reject) => setTimeout(() => reject(/* @__PURE__ */ new Error("DB timeout")), 600))])).collection("clinic_users").findOne({ email: user.email.toLowerCase() });
			const enrichedUser = {
				...user,
				name: record?.name || user.name || (user.role === "admin" ? "Dr. Mitali Gadge" : "Rachel Adams"),
				phone: record?.phone ?? user.phone ?? (user.role === "admin" ? "+91 95614 50104" : "+91 98201 11223"),
				designation: record?.designation ?? user.designation ?? (user.role === "admin" ? "Chief Medical Administrator & Director" : "Clinical Coordinator"),
				regNo: record?.regNo ?? user.regNo ?? (user.role === "admin" ? "MMC-2015-84920 / DG-SMC-04" : "NUR-2019-3381"),
				department: record?.department ?? user.department ?? "Marine Medical Examination & DG Shipping Care"
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
		const { submitFeedbackServer } = await import("./clinic.server-CNafSfLg.mjs").then((n) => n.t);
		const res = await submitFeedbackServer({ data: body });
		return Response.json(res, { status: res.success ? 200 : 400 });
	} catch (err) {
		console.error("Direct feedback endpoint error:", err);
		return Response.json({
			success: false,
			message: "Submission failed."
		}, { status: 500 });
	}
	return next({ context: { authUser: await getSession(request) } });
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
