import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Plus,
  Stethoscope,
  User,
  X,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { appointmentRecords, type AppointmentRecord } from "@/lib/clinic";

interface AppointmentScheduleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  onNotice: (msg: string) => void;
}

export function AppointmentScheduleModal({
  open,
  onOpenChange,
  selectedDate,
  onSelectDate,
  onNotice,
}: AppointmentScheduleModalProps) {
  const [appointments, setAppointments] = useState<AppointmentRecord[]>(appointmentRecords);
  const [showAddForm, setShowAddForm] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [doctor, setDoctor] = useState("Dr. Maya Bennett");
  const [medicalType, setMedicalType] = useState("DG Shipping Annual Medical");

  const formattedDate = selectedDate.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim()) return;

    const initials = candidateName
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "CA";

    const newAppt: AppointmentRecord = {
      time,
      patient: candidateName.trim(),
      initials,
      doctor,
      type: medicalType,
      status: "Confirmed",
    };

    setAppointments((prev) => [newAppt, ...prev]);
    setShowAddForm(false);
    setCandidateName("");
    onNotice(`Appointment booked for ${candidateName} on ${selectedDate.toLocaleDateString("en-IN")}.`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-4 sm:p-5 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <CalendarDays className="size-5" />
              </span>
              <div>
                <DialogTitle className="text-base sm:text-lg font-semibold">
                  Clinic Appointments & Examination Schedule
                </DialogTitle>
                <DialogDescription className="text-xs">
                  Review and organize medical examinations across D.G. Shipping approved doctors
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Calendar Picker Panel */}
          <div className="p-4 flex flex-col items-center bg-muted/10">
            <div className="w-full flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-foreground">Select Date</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-[11px] text-primary"
                onClick={() => onSelectDate(new Date())}
              >
                Today
              </Button>
            </div>
            <div className="rounded-md border border-border bg-card shadow-2xs">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(d) => d && onSelectDate(d)}
                initialFocus
              />
            </div>
            <div className="w-full mt-3 rounded-lg border border-primary/20 bg-primary/5 p-2.5 text-center">
              <span className="block text-[10px] font-medium text-primary uppercase">
                Active Calendar Day
              </span>
              <span className="text-xs font-semibold text-foreground">
                {selectedDate.toLocaleDateString("en-IN", { dateStyle: "medium" })}
              </span>
            </div>
          </div>

          {/* Schedule List Panel */}
          <div className="p-4 sm:p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
              <div>
                <h3 className="text-sm font-bold text-foreground">{formattedDate}</h3>
                <p className="text-xs text-muted-foreground">
                  {appointments.length} candidates scheduled
                </p>
              </div>
              <Button
                size="sm"
                variant={showAddForm ? "secondary" : "default"}
                onClick={() => setShowAddForm((prev) => !prev)}
                className="gap-1.5 text-xs h-8"
              >
                {showAddForm ? <X className="size-3.5" /> : <Plus className="size-3.5" />}
                {showAddForm ? "Cancel" : "Book Candidate"}
              </Button>
            </div>

            {/* Quick Add Form */}
            {showAddForm && (
              <form
                onSubmit={handleAddAppointment}
                className="rounded-lg border border-primary/20 bg-primary/5 p-3.5 space-y-3"
              >
                <div className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <User className="size-3.5" /> Add New Examination Appointment
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium">Candidate Name</label>
                    <Input
                      required
                      placeholder="e.g. Capt. Rajesh Sharma"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      className="h-8 text-xs bg-background"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium">Time Slot</label>
                    <Input
                      required
                      placeholder="e.g. 10:30 AM"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="h-8 text-xs bg-background"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium">Examining Doctor</label>
                    <select
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className="h-8 w-full rounded-md border border-input bg-background px-2 text-xs"
                    >
                      <option value="Dr. Maya Bennett">Dr. Maya Bennett</option>
                      <option value="Dr. David Kumar">Dr. David Kumar</option>
                      <option value="Dr. Mitali Gadge">Dr. Mitali Gadge</option>
                      <option value="Dr. Anita Kulkarni">Dr. Anita Kulkarni</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium">Medical Type</label>
                    <Input
                      value={medicalType}
                      onChange={(e) => setMedicalType(e.target.value)}
                      placeholder="DG Shipping Annual / Pre-sea"
                      className="h-8 text-xs bg-background"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" size="sm" className="h-7 text-xs gap-1">
                    <CheckCircle2 className="size-3.5" /> Confirm Slot
                  </Button>
                </div>
              </form>
            )}

            {/* List of appointments */}
            <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
              {appointments.length > 0 ? (
                appointments.map((appt, i) => (
                  <div
                    key={`${appt.patient}-${i}`}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-center justify-center rounded-md border border-border bg-muted/40 px-2 py-1 text-center min-w-[65px]">
                        <Clock className="size-3 text-muted-foreground mb-0.5" />
                        <span className="text-[11px] font-bold font-mono text-foreground leading-tight">
                          {appt.time}
                        </span>
                      </div>
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-secondary text-[10px] font-bold text-secondary-foreground">
                          {appt.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-xs font-semibold text-foreground">
                          {appt.patient}
                        </div>
                        <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                          <Stethoscope className="size-3 text-primary" />
                          <span>{appt.doctor}</span>
                          <span>•</span>
                          <span>{appt.type}</span>
                        </div>
                      </div>
                    </div>

                    <Badge
                      variant={
                        appt.status === "Confirmed"
                          ? "default"
                          : appt.status === "In progress"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-[10px] shrink-0"
                    >
                      {appt.status}
                    </Badge>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-xs text-muted-foreground">
                  No appointments scheduled for this date.
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="p-3 border-t border-border bg-muted/20">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

