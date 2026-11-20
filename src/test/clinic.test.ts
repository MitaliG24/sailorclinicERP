import { describe, expect, it } from "vitest";

import { canAccessSection, getVisibleSections } from "@/lib/clinic";

describe("clinic role visibility", () => {
  it("shows Staff Dashboard, Patient Records, Payment Records, Company Name, and Reports", () => {
    expect(getVisibleSections("staff").map((section) => section.label)).toEqual([
      "Dashboard",
      "Patient Records",
      "Payment Records",
      "Company Name",
      "Reports",
    ]);
  });

  it("shows Admin every workspace and clinic administration section", () => {
    expect(getVisibleSections("admin").map((section) => section.label)).toEqual([
      "Dashboard",
      "Patient Records",
      "Payment Records",
      "Grievances & Reviews",
      "Staff Management",
      "Company Name",
      "Reports",
      "Settings",
    ]);
  });

  it("denies Staff direct access to admin-only sections", () => {
    expect(canAccessSection("staff", "feedback")).toBe(false);
    expect(canAccessSection("staff", "staff")).toBe(false);
    expect(canAccessSection("staff", "companies")).toBe(true);
    expect(canAccessSection("staff", "activity")).toBe(false);
    expect(canAccessSection("staff", "settings")).toBe(false);
  });
});
