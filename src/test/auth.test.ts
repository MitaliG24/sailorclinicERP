import { describe, expect, it } from "vitest";
import {
  handleAuthRequest,
  getSession,
  hashPassword,
  getBootstrapAccounts,
} from "../lib/clinic-auth.server";

describe("Clinic Authentication", () => {
  it("includes admin and staff accounts in bootstrap credentials", () => {
    const accounts = getBootstrapAccounts();
    const admin = accounts.find((a) => a.email === "medical@sailorsmedical.com");
    const staff = accounts.find((a) => a.email === "info@sailorsmedical.com");

    expect(admin).toBeDefined();
    expect(admin?.role).toBe("admin");
    expect(admin?.password).toBe("Admin@123");

    expect(staff).toBeDefined();
    expect(staff?.role).toBe("staff");
    expect(staff?.password).toBe("Staff@1");
  });

  it("authenticates clinic admin with medical@sailorsmedical.com and Admin@123", async () => {
    const req = new Request("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "medical@sailorsmedical.com",
        password: "Admin@123",
      }),
    });

    const res = await handleAuthRequest(req, "/api/auth/login");
    expect(res).not.toBeNull();
    expect(res!.status).toBe(200);

    const data = await res!.json();
    expect(data.email).toBe("medical@sailorsmedical.com");
    expect(data.role).toBe("admin");
    expect(data.name).toBe("Dr. Mitali Gadge");

    const cookieHeader = res!.headers.get("Set-Cookie");
    expect(cookieHeader).toContain("clinic_session=");
  });

  it("authenticates clinic staff with info@sailorsmedical.com and Staff@1", async () => {
    const req = new Request("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "info@sailorsmedical.com",
        password: "Staff@1",
      }),
    });

    const res = await handleAuthRequest(req, "/api/auth/login");
    expect(res).not.toBeNull();
    expect(res!.status).toBe(200);

    const data = await res!.json();
    expect(data.email).toBe("info@sailorsmedical.com");
    expect(data.role).toBe("staff");
    expect(data.name).toBe("Rachel Adams");

    const cookieHeader = res!.headers.get("Set-Cookie");
    expect(cookieHeader).toContain("clinic_session=");
  });

  it("authenticates medical@sailorsmedicalclinic.com alias with Admin@123", async () => {
    const req = new Request("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "medical@sailorsmedicalclinic.com",
        password: "Admin@123",
      }),
    });

    const res = await handleAuthRequest(req, "/api/auth/login");
    expect(res).not.toBeNull();
    expect(res!.status).toBe(200);

    const data = await res!.json();
    expect(data.role).toBe("admin");
  });

  it("rejects invalid password with 401", async () => {
    const req = new Request("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "medical@sailorsmedical.com",
        password: "WrongPassword999",
      }),
    });

    const res = await handleAuthRequest(req, "/api/auth/login");
    expect(res).not.toBeNull();
    expect(res!.status).toBe(401);

    const data = await res!.json();
    expect(data.message).toBe("Invalid email or password.");
  });

  it("rejects unknown user with 401", async () => {
    const req = new Request("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "unknown@example.com",
        password: "SomePassword1",
      }),
    });

    const res = await handleAuthRequest(req, "/api/auth/login");
    expect(res).not.toBeNull();
    expect(res!.status).toBe(401);
  });

  it("supports session verification and /api/auth/me", async () => {
    const loginReq = new Request("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "medical@sailorsmedical.com",
        password: "Admin@123",
      }),
    });

    const loginRes = await handleAuthRequest(loginReq, "/api/auth/login");
    const cookie = loginRes!.headers.get("Set-Cookie")!;

    const meReq = new Request("http://localhost:3000/api/auth/me", {
      headers: { Cookie: cookie.split(";")[0] },
    });

    const meRes = await handleAuthRequest(meReq, "/api/auth/me");
    expect(meRes!.status).toBe(200);
    const meData = await meRes!.json();
    expect(meData.email).toBe("medical@sailorsmedical.com");
    expect(meData.role).toBe("admin");
  });

  it("logs out and clears session cookie", async () => {
    const logoutReq = new Request("http://localhost:3000/api/auth/logout", {
      method: "POST",
    });

    const logoutRes = await handleAuthRequest(logoutReq, "/api/auth/logout");
    expect(logoutRes!.status).toBe(200);
    const cookie = logoutRes!.headers.get("Set-Cookie");
    expect(cookie).toContain("Max-Age=0");
  });
});
