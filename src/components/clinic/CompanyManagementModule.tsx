import { useMemo, useState } from "react";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Search,
  Ship,
  Trash2,
  Users,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ShippingCompany, PatientRecord } from "@/lib/clinic";

interface CompanyManagementModuleProps {
  companies: ShippingCompany[];
  patients?: PatientRecord[];
  onAddCompany: (company: ShippingCompany) => void;
  onDeleteCompany: (id: string, name: string) => void;
  onNotice: (message: string) => void;
}

export function CompanyManagementModule({
  companies,
  patients = [],
  onAddCompany,
  onDeleteCompany,
  onNotice,
}: CompanyManagementModuleProps) {
  const [search, setSearch] = useState("");
  const [isAddingOpen, setIsAddingOpen] = useState(false);

  // Form states
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gstin, setGstin] = useState("");
  const [address, setAddress] = useState("");

  const filteredCompanies = useMemo(() => {
    return companies.filter((c) =>
      `${c.name} ${c.contactPerson || ""} ${c.email || ""} ${c.address || ""} ${c.gstin || ""}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [companies, search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = companyName.trim();
    if (!cleanName) return;

    // Check if duplicate
    const exists = companies.some(
      (c) => c.name.toLowerCase() === cleanName.toLowerCase(),
    );
    if (exists) {
      onNotice(`Company "${cleanName}" already exists in the directory.`);
      return;
    }

    const newCompany: ShippingCompany = {
      id: `CMP-${String(companies.length + 1).padStart(2, "0")}`,
      name: cleanName,
      contactPerson: contactPerson.trim() || undefined,
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
      gstin: gstin.trim().toUpperCase() || undefined,
      address: address.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    onAddCompany(newCompany);
    onNotice(`"${cleanName}" added successfully. It is now available in the patient form company dropdown.`);

    // Reset form
    setCompanyName("");
    setContactPerson("");
    setEmail("");
    setPhone("");
    setGstin("");
    setAddress("");
    setIsAddingOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Metrics */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Registered Companies</span>
            <span className="grid size-8 place-items-center rounded-md bg-primary/10 text-primary">
              <Building2 className="size-4" />
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold">{companies.length}</div>
          <p className="mt-1 text-[11px] text-muted-foreground">Available in Patient Registration dropdown</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Active Shipping Partners</span>
            <span className="grid size-8 place-items-center rounded-md bg-emerald-500/10 text-emerald-600">
              <Ship className="size-4" />
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold">
            {new Set(patients.map((p) => p.companyName)).size}
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">Companies with examined candidates</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Candidate Examinations</span>
            <span className="grid size-8 place-items-center rounded-md bg-secondary text-primary">
              <Users className="size-4" />
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold">{patients.length}</div>
          <p className="mt-1 text-[11px] text-muted-foreground">Total seafarer records linked</p>
        </div>
      </div>

      {/* Add Company Section / Form Card */}
      <section className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground shadow-xs">
              <Building2 className="size-4" />
            </span>
            <div>
              <h2 className="text-sm font-semibold tracking-tight">Add Shipping Company / Maritime Employer</h2>
              <p className="text-xs text-muted-foreground">
                Once added, this company will instantly appear in the company name dropdown in the candidate medical form.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => setIsAddingOpen(!isAddingOpen)}
            className="gap-1.5 text-xs font-medium"
          >
            {isAddingOpen ? "Close Form" : <><Plus className="size-3.5" /> Add New Company</>}
          </Button>
        </div>

        {isAddingOpen && (
          <form onSubmit={handleSubmit} className="border-b border-border/80 bg-card p-5 sm:p-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="company-name" className="text-xs font-medium text-foreground">
                  Company Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="company-name"
                  placeholder="e.g. Bernhard Schulte Shipmanagement (BSM)"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-9 text-xs"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-person" className="text-xs font-medium text-foreground">
                  Contact Person / Crewing Head
                </label>
                <Input
                  id="contact-person"
                  placeholder="e.g. Capt. Rajesh Varma"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="h-9 text-xs"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <label htmlFor="company-email" className="text-xs font-medium text-foreground">
                  Official Email Address
                </label>
                <Input
                  id="company-email"
                  type="email"
                  placeholder="crewing@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="company-phone" className="text-xs font-medium text-foreground">
                  Contact Phone / Reception
                </label>
                <Input
                  id="company-phone"
                  type="tel"
                  placeholder="+91 22 6650 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-9 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="company-gstin" className="text-xs font-medium text-foreground">
                  GSTIN / Corporate ID
                </label>
                <Input
                  id="company-gstin"
                  placeholder="27AAACM0124P1Z4"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value.toUpperCase())}
                  className="h-9 font-mono text-xs uppercase"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="company-address" className="text-xs font-medium text-foreground">
                Registered Office Address
              </label>
              <Input
                id="company-address"
                placeholder="e.g. 12th Floor, Tower B, Peninsula Business Park, Lower Parel, Mumbai 400013"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="h-9 text-xs"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsAddingOpen(false)}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" className="gap-1.5 text-xs">
                <FileCheck2 className="size-3.5" /> Save Company
              </Button>
            </div>
          </form>
        )}

        {/* Company Directory List */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Company Directory
              </h3>
              <Badge variant="outline" className="text-[10px] font-mono">
                {filteredCompanies.length} registered
              </Badge>
            </div>
            <div className="relative sm:w-[260px]">
              <Search className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <Input
                placeholder="Search company name, contact, GSTIN..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-8.5 pl-8.5 text-xs"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[60px] pl-4 text-xs">Sr.</TableHead>
                  <TableHead className="min-w-[200px] text-xs">Company Name</TableHead>
                  <TableHead className="min-w-[150px] text-xs">Contact Person</TableHead>
                  <TableHead className="min-w-[180px] text-xs">Contact Details</TableHead>
                  <TableHead className="min-w-[140px] text-xs">GSTIN</TableHead>
                  <TableHead className="min-w-[90px] text-xs">Seafarers</TableHead>
                  <TableHead className="pr-4 text-right text-xs">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompanies.map((company, index) => {
                  const candidateCount = patients.filter(
                    (p) => p.companyName?.toLowerCase() === company.name.toLowerCase(),
                  ).length;

                  return (
                    <TableRow key={company.id} className="hover:bg-muted/40 transition-colors">
                      <TableCell className="pl-4 font-mono text-xs text-muted-foreground">
                        #{index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-xs text-foreground flex items-center gap-1.5">
                          <Building2 className="size-3.5 text-primary shrink-0" />
                          {company.name}
                        </div>
                        {company.address && (
                          <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5 truncate max-w-[280px]">
                            <MapPin className="size-3 shrink-0" /> {company.address}
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-xs">
                        {company.contactPerson ? (
                          <span className="font-medium text-foreground">{company.contactPerson}</span>
                        ) : (
                          <span className="text-muted-foreground italic">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-0.5 text-xs">
                          {company.email && (
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                              <Mail className="size-3 shrink-0" /> {company.email}
                            </div>
                          )}
                          {company.phone && (
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                              <Phone className="size-3 shrink-0" /> {company.phone}
                            </div>
                          )}
                          {!company.email && !company.phone && (
                            <span className="text-muted-foreground italic text-xs">—</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-[11px] uppercase text-muted-foreground">
                        {company.gstin || "—"}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={candidateCount > 0 ? "secondary" : "outline"}
                          className="text-[10px]"
                        >
                          {candidateCount} seafarers
                        </Badge>
                      </TableCell>
                      <TableCell className="pr-4 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 text-muted-foreground hover:text-destructive"
                          onClick={() => onDeleteCompany(company.id, company.name)}
                          title={`Delete ${company.name}`}
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {filteredCompanies.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center text-xs text-muted-foreground">
                      No companies match "{search}".
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
}
