import { o as __toESM } from "../_runtime.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { a as clinicSections, c as formatINR, d as initialSalarySlips, f as initialStaffMembers, h as staffStatuses, i as canAccessSection, l as getVisibleSections, m as staffDepartments, n as amountToWordsINR, o as convertNumberToWordsIndian, p as invoiceRecords, r as appointmentRecords, s as documentTypes, t as activityRecords, u as initialPatients } from "./staff-D45nO_Ee.mjs";
import { n as feedbackQuestions, r as feedbackStatuses } from "./feedback-Clu2AqVp.mjs";
import { a as deleteStaffServer, c as listPatientsServer, d as savePatientServer, f as saveStaffServer, h as createSsrRpc, i as deletePatientServer, l as listStaffServer, m as updateFeedbackStatusServer, n as deleteFeedbackServer, o as listFeedbackServer, r as deleteInvoiceServer, s as listInvoicesServer, u as saveInvoiceServer } from "./clinic.server-gt5nfFoT.mjs";
import { m as require_react, n as AvatarFallback$1, p as require_jsx_runtime, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as paymentMethods } from "./payments-12q5ofvW.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as ClinicLogo, r as cn, t as Button } from "./ClinicLogo-BRy7lGyZ.mjs";
import { $ as ChevronLeft, A as Mail, B as FileChartColumnIncreasing, C as Printer, D as PanelLeftClose, E as PanelLeftOpen, F as FileText, G as Download, H as Eye, I as FileSpreadsheet, J as Clock3, K as CreditCard, L as FilePlusCorner, M as LayoutDashboard, N as HeartPulse, O as MessageSquare, P as Funnel, Q as ChevronRight, R as FileCheck, S as ReceiptText, T as Phone, U as ExternalLink, V as FileBadge, W as Ellipsis, X as CircleCheck, Y as ClipboardList, Z as CircleAlert, a as UserX, at as Building, c as UserPlus, ct as Bell, d as Trash2, dt as ArrowLeft, et as ChevronDown, f as Stethoscope, ft as ArrowDownRight, g as Settings, h as ShieldCheck, i as User, it as CalendarDays, j as LogOut, k as Menu, l as Upload, lt as ArrowUpRight, m as Ship, n as WalletCards, nt as ChartColumn, o as UserRound, ot as Building2, p as SquarePen, pt as Activity, q as Clock, r as Users, rt as Calendar, s as UserRoundPlus, st as Briefcase, t as X, tt as Check, u as TrendingUp, ut as ArrowRight, v as Search, w as Plus, x as RefreshCw, y as Save, z as FileCheckCorner } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Label$1 } from "../_libs/radix-ui__react-label.mjs";
import { n as writeFileSync, t as utils } from "../_libs/xlsx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_Ho1XOM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Label$1.displayName;
function AdminProfileModal({ open, onOpenChange, currentUser, onProfileUpdated, onNotice }) {
	const [name, setName] = (0, import_react.useState)(currentUser.name);
	const [phone, setPhone] = (0, import_react.useState)(currentUser.phone || "");
	const [designation, setDesignation] = (0, import_react.useState)(currentUser.designation || "");
	const [regNo, setRegNo] = (0, import_react.useState)(currentUser.regNo || "");
	const [department, setDepartment] = (0, import_react.useState)(currentUser.department || "");
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (open) {
			setName(currentUser.name || "");
			setPhone(currentUser.phone || "");
			setDesignation(currentUser.designation || (currentUser.role === "admin" ? "Chief Medical Administrator & Director" : "Clinical Coordinator"));
			setRegNo(currentUser.regNo || (currentUser.role === "admin" ? "MMC-2015-84920 / DG-SMC-04" : "NUR-2019-3381"));
			setDepartment(currentUser.department || "Marine Medical Examination & DG Shipping Care");
			setErrorMsg("");
		}
	}, [open, currentUser]);
	const initials = name.trim().split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase() || (currentUser.role === "admin" ? "MG" : "RA");
	async function handleSave(e) {
		e.preventDefault();
		if (!name.trim()) {
			setErrorMsg("Please enter the administrator full name.");
			return;
		}
		setIsSaving(true);
		setErrorMsg("");
		try {
			const response = await fetch("/api/auth/profile", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					phone: phone.trim(),
					designation: designation.trim(),
					regNo: regNo.trim(),
					department: department.trim()
				})
			});
			if (!response.ok) {
				const data = await response.json().catch(() => null);
				throw new Error(data?.message || "Failed to update admin profile.");
			}
			const resData = await response.json();
			onProfileUpdated({
				...currentUser,
				name: name.trim(),
				phone: phone.trim(),
				designation: designation.trim(),
				regNo: regNo.trim(),
				department: department.trim(),
				...resData.user
			});
			onNotice("Admin profile credentials updated and saved to MongoDB.");
			onOpenChange(false);
		} catch (err) {
			console.error("Failed to update profile:", err);
			setErrorMsg(err instanceof Error ? err.message : "Failed to update profile.");
		} finally {
			setIsSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl sm:max-w-2xl max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "text-lg font-semibold",
						children: [
							"Edit ",
							currentUser.role === "admin" ? "Admin" : "User",
							" Profile"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs",
						children: "Manage your profile identity, professional credentials, and medical licenses for Sailor's Medical Clinic."
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								className: "size-16 ring-2 ring-primary/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
									className: "bg-primary text-primary-foreground text-lg font-bold",
									children: initials
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold text-foreground",
										children: name || "Administrator"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "default",
										className: "text-[10px] uppercase font-semibold",
										children: currentUser.role
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-primary font-medium mt-0.5",
									children: designation || "Medical Administrator"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3" }),
										" ",
										currentUser.email,
										phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3" }),
											" ",
											phone
										] }) : null
									]
								})
							] })]
						}), regNo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/80 bg-background/80 p-2.5 text-right sm:text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-medium text-muted-foreground uppercase tracking-wider",
								children: "Council / DG Lic."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono font-semibold text-foreground",
								children: regNo
							})]
						})]
					})
				}),
				errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "alert",
					className: "flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSave,
					className: "space-y-4 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									htmlFor: "admin-full-name",
									className: "text-xs font-semibold",
									children: ["Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "admin-full-name",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "e.g. Dr. Mitali Gadge",
										className: "pl-9 text-xs",
										required: true
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "admin-email",
										className: "text-xs font-semibold",
										children: "Official Email (Login ID)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "admin-email",
											value: currentUser.email,
											readOnly: true,
											disabled: true,
											className: "pl-9 text-xs bg-muted/50 cursor-not-allowed"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground",
										children: "Configured via clinic security credentials."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "admin-phone",
									className: "text-xs font-semibold",
									children: "Mobile / Contact Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "admin-phone",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										placeholder: "+91 95614 50104",
										className: "pl-9 text-xs"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "admin-designation",
									className: "text-xs font-semibold",
									children: "Designation / Professional Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "admin-designation",
										value: designation,
										onChange: (e) => setDesignation(e.target.value),
										placeholder: "e.g. Chief Medical Officer / Clinic Administrator",
										className: "pl-9 text-xs"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "admin-regNo",
									className: "text-xs font-semibold",
									children: "Medical Council / D.G. Shipping Reg. No."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileBadge, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "admin-regNo",
										value: regNo,
										onChange: (e) => setRegNo(e.target.value),
										placeholder: "e.g. MMC-2015-84920 / DG-SMC-04",
										className: "pl-9 text-xs"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "admin-dept",
									className: "text-xs font-semibold",
									children: "Department / Clinical Division"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "absolute left-2.5 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "admin-dept",
										value: department,
										onChange: (e) => setDepartment(e.target.value),
										placeholder: "e.g. Marine Medical & Health Examination",
										className: "pl-9 text-xs"
									})]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "gap-2 pt-3 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => onOpenChange(false),
							disabled: isSaving,
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "sm",
							disabled: isSaving,
							className: "gap-1.5 bg-primary text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), isSaving ? "Saving to MongoDB..." : "Save Profile Changes"]
						})]
					})]
				})
			]
		})
	});
}
var COMMON_SERVICES = [
	{
		description: "DG Shipping Comprehensive Medical Fitness Examination",
		sacCode: "999312",
		rate: 2500
	},
	{
		description: "Digital Chest X-Ray (PA View with Radiologist Report)",
		sacCode: "999312",
		rate: 1200
	},
	{
		description: "Whole Abdomen & Pelvis Ultrasonography (USG)",
		sacCode: "999312",
		rate: 2200
	},
	{
		description: "Pathology Diagnostics (Complete Haemogram, Blood Sugar, LFT, KFT)",
		sacCode: "999312",
		rate: 1200
	},
	{
		description: "Audiometry & Ishihara 38 Plates Color Vision Test",
		sacCode: "999312",
		rate: 800
	},
	{
		description: "Cardiology Evaluation & 12-Lead Resting ECG",
		sacCode: "999312",
		rate: 2500
	},
	{
		description: "Urine Routine & Drug / Alcohol Screening Panel",
		sacCode: "999312",
		rate: 900
	}
];
function CreateInvoiceModal({ open, onOpenChange, patients, nextInvoiceNum, onSave }) {
	const [selectedPatientId, setSelectedPatientId] = (0, import_react.useState)("");
	const [invoiceId, setInvoiceId] = (0, import_react.useState)(`INV-2026-${String(nextInvoiceNum).padStart(3, "0")}`);
	const [date, setDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [dueDate, setDueDate] = (0, import_react.useState)(new Date(Date.now() + 1296e6).toISOString().slice(0, 10));
	const [candidateName, setCandidateName] = (0, import_react.useState)("");
	const [rank, setRank] = (0, import_react.useState)("Chief Officer");
	const [vessel, setVessel] = (0, import_react.useState)("");
	const [indosNo, setIndosNo] = (0, import_react.useState)("");
	const [cdcNo, setCdcNo] = (0, import_react.useState)("");
	const [certificateNo, setCertificateNo] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("Maersk Marine Services India Pvt Ltd");
	const [companyGstin, setCompanyGstin] = (0, import_react.useState)("27AAACM0124P1Z4");
	const [companyAddress, setCompanyAddress] = (0, import_react.useState)("Peninsula Business Park, Lower Parel, Mumbai");
	const [status, setStatus] = (0, import_react.useState)("Paid");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("UPI / Digital Transfer");
	const [transactionRef, setTransactionRef] = (0, import_react.useState)(`TXN-${Math.floor(1e4 + Math.random() * 9e4)}`);
	const [notes, setNotes] = (0, import_react.useState)("DG Shipping maritime examination fee receipt.");
	const [items, setItems] = (0, import_react.useState)([
		{
			id: "1",
			description: "DG Shipping Comprehensive Medical Fitness Examination",
			sacCode: "999312",
			qty: 1,
			rate: 2500,
			amount: 2500
		},
		{
			id: "2",
			description: "Digital Chest X-Ray (PA View with Radiologist Report)",
			sacCode: "999312",
			qty: 1,
			rate: 1200,
			amount: 1200
		},
		{
			id: "3",
			description: "Pathology Diagnostics (Complete Haemogram & Glucose)",
			sacCode: "999312",
			qty: 1,
			rate: 800,
			amount: 800
		}
	]);
	const handlePatientSelect = (patientId) => {
		setSelectedPatientId(patientId);
		const found = patients.find((p) => p.id === patientId);
		if (found) {
			setCandidateName(found.name);
			setRank(found.rank || "Seafarer");
			setVessel(found.vesselName || found.vessel || "");
			setIndosNo(found.indosNo || "");
			setCdcNo(found.cdcNo || "");
			setCertificateNo(found.certificateNo || "");
			setCompany(found.companyName || "Maersk Marine Services");
			if (found.invoiceNo) setInvoiceId(found.invoiceNo);
		}
	};
	const handleAddItem = (presetIndex) => {
		const preset = presetIndex !== void 0 ? COMMON_SERVICES[presetIndex] : COMMON_SERVICES[0];
		const newItem = {
			id: String(Date.now()),
			description: preset.description,
			sacCode: preset.sacCode,
			qty: 1,
			rate: preset.rate,
			amount: preset.rate
		};
		setItems((prev) => [...prev, newItem]);
	};
	const handleItemChange = (index, field, val) => {
		setItems((prev) => {
			const copy = [...prev];
			const target = { ...copy[index] };
			if (field === "rate" || field === "qty") {
				target[field] = Number(val) || 0;
				target.amount = target.qty * target.rate;
			} else target[field] = val;
			copy[index] = target;
			return copy;
		});
	};
	const handleRemoveItem = (index) => {
		setItems((prev) => prev.filter((_, i) => i !== index));
	};
	const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
	const total = subtotal;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!candidateName.trim() || !company.trim()) return;
		const formattedDate = new Date(date).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
		const formattedDue = new Date(dueDate).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
		onSave({
			id: invoiceId.trim() || `INV-2026-${String(nextInvoiceNum).padStart(3, "0")}`,
			date: formattedDate,
			dueDate: formattedDue,
			patient: candidateName.trim(),
			patientId: selectedPatientId || void 0,
			rank,
			vessel: vessel.trim() || void 0,
			indosNo: indosNo.toUpperCase().trim(),
			cdcNo: cdcNo.toUpperCase().trim(),
			certificateNo: certificateNo.toUpperCase().trim(),
			company: company.trim(),
			companyGstin: companyGstin.trim() || "27AAACM0124P1Z4",
			companyAddress: companyAddress.trim() || "Mumbai Corporate Office",
			status,
			items,
			subtotal,
			tax: 0,
			discount: 0,
			total,
			amount: formatINR(total),
			paymentMethod,
			transactionRef,
			paidDate: status === "Paid" ? formattedDate : void 0,
			notes
		});
		onOpenChange(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] w-full max-w-3xl overflow-y-auto p-0 sm:rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "border-b border-border bg-muted/40 p-5 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlusCorner, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-semibold tracking-tight",
						children: "Create Standard Maritime Tax Invoice"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Issue a compliant DG Shipping seafarer medical bill in Indian Rupees (INR)"
					})] })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "p-5 sm:p-6 space-y-5 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/80 bg-card p-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border/60 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground uppercase tracking-wider text-[11px]",
									children: "Invoice Details & Candidate Selection"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-mono font-bold text-xs",
									children: invoiceId
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground",
											children: "Select Candidate (Pre-fill)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: selectedPatientId,
											onChange: (e) => handlePatientSelect(e.target.value),
											className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "— Or enter custom details —"
											}), patients.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: p.id,
												children: [
													p.name,
													" (",
													p.rank,
													" · ",
													p.companyName,
													")"
												]
											}, p.id))]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground",
											children: "Invoice Number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: invoiceId,
											onChange: (e) => setInvoiceId(e.target.value),
											className: "h-9 text-xs font-mono font-semibold uppercase",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground",
											children: "Invoice Date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: date,
											onChange: (e) => setDate(e.target.value),
											className: "h-9 text-xs",
											required: true
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-4 pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "font-medium text-foreground",
											children: ["Candidate Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. Captain Rajesh Kumar",
											value: candidateName,
											onChange: (e) => setCandidateName(e.target.value),
											className: "h-9 text-xs",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground",
											children: "Rank / Designation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. Chief Officer",
											value: rank,
											onChange: (e) => setRank(e.target.value),
											className: "h-9 text-xs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground",
											children: "Vessel Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. MV Maersk Mc-Kinney",
											value: vessel,
											onChange: (e) => setVessel(e.target.value),
											className: "h-9 text-xs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground",
											children: "Due Date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: dueDate,
											onChange: (e) => setDueDate(e.target.value),
											className: "h-9 text-xs"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-3 pt-1 font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground font-sans",
											children: "INDoS No."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. 12NL8492",
											value: indosNo,
											onChange: (e) => setIndosNo(e.target.value.toUpperCase()),
											className: "h-9 text-xs uppercase"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground font-sans",
											children: "CDC No."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. MUM 248910",
											value: cdcNo,
											onChange: (e) => setCdcNo(e.target.value.toUpperCase()),
											className: "h-9 text-xs uppercase"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "font-medium text-foreground font-sans",
											children: "Certificate No."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. MC-2026-9041",
											value: certificateNo,
											onChange: (e) => setCertificateNo(e.target.value.toUpperCase()),
											className: "h-9 text-xs uppercase"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/80 bg-card p-4 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground uppercase tracking-wider text-[11px] block border-b border-border/60 pb-2",
							children: "Billed To (Shipping Company / Agency)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-medium text-foreground",
									children: "Company Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "e.g. Maersk Marine Services India Pvt Ltd",
									value: company,
									onChange: (e) => setCompany(e.target.value),
									className: "h-9 text-xs",
									required: true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "font-medium text-foreground",
									children: "Company GSTIN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "27AAACM0124P1Z4",
									value: companyGstin,
									onChange: (e) => setCompanyGstin(e.target.value.toUpperCase()),
									className: "h-9 text-xs font-mono uppercase"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/80 bg-card p-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground uppercase tracking-wider text-[11px]",
									children: "Clinical Examination & Laboratory Services"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground block",
									children: "All rates and subtotals calculated in INR (₹)"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "gap-1 text-xs h-7",
									onClick: () => handleAddItem(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), " Add Service Row"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-12 gap-2 items-center bg-muted/40 p-2 rounded-md border border-border/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "col-span-6 space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground",
												children: "Description"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.description,
												onChange: (e) => handleItemChange(idx, "description", e.target.value),
												className: "h-8 text-xs bg-background",
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "col-span-2 space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground font-mono",
												children: "SAC Code"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: item.sacCode,
												onChange: (e) => handleItemChange(idx, "sacCode", e.target.value),
												className: "h-8 text-xs font-mono bg-background text-center"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "col-span-1 space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground",
												children: "Qty"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												min: "1",
												value: item.qty,
												onChange: (e) => handleItemChange(idx, "qty", e.target.value),
												className: "h-8 text-xs bg-background text-center"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "col-span-2 space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground",
												children: "Rate (₹)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												min: "0",
												step: "50",
												value: item.rate,
												onChange: (e) => handleItemChange(idx, "rate", e.target.value),
												className: "h-8 text-xs bg-background font-mono text-right"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "col-span-1 flex items-end justify-center pt-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												variant: "ghost",
												size: "icon",
												className: "size-7 text-muted-foreground hover:text-destructive",
												onClick: () => handleRemoveItem(idx),
												disabled: items.length <= 1,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
											})
										})
									]
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 flex flex-wrap items-center gap-1.5 text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Quick Add:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleAddItem(1),
										className: "rounded bg-muted px-2 py-0.5 text-primary hover:bg-primary/10 transition-colors",
										children: "+ Digital X-Ray (₹1,200)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleAddItem(2),
										className: "rounded bg-muted px-2 py-0.5 text-primary hover:bg-primary/10 transition-colors",
										children: "+ USG Screening (₹2,200)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleAddItem(5),
										className: "rounded bg-muted px-2 py-0.5 text-primary hover:bg-primary/10 transition-colors",
										children: "+ Cardiology ECG (₹2,500)"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 border-t border-border flex justify-between items-center bg-primary/5 p-3 rounded-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase font-bold text-primary block",
									children: "Taxable Subtotal (INR)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "Healthcare exemption applies (0% GST)"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base font-mono font-bold text-foreground",
										children: formatINR(total)
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/80 bg-card p-4 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground uppercase tracking-wider text-[11px] block border-b border-border/60 pb-2",
							children: "Payment Status & Transaction Particulars"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-medium text-foreground",
										children: "Payment Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: status,
										onChange: (e) => setStatus(e.target.value),
										className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs font-semibold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Paid",
												children: "Paid (Settled)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Pending",
												children: "Pending (Awaiting payment)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Overdue",
												children: "Overdue (Payment delayed)"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-medium text-foreground",
										children: "Payment Mode"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: paymentMethod,
										onChange: (e) => setPaymentMethod(e.target.value),
										className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "UPI / Digital Transfer",
												children: "UPI / Digital Transfer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "HDFC Bank IMPS",
												children: "HDFC Bank IMPS"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "NEFT / RTGS Corporate",
												children: "NEFT / RTGS Corporate"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Cash Receipt",
												children: "Cash Receipt"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Company Invoice Credit",
												children: "Company Invoice Credit"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-medium text-foreground",
										children: "Transaction / UTR Ref"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: transactionRef,
										onChange: (e) => setTransactionRef(e.target.value),
										className: "h-9 text-xs font-mono",
										placeholder: "e.g. TXN-50941"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "border-t border-border pt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => onOpenChange(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "sm",
							className: "gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "size-4" }), " Generate & Save Invoice"]
						})]
					})
				]
			})]
		})
	});
}
/**
* Generates and downloads a standardized Microsoft Excel (.xlsx) file
* for Sailor's Medical Clinic Feedback Form submissions, compliant with
* DG Shipping Govt. of India clinical audit rules.
*/
function exportGrievancesToExcel(records, filename) {
	const rows = records.map((r, index) => ({
		"Sr. No.": index + 1,
		"Token ID": r.id,
		"Date": r.date,
		"Candidate Name": r.name,
		"Company Name": r.companyName || "N/A",
		"Vessel": r.vessel || "N/A",
		"Rank": r.rank || "N/A",
		"Passport or CDC No": r.passportOrCdcNo || "N/A",
		"Indos No": r.indosNo || "N/A",
		"Mobile No": r.mobileNo,
		"Email Add": r.email || "N/A",
		"1. Time taken at reception": r.timeTakenAtReception,
		"2. Skill & Friendliness of technician collecting blood": r.skillAndFriendlinessTechnician,
		"3. ECG - Audiometry Technician": r.ecgAudiometryTechnician,
		"4. Guidance by staff during your wait": r.guidanceByStaffDuringWait,
		"5. Hygiene / Cleanliness of Clinics": r.hygieneCleanlinessClinics,
		"6. Friendliness of the Medical Centre Staff": r.friendlinessMedicalStaff,
		"7. Interaction with the Doctor": r.interactionWithDoctor,
		"8. Turnaround time for reports": r.turnaroundTimeReports,
		"Suggestions / Comments": r.suggestionsComments || "None",
		"Signature of Candidate": r.candidateSignature || r.name,
		"Status": r.status,
		"Official Resolution Remarks": r.resolutionRemarks || "Under Review",
		"Resolved Date": r.resolvedAt ? new Date(r.resolvedAt).toLocaleDateString("en-IN") : "Pending"
	}));
	const worksheet = utils.json_to_sheet(rows);
	worksheet["!cols"] = [
		{ wch: 8 },
		{ wch: 20 },
		{ wch: 14 },
		{ wch: 24 },
		{ wch: 26 },
		{ wch: 24 },
		{ wch: 20 },
		{ wch: 20 },
		{ wch: 16 },
		{ wch: 18 },
		{ wch: 26 },
		{ wch: 25 },
		{ wch: 38 },
		{ wch: 28 },
		{ wch: 32 },
		{ wch: 30 },
		{ wch: 35 },
		{ wch: 26 },
		{ wch: 28 },
		{ wch: 45 },
		{ wch: 24 },
		{ wch: 16 },
		{ wch: 40 },
		{ wch: 16 }
	];
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Sailors Clinic Feedback");
	const actualFilename = filename || `Sailors_Medical_Clinic_Feedback_Report_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
	writeFileSync(workbook, actualFilename);
}
/**
* Fallback CSV export with UTF-8 BOM so Excel opens it directly without character corruption.
*/
function exportGrievancesToCSV(records, filename) {
	const headers = [
		"Sr. No.",
		"Token ID",
		"Date",
		"Candidate Name",
		"Company Name",
		"Vessel",
		"Rank",
		"Passport or CDC No",
		"Indos No",
		"Mobile No",
		"Email Add",
		"1. Time taken at reception",
		"2. Skill & Friendliness of technician collecting blood",
		"3. ECG - Audiometry Technician",
		"4. Guidance by staff during your wait",
		"5. Hygiene / Cleanliness of Clinics",
		"6. Friendliness of the Medical Centre Staff",
		"7. Interaction with the Doctor",
		"8. Turnaround time for reports",
		"Suggestions / Comments",
		"Signature of Candidate",
		"Status",
		"Official Resolution Remarks",
		"Resolved Date"
	];
	const csvRows = records.map((r, i) => [
		i + 1,
		`"${r.id}"`,
		`"${r.date}"`,
		`"${(r.name || "").replace(/"/g, "\"\"")}"`,
		`"${(r.companyName || "").replace(/"/g, "\"\"")}"`,
		`"${(r.vessel || "").replace(/"/g, "\"\"")}"`,
		`"${(r.rank || "").replace(/"/g, "\"\"")}"`,
		`"${(r.passportOrCdcNo || "").replace(/"/g, "\"\"")}"`,
		`"${(r.indosNo || "").replace(/"/g, "\"\"")}"`,
		`"${r.mobileNo}"`,
		`"${r.email || "N/A"}"`,
		`"${r.timeTakenAtReception}"`,
		`"${r.skillAndFriendlinessTechnician}"`,
		`"${r.ecgAudiometryTechnician}"`,
		`"${r.guidanceByStaffDuringWait}"`,
		`"${r.hygieneCleanlinessClinics}"`,
		`"${r.friendlinessMedicalStaff}"`,
		`"${r.interactionWithDoctor}"`,
		`"${r.turnaroundTimeReports}"`,
		`"${(r.suggestionsComments || "None").replace(/"/g, "\"\"")}"`,
		`"${(r.candidateSignature || r.name).replace(/"/g, "\"\"")}"`,
		`"${r.status}"`,
		`"${(r.resolutionRemarks || "Under Review").replace(/"/g, "\"\"")}"`,
		`"${r.resolvedAt ? new Date(r.resolvedAt).toLocaleDateString("en-IN") : "Pending"}"`
	]);
	const csvContent = "﻿" + [headers.join(","), ...csvRows.map((row) => row.join(","))].join("\r\n");
	const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.setAttribute("href", url);
	link.setAttribute("download", filename || `Sailors_Medical_Clinic_Feedback_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
/**
* Exports comprehensive Staff & Employee register to Excel (.xlsx)
* including basic info, joining date, resignation details, salary breakdown,
* banking details, and documents status.
*/
function exportStaffToExcel(staffList, filename) {
	const rows = staffList.map((st, index) => ({
		"Sr. No.": index + 1,
		"Employee ID": st.id,
		"Full Name": st.name,
		"Gender": st.gender || "N/A",
		"Date of Birth": st.dob || "N/A",
		"Role / Designation": st.role,
		"Department": st.department,
		"Employment Type": st.employmentType,
		"Status": st.status,
		"Joining Date": st.joiningDate,
		"Resignation Date": st.resignationDate || "Active",
		"Relieving Date": st.relievingDate || "N/A",
		"Resignation Reason": st.resignationReason || "N/A",
		"Working Schedule": st.schedule,
		"Basic Salary (₹)": st.basicSalary,
		"Allowances (₹)": st.allowances,
		"Deductions (₹)": st.deductions,
		"Net Monthly Salary (₹)": st.netSalary,
		"Pay Frequency": st.payFrequency,
		"PAN Number": st.panNo || "N/A",
		"Bank Name": st.bankName || "N/A",
		"Account Number": st.bankAccountNo || "N/A",
		"IFSC Code": st.ifscCode || "N/A",
		"Mobile Phone": st.phone,
		"Email Address": st.email,
		"Residential Address": st.address,
		"Emergency Contact": `${st.emergencyContactName} (${st.emergencyContactPhone})`,
		"Documents Count": st.documents?.length || 0,
		"Documents Verified": st.documents?.filter((d) => d.verificationStatus === "Verified").length || 0,
		"Document Details": (st.documents || []).map((d) => `${d.name} [${d.type}] - ${d.verificationStatus}`).join("; ") || "None"
	}));
	const worksheet = utils.json_to_sheet(rows);
	worksheet["!cols"] = [
		{ wch: 8 },
		{ wch: 16 },
		{ wch: 22 },
		{ wch: 10 },
		{ wch: 14 },
		{ wch: 26 },
		{ wch: 26 },
		{ wch: 16 },
		{ wch: 18 },
		{ wch: 14 },
		{ wch: 16 },
		{ wch: 16 },
		{ wch: 30 },
		{ wch: 26 },
		{ wch: 16 },
		{ wch: 16 },
		{ wch: 16 },
		{ wch: 20 },
		{ wch: 16 },
		{ wch: 16 },
		{ wch: 20 },
		{ wch: 20 },
		{ wch: 16 },
		{ wch: 18 },
		{ wch: 26 },
		{ wch: 35 },
		{ wch: 30 },
		{ wch: 16 },
		{ wch: 18 },
		{ wch: 45 }
	];
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Staff Register");
	const finalName = filename || `Sailors_Medical_Clinic_Staff_Register_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
	writeFileSync(workbook, finalName);
}
function FeedbackAdminModule({ onNotice }) {
	const [records, setRecords] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [selectedRecord, setSelectedRecord] = (0, import_react.useState)(null);
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [editStatus, setEditStatus] = (0, import_react.useState)("New");
	const [resolutionRemarks, setResolutionRemarks] = (0, import_react.useState)("");
	const [isUpdating, setIsUpdating] = (0, import_react.useState)(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = (0, import_react.useState)(false);
	const [recordToDelete, setRecordToDelete] = (0, import_react.useState)(null);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	const fetchFeedback = (0, import_react.useCallback)(async () => {
		setIsLoading(true);
		setLoadError("");
		try {
			const data = await listFeedbackServer();
			setRecords(data);
		} catch (err) {
			console.error("Failed to load feedback from MongoDB:", err);
			setLoadError("Failed to load records from MongoDB Atlas. Please check network connection.");
		} finally {
			setIsLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		fetchFeedback();
	}, [fetchFeedback]);
	(0, import_react.useEffect)(() => {
		const onFocus = () => void fetchFeedback();
		window.addEventListener("focus", onFocus);
		return () => window.removeEventListener("focus", onFocus);
	}, [fetchFeedback]);
	const filteredRecords = (0, import_react.useMemo)(() => {
		const q = search.trim().toLowerCase();
		return records.filter((r) => {
			const matchesSearch = !q || `${r.id} ${r.name} ${r.companyName || ""} ${r.vessel || ""} ${r.rank || ""} ${r.passportOrCdcNo || ""} ${r.indosNo || ""} ${r.mobileNo} ${r.email || ""} ${r.suggestionsComments || ""}`.toLowerCase().includes(q);
			const matchesStatus = statusFilter === "all" || r.status.toLowerCase() === statusFilter.toLowerCase();
			return matchesSearch && matchesStatus;
		});
	}, [
		records,
		search,
		statusFilter
	]);
	const totalCount = records.length;
	const resolvedCount = records.filter((r) => r.status === "Resolved").length;
	const underReviewCount = records.filter((r) => r.status === "Under Review").length;
	const newCount = records.filter((r) => r.status === "New").length;
	function handleOpenDetail(record) {
		setSelectedRecord(record);
		setEditStatus(record.status);
		setResolutionRemarks(record.resolutionRemarks || "");
		setDialogOpen(true);
	}
	async function handleSaveStatus() {
		if (!selectedRecord) return;
		setIsUpdating(true);
		try {
			const res = await updateFeedbackStatusServer({ data: {
				id: selectedRecord.id,
				status: editStatus,
				resolutionRemarks: resolutionRemarks.trim()
			} });
			if (!res.success) {
				onNotice(res.message || "Failed to update record in MongoDB.");
				return;
			}
			setRecords((prev) => prev.map((item) => item.id === selectedRecord.id ? {
				...item,
				status: editStatus,
				resolutionRemarks: resolutionRemarks.trim(),
				resolvedAt: editStatus === "Resolved" ? (/* @__PURE__ */ new Date()).toISOString() : item.resolvedAt
			} : item));
			setDialogOpen(false);
			onNotice(`Feedback ${selectedRecord.id} marked as ${editStatus}. Stored in MongoDB.`);
		} catch (err) {
			console.error("Failed to update status in MongoDB:", err);
			onNotice("Could not update record status in MongoDB.");
		} finally {
			setIsUpdating(false);
		}
	}
	function handlePromptDelete(record) {
		setRecordToDelete(record);
		setDeleteDialogOpen(true);
	}
	async function handleConfirmDelete() {
		if (!recordToDelete) return;
		setIsDeleting(true);
		try {
			const res = await deleteFeedbackServer({ data: { id: recordToDelete.id } });
			if (!res.success) {
				onNotice(res.message || "Failed to delete feedback record.");
				return;
			}
			setRecords((prev) => prev.filter((r) => r.id !== recordToDelete.id));
			setDeleteDialogOpen(false);
			setDialogOpen(false);
			onNotice(`Feedback record #${recordToDelete.id} from ${recordToDelete.name} has been permanently deleted.`);
			setRecordToDelete(null);
		} catch (err) {
			console.error("Failed to delete feedback record:", err);
			onNotice("Could not delete record from MongoDB.");
		} finally {
			setIsDeleting(false);
		}
	}
	function handleExportExcel() {
		if (!filteredRecords.length) {
			onNotice("No feedback records to export.");
			return;
		}
		exportGrievancesToExcel(filteredRecords);
		onNotice(`Downloaded Sailor's Medical Clinic Excel file with ${filteredRecords.length} records.`);
	}
	function handleExportCSV() {
		if (!filteredRecords.length) {
			onNotice("No feedback records to export.");
			return;
		}
		exportGrievancesToCSV(filteredRecords);
		onNotice(`Downloaded CSV file with ${filteredRecords.length} records.`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-card p-5 shadow-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-base font-bold text-foreground",
								children: "Sailor's Medical Clinic · Candidate Feedback Registry"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] font-mono",
								children: "D.G. Shipping Approved"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Shop No. 21, Punit Tower - 1, CBD Belapur, Navi Mumbai • Mob: +91 95614 50104 • Email: medical@sailorsmedical.com"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: handleExportCSV,
							className: "gap-1.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), " Export CSV"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: handleExportExcel,
							className: "gap-1.5 bg-emerald-600 text-xs font-semibold text-white hover:bg-emerald-700 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-3.5" }), " Download in Excel (.xlsx)"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard$1, {
						label: "Total Candidate Responses",
						value: String(totalCount),
						note: "Stored in MongoDB Atlas",
						icon: FileText,
						accent: "text-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard$1, {
						label: "New Submissions",
						value: String(newCount),
						note: "Awaiting review",
						icon: CircleAlert,
						accent: "text-blue-500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard$1, {
						label: "Under Review",
						value: String(underReviewCount),
						note: "Clinical supervisor audit",
						icon: Clock,
						accent: "text-amber-500"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard$1, {
						label: "Resolved / Filed",
						value: String(resolvedCount),
						note: `${totalCount ? Math.round(resolvedCount / totalCount * 100) : 100}% compliance rate`,
						icon: CircleCheck,
						accent: "text-emerald-600"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-border bg-card shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/20 px-4 py-3 sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-w-[220px] flex-1 sm:max-w-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Search feedback",
								placeholder: "Search candidate, company, INDOS, CDC...",
								value: search,
								onChange: (e) => setSearch(e.target.value),
								className: "h-8 pl-8 text-xs"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								"aria-label": "Filter by status",
								value: statusFilter,
								onChange: (e) => setStatusFilter(e.target.value),
								className: "h-8 rounded-md border border-input bg-background px-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Statuses"
								}), feedbackStatuses.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: st,
									children: st
								}, st))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => void fetchFeedback(),
								className: "h-8 gap-1.5 px-3 text-xs text-muted-foreground hover:text-foreground",
								title: "Refresh from MongoDB",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-3.5 ${isLoading ? "animate-spin" : ""}` }), "Refresh"]
							})]
						})]
					}),
					loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "alert",
						className: "flex items-center justify-between border-b border-destructive/20 bg-destructive/10 px-4 py-2 text-xs text-destructive sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loadError }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => void fetchFeedback(),
							children: "Retry"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-transparent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "pl-5",
									children: "Token / Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Candidate & Rank" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Company" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "hidden md:table-cell",
									children: "CDC / INDOS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Doctor & Staff Rating" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "pr-5 text-right",
									children: "Action"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							colSpan: 7,
							className: "h-28 text-center text-xs text-muted-foreground",
							children: "Loading Sailor's Medical Clinic feedback from MongoDB..."
						}) }) : filteredRecords.length ? filteredRecords.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "whitespace-nowrap pl-5 text-xs font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-primary",
									children: r.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-normal text-muted-foreground",
									children: r.date
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-muted-foreground",
									children: [
										r.rank || "Seafarer",
										" • ",
										r.mobileNo
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "text-xs font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: r.companyName || "Private Candidate" }), r.vessel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-3" }),
										" ",
										r.vessel
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "hidden text-xs text-muted-foreground md:table-cell font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["CDC: ", r.passportOrCdcNo || "N/A"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px]",
									children: ["INDOS: ", r.indosNo || "N/A"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingPill, {
										label: "Doctor",
										val: r.interactionWithDoctor
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingPill, {
										label: "Staff",
										val: r.friendlinessMedicalStaff
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge$1, { status: r.status }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "pr-5 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-end gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => handleOpenDetail(r),
										className: "h-8 gap-1 px-2.5 text-xs font-medium text-primary hover:bg-primary/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), " View Form"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => handlePromptDelete(r),
										className: "size-8 p-0 text-destructive/70 hover:text-destructive hover:bg-destructive/10",
										title: "Delete Grievance Record",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									})]
								})
							})
						] }, r.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							colSpan: 7,
							className: "h-28 text-center text-xs text-muted-foreground",
							children: records.length ? "No records match the current search filters." : "No candidate feedback forms have been submitted yet."
						}) }) })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Showing ",
							filteredRecords.length,
							" of ",
							records.length,
							" feedback responses"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-emerald-600" }), "Connected to MongoDB Atlas"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[92vh] overflow-y-auto sm:max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center justify-between gap-2 pr-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Candidate Feedback Sheet" }), selectedRecord && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs font-bold text-primary",
								children: selectedRecord.id
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Exact submission copy as filled by the candidate at Sailor's Medical Clinic." })] }),
						selectedRecord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 pt-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 rounded-lg border border-border bg-muted/30 p-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Candidate Name:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground text-sm",
											children: selectedRecord.name
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Date:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: selectedRecord.date
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Company Name:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: selectedRecord.companyName || "N/A"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Vessel:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: selectedRecord.vessel || "N/A"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Rank:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: selectedRecord.rank || "N/A"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Passport or CDC No:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono font-semibold text-foreground",
											children: selectedRecord.passportOrCdcNo || "N/A"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Indos No:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono font-semibold text-foreground",
											children: selectedRecord.indosNo || "N/A"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Mobile No:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: selectedRecord.mobileNo
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Email Add:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: selectedRecord.email || "N/A"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border p-3 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-muted-foreground uppercase text-[10px] tracking-wider",
										children: "8-Point Evaluation Checklist:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-border",
										children: feedbackQuestions.map((q) => {
											const score = selectedRecord[q.id];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between py-2 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground",
													children: q.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBadge, { val: score })]
											}, q.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border p-3.5 bg-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-muted-foreground text-[11px]",
											children: "Suggestions / Comments:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 whitespace-pre-wrap text-xs text-foreground italic",
											children: [
												"\"",
												selectedRecord.suggestionsComments || "No additional comments provided.",
												"\""
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 text-right text-[11px] text-muted-foreground",
											children: ["Signature: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-serif italic font-bold text-foreground",
												children: selectedRecord.candidateSignature || selectedRecord.name
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-primary/20 bg-primary/5 p-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-foreground",
											children: "Official Administrative Review & Action"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-3 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-medium",
													children: "Record Status"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: editStatus,
													onChange: (e) => setEditStatus(e.target.value),
													className: "h-9 w-full rounded-md border border-input bg-background px-3 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
													children: feedbackStatuses.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: st,
														children: st
													}, st))
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-medium",
													children: "Reviewing Authority"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													readOnly: true,
													value: "D.G. Approved Medical Officer",
													className: "h-9 text-xs bg-muted/40 cursor-default"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-medium",
												children: "Official Resolution Remarks"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 2,
												value: resolutionRemarks,
												onChange: (e) => setResolutionRemarks(e.target.value),
												placeholder: "Enter resolution notes, clinic corrective action or acknowledgment...",
												className: "w-full rounded-md border border-input bg-background p-2.5 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "destructive",
								size: "sm",
								onClick: () => {
									if (selectedRecord) handlePromptDelete(selectedRecord);
								},
								disabled: isUpdating || isDeleting,
								className: "gap-1.5 bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground border border-destructive/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), " Delete Record"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									onClick: () => setDialogOpen(false),
									disabled: isUpdating || isDeleting,
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									onClick: handleSaveStatus,
									disabled: isUpdating || isDeleting,
									className: "gap-1.5",
									children: isUpdating ? "Saving to MongoDB..." : "Save Status to MongoDB"
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: deleteDialogOpen,
				onOpenChange: setDeleteDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-destructive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-base font-bold",
							children: "Delete Grievance Record?"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "text-xs pt-1 leading-relaxed",
						children: [
							"Are you sure you want to delete grievance record",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-bold text-foreground",
								children: recordToDelete?.id
							}),
							" ",
							"submitted by",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-foreground",
								children: recordToDelete?.name
							}),
							"?",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"This action cannot be undone and will permanently remove this record from MongoDB Atlas."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "gap-2 pt-3 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setDeleteDialogOpen(false),
							disabled: isDeleting,
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "destructive",
							size: "sm",
							onClick: handleConfirmDelete,
							disabled: isDeleting,
							className: "gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), isDeleting ? "Deleting..." : "Permanently Delete"]
						})]
					})]
				})
			})
		]
	});
}
function ScoreBadge({ val }) {
	if (val === "Excellent") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
		children: "Excellent"
	});
	if (val === "Good") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
		children: "Good"
	});
	if (val === "Avg") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
		children: "Avg"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300",
		children: "Below Avg"
	});
}
function RatingPill({ label, val }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [label, ":"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-bold ${val === "Excellent" ? "text-emerald-600" : val === "Good" ? "text-blue-600" : val === "Avg" ? "text-amber-600" : "text-red-600"}`,
			children: val
		})]
	});
}
function StatusBadge$1({ status }) {
	switch (status) {
		case "Resolved": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), " Resolved"]
		});
		case "Under Review": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }), " Under Review"]
		});
		case "Archived": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground",
			children: "Archived"
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }), " New"]
		});
	}
}
function MetricCard$1({ label, value, note, icon: Icon, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `grid size-8 place-items-center rounded bg-muted/60 ${accent}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-2xl font-bold font-mono text-foreground",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[11px] text-muted-foreground",
				children: note
			})
		]
	});
}
function InvoiceDocument({ invoice, onPrint, onClose }) {
	const isPaid = invoice.status === "Paid";
	const isOverdue = invoice.status === "Overdue";
	const handlePrint = () => {
		if (onPrint) onPrint();
		else window.print();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "invoice-container bg-background text-foreground max-w-4xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "print:hidden mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: isPaid ? "default" : isOverdue ? "destructive" : "secondary",
					className: "text-xs font-semibold px-2.5 py-0.5",
					children: invoice.status.toUpperCase()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground font-mono",
					children: invoice.id
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: handlePrint,
					className: "gap-1.5 text-xs font-medium shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Print / Save PDF"]
				}), onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: onClose,
					className: "text-xs",
					children: "Close"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "invoice-paper rounded-xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm print:border-0 print:shadow-none print:p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b-2 border-primary/20 pb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row justify-between items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicLogo, {
								size: "lg",
								showText: false
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-xl font-bold tracking-tight text-foreground sm:text-2xl",
									children: "SAILOR'S MEDICAL CLINIC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-primary uppercase tracking-wider mt-0.5",
									children: "Centre for Marine Medical Examinations • D.G. Shipping Approved Doctors"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-1 max-w-[420px] leading-relaxed",
									children: "Shop No. 21, Punit Tower - 1, Sec-11, CBD Belapur, Navi Mumbai | Mob.: +91 95614 50104 | Email: medical@sailorsmedical.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground mt-1.5 font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ISO 9001:2015 & ISO 45001:2018 Certified" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GSTIN: 27AABCM9124P1Z3" })
									]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:text-right mt-2 sm:mt-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest border border-primary/20",
									children: "TAX INVOICE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg font-mono font-bold text-foreground mt-2",
									children: invoice.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-muted-foreground space-y-0.5 mt-1 font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Invoice Date:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: invoice.date
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Due Date:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: invoice.dueDate
										})
									] })]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-5 py-5 border-b border-border/80 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-muted/40 p-4 border border-border/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-semibold text-primary uppercase tracking-wider text-[11px] mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3.5" }), "Billed To (Company / Agency)"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-foreground",
								children: invoice.company
							}),
							invoice.companyGstin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] font-mono text-muted-foreground mt-1",
								children: ["GSTIN: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: invoice.companyGstin
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground mt-1 leading-relaxed",
								children: invoice.companyAddress || "Shipping Agency & Manning Division, Fort, Mumbai"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-1 text-[11px] font-medium text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Place of Supply:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Maharashtra (27)"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-muted/40 p-4 border border-border/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-semibold text-primary uppercase tracking-wider text-[11px] mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }), "Candidate & Seafarer Particulars"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-foreground",
									children: invoice.patient
								}), invoice.rank && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-end gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "text-[10px] font-medium",
										children: invoice.rank
									}), invoice.vessel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-primary flex items-center gap-1 font-semibold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-3" }),
											" ",
											invoice.vessel
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 grid grid-cols-2 gap-2 text-[11px] font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded bg-background/80 p-1.5 border border-border/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground text-[10px] block",
											children: "INDoS No:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: invoice.indosNo || "—"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded bg-background/80 p-1.5 border border-border/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground text-[10px] block",
											children: "CDC No:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: invoice.cdcNo || "—"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded bg-background/80 p-1.5 border border-border/40 col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground text-[10px] block",
											children: "Medical Certificate Reference:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: invoice.certificateNo || "MC-2026-9041"
										})]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/80 bg-muted/50 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 font-semibold w-12 text-center",
										children: "#"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 font-semibold",
										children: "Service Description / Examination"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 font-semibold font-mono text-center w-24",
										children: "HSN / SAC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 font-semibold text-center w-16",
										children: "Qty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 font-semibold text-right w-28",
										children: "Rate (₹)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2.5 px-3 font-semibold text-right w-28",
										children: "Amount (₹)"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border/60",
								children: invoice.items && invoice.items.length > 0 ? invoice.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/20",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-3 text-center font-mono text-muted-foreground",
											children: idx + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium text-foreground",
												children: item.description
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground mt-0.5",
												children: "Conducted under DG Shipping / ILO MLC 2006 Standards"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-3 text-center font-mono text-muted-foreground",
											children: item.sacCode || "999312"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-3 text-center font-medium",
											children: item.qty || 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-3 text-right font-mono font-medium",
											children: formatINR(item.rate)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-3 text-right font-mono font-semibold text-foreground",
											children: formatINR(item.amount)
										})
									]
								}, item.id || idx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-3 text-center font-mono text-muted-foreground",
										children: "1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-3 font-medium text-foreground",
										children: "DG Shipping Comprehensive Maritime Medical Examination & Certification"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-3 text-center font-mono text-muted-foreground",
										children: "999312"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-3 text-center font-medium",
										children: "1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-3 text-right font-mono font-medium",
										children: formatINR(invoice.subtotal)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-3 text-right font-mono font-semibold text-foreground",
										children: formatINR(invoice.total)
									})
								] })
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-12 gap-5 py-4 border-t border-border/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-primary/5 p-3.5 border border-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold text-primary uppercase tracking-wider block",
								children: "Total Amount in Words (INR):"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground mt-0.5 italic",
								children: amountToWordsINR(invoice.total)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/80 p-3.5 text-xs bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2 pb-1.5 border-b border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3.5 text-primary" }), "Payment Particulars & Bank Details"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono text-muted-foreground",
										children: ["Status: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: invoice.status
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2 text-[11px] font-mono text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Bank: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "HDFC Bank Ltd"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["IFSC: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "HDFC0001234"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["A/C Name: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Marine Clinic Care Pvt Ltd"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["A/C No: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "50200084920192"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 pt-2 border-t border-border/50 flex items-center justify-between text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Payment Method:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: invoice.paymentMethod || "UPI / Digital Transfer"
									})]
								}),
								invoice.transactionRef && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[11px] mt-1 font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "UTR / Transaction Ref:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: invoice.transactionRef
									})]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-xs border border-border/80 rounded-lg p-4 bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Taxable Subtotal:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-medium text-foreground",
										children: formatINR(invoice.subtotal)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CGST (0% - Healthcare Exempt):" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-medium text-foreground",
										children: "₹0.00"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SGST (0% - Healthcare Exempt):" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-medium text-foreground",
										children: "₹0.00"
									})]
								}),
								invoice.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between py-1 text-accent-foreground font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono",
										children: ["- ", formatINR(invoice.discount)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t-2 border-primary/20 pt-2 flex justify-between items-baseline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-foreground uppercase tracking-wide",
										children: "Grand Total (INR):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-lg font-mono font-bold text-primary",
										children: formatINR(invoice.total)
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground mt-2 leading-tight",
							children: "* Note: Healthcare diagnosis & seafarer fitness services are exempt from GST under Notification No. 12/2017-Central Tax (Rate)."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-6 mt-4 border-t-2 border-border/80 flex flex-col sm:flex-row justify-between items-end gap-6 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[420px] space-y-1 text-[11px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-foreground uppercase tracking-wider text-[10px]",
								children: "Terms & Legal Declaration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed",
								children: "1. This is a computer-generated official tax invoice issued for maritime seafarer medical evaluation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-relaxed",
								children: "2. Examined strictly pursuant to Merchant Shipping (Medical Examination) Rules & MLC 2006 guidelines."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center sm:text-right shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-block border-b border-foreground/60 w-48 pb-1 mb-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-sm text-foreground/80 block",
									children: "Dr. Maya Bennett, MD"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-xs text-foreground",
								children: "Authorized Medical Examiner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "DG Shipping Registration #MUM-DOC-4081"
							})
						]
					})]
				})
			]
		})]
	});
}
function InvoiceModal({ invoice, open, onOpenChange, onMarkPaid, onEdit }) {
	if (!invoice) return null;
	const handlePrint = () => {
		window.print();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[94vh] w-full max-w-4xl overflow-y-auto p-4 sm:p-6 sm:rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Tax Invoice ", invoice.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Official DG Shipping Medical Examination Invoice" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceDocument, {
				invoice,
				onPrint: handlePrint,
				onClose: () => onOpenChange(false)
			})]
		})
	});
}
function InvoiceModule({ invoices, patients, onAddInvoice, onUpdateInvoice, onDeleteInvoice, onNotice }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [selectedInvoice, setSelectedInvoice] = (0, import_react.useState)(null);
	const [viewModalOpen, setViewModalOpen] = (0, import_react.useState)(false);
	const [createModalOpen, setCreateModalOpen] = (0, import_react.useState)(false);
	const stats = (0, import_react.useMemo)(() => {
		const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.total, 0);
		const paidInvoices = invoices.filter((inv) => inv.status === "Paid");
		const totalCollected = paidInvoices.reduce((sum, inv) => sum + inv.total, 0);
		const pendingInvoices = invoices.filter((inv) => inv.status === "Pending" || inv.status === "Overdue");
		const totalOutstanding = pendingInvoices.reduce((sum, inv) => sum + inv.total, 0);
		const avgInvoice = invoices.length ? Math.round(totalInvoiced / invoices.length) : 0;
		return {
			totalInvoiced,
			totalCollected,
			totalOutstanding,
			paidCount: paidInvoices.length,
			pendingCount: pendingInvoices.length,
			avgInvoice
		};
	}, [invoices]);
	const filtered = (0, import_react.useMemo)(() => {
		return invoices.filter((inv) => {
			const matchSearch = `${inv.id} ${inv.patient} ${inv.company} ${inv.rank || ""} ${inv.indosNo || ""} ${inv.cdcNo || ""}`.toLowerCase().includes(search.toLowerCase());
			const matchStatus = statusFilter === "all" || inv.status.toLowerCase() === statusFilter.toLowerCase();
			return matchSearch && matchStatus;
		});
	}, [
		invoices,
		search,
		statusFilter
	]);
	const handleView = (invoice) => {
		setSelectedInvoice(invoice);
		setViewModalOpen(true);
	};
	const handleMarkPaid = (invoice) => {
		onUpdateInvoice({
			...invoice,
			status: "Paid",
			paidDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			})
		});
		onNotice(`Invoice ${invoice.id} marked as Paid (${invoice.amount}).`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Total Invoiced (INR)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletCards, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold font-mono text-foreground",
								children: formatINR(stats.totalInvoiced)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 flex items-center gap-1 text-[11px] text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [invoices.length, " tax invoices generated"] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Collected / Settled"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded bg-accent/20 text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold font-mono text-accent-foreground",
								children: formatINR(stats.totalCollected)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-1 text-[11px] text-accent-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [stats.paidCount, " cleared invoices"] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Outstanding Due"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded bg-destructive/10 text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold font-mono text-destructive",
								children: formatINR(stats.totalOutstanding)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 flex items-center gap-1 text-[11px] text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [stats.pendingCount, " pending verification"] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Avg. Examination Bill"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded bg-secondary text-secondary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold font-mono text-foreground",
								children: formatINR(stats.avgInvoice)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: "Per DG Shipping candidate"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-semibold tracking-tight",
								children: "Standard Maritime Invoices"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "font-mono text-xs",
								children: [
									filtered.length,
									" of ",
									invoices.length
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "DG Shipping approved medical bills in INR with itemized examination services"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-full sm:w-56",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Search invoice, candidate...",
										value: search,
										onChange: (e) => setSearch(e.target.value),
										className: "h-9 pl-8 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by invoice status",
									value: statusFilter,
									onChange: (e) => setStatusFilter(e.target.value),
									className: "h-9 rounded-md border border-input bg-background px-2.5 text-xs font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All Statuses"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "paid",
											children: "Paid"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "pending",
											children: "Pending"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "overdue",
											children: "Overdue"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: () => setCreateModalOpen(true),
									className: "gap-1.5 shadow-sm text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlusCorner, { className: "size-3.5" }), " Create Invoice"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-transparent bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "pl-6 w-32 text-xs font-semibold",
									children: "Invoice #"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "min-w-[190px] text-xs font-semibold",
									children: "Candidate / Seafarer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "min-w-[180px] text-xs font-semibold",
									children: "Billed To (Company)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-semibold",
									children: "Issue Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-semibold",
									children: "Due Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right text-xs font-semibold",
									children: "Total Amount (₹)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-center text-xs font-semibold",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "pr-6 text-right text-xs font-semibold",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filtered.length > 0 ? filtered.map((invoice) => {
							const isPaid = invoice.status === "Paid";
							const isOverdue = invoice.status === "Overdue";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								className: "hover:bg-muted/30 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "pl-6 font-mono text-xs font-bold text-primary whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => handleView(invoice),
											className: "hover:underline flex items-center gap-1.5 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5 shrink-0" }), invoice.id]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-xs text-foreground",
										children: invoice.patient
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-[10px] text-muted-foreground mt-0.5",
										children: [invoice.rank && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: invoice.rank }), invoice.indosNo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: invoice.indosNo
										})] })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-medium text-foreground truncate max-w-[180px]",
										title: invoice.company,
										children: invoice.company
									}), invoice.companyGstin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-mono text-muted-foreground",
										children: invoice.companyGstin
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-xs text-muted-foreground whitespace-nowrap",
										children: invoice.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-xs text-muted-foreground whitespace-nowrap",
										children: invoice.dueDate
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-right font-mono text-xs font-bold text-foreground whitespace-nowrap",
										children: formatINR(invoice.total)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-center whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: isPaid ? "default" : isOverdue ? "destructive" : "secondary",
											className: "text-[10px] px-2 py-0.5 font-semibold uppercase tracking-wide",
											children: invoice.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "pr-6 text-right whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													className: "h-7 gap-1 px-2 text-xs font-medium text-primary hover:bg-primary/10 border-primary/30 shadow-xs",
													onClick: () => handleView(invoice),
													title: "View Standard Tax Invoice",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3" }), "View"]
												}),
												!isPaid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "ghost",
													className: "h-7 px-2 text-xs text-accent-foreground hover:bg-accent/10",
													onClick: () => handleMarkPaid(invoice),
													title: "Mark as Paid",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 mr-0.5" }), "Pay"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "ghost",
													className: "size-7 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10",
													onClick: () => onDeleteInvoice(invoice.id),
													title: "Delete Invoice",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
												})
											]
										})
									})
								]
							}, invoice.id);
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							colSpan: 8,
							className: "py-12 text-center text-muted-foreground text-xs",
							children: "No matching invoices found."
						}) }) })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Showing ",
							filtered.length,
							" of ",
							invoices.length,
							" invoices (All amounts in INR ₹)"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Standard DG Shipping Compliant Billing" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceModal, {
				invoice: selectedInvoice,
				open: viewModalOpen,
				onOpenChange: setViewModalOpen,
				onMarkPaid: (id) => {
					const target = invoices.find((inv) => inv.id === id);
					if (target) handleMarkPaid(target);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateInvoiceModal, {
				open: createModalOpen,
				onOpenChange: setCreateModalOpen,
				patients,
				nextInvoiceNum: invoices.length + 85,
				onSave: (newInv) => {
					onAddInvoice(newInv);
					onNotice(`Invoice ${newInv.id} created for ${newInv.patient} (${newInv.amount}).`);
				}
			})
		]
	});
}
var listPayments = createServerFn({ method: "GET" }).handler(createSsrRpc("46f0281588053a3ca9274ce9f96e6b22e966f129cc09a3f7df21f882fae21399"));
var recordPayment = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("7503df8020f8e06acfa6f12fe842bbda9596a2a258ad6847ba13b7271885b68b"));
var fieldClassName = "h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
function PaymentsModule({ patients, invoices, onNotice }) {
	const [payments, setPayments] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	const [formError, setFormError] = (0, import_react.useState)("");
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [patientId, setPatientId] = (0, import_react.useState)("");
	const [invoiceId, setInvoiceId] = (0, import_react.useState)("");
	const [method, setMethod] = (0, import_react.useState)("UPI");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [reference, setReference] = (0, import_react.useState)("");
	const loadPayments = (0, import_react.useCallback)(async () => {
		setIsLoading(true);
		setLoadError("");
		try {
			setPayments(await listPayments());
		} catch (error) {
			console.error("Failed to load MongoDB payment records.", error);
			setLoadError("Payments could not be loaded from MongoDB. Check MONGODB_URI and Atlas network access, then retry.");
		} finally {
			setIsLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadPayments();
	}, [loadPayments]);
	const filteredPayments = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return payments.filter((payment) => {
			const matchesSearch = !query || `${payment.id} ${payment.patientName} ${payment.method} ${payment.reference ?? ""} ${payment.invoiceId ?? ""}`.toLowerCase().includes(query);
			const matchesStatus = statusFilter === "all" || payment.status.toLowerCase() === statusFilter;
			return matchesSearch && matchesStatus;
		});
	}, [
		payments,
		search,
		statusFilter
	]);
	const totalReceived = payments.filter((payment) => payment.status === "Completed").reduce((sum, payment) => sum + payment.amount, 0);
	const completedCount = payments.filter((payment) => payment.status === "Completed").length;
	const linkedCount = payments.filter((payment) => payment.invoiceId).length;
	function resetForm() {
		setPatientId("");
		setInvoiceId("");
		setMethod("UPI");
		setAmount("");
		setReference("");
		setFormError("");
	}
	async function handleSubmit(event) {
		event.preventDefault();
		const patient = patients.find((item) => item.id === patientId);
		if (!patient) {
			setFormError("Select a patient before recording the payment.");
			return;
		}
		setIsSaving(true);
		setFormError("");
		try {
			const result = await recordPayment({ data: {
				patientId: patient.id,
				patientName: patient.name,
				...invoiceId ? { invoiceId } : {},
				method,
				amount: Number(amount),
				...reference.trim() ? { reference: reference.trim() } : {}
			} });
			if (!result.success) {
				setFormError(result.message);
				return;
			}
			const payment = result.payment;
			setPayments((current) => [payment, ...current]);
			setDialogOpen(false);
			resetForm();
			onNotice(`Payment ${payment.id} recorded and saved to MongoDB.`);
		} catch (error) {
			console.error("Failed to record payment in MongoDB.", error);
			setFormError(error instanceof Error ? error.message : "Payment could not be saved. Check the server log for details.");
		} finally {
			setIsSaving(false);
		}
	}
	function handleDialogChange(open) {
		setDialogOpen(open);
		if (!open) resetForm();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Total recorded",
						value: formatINR(totalReceived),
						icon: WalletCards,
						note: "Completed payments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Completed transactions",
						value: String(completedCount),
						icon: CircleCheck,
						note: "Saved in MongoDB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Linked to invoices",
						value: String(linkedCount),
						icon: CreditCard,
						note: `${payments.length - linkedCount} without an invoice`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-border bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Payment transactions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Record and review clinic payments stored in MongoDB Atlas"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full flex-wrap gap-2 sm:w-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative min-w-[180px] flex-1 sm:flex-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"aria-label": "Search payments",
										placeholder: "Search transactions...",
										value: search,
										onChange: (event) => setSearch(event.target.value),
										className: "h-9 pl-8 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by payment status",
									value: statusFilter,
									onChange: (event) => setStatusFilter(event.target.value),
									className: "h-9 rounded-md border border-input bg-background px-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All statuses"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "completed",
										children: "Completed"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: () => setDialogOpen(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Record payment"]
								})
							]
						})]
					}),
					loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "alert",
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 text-sm text-destructive sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loadError }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => void loadPayments(),
							children: "Retry"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-transparent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "pl-5",
									children: "Transaction"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Patient" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Payment method" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Amount" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" })
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							colSpan: 6,
							className: "h-24 text-center text-sm text-muted-foreground",
							children: "Loading payments..."
						}) }) : filteredPayments.length ? filteredPayments.map((payment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "whitespace-nowrap pl-5 text-xs font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: payment.id }), (payment.invoiceId || payment.reference) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[10px] font-normal text-muted-foreground",
									children: [payment.invoiceId, payment.reference].filter(Boolean).join(" · ")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap text-xs font-medium",
								children: payment.patientName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap text-xs text-muted-foreground",
								children: payment.method
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap text-xs text-muted-foreground",
								children: formatPaymentDate(payment.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "whitespace-nowrap text-xs font-semibold",
								children: formatINR(payment.amount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), payment.status]
							}) })
						] }, payment.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							colSpan: 6,
							className: "h-24 text-center text-sm text-muted-foreground",
							children: payments.length ? "No payments match this search." : "No payments have been recorded yet."
						}) }) })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-5",
						children: [
							"Showing ",
							filteredPayments.length,
							" of ",
							payments.length,
							" saved transactions"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: dialogOpen,
				onOpenChange: handleDialogChange,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90svh] overflow-y-auto sm:max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Record a payment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Save a completed payment transaction to the clinic database." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "space-y-1.5 text-xs font-medium",
										children: ["Patient", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											required: true,
											value: patientId,
											onChange: (event) => setPatientId(event.target.value),
											className: fieldClassName,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Select patient"
											}), patients.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: patient.id,
												children: patient.name
											}, patient.id))]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "space-y-1.5 text-xs font-medium",
										children: ["Invoice (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: invoiceId,
											onChange: (event) => setInvoiceId(event.target.value),
											className: fieldClassName,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "No invoice linked"
											}), invoices.map((invoice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
												value: invoice.id,
												children: [
													invoice.id,
													" · ",
													invoice.patient
												]
											}, invoice.id))]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "space-y-1.5 text-xs font-medium",
										children: ["Payment method", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											required: true,
											value: method,
											onChange: (event) => setMethod(event.target.value),
											className: fieldClassName,
											children: paymentMethods.map((paymentMethod) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: paymentMethod,
												children: paymentMethod
											}, paymentMethod))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "space-y-1.5 text-xs font-medium",
										children: ["Amount (INR)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											required: true,
											min: "0.01",
											max: "10000000",
											step: "0.01",
											type: "number",
											value: amount,
											onChange: (event) => setAmount(event.target.value),
											placeholder: "e.g. 4500",
											className: "h-9 text-sm"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block space-y-1.5 text-xs font-medium",
								children: ["Transaction reference (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									maxLength: 120,
									value: reference,
									onChange: (event) => setReference(event.target.value),
									placeholder: "UPI reference, receipt number, etc.",
									className: "h-9 text-sm"
								})]
							}),
							formError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "text-sm text-destructive",
								children: formError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => handleDialogChange(false),
								disabled: isSaving,
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: isSaving,
								children: isSaving ? "Saving..." : "Save payment"
							})] })
						]
					})]
				})
			})
		]
	});
}
function MetricCard({ label, value, icon: Icon, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 shadow-xs sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-8 place-items-center rounded bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-2xl font-bold font-mono text-foreground",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 flex items-center gap-1 text-[11px] text-muted-foreground",
				children: [label === "Total recorded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3" }), note]
			})
		]
	});
}
function formatPaymentDate(value) {
	const date = new Date(value);
	return Number.isNaN(date.getTime()) ? value : date.toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
function PatientDetailModal({ patient, open, onOpenChange, onEdit, onPrintNotice }) {
	if (!patient) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] w-full max-w-2xl overflow-y-auto p-0 sm:rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "border-b border-border bg-muted/40 p-5 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								className: "size-12 border-2 border-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
									className: "bg-primary/10 text-sm font-bold text-primary",
									children: patient.initials
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-lg font-semibold tracking-tight",
									children: patient.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "font-mono text-[10px]",
									children: ["Sr. #", patient.srNo]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
								className: "mt-0.5 text-xs text-muted-foreground flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: patient.rank
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: patient.companyName }),
									(patient.vesselName || patient.vessel) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 font-medium text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-3" }), patient.vesselName || patient.vessel]
									})] })
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "gap-1.5 text-xs",
								onClick: () => {
									onOpenChange(false);
									onEdit(patient);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), "Edit Record"]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-5 sm:p-6 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border/80 bg-card p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-medium text-muted-foreground",
										children: "Examination Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-semibold text-foreground",
										children: patient.date || patient.lastVisit
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border/80 bg-card p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-medium text-muted-foreground",
										children: "Payment Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 font-semibold text-accent-foreground flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }),
											" ",
											patient.paymentStatus,
											" (",
											patient.paymentAmount,
											")"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border/80 bg-card p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-medium text-muted-foreground",
										children: "Time In / Out"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 font-semibold text-foreground",
										children: [
											patient.timeIn,
											" - ",
											patient.timeOut
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border/80 bg-card p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-medium text-muted-foreground",
										children: "Invoice Ref"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-mono font-semibold text-primary",
										children: patient.invoiceNo || "INV-2026-084"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-primary/20 bg-primary/5 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileBadge, { className: "size-4" }), "Candidate Maritime Credentials"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "bg-background text-[10px]",
									children: "Char A-Z, 0-9"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded bg-background p-2.5 border border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "Certificate No."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 font-mono font-semibold tracking-wide text-foreground",
											children: patient.certificateNo || "—"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded bg-background p-2.5 border border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "INDoS No. (DG Shipping)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 font-mono font-semibold tracking-wide text-foreground",
											children: patient.indosNo || "—"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded bg-background p-2.5 border border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "CDC No. (Seaman’s Book)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 font-mono font-semibold tracking-wide text-foreground",
											children: patient.cdcNo || "—"
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-card p-4 space-y-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-semibold text-foreground border-b border-border/60 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5 text-primary" }), "Candidate & Contact Information"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Candidate Name:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: patient.name
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Date of Birth (DOB):"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-medium text-foreground",
												children: [
													patient.dob,
													" (",
													patient.age,
													" yrs)"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Gender:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: patient.gender
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Contact No.:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: patient.phone
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Email:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground truncate max-w-[180px]",
												children: patient.email
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Company Name:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: patient.companyName
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Vessel Name:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-semibold text-foreground flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-3 text-primary" }),
													" ",
													patient.vesselName || patient.vessel || "—"
												]
											})]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-card p-4 space-y-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-semibold text-foreground border-b border-border/60 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "size-3.5 text-primary" }), "Medical & Diagnostics"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Type of Medical:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: patient.typeOfMedical
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "USG / XRay:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-accent-foreground",
												children: patient.usgXray
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Time In:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: patient.timeIn
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Time Out:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: patient.timeOut
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Fitness Condition:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: patient.condition
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Record Status:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "secondary",
												className: "text-[10px]",
												children: patient.status
											})]
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-4 space-y-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-semibold text-foreground border-b border-border/60 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3.5 text-primary" }), "Financial & Invoice Statement"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Payment Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-semibold text-foreground",
										children: patient.paymentStatus
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Amount (Amt)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-semibold text-foreground",
										children: patient.paymentAmount
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Payment Mode"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-semibold text-foreground",
										children: patient.paymentMode
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Trans. ID / Proof"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-mono text-[11px] text-foreground truncate",
										children: patient.transactionId || patient.paymentProof || "—"
									})] })
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "border-t border-border bg-muted/20 px-5 py-3 sm:px-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "text-xs text-muted-foreground",
						onClick: onPrintNotice,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5 mr-1" }), "Print Dossier"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => onOpenChange(false),
							children: "Close"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							className: "gap-1.5",
							onClick: () => {
								onOpenChange(false);
								onEdit(patient);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), "Edit Record"]
						})]
					})]
				})
			]
		})
	});
}
var COMMON_RANKS = [
	"Captain / Master",
	"Chief Officer",
	"2nd Officer",
	"3rd Officer",
	"Chief Engineer",
	"2nd Engineer",
	"3rd Engineer",
	"4th Engineer",
	"Electrical Officer (ETO)",
	"Bosun",
	"Able Seaman (AB)",
	"Ordinary Seaman (OS)",
	"Deck Cadet",
	"Engine Cadet",
	"Oiler / Motorman",
	"Fitter",
	"Chief Cook",
	"Trainee Seaman"
];
var MEDICAL_TYPES = [
	"Pre-Sea Examination",
	"Annual Seafarer Medical",
	"Flag State Medical",
	"Periodic Maritime Medical",
	"Offshore / DG Shipping",
	"Re-examination / Follow-up",
	"Routine Checkup"
];
var USG_XRAY_OPTIONS = [
	"USG & Chest X-Ray Normal",
	"Chest X-Ray Normal",
	"USG Normal",
	"Pending USG",
	"Pending X-Ray",
	"Both Pending",
	"Not Required",
	"Abnormal - Requires Review"
];
var COMMON_COMPANIES = [
	"Maersk Marine Services",
	"Synergy Maritime",
	"Anglo-Eastern Shipping",
	"Fleet Management Ltd",
	"MSC Mediterranean",
	"Teekay Tankers",
	"Bernhard Schulte (BSM)",
	"V.Group / V.Ships",
	"Great Eastern Shipping",
	"Executive Ship Management"
];
var COMMON_VESSELS = [
	"MV Maersk Mc-Kinney",
	"MT Synergy Tide",
	"MV Pacific Pioneer",
	"MV Eastern Glory",
	"MSC Oscar",
	"MT Nordic Voyager",
	"MV Ever Given",
	"MT BSM Stralsund",
	"MV Jag Anand",
	"MT Ridgebury Pioneer"
];
function PatientModal({ open, onOpenChange, patientToEdit, nextSrNo, onSave }) {
	const isEditing = Boolean(patientToEdit);
	const [srNo, setSrNo] = (0, import_react.useState)(nextSrNo);
	const [date, setDate] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [dob, setDob] = (0, import_react.useState)("");
	const [age, setAge] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("Male");
	const [rank, setRank] = (0, import_react.useState)("");
	const [typeOfMedical, setTypeOfMedical] = (0, import_react.useState)("Annual Seafarer Medical");
	const [usgXray, setUsgXray] = (0, import_react.useState)("USG & Chest X-Ray Normal");
	const [companyName, setCompanyName] = (0, import_react.useState)("");
	const [vessel, setVessel] = (0, import_react.useState)("");
	const [paymentStatus, setPaymentStatus] = (0, import_react.useState)("Paid");
	const [paymentAmount, setPaymentAmount] = (0, import_react.useState)("₹4,500.00");
	const [paymentMode, setPaymentMode] = (0, import_react.useState)("Trans. ID");
	const [paymentProof, setPaymentProof] = (0, import_react.useState)("");
	const [transactionId, setTransactionId] = (0, import_react.useState)("");
	const [timeIn, setTimeIn] = (0, import_react.useState)("09:00 AM");
	const [timeOut, setTimeOut] = (0, import_react.useState)("01:00 PM");
	const [certificateNo, setCertificateNo] = (0, import_react.useState)("");
	const [indosNo, setIndosNo] = (0, import_react.useState)("");
	const [cdcNo, setCdcNo] = (0, import_react.useState)("");
	const [invoiceNo, setInvoiceNo] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("candidate");
	(0, import_react.useEffect)(() => {
		if (patientToEdit) {
			setSrNo(patientToEdit.srNo || 1);
			setDate(patientToEdit.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
			setName(patientToEdit.name || "");
			setPhone(patientToEdit.phone || "");
			setEmail(patientToEdit.email || "");
			setDob(patientToEdit.dob || "");
			setAge(patientToEdit.age ? String(patientToEdit.age) : "");
			setGender(patientToEdit.gender || "Male");
			setRank(patientToEdit.rank || "");
			setTypeOfMedical(patientToEdit.typeOfMedical || "Annual Seafarer Medical");
			setUsgXray(patientToEdit.usgXray || "USG & Chest X-Ray Normal");
			setCompanyName(patientToEdit.companyName || "");
			setVessel(patientToEdit.vesselName || patientToEdit.vessel || "");
			setPaymentStatus(patientToEdit.paymentStatus || "Paid");
			setPaymentAmount(patientToEdit.paymentAmount || "₹4,500.00");
			setPaymentMode(patientToEdit.paymentMode || "Trans. ID");
			setPaymentProof(patientToEdit.paymentProof || "");
			setTransactionId(patientToEdit.transactionId || "");
			setTimeIn(patientToEdit.timeIn || "09:00 AM");
			setTimeOut(patientToEdit.timeOut || "01:00 PM");
			setCertificateNo(patientToEdit.certificateNo || "");
			setIndosNo(patientToEdit.indosNo || "");
			setCdcNo(patientToEdit.cdcNo || "");
			setInvoiceNo(patientToEdit.invoiceNo || `INV-2026-${String(patientToEdit.srNo || nextSrNo).padStart(3, "0")}`);
		} else {
			const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
			setSrNo(nextSrNo);
			setDate(today);
			setName("");
			setPhone("");
			setEmail("");
			setDob("1995-05-15");
			setAge("31");
			setGender("Male");
			setRank("Chief Officer");
			setTypeOfMedical("Annual Seafarer Medical");
			setUsgXray("USG & Chest X-Ray Normal");
			setCompanyName("Maersk Marine Services");
			setVessel("MV Maersk Mc-Kinney");
			setPaymentStatus("Paid");
			setPaymentAmount("₹4,500.00");
			setPaymentMode("Trans. ID");
			setPaymentProof("Online receipt attached");
			setTransactionId(`TXN-${Math.floor(1e4 + Math.random() * 9e4)}`);
			setTimeIn("09:00 AM");
			setTimeOut("01:30 PM");
			setCertificateNo(`MC-2026-${Math.floor(9e3 + nextSrNo)}`);
			setIndosNo(`${Math.floor(10 + Math.random() * 89)}NL${Math.floor(1e3 + Math.random() * 9e3)}`);
			setCdcNo(`MUM ${Math.floor(1e5 + Math.random() * 9e5)}`);
			setInvoiceNo(`INV-2026-${String(nextSrNo + 84).padStart(3, "0")}`);
		}
		setActiveTab("candidate");
	}, [
		patientToEdit,
		open,
		nextSrNo
	]);
	const handleDobChange = (value) => {
		setDob(value);
		if (value) {
			const birth = new Date(value);
			if (!isNaN(birth.getTime())) {
				const diff = Date.now() - birth.getTime();
				const calculatedAge = Math.floor(diff / 315576e5);
				if (calculatedAge >= 0 && calculatedAge < 120) setAge(String(calculatedAge));
			}
		}
	};
	const sanitizeAlphanumeric = (val) => {
		return val.replace(/[^a-zA-Z0-9\s-]/g, "").toUpperCase();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const cleanName = name.trim();
		if (!cleanName) return;
		const initials = cleanName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
		const id = patientToEdit ? patientToEdit.id : `PT-${(2400 + srNo).toString()}`;
		const formattedDate = date ? new Date(date).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		}) : "Oct 22, 2026";
		onSave({
			id,
			srNo: Number(srNo) || nextSrNo,
			date: date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			name: cleanName,
			candidateName: cleanName,
			initials,
			dob: dob || "1995-01-01",
			age: Number(age) || 30,
			gender: gender || "Male",
			phone: phone || "—",
			email: email || `${cleanName.toLowerCase().replace(/\s+/g, ".")}@seafarer.demo`,
			rank: rank || "Seafarer",
			typeOfMedical: typeOfMedical || "Annual Seafarer Medical",
			usgXray: usgXray || "USG & Chest X-Ray Normal",
			companyName: companyName || "Independent / Agency",
			vessel: vessel.trim() || void 0,
			vesselName: vessel.trim() || void 0,
			paymentStatus: paymentStatus || "Paid",
			paymentAmount: paymentAmount || "₹4,500.00",
			paymentMode: paymentMode || "Trans. ID",
			paymentProof: paymentProof || "Standard voucher",
			transactionId: transactionId || `TXN-${Math.floor(1e4 + Math.random() * 9e4)}`,
			timeIn: timeIn || "09:00 AM",
			timeOut: timeOut || "01:00 PM",
			certificateNo: sanitizeAlphanumeric(certificateNo),
			indosNo: sanitizeAlphanumeric(indosNo),
			cdcNo: sanitizeAlphanumeric(cdcNo),
			invoiceNo: invoiceNo || `INV-2026-${String(srNo).padStart(3, "0")}`,
			lastVisit: formattedDate,
			nextVisit: "Scheduled in 1 yr",
			condition: typeOfMedical || "Annual Seafarer Medical",
			status: paymentStatus === "Paid" ? "Active" : "Follow-up"
		});
		onOpenChange(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] w-full max-w-3xl overflow-y-auto p-0 sm:rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "border-b border-border bg-muted/40 p-5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-semibold tracking-tight",
							children: isEditing ? "Edit Patient Record" : "Add New Patient Record"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: isEditing ? "secondary" : "default",
							className: "text-[11px]",
							children: isEditing ? `Record #${patientToEdit?.id}` : "DG Shipping / Maritime"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: "Marine seafarer clinical dossier & medical fitness examination fields"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("candidate"),
							className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "candidate" ? "bg-primary text-primary-foreground shadow-sm" : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }), "1. Candidate Details"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("medical"),
							className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "medical" ? "bg-primary text-primary-foreground shadow-sm" : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "size-3.5" }), "2. Medical & Timing"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("payment"),
							className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "payment" ? "bg-primary text-primary-foreground shadow-sm" : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3.5" }), "3. Payment & Invoice"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "p-5 sm:p-6",
				children: [
					activeTab === "candidate" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/70 bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between border-b border-border/50 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Basic Maritime Candidate Info"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] text-muted-foreground",
										children: ["Sr. No #", srNo]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-srno",
												className: "text-xs font-medium text-foreground",
												children: ["Sr. No ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-srno",
												type: "number",
												min: "1",
												value: srNo,
												onChange: (e) => setSrNo(Number(e.target.value)),
												className: "h-9 text-xs",
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-date",
												className: "text-xs font-medium text-foreground",
												children: ["Date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-date",
												type: "date",
												value: date,
												onChange: (e) => setDate(e.target.value),
												className: "h-9 text-xs",
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-dob",
												className: "text-xs font-medium text-foreground",
												children: ["DOB (Date of Birth) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-dob",
												type: "date",
												value: dob,
												onChange: (e) => handleDobChange(e.target.value),
												className: "h-9 text-xs",
												required: true
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-3 sm:grid-cols-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "field-name",
											className: "text-xs font-medium text-foreground",
											children: ["Candidate Name / Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "field-name",
											placeholder: "e.g. Captain Rajesh Kumar",
											value: name,
											onChange: (e) => setName(e.target.value),
											className: "h-9 text-xs",
											required: true
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "field-age",
											className: "text-xs font-medium text-foreground",
											children: "Age & Gender"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-age",
												type: "number",
												placeholder: "Age",
												value: age,
												onChange: (e) => setAge(e.target.value),
												className: "h-9 w-20 text-xs"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												"aria-label": "Gender",
												value: gender,
												onChange: (e) => setGender(e.target.value),
												className: "h-9 flex-1 rounded-md border border-input bg-background px-2 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Male",
														children: "Male"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Female",
														children: "Female"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Other",
														children: "Other"
													})
												]
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "field-contact",
											className: "text-xs font-medium text-foreground",
											children: ["Contact No. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "field-contact",
											type: "tel",
											placeholder: "+91 98765 43210 or +1 (212) 555-0148",
											value: phone,
											onChange: (e) => setPhone(e.target.value),
											className: "h-9 text-xs",
											required: true
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "field-email",
											className: "text-xs font-medium text-foreground",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "field-email",
											type: "email",
											placeholder: "candidate@marine.demo",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											className: "h-9 text-xs"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-rank",
												className: "text-xs font-medium text-foreground",
												children: ["Rank ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "field-rank",
													list: "rank-suggestions",
													placeholder: "e.g. Chief Officer, Captain, Bosun",
													value: rank,
													onChange: (e) => setRank(e.target.value),
													className: "h-9 text-xs",
													required: true
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
													id: "rank-suggestions",
													children: COMMON_RANKS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: r }, r))
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-company",
												className: "text-xs font-medium text-foreground",
												children: ["Company Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "field-company",
													list: "company-suggestions",
													placeholder: "e.g. Maersk Marine, Synergy, MSC",
													value: companyName,
													onChange: (e) => setCompanyName(e.target.value),
													className: "h-9 text-xs",
													required: true
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
													id: "company-suggestions",
													children: COMMON_COMPANIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c }, c))
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-vessel",
												className: "text-xs font-medium text-foreground flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-3.5 text-primary" }), "Vessel Name"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "field-vessel",
													list: "vessel-suggestions",
													placeholder: "e.g. MV Maersk Mc-Kinney",
													value: vessel,
													onChange: (e) => setVessel(e.target.value),
													className: "h-9 text-xs"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
													id: "vessel-suggestions",
													children: COMMON_VESSELS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: v }, v))
												})]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-lg border border-primary/25 bg-primary/5 p-4 space-y-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2 border-b border-primary/15 pb-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-7 place-items-center rounded-md bg-primary/10 text-primary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileBadge, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-semibold text-foreground",
												children: "Candidate Maritime Credentials"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Official DG Shipping seafarer identification and fitness certificate reference"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "bg-background text-[10px] font-mono",
											children: "Alphanumeric: Char A-Z, 0-9"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
															htmlFor: "field-indos-cand",
															className: "text-xs font-medium text-foreground",
															children: ["INDoS No. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-destructive",
																children: "*"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-mono text-muted-foreground",
															children: "Char A-Z, 0-9"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "field-indos-cand",
														placeholder: "e.g. 12NL8492",
														value: indosNo,
														onChange: (e) => setIndosNo(sanitizeAlphanumeric(e.target.value)),
														className: "h-9 font-mono text-xs uppercase tracking-wide bg-background",
														required: true
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Indian National Database of Seafarers"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
															htmlFor: "field-cdc-cand",
															className: "text-xs font-medium text-foreground",
															children: ["CDC No. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-destructive",
																children: "*"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-mono text-muted-foreground",
															children: "Char A-Z, 0-9"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "field-cdc-cand",
														placeholder: "e.g. MUM 248910",
														value: cdcNo,
														onChange: (e) => setCdcNo(sanitizeAlphanumeric(e.target.value)),
														className: "h-9 font-mono text-xs uppercase tracking-wide bg-background",
														required: true
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Continuous Discharge Certificate"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															htmlFor: "field-cert-cand",
															className: "text-xs font-medium text-foreground",
															children: "Certificate No."
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-mono text-muted-foreground",
															children: "Fitness Ref"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														id: "field-cert-cand",
														placeholder: "e.g. MC-2026-9041",
														value: certificateNo,
														onChange: (e) => setCertificateNo(sanitizeAlphanumeric(e.target.value)),
														className: "h-9 font-mono text-xs uppercase tracking-wide bg-background"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Official Medical Fitness Cert Ref"
													})
												]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between border-t border-border/60 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground",
										children: "Candidate info & credentials completed"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										variant: "secondary",
										className: "gap-1.5 text-xs font-medium",
										onClick: () => setActiveTab("medical"),
										children: ["Next: Medical & Timing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
									})]
								})
							]
						})
					}),
					activeTab === "medical" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/70 bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between border-b border-border/50 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Medical Examination & Clinical Diagnostics"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground",
										children: "Clinic Protocol"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3.5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "field-type",
											className: "text-xs font-medium text-foreground",
											children: ["Type of Medical ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											id: "field-type",
											value: typeOfMedical,
											onChange: (e) => setTypeOfMedical(e.target.value),
											className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs",
											required: true,
											children: MEDICAL_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: t,
												children: t
											}, t))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "field-usg",
											className: "text-xs font-medium text-foreground",
											children: ["USG / XRay Status & Findings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											id: "field-usg",
											value: usgXray,
											onChange: (e) => setUsgXray(e.target.value),
											className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs",
											required: true,
											children: USG_XRAY_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: opt,
												children: opt
											}, opt))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 border-t border-border/60 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2 flex items-center gap-1.5 text-xs font-semibold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-primary" }), "Time . In & Out (Check-in & Departure)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-timein",
												className: "text-xs font-medium text-foreground",
												children: ["Time In ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-timein",
												placeholder: "09:00 AM",
												value: timeIn,
												onChange: (e) => setTimeIn(e.target.value),
												className: "h-9 text-xs",
												required: true
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "field-timeout",
												className: "text-xs font-medium text-foreground",
												children: "Time Out"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-timeout",
												placeholder: "01:30 PM (or In Progress)",
												value: timeOut,
												onChange: (e) => setTimeOut(e.target.value),
												className: "h-9 text-xs"
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between border-t border-border/60 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										variant: "outline",
										className: "gap-1.5 text-xs",
										onClick: () => setActiveTab("candidate"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), "Back to Candidate Details"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										variant: "secondary",
										className: "gap-1.5 text-xs font-medium",
										onClick: () => setActiveTab("payment"),
										children: ["Next: Payment & Invoice", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
									})]
								})
							]
						})
					}),
					activeTab === "payment" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/70 bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between border-b border-border/50 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Payment Status & Financial Settlement"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: paymentStatus === "Paid" ? "default" : "outline",
										className: "text-[10px]",
										children: ["Status: ", paymentStatus]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-status",
												className: "text-xs font-medium text-foreground",
												children: ["Status (Payment - Paid / Own) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "field-status",
												value: paymentStatus,
												onChange: (e) => setPaymentStatus(e.target.value),
												className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs font-semibold",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Paid",
														children: "Paid (Company / Cleared)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Own",
														children: "Own (Candidate Paid)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Pending",
														children: "Pending / Due"
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-amt",
												className: "text-xs font-medium text-foreground",
												children: ["Amount (Amt) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-amt",
												placeholder: "₹4,500.00 or Rs. 4,500",
												value: paymentAmount,
												onChange: (e) => setPaymentAmount(e.target.value),
												className: "h-9 text-xs font-medium",
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												htmlFor: "field-mode",
												className: "text-xs font-medium text-foreground",
												children: ["Payment Mode (Cash / Trans. ID) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "field-mode",
												value: paymentMode,
												onChange: (e) => setPaymentMode(e.target.value),
												className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Cash",
														children: "Cash"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Trans. ID",
														children: "Trans. ID (Online / POS)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "UPI",
														children: "UPI / Digital"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Bank Transfer",
														children: "Bank Transfer"
													})
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid gap-3 sm:grid-cols-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "field-transid",
											className: "text-xs font-medium text-foreground",
											children: "Trans. ID / Transaction Reference"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "field-transid",
											placeholder: "e.g. TXN-50941 or UPI/UTR reference",
											value: transactionId,
											onChange: (e) => setTransactionId(e.target.value),
											className: "h-9 font-mono text-xs"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "field-proof",
											className: "text-xs font-medium text-foreground",
											children: "Payment Proof (Proof / Receipt Memo)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "field-proof",
											placeholder: "e.g. Receipt #441 / Voucher #0912",
											value: paymentProof,
											onChange: (e) => setPaymentProof(e.target.value),
											className: "h-9 text-xs"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-md border border-primary/20 bg-primary/5 p-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-xs font-semibold text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), "Invoice Section"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "Auto-generated invoice link"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "field-inv",
												className: "text-[11px] font-medium text-foreground",
												children: "Invoice No."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "field-inv",
												value: invoiceNo,
												onChange: (e) => setInvoiceNo(e.target.value),
												className: "h-8 font-mono text-xs uppercase"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-foreground",
												children: "Candidate Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate rounded-md border border-border/60 bg-background px-3 py-1.5 text-xs font-semibold text-foreground",
												children: name || "Candidate Name —"
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between border-t border-border/60 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										variant: "outline",
										className: "gap-1.5 text-xs",
										onClick: () => setActiveTab("medical"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), "Back to Medical & Timing"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground",
										children: "All sections completed. Review and click Save Record below."
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between sm:space-x-0 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 text-[11px] text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "* Required seafarer fields" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: () => onOpenChange(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "sm",
								className: "gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "size-4" }), isEditing ? "Save Changes" : "Save Record"]
							})]
						})]
					})
				]
			})]
		})
	});
}
function formatCurrencyINR(val) {
	if (isNaN(val)) return "0.00";
	return new Intl.NumberFormat("en-IN", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(val);
}
/**
* Builds a complete, self-contained HTML page for the salary slip.
* 100% table-based layout — renders identically across all browsers
* and in html2canvas / browser print engine.
*/
function buildSlipHtml(slip) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Payslip_${slip.employeeName.replace(/\s+/g, "_")}_${slip.payPeriod.replace(/\s+/g, "_")}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #000;
    background: #fff;
    padding: 24px;
  }
  /* Outer wrapper */
  table.outer {
    width: 720px;
    border-collapse: collapse;
    border: 2px solid #800000;
    margin: 0 auto;
  }
  table.outer td, table.outer th {
    padding: 0;
    margin: 0;
  }
  /* ── Header row ── */
  .hdr-iso {
    font-size: 11px;
    font-weight: bold;
    line-height: 1.5;
    padding: 6px 12px 4px;
    vertical-align: bottom;
    width: 40%;
  }
  .hdr-dg {
    font-size: 13px;
    font-weight: bold;
    color: #1e3a8a;
    text-align: right;
    padding: 6px 12px 4px;
    vertical-align: bottom;
    width: 60%;
  }
  /* ── Double divider ── */
  .dbl-div {
    border-top: 3px double #000;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  /* ── Address row ── */
  .addr {
    text-align: center;
    font-size: 11px;
    line-height: 1.6;
    padding: 4px 10px 5px;
    border-bottom: 1px solid #000;
  }
  /* ── Title ── */
  .title {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    padding: 7px 10px;
    border-top: 1px solid #800000;
    border-bottom: 2px solid #800000;
  }
  /* ── Summary section ── */
  table.summary {
    width: 100%;
    border-collapse: collapse;
    border-bottom: 2px solid #800000;
  }
  .sum-left {
    width: 58%;
    border-right: 2px solid #800000;
    padding: 10px 14px;
    vertical-align: top;
  }
  .sum-right {
    width: 42%;
    text-align: center;
    vertical-align: middle;
    padding: 10px;
  }
  .sum-title { font-weight: bold; font-size: 13px; margin-bottom: 8px; }
  table.emp-info { border-collapse: collapse; width: 100%; }
  table.emp-info td {
    border: none;
    padding: 2px 0;
    font-size: 12px;
    vertical-align: top;
  }
  .lbl { width: 115px; white-space: nowrap; }
  .net-label { color: #1e3a8a; font-size: 14px; font-weight: bold; margin-bottom: 6px; }
  .net-amt   { font-size: 24px; font-weight: bold; }
  /* ── Data tables (earnings/deductions, netpay) ── */
  table.data {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
    border-bottom: 2px solid #800000;
  }
  table.data th {
    border: 1px solid #800000;
    padding: 5px 8px;
    font-weight: bold;
    text-align: left;
    background: #fff;
  }
  table.data td {
    border: 1px solid #800000;
    padding: 5px 8px;
  }
  .r { text-align: right; }
  .b { font-weight: bold; }
  /* ── Footer ── */
  .words {
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    padding: 7px 12px;
    letter-spacing: 0.03em;
    border-bottom: 1px solid #800000;
  }
  .formula {
    text-align: center;
    font-size: 11px;
    padding: 5px 12px 6px;
  }
  @media print {
    body { padding: 0; }
    @page { margin: 12mm; size: A4; }
  }
</style>
</head>
<body>

<table class="outer">
  <!-- ── HEADER ── -->
  <tr>
    <td class="hdr-iso">ISO 9001:2015<br>CERTIFIED CENTRE</td>
    <td class="hdr-dg">THE D.G. SHIPPING GOVT. OF INDIA APPROVED DOCTORS</td>
  </tr>

  <!-- ── DOUBLE DIVIDER ── -->
  <tr><td colspan="2" class="dbl-div"></td></tr>

  <!-- ── ADDRESS ── -->
  <tr>
    <td colspan="2" class="addr">
      Shop No. 21, Punit Tower 1, Opp. YAK Marine, MTNL Lane, Sec-11, CBD Belapur, Navi Mumbai - 400 614<br>
      Tel: 022-2756 0304 &nbsp;|&nbsp; Email : medical@sailorsmedicalclinic.com &nbsp;|&nbsp; Web: www.sailorsmedicalclinic.com
    </td>
  </tr>

  <!-- ── TITLE ── -->
  <tr>
    <td colspan="2" class="title">Payslip for the Month of ${slip.payPeriod}</td>
  </tr>

  <!-- ── SUMMARY ── -->
  <tr>
    <td colspan="2" style="padding:0">
      <table class="summary">
        <tr>
          <td class="sum-left">
            <div class="sum-title">Employee Pay Summary</div>
            <table class="emp-info">
              <tr>
                <td class="lbl">Employee Name</td>
                <td>: <strong>${slip.employeeName}</strong></td>
              </tr>
              <tr>
                <td class="lbl">Designation</td>
                <td>: ${slip.designation}</td>
              </tr>
              <tr><td colspan="2" style="height:7px"></td></tr>
              <tr>
                <td class="lbl">Pay Period</td>
                <td>: ${slip.payPeriod}</td>
              </tr>
              <tr>
                <td class="lbl">Pay Date</td>
                <td>: ${slip.payDate}</td>
              </tr>
            </table>
          </td>
          <td class="sum-right">
            <div class="net-label">Employee Net Pay</div>
            <div class="net-amt">&#8377;${formatCurrencyINR(slip.netPay)}</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── EARNINGS & DEDUCTIONS ── -->
  <tr>
    <td colspan="2" style="padding:0">
      <table class="data">
        <thead>
          <tr>
            <th style="width:30%">EARNINGS</th>
            <th style="width:20%">AMOUNT</th>
            <th style="width:28%">DEDUCTIONS</th>
            <th style="width:22%">DAYS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GROSS SALARY</td>
            <td class="r">&#8377;${formatCurrencyINR(slip.grossSalary)}</td>
            <td>TOTAL LEAVES</td>
            <td>${slip.totalLeaves || "&mdash;"}</td>
          </tr>
          <tr>
            <td>Travelling Allowance</td>
            <td class="r">&#8377;${formatCurrencyINR(slip.travellingAllowance)}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="b">Gross Earnings</td>
            <td class="r b">&#8377;${formatCurrencyINR(slip.grossEarnings)}</td>
            <td>Deduction</td>
            <td>${slip.deductionAmount > 0 ? slip.deductionAmount : "0"}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>

  <!-- ── NETPAY ── -->
  <tr>
    <td colspan="2" style="padding:0">
      <table class="data">
        <thead>
          <tr>
            <th style="width:75%">NETPAY</th>
            <th style="width:25%;text-align:right;padding-right:10px">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gross Earnings</td>
            <td class="r" style="padding-right:10px">&#8377;${formatCurrencyINR(slip.grossEarnings)}</td>
          </tr>
          <tr>
            <td>Total Deductions</td>
            <td class="r" style="padding-right:10px">&#8377;${formatCurrencyINR(slip.totalDeductions)}</td>
          </tr>
          <tr>
            <td class="b">Total Net Payable</td>
            <td class="r b" style="padding-right:10px">&#8377;${formatCurrencyINR(slip.netPay)}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>

  <!-- ── AMOUNT IN WORDS ── -->
  <tr>
    <td colspan="2" class="words">${slip.amountInWords}</td>
  </tr>

  <!-- ── FORMULA ── -->
  <tr>
    <td colspan="2" class="formula">
      ${slip.formulaNote || "**Total Net Payable = Gross Earnings + T.A. - Total Deductions"}
    </td>
  </tr>
</table>

</body>
</html>`;
}
/**
* Prints the salary slip using a hidden iframe injected into the current page.
* No new window / popup is opened, so browser popup blockers are never triggered.
* The browser's native print dialog appears (user selects "Save as PDF").
*/
function printSlipInPage(slip) {
	const name = slip.employeeName.replace(/\s+/g, "_");
	const period = slip.payPeriod.replace(/\s+/g, "_");
	const html = buildSlipHtml(slip).replace(`<title>Payslip_${name}_${period}</title>`, `<title>Payslip_${name}_${period}</title>`);
	const iframe = document.createElement("iframe");
	iframe.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:210mm;height:297mm;border:none;visibility:hidden;";
	document.body.appendChild(iframe);
	const iframeDoc = iframe.contentDocument;
	iframeDoc.open();
	iframeDoc.write(html);
	iframeDoc.close();
	setTimeout(() => {
		iframe.contentWindow.focus();
		iframe.contentWindow.print();
		setTimeout(() => {
			if (document.body.contains(iframe)) document.body.removeChild(iframe);
		}, 2e3);
	}, 600);
}
function SalarySlipDocument({ slip, onEdit, onClose, showActions = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "payslip-wrapper w-full max-w-4xl mx-auto text-black",
		children: [showActions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "print:hidden mb-3 flex flex-wrap items-center justify-between gap-2.5 rounded-lg border border-border bg-card p-3 shadow-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5 text-xs font-semibold text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 text-primary" }),
					"Salary Slip: ",
					slip.employeeName,
					" (",
					slip.payPeriod,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						onClick: () => printSlipInPage(slip),
						className: "h-8 gap-1.5 text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs",
						title: "Prints salary slip → choose 'Save as PDF' in the print dialog",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Download / Print PDF"]
					}),
					onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => onEdit(slip),
						className: "h-8 gap-1.5 text-xs font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), "Edit"]
					}),
					onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: onClose,
						className: "size-8 p-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "payslip-sheet mx-auto w-full max-w-[780px] bg-white text-black p-4 sm:p-6 shadow-sm border border-[#800000] print:border-[#800000] print:p-0 print:shadow-none font-sans",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between px-2 pt-1 pb-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left text-[11px] font-bold leading-tight text-black",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "ISO 9001:2015" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "CERTIFIED CENTRE" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-right text-[13px] font-bold tracking-wide text-[#1e3a8a] uppercase",
						children: "THE D.G. SHIPPING GOVT. OF INDIA APPROVED DOCTORS"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 border-t border-b border-black py-[0.5px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center text-[11px] leading-snug px-2 text-black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Shop No. 21, Punit Tower 1, Opp. YAK Marine, MTNL Lane, Sec-11, CBD Belapur, Navi Mumbai - 400 614" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5",
						children: "Tel: 022-2756 0304 | Email : medical@sailorsmedicalclinic.com | Web: www.sailorsmedicalclinic.com"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 border-t-[1.5px] border-b-[1.5px] border-[#800000] py-1 text-center font-bold text-xs sm:text-sm text-black",
					children: ["Payslip for the Month of ", slip.payPeriod]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-12 border-b-[1.5px] border-[#800000]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-7 border-b sm:border-b-0 sm:border-r-[1.5px] border-[#800000] p-2.5 sm:p-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-bold text-[13px] text-black mb-1.5",
							children: "Employee Pay Summary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
							className: "w-full text-xs border-collapse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "w-[115px] py-0.5 align-top",
									children: "Employee Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "font-bold uppercase py-0.5",
									children: [": ", slip.employeeName]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-0.5 align-top",
									children: "Designation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "uppercase py-0.5",
									children: [": ", slip.designation]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 2,
									className: "h-2"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-0.5",
									children: "Pay Period"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "uppercase py-0.5",
									children: [": ", slip.payPeriod]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-0.5",
									children: "Pay Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-0.5",
									children: [": ", slip.payDate]
								})] })
							] })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-5 flex flex-col items-center justify-center p-3 text-center bg-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[14px] font-medium text-[#1e3a8a] mb-0.5",
							children: "Employee Net Pay"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xl sm:text-2xl font-bold text-black tracking-tight",
							children: ["₹", formatCurrencyINR(slip.netPay)]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full border-collapse text-xs text-black border-b-[1.5px] border-[#800000]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b-[1.5px] border-[#800000]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border border-[#800000] p-1.5 text-left font-bold uppercase w-[30%]",
								children: "EARNINGS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border border-[#800000] p-1.5 text-left font-bold uppercase w-[20%]",
								children: "AMOUNT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border border-[#800000] p-1.5 text-left font-bold uppercase w-[28%]",
								children: "DEDUCTIONS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "border border-[#800000] p-1.5 text-left font-bold uppercase w-[22%]",
								children: "DAYS"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-[#800000] p-1.5 font-medium uppercase",
								children: "GROSS SALARY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "border border-[#800000] p-1.5 font-medium",
								children: ["₹", formatCurrencyINR(slip.grossSalary)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-[#800000] p-1.5 font-medium uppercase",
								children: "TOTAL LEAVES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-[#800000] p-1.5 font-medium uppercase",
								children: slip.totalLeaves || "—"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-[#800000] p-1.5",
								children: "Travelling Allowance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "border border-[#800000] p-1.5",
								children: ["₹", formatCurrencyINR(slip.travellingAllowance)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "border border-[#800000] p-1.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "border border-[#800000] p-1.5" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-[#800000] p-1.5 font-bold",
								children: "Gross Earnings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "border border-[#800000] p-1.5 font-bold",
								children: ["₹", formatCurrencyINR(slip.grossEarnings)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-[#800000] p-1.5",
								children: "Deduction"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-[#800000] p-1.5",
								children: slip.deductionAmount > 0 ? slip.deductionAmount : "0"
							})
						] })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full border-collapse text-xs text-black border-b-[1.5px] border-[#800000]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b-[1.5px] border-[#800000]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "border border-[#800000] p-1.5 text-left font-bold uppercase w-[75%]",
							children: "NETPAY"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "border border-[#800000] p-1.5 text-right font-bold uppercase w-[25%] pr-3",
							children: "AMOUNT"
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border border-[#800000] p-1.5",
							children: "Gross Earnings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "border border-[#800000] p-1.5 text-right pr-3",
							children: ["₹", formatCurrencyINR(slip.grossEarnings)]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border border-[#800000] p-1.5",
							children: "Total Deductions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "border border-[#800000] p-1.5 text-right pr-3",
							children: ["₹", formatCurrencyINR(slip.totalDeductions)]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border border-[#800000] p-1.5 font-bold",
							children: "Total Net Payable"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "border border-[#800000] p-1.5 text-right pr-3 font-bold",
							children: ["₹", formatCurrencyINR(slip.netPay)]
						})] })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-[#800000] py-1.5 px-2 text-center text-xs font-bold uppercase tracking-wide text-black",
					children: slip.amountInWords
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-1 px-2 text-center text-[11px] font-medium text-black",
					children: slip.formulaNote || "**Total Net Payable = Gross Earnings + T.A. - Total Deductions"
				})
			]
		})]
	});
}
var STORAGE_KEY = "marine_clinic_salary_slips_v1";
function SalarySlipModal({ open, onOpenChange, staffList, selectedStaffForSlip, onNotice }) {
	const [slips, setSlips] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed) && parsed.length > 0) return parsed;
			}
		} catch (e) {
			console.warn("Could not read salary slips from storage:", e);
		}
		return initialSalarySlips;
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(slips));
		} catch (e) {
			console.warn("Could not persist salary slips:", e);
		}
	}, [slips]);
	const [activeTab, setActiveTab] = (0, import_react.useState)("archive");
	const [selectedMonth, setSelectedMonth] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [currentSlip, setCurrentSlip] = (0, import_react.useState)(null);
	const [formEmployeeId, setFormEmployeeId] = (0, import_react.useState)("");
	const [formEmployeeName, setFormEmployeeName] = (0, import_react.useState)("YUKTA JADHAV");
	const [formDesignation, setFormDesignation] = (0, import_react.useState)("LAB TECHNICIAN");
	const [formPayPeriod, setFormPayPeriod] = (0, import_react.useState)("SEP 2026");
	const [formPayDate, setFormPayDate] = (0, import_react.useState)("05-10-2026");
	const [formGrossSalary, setFormGrossSalary] = (0, import_react.useState)(17e3);
	const [formTravellingAllowance, setFormTravellingAllowance] = (0, import_react.useState)(350);
	const [formGrossEarnings, setFormGrossEarnings] = (0, import_react.useState)(17350);
	const [formTotalLeaves, setFormTotalLeaves] = (0, import_react.useState)("2 DAY & HALF DAY");
	const [formDeductionAmount, setFormDeductionAmount] = (0, import_react.useState)(1416);
	const [formTotalDeductions, setFormTotalDeductions] = (0, import_react.useState)(1416);
	const [formNetPay, setFormNetPay] = (0, import_react.useState)(15934);
	const [formAmountInWords, setFormAmountInWords] = (0, import_react.useState)("FIFTEEN THOUSAND NINE HUNDRED THIRTYFOUR RUPEES ONLY");
	const [formFormulaNote, setFormFormulaNote] = (0, import_react.useState)("**Total Net Payable = Gross Earnings+ T.A.- Total Deductions");
	const [formPhone, setFormPhone] = (0, import_react.useState)("+91 98205 61402");
	const [formEmail, setFormEmail] = (0, import_react.useState)("yukta.j@sailorsmedical.com");
	const [editingSlipId, setEditingSlipId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open && selectedStaffForSlip) handleOpenCreateForStaff(selectedStaffForSlip);
	}, [open, selectedStaffForSlip]);
	const availableMonths = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		slips.forEach((s) => {
			if (s.payPeriod) set.add(s.payPeriod.trim());
		});
		set.add("SEP 2026");
		set.add("OCT 2026");
		set.add("AUG 2026");
		return Array.from(set);
	}, [slips]);
	const filteredSlips = (0, import_react.useMemo)(() => {
		const q = search.trim().toLowerCase();
		return slips.filter((s) => {
			const matchMonth = selectedMonth === "all" || s.payPeriod.toLowerCase() === selectedMonth.toLowerCase();
			const matchQuery = !q || `${s.employeeName} ${s.designation} ${s.employeeId} ${s.payPeriod}`.toLowerCase().includes(q);
			return matchMonth && matchQuery;
		});
	}, [
		slips,
		selectedMonth,
		search
	]);
	const handleGrossSalaryChange = (val) => {
		setFormGrossSalary(val);
		const newGross = val + formTravellingAllowance;
		setFormGrossEarnings(newGross);
		const newNet = newGross - formTotalDeductions;
		setFormNetPay(newNet);
		setFormAmountInWords(convertNumberToWordsIndian(newNet));
	};
	const handleTravellingAllowanceChange = (val) => {
		setFormTravellingAllowance(val);
		const newGross = formGrossSalary + val;
		setFormGrossEarnings(newGross);
		const newNet = newGross - formTotalDeductions;
		setFormNetPay(newNet);
		setFormAmountInWords(convertNumberToWordsIndian(newNet));
	};
	const handleDeductionChange = (val) => {
		setFormDeductionAmount(val);
		setFormTotalDeductions(val);
		const newNet = formGrossEarnings - val;
		setFormNetPay(newNet);
		setFormAmountInWords(convertNumberToWordsIndian(newNet));
	};
	const handleSelectStaff = (empId) => {
		setFormEmployeeId(empId);
		const found = staffList.find((s) => s.id === empId);
		if (found) {
			setFormEmployeeName(found.name.toUpperCase());
			setFormDesignation(found.role.toUpperCase());
			setFormPhone(found.phone || "+91 ");
			setFormEmail(found.email || "");
			const basic = found.basicSalary || 17e3;
			const ta = found.allowances || 350;
			const ded = found.deductions || 0;
			const gross = basic + ta;
			const net = gross - ded;
			setFormGrossSalary(basic);
			setFormTravellingAllowance(ta);
			setFormGrossEarnings(gross);
			setFormDeductionAmount(ded);
			setFormTotalDeductions(ded);
			setFormNetPay(net);
			setFormAmountInWords(convertNumberToWordsIndian(net));
		}
	};
	const handleOpenCreateForStaff = (staff) => {
		setEditingSlipId(null);
		setFormEmployeeId(staff.id);
		setFormEmployeeName(staff.name.toUpperCase());
		setFormDesignation(staff.role.toUpperCase());
		setFormPhone(staff.phone || "");
		setFormEmail(staff.email || "");
		setFormPayPeriod("SEP 2026");
		setFormPayDate("05-10-2026");
		const basic = staff.basicSalary || 17e3;
		const ta = staff.allowances || 350;
		const ded = staff.deductions || 1416;
		const gross = basic + ta;
		const net = gross - ded;
		setFormGrossSalary(basic);
		setFormTravellingAllowance(ta);
		setFormGrossEarnings(gross);
		setFormTotalLeaves("2 DAY & HALF DAY");
		setFormDeductionAmount(ded);
		setFormTotalDeductions(ded);
		setFormNetPay(net);
		setFormAmountInWords(convertNumberToWordsIndian(net));
		setFormFormulaNote("**Total Net Payable = Gross Earnings+ T.A.- Total Deductions");
		setActiveTab("form");
	};
	const handleOpenCreateNew = () => {
		setEditingSlipId(null);
		setFormEmployeeId("");
		setFormEmployeeName("YUKTA JADHAV");
		setFormDesignation("LAB TECHNICIAN");
		setFormPayPeriod("SEP 2026");
		setFormPayDate("05-10-2026");
		setFormGrossSalary(17e3);
		setFormTravellingAllowance(350);
		setFormGrossEarnings(17350);
		setFormTotalLeaves("2 DAY & HALF DAY");
		setFormDeductionAmount(1416);
		setFormTotalDeductions(1416);
		setFormNetPay(15934);
		setFormAmountInWords("FIFTEEN THOUSAND NINE HUNDRED THIRTYFOUR RUPEES ONLY");
		setFormFormulaNote("**Total Net Payable = Gross Earnings+ T.A.- Total Deductions");
		setFormPhone("+91 98205 61402");
		setFormEmail("yukta.j@sailorsmedical.com");
		setActiveTab("form");
	};
	const handleEditSlip = (slip) => {
		setEditingSlipId(slip.id);
		setFormEmployeeId(slip.employeeId);
		setFormEmployeeName(slip.employeeName);
		setFormDesignation(slip.designation);
		setFormPayPeriod(slip.payPeriod);
		setFormPayDate(slip.payDate);
		setFormGrossSalary(slip.grossSalary);
		setFormTravellingAllowance(slip.travellingAllowance);
		setFormGrossEarnings(slip.grossEarnings);
		setFormTotalLeaves(slip.totalLeaves);
		setFormDeductionAmount(slip.deductionAmount);
		setFormTotalDeductions(slip.totalDeductions);
		setFormNetPay(slip.netPay);
		setFormAmountInWords(slip.amountInWords);
		setFormFormulaNote(slip.formulaNote || "**Total Net Payable = Gross Earnings+ T.A.- Total Deductions");
		setFormPhone(slip.employeePhone || "");
		setFormEmail(slip.employeeEmail || "");
		setActiveTab("form");
	};
	const handleSaveSlip = (e) => {
		e.preventDefault();
		const id = editingSlipId || `SLIP-${Date.now().toString().slice(-6)}`;
		const [monthPart, yearPart] = formPayPeriod.split(" ");
		const month = monthPart ? monthPart.toUpperCase() : "SEP";
		const year = Number(yearPart) || 2026;
		const newSlip = {
			id,
			employeeId: formEmployeeId || `EMP-${Date.now().toString().slice(-4)}`,
			employeeName: formEmployeeName.trim().toUpperCase() || "EMPLOYEE",
			designation: formDesignation.trim().toUpperCase() || "STAFF",
			payPeriod: formPayPeriod.trim().toUpperCase() || "SEP 2026",
			payDate: formPayDate.trim() || "05-10-2026",
			month,
			year,
			grossSalary: Number(formGrossSalary) || 0,
			travellingAllowance: Number(formTravellingAllowance) || 0,
			grossEarnings: Number(formGrossEarnings) || 0,
			totalLeaves: formTotalLeaves.trim() || "None",
			deductionAmount: Number(formDeductionAmount) || 0,
			totalDeductions: Number(formTotalDeductions) || 0,
			netPay: Number(formNetPay) || 0,
			amountInWords: formAmountInWords.trim().toUpperCase() || convertNumberToWordsIndian(Number(formNetPay) || 0),
			formulaNote: formFormulaNote.trim() || void 0,
			employeePhone: formPhone.trim() || void 0,
			employeeEmail: formEmail.trim() || void 0,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (editingSlipId) {
			setSlips((prev) => prev.map((s) => s.id === editingSlipId ? newSlip : s));
			onNotice?.(`Updated salary slip for ${newSlip.employeeName}`);
		} else {
			setSlips((prev) => [newSlip, ...prev]);
			onNotice?.(`Generated new salary slip for ${newSlip.employeeName} (${newSlip.payPeriod})`);
		}
		setCurrentSlip(newSlip);
		setActiveTab("view");
	};
	const handleDeleteSlip = (id, name) => {
		if (confirm(`Are you sure you want to delete the salary slip for ${name}?`)) {
			setSlips((prev) => prev.filter((s) => s.id !== id));
			if (currentSlip?.id === id) {
				setCurrentSlip(null);
				setActiveTab("archive");
			}
			onNotice?.(`Deleted salary slip for ${name}`);
		}
	};
	const handleExportMonthwiseCsv = () => {
		const listToExport = filteredSlips;
		if (listToExport.length === 0) {
			alert("No salary slips found to export for the selected filter.");
			return;
		}
		const headers = [
			"Slip ID",
			"Employee ID",
			"Employee Name",
			"Designation",
			"Pay Period",
			"Pay Date",
			"Gross Salary (INR)",
			"Travelling Allowance (INR)",
			"Gross Earnings (INR)",
			"Total Leaves",
			"Deduction Amount (INR)",
			"Total Deductions (INR)",
			"Total Net Payable (INR)",
			"Amount in Words",
			"Phone"
		];
		const rows = listToExport.map((s) => [
			`"${s.id}"`,
			`"${s.employeeId}"`,
			`"${s.employeeName}"`,
			`"${s.designation}"`,
			`"${s.payPeriod}"`,
			`"${s.payDate}"`,
			s.grossSalary,
			s.travellingAllowance,
			s.grossEarnings,
			`"${s.totalLeaves}"`,
			s.deductionAmount,
			s.totalDeductions,
			s.netPay,
			`"${s.amountInWords}"`,
			`"${s.employeePhone || ""}"`
		]);
		const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		const periodLabel = selectedMonth === "all" ? "All_Months" : selectedMonth.replace(/\s+/g, "_");
		link.setAttribute("download", `Salary_Slips_Report_${periodLabel}.csv`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		onNotice?.(`Exported ${listToExport.length} salary slips to CSV`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[94vh] w-full max-w-5xl overflow-y-auto p-0 sm:rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "border-b border-border bg-muted/40 p-5 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-lg bg-emerald-600 text-white shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-lg font-semibold tracking-tight text-foreground",
									children: "Staff Salary Slips & Monthly Payroll"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-[10px] font-mono border-emerald-500/40 text-emerald-600 dark:text-emerald-400",
									children: "D.G. Shipping Approved"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: "Manual entry salary slip generator, monthwise archive & PDF download"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1.5 bg-background border border-border p-1 rounded-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveTab("archive"),
									className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "archive" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }),
										"Monthwise Slips (",
										slips.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleOpenCreateNew,
									className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "form" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), editingSlipId ? "Edit Slip" : "Generate Slip"]
								}),
								currentSlip && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveTab("view"),
									className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "view" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), "View & Print"]
								})
							]
						})]
					})
				}),
				activeTab === "archive" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 sm:p-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-3.5 sm:flex-row sm:items-center sm:justify-between shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-foreground",
										children: "Pay Month:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										"aria-label": "Filter salary slips by month",
										value: selectedMonth,
										onChange: (e) => setSelectedMonth(e.target.value),
										className: "h-9 rounded-md border border-input bg-background px-3 text-xs font-semibold text-foreground focus:outline-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: "all",
											children: [
												"All Pay Periods (",
												slips.length,
												")"
											]
										}), availableMonths.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: m,
											children: [
												m,
												" (",
												slips.filter((s) => s.payPeriod.toLowerCase() === m.toLowerCase()).length,
												")"
											]
										}, m))]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Search employee name or role...",
										value: search,
										onChange: (e) => setSearch(e.target.value),
										className: "h-9 pl-8 text-xs w-[180px] sm:w-[220px]"
									}),
									search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setSearch(""),
										className: "absolute right-2 top-2.5 text-muted-foreground hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: handleExportMonthwiseCsv,
								className: "h-9 gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 border-emerald-600/30 hover:bg-emerald-50 dark:hover:bg-emerald-950/30",
								title: "Download monthwise salary slips as CSV spreadsheet",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-3.5" }), "Export Month (.csv)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								onClick: handleOpenCreateNew,
								className: "h-9 gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), "Generate Salary Slip"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg border border-border overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full border-collapse text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border bg-muted/40 text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 text-left font-bold uppercase w-[220px]",
											children: "Employee"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 text-left font-bold uppercase",
											children: "Pay Period"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 text-left font-bold uppercase",
											children: "Gross Earnings"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 text-left font-bold uppercase",
											children: "Leaves & Deductions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 text-left font-bold uppercase",
											children: "Net Payable"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 text-right font-bold uppercase pr-4",
											children: "Actions"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-border",
									children: filteredSlips.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										colSpan: 6,
										className: "py-12 text-center text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "mx-auto size-8 opacity-40 mb-2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: "No salary slips found for this period"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "outline",
												onClick: handleOpenCreateNew,
												className: "mt-3 gap-1.5 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), " Generate First Slip"]
											})
										]
									}) }) : filteredSlips.map((slip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "hover:bg-muted/30 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-bold text-foreground",
													children: slip.employeeName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slip.designation }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[10px]",
															children: slip.employeeId
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "font-bold text-[11px] bg-background",
													children: slip.payPeriod
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] text-muted-foreground mt-0.5",
													children: ["Date: ", slip.payDate]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-bold text-foreground",
													children: ["₹", formatCurrencyINR(slip.grossEarnings)]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] text-muted-foreground mt-0.5",
													children: [
														"Salary: ₹",
														formatCurrencyINR(slip.grossSalary),
														" + T.A: ₹",
														formatCurrencyINR(slip.travellingAllowance)
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-destructive font-medium",
													children: ["-₹", formatCurrencyINR(slip.totalDeductions)]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] text-muted-foreground mt-0.5",
													children: ["Leaves: ", slip.totalLeaves]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-bold text-emerald-600 dark:text-emerald-400 text-sm",
													children: ["₹", formatCurrencyINR(slip.netPay)]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] text-muted-foreground truncate max-w-[140px]",
													title: slip.amountInWords,
													children: slip.amountInWords
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3 text-right pr-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-end gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "outline",
															className: "h-7 px-2 text-xs gap-1 border-primary/30 text-primary hover:bg-primary/10",
															onClick: () => {
																setCurrentSlip(slip);
																setActiveTab("view");
															},
															title: "View & Print Salary Slip",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3" }), "View"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															size: "sm",
															variant: "ghost",
															className: "size-7 p-0 text-muted-foreground hover:text-foreground",
															onClick: () => handleEditSlip(slip),
															title: "Edit Slip",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															size: "sm",
															variant: "ghost",
															className: "size-7 p-0 text-destructive/80 hover:text-destructive hover:bg-destructive/10",
															onClick: () => handleDeleteSlip(slip.id, slip.employeeName),
															title: "Delete Slip",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
														})
													]
												})
											})
										]
									}, slip.id))
								})]
							})
						})
					})]
				}),
				activeTab === "form" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSaveSlip,
					className: "p-5 sm:p-6 space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border/70 bg-card p-4 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-bold uppercase tracking-wider text-foreground",
										children: editingSlipId ? "Edit Salary Slip Particulars" : "Generate Monthly Salary Slip (Manual Entry)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground font-mono",
									children: "All fields manually editable • Format identical to official payslip"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-3 bg-muted/20 p-3 rounded-lg border border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-foreground",
										children: "Autofill from Staff Directory (Optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: formEmployeeId,
										onChange: (e) => handleSelectStaff(e.target.value),
										className: "h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "-- Choose employee to autofill or type manually below --"
										}), staffList.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: s.id,
											children: [
												s.name,
												" (",
												s.role,
												" - ",
												s.id,
												")"
											]
										}, s.id))]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-foreground",
										children: "Employee Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "e.g. +91 98205 61402",
										value: formPhone,
										onChange: (e) => setFormPhone(e.target.value),
										className: "h-9 text-xs"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-medium text-foreground",
											children: ["Employee Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. YUKTA JADHAV",
											value: formEmployeeName,
											onChange: (e) => setFormEmployeeName(e.target.value.toUpperCase()),
											className: "h-9 text-xs font-bold uppercase",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-medium text-foreground",
											children: ["Designation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. LAB TECHNICIAN",
											value: formDesignation,
											onChange: (e) => setFormDesignation(e.target.value.toUpperCase()),
											className: "h-9 text-xs uppercase",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-medium text-foreground",
												children: ["Pay Period ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												placeholder: "e.g. SEP 2026",
												value: formPayPeriod,
												onChange: (e) => setFormPayPeriod(e.target.value.toUpperCase()),
												className: "h-9 text-xs font-semibold uppercase",
												required: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Month and Year (e.g. SEP 2026)"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-medium text-foreground",
												children: ["Pay Date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												placeholder: "e.g. 05-10-2026",
												value: formPayDate,
												onChange: (e) => setFormPayDate(e.target.value),
												className: "h-9 text-xs",
												required: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Disbursement date (DD-MM-YYYY)"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border/60 pt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5",
										children: "Earnings & Deductions Particulars"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-xs font-medium text-foreground",
													children: ["Gross Salary (₹) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													step: "any",
													placeholder: "17000",
													value: formGrossSalary,
													onChange: (e) => handleGrossSalaryChange(Number(e.target.value) || 0),
													className: "h-9 text-xs font-semibold",
													required: true
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-medium text-foreground",
													children: "Travelling Allowance (T.A.) (₹)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													step: "any",
													placeholder: "350",
													value: formTravellingAllowance,
													onChange: (e) => handleTravellingAllowanceChange(Number(e.target.value) || 0),
													className: "h-9 text-xs"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-medium text-foreground",
													children: "Total Leaves (Text)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "e.g. 2 DAY & HALF DAY",
													value: formTotalLeaves,
													onChange: (e) => setFormTotalLeaves(e.target.value.toUpperCase()),
													className: "h-9 text-xs uppercase"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-medium text-foreground",
													children: "Leave Deductions (₹)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													step: "any",
													placeholder: "1416",
													value: formDeductionAmount,
													onChange: (e) => handleDeductionChange(Number(e.target.value) || 0),
													className: "h-9 text-xs"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 grid gap-3 sm:grid-cols-3 bg-primary/5 p-3 rounded-lg border border-primary/20",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-medium text-muted-foreground",
													children: "Gross Earnings (Sum):"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													step: "any",
													value: formGrossEarnings,
													onChange: (e) => setFormGrossEarnings(Number(e.target.value) || 0),
													className: "h-9 text-xs font-bold bg-background"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-medium text-muted-foreground",
													children: "Total Deductions:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													step: "any",
													value: formTotalDeductions,
													onChange: (e) => setFormTotalDeductions(Number(e.target.value) || 0),
													className: "h-9 text-xs font-bold bg-background text-destructive"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-bold text-primary",
													children: "Total Net Payable:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													step: "any",
													value: formNetPay,
													onChange: (e) => {
														const val = Number(e.target.value) || 0;
														setFormNetPay(val);
														setFormAmountInWords(convertNumberToWordsIndian(val));
													},
													className: "h-9 text-sm font-bold bg-background text-emerald-600 dark:text-emerald-400"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-medium text-foreground",
												children: "Amount in Words (Capitalized)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: formAmountInWords,
												onChange: (e) => setFormAmountInWords(e.target.value.toUpperCase()),
												className: "h-9 text-xs uppercase font-medium"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-medium text-foreground",
												children: "Formula Footer Note"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: formFormulaNote,
												onChange: (e) => setFormFormulaNote(e.target.value),
												className: "h-9 text-xs"
											})]
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => setActiveTab("archive"),
							children: "Back to Slips List"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "sm",
								className: "gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "size-4" }), editingSlipId ? "Update & Preview Slip" : "Save & Generate Slip"]
							})
						})]
					})]
				}),
				activeTab === "view" && currentSlip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-5 sm:p-6 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalarySlipDocument, {
						slip: currentSlip,
						onEdit: handleEditSlip,
						onClose: () => setActiveTab("archive")
					})
				})
			]
		})
	});
}
function StaffManagementModule({ onNotice }) {
	const [staffList, setStaffList] = (0, import_react.useState)(initialStaffMembers);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [departmentFilter, setDepartmentFilter] = (0, import_react.useState)("all");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [viewModalOpen, setViewModalOpen] = (0, import_react.useState)(false);
	const [selectedStaff, setSelectedStaff] = (0, import_react.useState)(null);
	const [formModalOpen, setFormModalOpen] = (0, import_react.useState)(false);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({});
	const [resignationModalOpen, setResignationModalOpen] = (0, import_react.useState)(false);
	const [resignationStaff, setResignationStaff] = (0, import_react.useState)(null);
	const [resignationDate, setResignationDate] = (0, import_react.useState)("");
	const [relievingDate, setRelievingDate] = (0, import_react.useState)("");
	const [resignationReason, setResignationReason] = (0, import_react.useState)("");
	const [addDocModalOpen, setAddDocModalOpen] = (0, import_react.useState)(false);
	const [newDocName, setNewDocName] = (0, import_react.useState)("");
	const [newDocType, setNewDocType] = (0, import_react.useState)("Medical License & DG Approval");
	const [newDocNo, setNewDocNo] = (0, import_react.useState)("");
	const [newDocExpiry, setNewDocExpiry] = (0, import_react.useState)("");
	const [docViewerOpen, setDocViewerOpen] = (0, import_react.useState)(false);
	const [viewingDoc, setViewingDoc] = (0, import_react.useState)(null);
	const [salarySlipModalOpen, setSalarySlipModalOpen] = (0, import_react.useState)(false);
	const [selectedStaffForSlip, setSelectedStaffForSlip] = (0, import_react.useState)(null);
	const [newDocFileData, setNewDocFileData] = (0, import_react.useState)("");
	const [newDocFileName, setNewDocFileName] = (0, import_react.useState)("");
	const [newDocFileType, setNewDocFileType] = (0, import_react.useState)("");
	const [newDocFileSize, setNewDocFileSize] = (0, import_react.useState)(0);
	const handleDocFileSelect = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 8388608) {
			onNotice("File size exceeds 8MB limit. Please choose a smaller file.");
			return;
		}
		setNewDocFileName(file.name);
		setNewDocFileType(file.type);
		setNewDocFileSize(Math.round(file.size / 1024));
		if (!newDocName.trim()) {
			const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
			setNewDocName(cleanName);
		}
		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result;
			setNewDocFileData(result);
		};
		reader.readAsDataURL(file);
	};
	const handleOpenDocument = (doc) => {
		setViewingDoc(doc);
		setDocViewerOpen(true);
	};
	const loadStaff = (0, import_react.useCallback)(async () => {
		setIsLoading(true);
		try {
			const data = await listStaffServer();
			if (data && data.length > 0) setStaffList(data);
		} catch (err) {
			console.warn("Could not load staff from MongoDB, using baseline:", err);
		} finally {
			setIsLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadStaff();
	}, [loadStaff]);
	const metrics = (0, import_react.useMemo)(() => {
		return {
			total: staffList.length,
			active: staffList.filter((s) => s.status.includes("Active")).length,
			doctors: staffList.filter((s) => s.department === "Medical & DG Examinations" || s.role.toLowerCase().includes("dr")).length,
			resigned: staffList.filter((s) => s.status === "Resigned").length
		};
	}, [staffList]);
	const filteredStaff = (0, import_react.useMemo)(() => {
		const q = search.trim().toLowerCase();
		return staffList.filter((s) => {
			const matchesSearch = !q || `${s.id} ${s.name} ${s.role} ${s.department} ${s.phone} ${s.email}`.toLowerCase().includes(q);
			const matchesDept = departmentFilter === "all" || s.department === departmentFilter;
			const matchesStatus = statusFilter === "all" || statusFilter === "active" && s.status.includes("Active") || statusFilter === "resigned" && s.status === "Resigned" || statusFilter === "leave" && s.status === "On leave";
			return matchesSearch && matchesDept && matchesStatus;
		});
	}, [
		staffList,
		search,
		departmentFilter,
		statusFilter
	]);
	const handleOpenAdd = () => {
		const nextNum = staffList.length + 1;
		const nextId = `SMC-EMP-${String(nextNum).padStart(3, "0")}`;
		setFormData({
			id: nextId,
			name: "",
			initials: "",
			gender: "Male",
			dob: "1990-01-01",
			phone: "+91 ",
			email: "",
			address: "CBD Belapur, Navi Mumbai",
			emergencyContactName: "",
			emergencyContactPhone: "",
			role: "",
			department: "Medical & DG Examinations",
			employmentType: "Full-time",
			status: "Active / On duty",
			joiningDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
			basicSalary: 45e3,
			allowances: 8e3,
			deductions: 2e3,
			netSalary: 51e3,
			payFrequency: "Monthly",
			panNo: "",
			bankName: "",
			bankAccountNo: "",
			ifscCode: "",
			documents: []
		});
		setIsEditing(false);
		setFormModalOpen(true);
	};
	const handleOpenEdit = (staff) => {
		setFormData({ ...staff });
		setIsEditing(true);
		setFormModalOpen(true);
	};
	const handleSaveForm = async (e) => {
		e.preventDefault();
		if (!formData.name || !formData.role || !formData.phone || !formData.joiningDate) {
			alert("Please fill all required fields (Name, Role, Phone, Joining Date).");
			return;
		}
		const calculatedNet = (Number(formData.basicSalary) || 0) + (Number(formData.allowances) || 0) - (Number(formData.deductions) || 0);
		const initials = formData.name.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase() || "SM";
		const completeRecord = {
			id: formData.id || `SMC-EMP-${Date.now().toString().slice(-3)}`,
			name: formData.name,
			initials: formData.initials || initials,
			gender: formData.gender || "Male",
			dob: formData.dob || "1990-01-01",
			phone: formData.phone,
			email: formData.email || "staff@sailorsmedical.com",
			address: formData.address || "Navi Mumbai",
			emergencyContactName: formData.emergencyContactName || "Family Contact",
			emergencyContactPhone: formData.emergencyContactPhone || "+91 95614 50104",
			role: formData.role,
			department: formData.department || "Medical & DG Examinations",
			employmentType: formData.employmentType || "Full-time",
			status: formData.status || "Active / On duty",
			joiningDate: formData.joiningDate,
			schedule: formData.schedule || "Mon – Fri, 9:00 AM – 5:00 PM",
			resignationDate: formData.resignationDate,
			relievingDate: formData.relievingDate,
			resignationReason: formData.resignationReason,
			noticePeriodDays: formData.noticePeriodDays ?? 30,
			basicSalary: Number(formData.basicSalary) || 0,
			allowances: Number(formData.allowances) || 0,
			deductions: Number(formData.deductions) || 0,
			netSalary: calculatedNet,
			payFrequency: formData.payFrequency || "Monthly",
			panNo: formData.panNo,
			bankName: formData.bankName,
			bankAccountNo: formData.bankAccountNo,
			ifscCode: formData.ifscCode,
			documents: formData.documents || [],
			notes: formData.notes,
			createdAt: formData.createdAt || (/* @__PURE__ */ new Date()).toISOString()
		};
		if (isEditing) {
			setStaffList((prev) => prev.map((s) => s.id === completeRecord.id ? completeRecord : s));
			onNotice(`Staff member ${completeRecord.name} (${completeRecord.id}) updated and saved to MongoDB.`);
		} else {
			setStaffList((prev) => [completeRecord, ...prev]);
			onNotice(`New staff member ${completeRecord.name} added and saved to MongoDB.`);
		}
		setFormModalOpen(false);
		try {
			await saveStaffServer({ data: completeRecord });
		} catch (err) {
			console.error("Failed to save staff to MongoDB:", err);
		}
	};
	const handleOpenResignation = (staff) => {
		setResignationStaff(staff);
		setResignationDate(staff.resignationDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
		const defaultRelieving = new Date(Date.now() + 2592e6).toISOString().slice(0, 10);
		setRelievingDate(staff.relievingDate || defaultRelieving);
		setResignationReason(staff.resignationReason || "");
		setResignationModalOpen(true);
	};
	const handleConfirmResignation = async () => {
		if (!resignationStaff) return;
		const updated = {
			...resignationStaff,
			status: "Resigned",
			resignationDate,
			relievingDate,
			resignationReason: resignationReason || "Resignation recorded by administration"
		};
		setStaffList((prev) => prev.map((s) => s.id === updated.id ? updated : s));
		if (selectedStaff?.id === updated.id) setSelectedStaff(updated);
		setResignationModalOpen(false);
		onNotice(`Recorded resignation for ${updated.name} (Effective: ${relievingDate}).`);
		try {
			await saveStaffServer({ data: updated });
		} catch (err) {
			console.error("Failed to update resignation in MongoDB:", err);
		}
	};
	const handleDeleteStaff = async (id, name) => {
		if (!confirm(`Are you sure you want to remove the record for ${name} (${id})?`)) return;
		setStaffList((prev) => prev.filter((s) => s.id !== id));
		if (selectedStaff?.id === id) setViewModalOpen(false);
		onNotice(`Staff member ${name} removed from clinic register.`);
		try {
			await deleteStaffServer({ data: {
				id,
				name
			} });
		} catch (err) {
			console.error("Failed to delete staff member from MongoDB:", err);
		}
	};
	const handleAddDocument = async () => {
		if (!selectedStaff || !newDocName) return;
		const newDoc = {
			id: `DOC-${Date.now().toString().slice(-4)}`,
			name: newDocName,
			type: newDocType,
			documentNo: newDocNo || void 0,
			issuedDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			expiryDate: newDocExpiry || void 0,
			fileName: newDocFileName || void 0,
			fileData: newDocFileData || void 0,
			fileType: newDocFileType || void 0,
			fileUrl: newDocFileData || void 0,
			verificationStatus: "Verified"
		};
		const updated = {
			...selectedStaff,
			documents: [...selectedStaff.documents || [], newDoc]
		};
		setSelectedStaff(updated);
		setStaffList((prev) => prev.map((s) => s.id === updated.id ? updated : s));
		setAddDocModalOpen(false);
		setNewDocName("");
		setNewDocNo("");
		setNewDocExpiry("");
		setNewDocFileData("");
		setNewDocFileName("");
		setNewDocFileType("");
		setNewDocFileSize(0);
		onNotice(`Document "${newDoc.name}" uploaded and verified for ${updated.name}.`);
		try {
			await saveStaffServer({ data: updated });
		} catch (err) {
			console.error("Failed to add document to MongoDB:", err);
		}
	};
	const handleRemoveDocument = async (docId, docName) => {
		if (!selectedStaff) return;
		const updated = {
			...selectedStaff,
			documents: selectedStaff.documents.filter((d) => d.id !== docId)
		};
		setSelectedStaff(updated);
		setStaffList((prev) => prev.map((s) => s.id === updated.id ? updated : s));
		onNotice(`Removed document "${docName}".`);
		try {
			await saveStaffServer({ data: updated });
		} catch (err) {
			console.error("Failed to update documents in MongoDB:", err);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Total Staff"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-bold text-foreground",
								children: metrics.total
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "registered personnel"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Active / On Duty"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-bold text-emerald-600",
								children: metrics.active
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "in active service"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Medical Officers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-lg bg-blue-500/10 text-blue-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-bold text-blue-600",
								children: metrics.doctors
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "DG approved physicians"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Resigned / Relieved"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-lg bg-amber-500/10 text-amber-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "size-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-bold text-amber-600",
								children: metrics.resigned
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "completed handovers"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card shadow-2xs overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-bold text-foreground",
							children: "Staff & Employee Directory"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Comprehensive personnel management, joining records, salary breakdown & verified documents"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => {
										setSelectedStaffForSlip(null);
										setSalarySlipModalOpen(true);
									},
									className: "gap-1.5 text-xs h-9 border-emerald-600/40 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/30",
									title: "Generate, download or send monthwise salary slips",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-3.5 text-emerald-600" }), "Salary Slips / Payroll"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => exportStaffToExcel(filteredStaff),
									className: "gap-1.5 text-xs h-9 border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/30",
									title: "Download Staff Directory as Excel spreadsheet",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-3.5 text-emerald-600" }), "Export to Excel (.xlsx)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleOpenAdd,
									size: "sm",
									className: "gap-1.5 text-xs h-9 bg-primary text-primary-foreground shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }), "Add Employee"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 border-b border-border bg-muted/20 p-3 sm:flex-row sm:items-center sm:justify-between sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 max-w-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "Search by name, ID, role, or phone...",
									value: search,
									onChange: (e) => setSearch(e.target.value),
									className: "h-9 pl-9 text-xs"
								}),
								search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearch(""),
									className: "absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by department",
									value: departmentFilter,
									onChange: (e) => setDepartmentFilter(e.target.value),
									className: "h-9 rounded-md border border-input bg-background px-2.5 text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All Departments"
									}), staffDepartments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: d,
										children: d
									}, d))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									"aria-label": "Filter by status",
									value: statusFilter,
									onChange: (e) => setStatusFilter(e.target.value),
									className: "h-9 rounded-md border border-input bg-background px-2.5 text-xs font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All Statuses"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "active",
											children: "Active / On Duty"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "leave",
											children: "On Leave"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "resigned",
											children: "Resigned"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: loadStaff,
									className: "size-9 p-0 text-muted-foreground hover:text-foreground",
									title: "Refresh from MongoDB Atlas",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-3.5 ${isLoading ? "animate-spin" : ""}` })
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-transparent border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "pl-5 text-xs font-bold text-muted-foreground uppercase",
									children: "Employee ID & Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold text-muted-foreground uppercase",
									children: "Role & Department"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold text-muted-foreground uppercase",
									children: "Joining & Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold text-muted-foreground uppercase",
									children: "Salary (Monthly)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold text-muted-foreground uppercase",
									children: "Verified Documents"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "pr-5 text-right text-xs font-bold text-muted-foreground uppercase",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredStaff.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							colSpan: 6,
							className: "py-12 text-center text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mx-auto size-8 opacity-40 mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "No employee records found matching your filters"
							})]
						}) }) : filteredStaff.map((staff) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-muted/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "pl-5 py-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
											className: "size-9 border border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
												className: "bg-primary/10 text-xs font-bold text-primary",
												children: staff.initials
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-foreground",
												children: staff.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "text-[10px] px-1.5 py-0 font-mono",
												children: staff.id
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-muted-foreground flex items-center gap-2 mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: staff.phone }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate max-w-[150px]",
													children: staff.email
												})
											]
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold text-foreground",
									children: staff.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: staff.department
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${staff.status === "Resigned" ? "bg-amber-500" : staff.status.includes("Active") ? "bg-emerald-500" : "bg-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-foreground",
										children: staff.status
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground mt-0.5",
									children: [
										"Joined: ",
										staff.joiningDate,
										staff.resignationDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-amber-600 dark:text-amber-400 font-medium ml-1",
											children: ["· Resigned: ", staff.resignationDate]
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold text-foreground",
									children: formatINR(staff.netSalary)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground mt-0.5",
									children: [
										"Basic: ",
										formatINR(staff.basicSalary),
										" · ",
										staff.payFrequency
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "secondary",
										className: "text-[10px] px-2 py-0.5 font-medium gap-1 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "size-3" }),
											staff.documents?.length || 0,
											" Docs"
										]
									}), staff.documents && staff.documents.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-emerald-600 font-medium",
										children: [
											"(",
											staff.documents.filter((d) => d.verificationStatus === "Verified").length,
											" Verified)"
										]
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "pr-5 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-end gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-8 px-2 text-xs gap-1 text-primary hover:bg-primary/10",
												onClick: () => {
													setSelectedStaff(staff);
													setViewModalOpen(true);
												},
												title: "View Employee Dossier & Documents",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), "Dossier"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "outline",
												className: "h-8 px-2 text-xs gap-1 border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/30",
												onClick: () => {
													setSelectedStaffForSlip(staff);
													setSalarySlipModalOpen(true);
												},
												title: "Generate, download or send salary slip for this employee",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-3.5" }), "Salary Slip"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "size-8 p-0 text-muted-foreground hover:text-foreground",
												onClick: () => handleOpenEdit(staff),
												title: "Edit Employee Information",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" })
											}),
											staff.status !== "Resigned" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "size-8 p-0 text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/30",
												onClick: () => handleOpenResignation(staff),
												title: "Record Resignation & Exit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "size-3.5" })
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "size-8 p-0 text-destructive/80 hover:text-destructive hover:bg-destructive/10",
												onClick: () => handleDeleteStaff(staff.id, staff.name),
												title: "Remove Employee",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
											})
										]
									})
								})
							]
						}, staff.id)) })] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: viewModalOpen,
				onOpenChange: setViewModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-3xl max-h-[90vh] overflow-y-auto",
					children: selectedStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
								className: "border-b border-border pb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
											className: "size-12 border border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
												className: "bg-primary/10 text-base font-bold text-primary",
												children: selectedStaff.initials
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
											className: "text-lg font-bold flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedStaff.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "font-mono text-xs",
												children: selectedStaff.id
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
											className: "text-xs mt-0.5",
											children: [
												selectedStaff.role,
												" · ",
												selectedStaff.department
											]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: selectedStaff.status === "Resigned" ? "destructive" : "default",
										className: "text-xs px-2.5 py-1",
										children: selectedStaff.status
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-3.5 text-primary" }), " Employment & Personal Details"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-lg border border-border bg-muted/20 p-3.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block text-[11px]",
										children: "Joining Date:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: selectedStaff.joiningDate
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block text-[11px]",
										children: "Employment Type:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: selectedStaff.employmentType
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block text-[11px]",
										children: "Working Schedule:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: selectedStaff.schedule
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block text-[11px]",
										children: "Mobile Phone:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: selectedStaff.phone
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block text-[11px]",
										children: "Email Address:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: selectedStaff.email
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block text-[11px]",
										children: "Date of Birth (Gender):"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold",
										children: [
											selectedStaff.dob,
											" (",
											selectedStaff.gender,
											")"
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Residential Address:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: selectedStaff.address
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block text-[11px]",
										children: "Emergency Contact:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold",
										children: [
											selectedStaff.emergencyContactName,
											" (",
											selectedStaff.emergencyContactPhone,
											")"
										]
									})] })
								]
							})] }),
							selectedStaff.status === "Resigned" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "size-3.5" }), " Resignation & Relieving Record"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Resignation Tendered:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: selectedStaff.resignationDate || "N/A"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Relieving / Exit Date:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: selectedStaff.relievingDate || "N/A"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Notice Period:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold",
											children: [selectedStaff.noticePeriodDays || 30, " Days"]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground block text-[11px]",
												children: "Reason for Resignation:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: selectedStaff.resignationReason || "Standard career progression / relocation"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3.5 text-primary" }), " Salary & Banking Structure"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-lg border border-border bg-card p-3.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Basic Salary:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: formatINR(selectedStaff.basicSalary)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Allowances (HRA/Med):"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: formatINR(selectedStaff.allowances)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Deductions (PF/PT):"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-destructive",
											children: ["-", formatINR(selectedStaff.deductions)]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-primary/5 rounded p-1.5 border border-primary/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary block text-[10px] uppercase font-bold",
												children: "Net In-Hand Salary:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold text-primary",
												children: formatINR(selectedStaff.netSalary)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Bank Name:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: selectedStaff.bankName || "—"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "Account Number:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold font-mono",
											children: selectedStaff.bankAccountNo || "—"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "IFSC Code:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold font-mono",
											children: selectedStaff.ifscCode || "—"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-[11px]",
											children: "PAN Card Number:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold font-mono",
											children: selectedStaff.panNo || "—"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										className: "w-full gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xs",
										onClick: () => {
											setSelectedStaffForSlip(selectedStaff);
											setViewModalOpen(false);
											setSalarySlipModalOpen(true);
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-3.5" }),
											"Generate & Download Salary Slip (",
											selectedStaff.name,
											")"
										]
									})
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "size-3.5 text-primary" }), " Employee Documents & Certifications"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									className: "h-7 text-xs gap-1 border-primary/30 text-primary",
									onClick: () => setAddDocModalOpen(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" }), " Add Document"]
								})]
							}), !selectedStaff.documents || selectedStaff.documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground",
								children: "No documents currently on file. Click \"Add Document\" to upload licenses or agreements."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: selectedStaff.documents.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border bg-card p-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-8 place-items-center rounded bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-bold text-foreground",
											children: doc.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-muted-foreground mt-0.5",
											children: [
												"Type: ",
												doc.type,
												" ",
												doc.documentNo && `· Ref: ${doc.documentNo}`,
												doc.expiryDate && ` · Valid Till: ${doc.expiryDate}`
											]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "outline",
												className: "h-7 text-xs gap-1.5 text-primary border-primary/30 hover:bg-primary/5 hover:text-primary font-medium",
												onClick: () => handleOpenDocument(doc),
												title: "Open / View Document",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3" }), " Open"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: doc.verificationStatus === "Verified" ? "default" : "outline",
												className: "text-[10px] px-2 py-0.5",
												children: doc.verificationStatus
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "size-7 p-0 text-destructive/70 hover:text-destructive",
												onClick: () => handleRemoveDocument(doc.id, doc.name),
												title: "Delete Document",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
											})
										]
									})]
								}, doc.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setViewModalOpen(false),
									children: "Close"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									className: "gap-1.5",
									onClick: () => {
										setViewModalOpen(false);
										handleOpenEdit(selectedStaff);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), " Edit Employee"]
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: formModalOpen,
				onOpenChange: setFormModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-2xl max-h-[90vh] overflow-y-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveForm,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
								className: "border-b border-border pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-base font-bold",
									children: isEditing ? `Edit Staff Member (${formData.id})` : "Add New Staff Member"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									className: "text-xs",
									children: "Fill employee particulars, role, salary details, and joining information."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "1. Personal Particulars"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Employee ID *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: formData.id || "",
											onChange: (e) => setFormData({
												...formData,
												id: e.target.value
											}),
											className: "h-8 text-xs font-mono",
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Full Name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. Dr. Maya Bennett",
											value: formData.name || "",
											onChange: (e) => setFormData({
												...formData,
												name: e.target.value
											}),
											className: "h-8 text-xs font-medium",
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Mobile Phone *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "+91 98201 44910",
											value: formData.phone || "",
											onChange: (e) => setFormData({
												...formData,
												phone: e.target.value
											}),
											className: "h-8 text-xs",
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "email",
											placeholder: "name@sailorsmedical.com",
											value: formData.email || "",
											onChange: (e) => setFormData({
												...formData,
												email: e.target.value
											}),
											className: "h-8 text-xs"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Gender & DOB"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: formData.gender || "Male",
												onChange: (e) => setFormData({
													...formData,
													gender: e.target.value
												}),
												className: "h-8 rounded-md border border-input bg-background px-2 text-xs font-medium",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Male",
														children: "Male"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Female",
														children: "Female"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Other",
														children: "Other"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "date",
												value: formData.dob || "1990-01-01",
												onChange: (e) => setFormData({
													...formData,
													dob: e.target.value
												}),
												className: "h-8 text-xs"
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Residential Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. CBD Belapur, Navi Mumbai",
											value: formData.address || "",
											onChange: (e) => setFormData({
												...formData,
												address: e.target.value
											}),
											className: "h-8 text-xs"
										})] })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 pt-2 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "2. Job Designation & Schedule"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Role / Designation *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. Cardiologist & TMT Specialist",
											value: formData.role || "",
											onChange: (e) => setFormData({
												...formData,
												role: e.target.value
											}),
											className: "h-8 text-xs",
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Department"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: formData.department || "Medical & DG Examinations",
											onChange: (e) => setFormData({
												...formData,
												department: e.target.value
											}),
											className: "h-8 w-full rounded-md border border-input bg-background px-2 text-xs font-medium",
											children: staffDepartments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: d,
												children: d
											}, d))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Joining Date *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: formData.joiningDate || "",
											onChange: (e) => setFormData({
												...formData,
												joiningDate: e.target.value
											}),
											className: "h-8 text-xs",
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Employment Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: formData.status || "Active / On duty",
											onChange: (e) => setFormData({
												...formData,
												status: e.target.value
											}),
											className: "h-8 w-full rounded-md border border-input bg-background px-2 text-xs font-medium",
											children: staffStatuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: s,
												children: s
											}, s))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-[11px] font-semibold text-muted-foreground mb-1",
												children: "Working Schedule / Shift"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												placeholder: "e.g. Mon – Fri, 8:00 AM – 4:00 PM",
												value: formData.schedule || "",
												onChange: (e) => setFormData({
													...formData,
													schedule: e.target.value
												}),
												className: "h-8 text-xs"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 pt-2 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-primary",
									children: "3. Salary & Banking Info"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Basic Salary (₹)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											value: formData.basicSalary ?? 0,
											onChange: (e) => setFormData({
												...formData,
												basicSalary: Number(e.target.value)
											}),
											className: "h-8 text-xs font-mono"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Allowances (₹)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											value: formData.allowances ?? 0,
											onChange: (e) => setFormData({
												...formData,
												allowances: Number(e.target.value)
											}),
											className: "h-8 text-xs font-mono"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Deductions (₹)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											value: formData.deductions ?? 0,
											onChange: (e) => setFormData({
												...formData,
												deductions: Number(e.target.value)
											}),
											className: "h-8 text-xs font-mono"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "PAN Card No"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "ABCDE1234F",
											value: formData.panNo || "",
											onChange: (e) => setFormData({
												...formData,
												panNo: e.target.value.toUpperCase()
											}),
											className: "h-8 text-xs font-mono"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Bank Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "e.g. HDFC Bank",
											value: formData.bankName || "",
											onChange: (e) => setFormData({
												...formData,
												bankName: e.target.value
											}),
											className: "h-8 text-xs"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[11px] font-semibold text-muted-foreground mb-1",
											children: "Account No & IFSC"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Acc No / IFSC",
											value: formData.bankAccountNo || "",
											onChange: (e) => setFormData({
												...formData,
												bankAccountNo: e.target.value
											}),
											className: "h-8 text-xs font-mono"
										})] })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									onClick: () => setFormModalOpen(false),
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "sm",
									children: isEditing ? "Save Changes" : "Create Employee Record"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: resignationModalOpen,
				onOpenChange: setResignationModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-base font-bold flex items-center gap-2 text-amber-700 dark:text-amber-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "size-4" }), " Record Employee Resignation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
								className: "text-xs",
								children: [
									"Process exit formalities for ",
									resignationStaff?.name,
									" (",
									resignationStaff?.id,
									")."
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Resignation Tendered Date *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "date",
										value: resignationDate,
										onChange: (e) => setResignationDate(e.target.value),
										className: "h-8 text-xs",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Final Relieving / Exit Date *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "date",
										value: relievingDate,
										onChange: (e) => setRelievingDate(e.target.value),
										className: "h-8 text-xs",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Reason for Leaving"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										placeholder: "e.g. Relocated to another city / higher studies / career transition",
										value: resignationReason,
										onChange: (e) => setResignationReason(e.target.value),
										className: "w-full rounded-md border border-input bg-background p-2 text-xs"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setResignationModalOpen(false),
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "destructive",
									size: "sm",
									onClick: handleConfirmResignation,
									className: "bg-amber-600 hover:bg-amber-700 text-white",
									children: "Confirm Resignation"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: addDocModalOpen,
				onOpenChange: setAddDocModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-sm font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "size-4 text-primary" }), " Add Staff Document"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-xs",
								children: "Upload medical license, degree, Aadhaar, or employment contract."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Document Title *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "e.g. DG Shipping Medical Approval Certificate",
										value: newDocName,
										onChange: (e) => setNewDocName(e.target.value),
										className: "h-8 text-xs",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Document Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: newDocType,
										onChange: (e) => setNewDocType(e.target.value),
										className: "h-8 w-full rounded-md border border-input bg-background px-2 text-xs font-medium",
										children: documentTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: t,
											children: t
										}, t))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Certificate / Registration Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "e.g. DG-MED-MUM-2024-091",
										value: newDocNo,
										onChange: (e) => setNewDocNo(e.target.value),
										className: "h-8 text-xs font-mono"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Expiry / Renewal Date (Optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "date",
										value: newDocExpiry,
										onChange: (e) => setNewDocExpiry(e.target.value),
										className: "h-8 text-xs"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-semibold text-muted-foreground mb-1",
										children: "Upload Document File (PDF or Image)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border-2 border-dashed border-border/80 p-3 text-center hover:border-primary/50 transition-colors bg-muted/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											id: "staff-doc-upload",
											accept: "image/*,application/pdf",
											onChange: handleDocFileSelect,
											className: "hidden"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "staff-doc-upload",
											className: "flex flex-col items-center justify-center cursor-pointer gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5 text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold text-foreground",
													children: newDocFileName ? newDocFileName : "Click to select document file"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground",
													children: newDocFileName ? `${newDocFileSize} KB · Ready to verify & store` : "Supports PDF, JPG, PNG up to 8MB"
												})
											]
										})]
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setAddDocModalOpen(false),
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: handleAddDocument,
									children: "Verify & Attach Document"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: docViewerOpen,
				onOpenChange: setDocViewerOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-3xl max-h-[92vh] overflow-y-auto",
					children: viewingDoc && selectedStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
								className: "border-b border-border pb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
											className: "text-base font-bold flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: viewingDoc.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "text-[10px]",
												children: viewingDoc.type
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
											className: "text-xs",
											children: [
												"Personnel: ",
												selectedStaff.name,
												" (",
												selectedStaff.id,
												") · ",
												selectedStaff.role
											]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: viewingDoc.verificationStatus === "Verified" ? "default" : "outline",
										className: "self-start sm:self-auto text-xs",
										children: viewingDoc.verificationStatus
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border bg-muted/20 p-4",
								children: viewingDoc.fileData ? viewingDoc.fileType?.includes("pdf") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										src: viewingDoc.fileData,
										title: viewingDoc.name,
										className: "w-full h-[60vh] rounded-lg border bg-white shadow-xs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-end",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "text-xs gap-1.5",
											onClick: () => {
												window.open()?.document.write(`<iframe src="${viewingDoc.fileData}" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>`);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), " Open PDF in Full Window"]
										})
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: viewingDoc.fileData,
										alt: viewingDoc.name,
										className: "max-h-[60vh] mx-auto rounded-lg border bg-white shadow-sm object-contain"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "text-xs gap-1.5",
											onClick: () => {
												window.open()?.document.write(`<img src="${viewingDoc.fileData}" style="max-width:100%; height:auto; margin:20px auto; display:block;" />`);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), " View Full Image"]
										})
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border-2 border-primary/20 bg-background p-6 shadow-sm print:border-none print:shadow-none space-y-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b-2 border-primary/30 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicLogo, {
													size: "md",
													showText: true
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-right text-[10px] text-muted-foreground leading-tight",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-bold text-foreground",
														children: "D.G. Shipping Approved Centre"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "ISO 9001:2015 & ISO 45001:2018" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Reg No: DG-MUM-SMC-04" })
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-center space-y-1 py-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "text-[10px] uppercase font-bold tracking-wider text-primary border-primary/40",
													children: "OFFICIAL VERIFIED PERSONNEL RECORD"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-xl font-bold text-foreground",
													children: viewingDoc.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground",
													children: ["Category: ", viewingDoc.type]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3 rounded-lg border border-border bg-muted/30 p-4 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Employee / Holder:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-foreground",
													children: selectedStaff.name
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Employee ID:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono font-semibold text-foreground",
													children: selectedStaff.id
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Clinical Role:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: selectedStaff.role
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Department:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: selectedStaff.department
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Certificate / Ref Number:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono font-bold text-primary",
													children: viewingDoc.documentNo || `SMC-${viewingDoc.id}`
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Issued / Active Since:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: viewingDoc.issuedDate || selectedStaff.joiningDate
												})] }),
												viewingDoc.expiryDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Valid Till / Renewal:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: viewingDoc.expiryDate
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Audit Verification:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-bold text-emerald-600 flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), " Digitally Verified"]
												})] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-t border-border pt-4 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid size-9 place-items-center rounded-full bg-emerald-500/10 text-emerald-600",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-bold text-foreground",
													children: "Sailor's Medical Clinic Seal"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] text-muted-foreground",
													children: "CBD Belapur, Navi Mumbai, India"
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-right",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-serif italic font-bold text-foreground text-sm",
													children: "Dr. Mitali Gadge"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] text-muted-foreground",
													children: "Chief Medical Administrator"
												})]
											})]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									onClick: () => window.print(),
									className: "gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), " Print / Save PDF"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									onClick: () => setDocViewerOpen(false),
									className: "text-xs",
									children: "Close Document"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalarySlipModal, {
				open: salarySlipModalOpen,
				onOpenChange: setSalarySlipModalOpen,
				staffList,
				selectedStaffForSlip,
				onNotice
			})
		]
	});
}
function ReportsModule({ patients, invoices, dateFilter, onDateFilter }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const { filteredInvoices, filteredPatients } = (0, import_react.useMemo)(() => {
		if (dateFilter === "All Time") return {
			filteredInvoices: invoices,
			filteredPatients: patients
		};
		if (dateFilter.includes("Today")) {
			const todayStr = "2026-10-21";
			const fInv = invoices.filter((inv) => (inv.date || "").includes("21") || (inv.date || "").includes("Oct 21"));
			const fPat = patients.filter((p) => p.date === todayStr || (p.date || "").includes("2026-10-21"));
			return {
				filteredInvoices: fInv.length > 0 ? fInv : invoices,
				filteredPatients: fPat.length > 0 ? fPat : patients
			};
		}
		return {
			filteredInvoices: invoices,
			filteredPatients: patients
		};
	}, [
		invoices,
		patients,
		dateFilter
	]);
	const metrics = (0, import_react.useMemo)(() => {
		const totalBilled = filteredInvoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
		const paidInvoices = filteredInvoices.filter((inv) => inv.status === "Paid");
		const totalCollected = paidInvoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
		const pendingInvoices = filteredInvoices.filter((inv) => inv.status !== "Paid");
		const totalPending = pendingInvoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
		const totalCandidates = filteredPatients.length;
		return {
			totalBilled,
			totalCollected,
			totalPending,
			totalCandidates,
			avgCandidateValue: totalCandidates > 0 ? Math.round(totalBilled / totalCandidates) : 0,
			collectionEfficiency: totalBilled > 0 ? Math.round(totalCollected / totalBilled * 100) : 100,
			paidCount: paidInvoices.length,
			pendingCount: pendingInvoices.length
		};
	}, [filteredInvoices, filteredPatients]);
	const categoryBreakdown = (0, import_react.useMemo)(() => {
		const counts = {};
		for (const p of filteredPatients) {
			const cat = p.typeOfMedical || "General Seafarer Medical";
			const numericAmt = parseFloat((p.paymentAmount || "0").replace(/[^0-9.]/g, "")) || 3500;
			if (!counts[cat]) counts[cat] = {
				count: 0,
				estimatedRevenue: 0
			};
			counts[cat].count += 1;
			counts[cat].estimatedRevenue += numericAmt;
		}
		const totalRev = Object.values(counts).reduce((sum, c) => sum + c.estimatedRevenue, 0) || 1;
		return Object.entries(counts).map(([name, data]) => ({
			name,
			count: data.count,
			revenue: data.estimatedRevenue,
			pct: Math.round(data.estimatedRevenue / totalRev * 100)
		})).sort((a, b) => b.revenue - a.revenue);
	}, [filteredPatients]);
	const companyBreakdown = (0, import_react.useMemo)(() => {
		const compMap = {};
		for (const inv of filteredInvoices) {
			const comp = inv.company || "Direct / Walk-In Seafarer";
			if (!compMap[comp]) compMap[comp] = {
				candidates: 0,
				billed: 0,
				paid: 0
			};
			compMap[comp].candidates += 1;
			compMap[comp].billed += inv.total || 0;
			if (inv.status === "Paid") compMap[comp].paid += inv.total || 0;
		}
		return Object.entries(compMap).map(([name, data]) => ({
			name,
			candidates: data.candidates,
			billed: data.billed,
			paid: data.paid,
			pending: data.billed - data.paid
		})).sort((a, b) => b.billed - a.billed);
	}, [filteredInvoices]);
	const paymentModeBreakdown = (0, import_react.useMemo)(() => {
		const modeMap = {};
		for (const p of filteredPatients) {
			const mode = p.paymentMode || "Cash";
			const amt = parseFloat((p.paymentAmount || "0").replace(/[^0-9.]/g, "")) || 0;
			if (!modeMap[mode]) modeMap[mode] = {
				count: 0,
				total: 0
			};
			modeMap[mode].count += 1;
			modeMap[mode].total += amt;
		}
		const grandTotal = Object.values(modeMap).reduce((s, m) => s + m.total, 0) || 1;
		return Object.entries(modeMap).map(([mode, data]) => ({
			mode,
			count: data.count,
			total: data.total,
			pct: Math.round(data.total / grandTotal * 100)
		}));
	}, [filteredPatients]);
	const handleExportMIS = () => {
		const workbook = utils.book_new();
		const summaryData = [
			{
				Metric: "Clinic Name",
				Value: "Sailors Medical Clinic"
			},
			{
				Metric: "Reporting Centre",
				Value: "CBD Belapur, Navi Mumbai"
			},
			{
				Metric: "Report Period",
				Value: dateFilter
			},
			{
				Metric: "Generated On",
				Value: (/* @__PURE__ */ new Date()).toLocaleString("en-IN")
			},
			{
				Metric: "Total Candidates Evaluated",
				Value: metrics.totalCandidates
			},
			{
				Metric: "Total Billed Revenue",
				Value: formatINR(metrics.totalBilled)
			},
			{
				Metric: "Total Collected (Paid)",
				Value: formatINR(metrics.totalCollected)
			},
			{
				Metric: "Total Outstanding (Pending)",
				Value: formatINR(metrics.totalPending)
			},
			{
				Metric: "Collection Efficiency Rate",
				Value: `${metrics.collectionEfficiency}%`
			},
			{
				Metric: "Average Revenue Per Candidate",
				Value: formatINR(metrics.avgCandidateValue)
			}
		];
		const wsSummary = utils.json_to_sheet(summaryData);
		wsSummary["!cols"] = [{ wch: 32 }, { wch: 40 }];
		utils.book_append_sheet(workbook, wsSummary, "Executive Summary");
		const wsCategories = utils.json_to_sheet(categoryBreakdown.map((c) => ({
			"Medical Examination Category": c.name,
			"Candidates Screened": c.count,
			"Total Revenue (₹)": c.revenue,
			"Revenue Share (%)": `${c.pct}%`
		})));
		wsCategories["!cols"] = [
			{ wch: 40 },
			{ wch: 22 },
			{ wch: 22 },
			{ wch: 18 }
		];
		utils.book_append_sheet(workbook, wsCategories, "Examination Categories");
		const wsCompanies = utils.json_to_sheet(companyBreakdown.map((comp) => ({
			"Shipping / Manning Company": comp.name,
			"Candidates Screened": comp.candidates,
			"Total Billed (₹)": comp.billed,
			"Amount Received (₹)": comp.paid,
			"Outstanding Due (₹)": comp.pending
		})));
		wsCompanies["!cols"] = [
			{ wch: 42 },
			{ wch: 20 },
			{ wch: 20 },
			{ wch: 20 },
			{ wch: 20 }
		];
		utils.book_append_sheet(workbook, wsCompanies, "Company Accounts");
		const fileName = `Sailors_Medical_Clinic_Actual_MIS_Report_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
		writeFileSync(workbook, fileName);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 shadow-2xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold text-foreground",
						children: "Actual Clinic Operations & Financial MIS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "Live calculated analytics synced with real patient records & invoices"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-lg border border-input bg-background px-2.5 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Reporting period",
							value: dateFilter,
							onChange: (e) => onDateFilter(e.target.value),
							className: "bg-transparent text-xs font-semibold focus:outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "All Time",
									children: "All Time Records"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Today, Oct 21, 2026",
									children: "Today, Oct 21, 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "This week, Oct 19–25",
									children: "This Week (Oct 19–25)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "This month, October 2026",
									children: "This Month (October 2026)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "This quarter, Q4 2026",
									children: "This Quarter (Q4 2026)"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: handleExportMIS,
						className: "gap-1.5 text-xs h-9 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs",
						title: "Download Complete Government Audit & Clinical Report in Excel (.xlsx)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-3.5" }), "Download Excel MIS (.xlsx)"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Total Invoiced Revenue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletCards, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold text-foreground",
								children: formatINR(metrics.totalBilled)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [filteredInvoices.length, " invoices generated"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-emerald-600 font-semibold flex items-center gap-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" }), " Live"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Realized Collections"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold text-emerald-600",
								children: formatINR(metrics.totalCollected)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [metrics.paidCount, " paid in full"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-emerald-600",
									children: [metrics.collectionEfficiency, "% rate"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Outstanding Dues"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded-lg bg-amber-500/10 text-amber-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold text-amber-600",
								children: formatINR(metrics.totalPending)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [metrics.pendingCount, " pending invoices"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-amber-600 font-semibold",
									children: "Credit/NEFT"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Candidates Evaluated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded-lg bg-blue-500/10 text-blue-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-bold text-foreground",
								children: metrics.totalCandidates
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Avg. Visit: ", formatINR(metrics.avgCandidateValue)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-blue-600 font-semibold",
									children: "100% Cleared"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border pb-2 text-xs font-semibold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("overview"),
						className: `rounded-lg px-3 py-1.5 transition-colors ${activeTab === "overview" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:bg-muted"}`,
						children: "Examination Categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("companies"),
						className: `rounded-lg px-3 py-1.5 transition-colors ${activeTab === "companies" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:bg-muted"}`,
						children: "Corporate Shipping Clients"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("payments"),
						className: `rounded-lg px-3 py-1.5 transition-colors ${activeTab === "payments" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:bg-muted"}`,
						children: "Payment Modes"
					})
				]
			}),
			activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-5 shadow-2xs space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-foreground",
							children: "Revenue by Examination Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Calculated from live candidate dossiers and medical protocols"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "text-[10px]",
							children: [categoryBreakdown.length, " Categories Active"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4 pt-1",
						children: categoryBreakdown.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-foreground flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary" }), cat.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: formatINR(cat.revenue)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground ml-2",
										children: [
											"(",
											cat.count,
											" seafarers · ",
											cat.pct,
											"%)"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 w-full overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500",
									style: { width: `${Math.max(cat.pct, 4)}%` }
								})
							})]
						}, cat.name))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-5 shadow-2xs space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between border-b border-border pb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-foreground",
							children: "Clinical Volume Breakdown"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "DG Approved examinations distribution"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-transparent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold text-muted-foreground",
									children: "Examination Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold text-muted-foreground text-center",
									children: "Candidates"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold text-muted-foreground text-right",
									children: "Revenue"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: categoryBreakdown.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-muted/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs font-semibold text-foreground",
									children: cat.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs text-center font-medium",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "text-[10px] px-2 py-0.5",
										children: cat.count
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs text-right font-bold text-foreground",
									children: formatINR(cat.revenue)
								})
							]
						}, cat.name)) })] })
					})]
				})]
			}),
			activeTab === "companies" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card shadow-2xs overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border p-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-foreground",
						children: "Corporate Shipping Accounts & Billing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "Live invoice ledger aggregated by shipping company"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "hover:bg-transparent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "pl-6 text-xs font-bold text-muted-foreground",
								children: "Shipping / Manning Company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-xs font-bold text-muted-foreground text-center",
								children: "Candidates"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-xs font-bold text-muted-foreground text-right",
								children: "Total Invoiced"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-xs font-bold text-muted-foreground text-right",
								children: "Received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "pr-6 text-xs font-bold text-muted-foreground text-right",
								children: "Balance Due"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: companyBreakdown.map((comp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "hover:bg-muted/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "pl-6 text-xs font-semibold text-foreground flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-4 text-primary shrink-0" }), comp.name]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-xs text-center font-medium",
								children: comp.candidates
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-xs text-right font-bold text-foreground",
								children: formatINR(comp.billed)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "text-xs text-right font-semibold text-emerald-600",
								children: formatINR(comp.paid)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "pr-6 text-xs text-right font-semibold text-amber-600",
								children: comp.pending > 0 ? formatINR(comp.pending) : "Settled"
							})
						]
					}, comp.name)) })] })
				})]
			}),
			activeTab === "payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: paymentModeBreakdown.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4 shadow-2xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: item.mode
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 text-primary" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xl font-bold text-foreground",
							children: formatINR(item.total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center justify-between text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.count, " transactions"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-primary",
								children: [item.pct, "% share"]
							})]
						})
					]
				}, item.mode))
			})
		]
	});
}
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var navIcons = {
	dashboard: LayoutDashboard,
	patients: Users,
	invoices: FileText,
	payments: CreditCard,
	feedback: ClipboardList,
	staff: UserRound,
	reports: FileChartColumnIncreasing,
	activity: Activity,
	settings: Settings
};
var sectionDescriptions = {
	dashboard: "Here's what's happening across your clinic today.",
	patients: "View and manage your clinic's patient records.",
	invoices: "Manage billing and keep tabs on outstanding balances.",
	payments: "A real-time view of incoming payments and transactions.",
	feedback: "Review patient complaints, grievance redressal logs, and reviews. Download compliance reports in Excel (.xlsx) per government medical rules.",
	staff: "Manage your clinical team and day-to-day coverage.",
	reports: "Track clinic performance and financial health.",
	activity: "A secure timeline of changes across your clinic.",
	settings: "Manage your clinic details and workspace preferences."
};
function ClinicApp() {
	const [role, setRole] = (0, import_react.useState)(null);
	const [currentUser, setCurrentUser] = (0, import_react.useState)({
		name: "Mitali Gadge",
		email: "admin@sailorsmedical.com",
		role: "admin",
		phone: "+91 95614 50104",
		designation: "Chief Medical Administrator & Director",
		regNo: "MMC-2015-84920 / DG-SMC-04",
		department: "Marine Medical Examination & DG Shipping Care"
	});
	const [profileModalOpen, setProfileModalOpen] = (0, import_react.useState)(false);
	const [section, setSection] = (0, import_react.useState)("dashboard");
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(true);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [patients, setPatients] = (0, import_react.useState)(initialPatients);
	const [invoices, setInvoices] = (0, import_react.useState)(invoiceRecords);
	const [patientSearch, setPatientSearch] = (0, import_react.useState)("");
	const [dateFilter, setDateFilter] = (0, import_react.useState)("Today, Oct 21, 2026");
	const [notice, setNotice] = (0, import_react.useState)("");
	const [authLoading, setAuthLoading] = (0, import_react.useState)(true);
	const [patientModalOpen, setPatientModalOpen] = (0, import_react.useState)(false);
	const [selectedPatientForEdit, setSelectedPatientForEdit] = (0, import_react.useState)(null);
	const [selectedPatientForView, setSelectedPatientForView] = (0, import_react.useState)(null);
	const [detailModalOpen, setDetailModalOpen] = (0, import_react.useState)(false);
	const [createInvoiceModalOpen, setCreateInvoiceModalOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let active = true;
		async function loadSession() {
			try {
				const response = await fetch("/api/auth/me", { credentials: "same-origin" });
				if (!active) return;
				if (!response.ok) {
					setRole(null);
					return;
				}
				const user = await response.json();
				setCurrentUser(user);
				setRole(user.role);
			} catch {
				if (active) setRole(null);
			} finally {
				if (active) setAuthLoading(false);
			}
		}
		loadSession();
		return () => {
			active = false;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		let active = true;
		async function loadDataFromMongo() {
			try {
				const [mongoPatients, mongoInvoices] = await Promise.all([listPatientsServer(), listInvoicesServer()]);
				if (active) {
					if (mongoPatients && mongoPatients.length > 0) setPatients(mongoPatients);
					if (mongoInvoices && mongoInvoices.length > 0) setInvoices(mongoInvoices);
				}
			} catch (err) {
				console.warn("Could not sync with MongoDB Atlas on start, using baseline records:", err);
			}
		}
		loadDataFromMongo();
		return () => {
			active = false;
		};
	}, []);
	const nextSrNo = (0, import_react.useMemo)(() => {
		return patients.reduce((max, p) => Math.max(max, p.srNo || 0), 0) + 1;
	}, [patients]);
	const openAddModal = () => {
		setSelectedPatientForEdit(null);
		setPatientModalOpen(true);
	};
	const openEditModal = (patient) => {
		setSelectedPatientForEdit(patient);
		setPatientModalOpen(true);
	};
	const openViewModal = (patient) => {
		setSelectedPatientForView(patient);
		setDetailModalOpen(true);
	};
	const handleSavePatient = async (saved) => {
		if (selectedPatientForEdit) {
			setPatients((current) => current.map((item) => item.id === saved.id ? saved : item));
			setNotice(`${saved.name}'s marine record was updated and saved to MongoDB.`);
		} else {
			setPatients((current) => [saved, ...current]);
			setNotice(`${saved.name} was added to patient records in MongoDB (Sr. #${saved.srNo}).`);
		}
		try {
			await savePatientServer({ data: saved });
		} catch (err) {
			console.error("Failed to save patient to MongoDB Atlas:", err);
		}
	};
	const handleDeletePatient = async (id, name) => {
		setPatients((current) => current.filter((item) => item.id !== id));
		setNotice(`${name}'s record has been removed.`);
		try {
			await deletePatientServer({ data: {
				id,
				name
			} });
		} catch (err) {
			console.error("Failed to remove patient from MongoDB Atlas:", err);
		}
	};
	const handleAddInvoice = async (newInv) => {
		setInvoices((prev) => [newInv, ...prev]);
		setNotice(`Tax Invoice ${newInv.id} created for ${newInv.patient} (${newInv.amount}) and saved to MongoDB.`);
		try {
			await saveInvoiceServer({ data: newInv });
		} catch (err) {
			console.error("Failed to save invoice to MongoDB Atlas:", err);
		}
	};
	const handleUpdateInvoice = async (updated) => {
		setInvoices((prev) => prev.map((inv) => inv.id === updated.id ? updated : inv));
		try {
			await saveInvoiceServer({ data: updated });
		} catch (err) {
			console.error("Failed to update invoice in MongoDB Atlas:", err);
		}
	};
	const handleDeleteInvoice = async (id) => {
		setInvoices((prev) => prev.filter((inv) => inv.id !== id));
		setNotice(`Invoice ${id} has been removed.`);
		try {
			await deleteInvoiceServer({ data: { id } });
		} catch (err) {
			console.error("Failed to remove invoice from MongoDB Atlas:", err);
		}
	};
	(0, import_react.useEffect)(() => {
		if (!notice) return;
		const timer = window.setTimeout(() => setNotice(""), 3200);
		return () => window.clearTimeout(timer);
	}, [notice]);
	const openSection = (target) => {
		if (role && !canAccessSection(role, target)) {
			setNotice("This section is only available to administrators.");
			return;
		}
		setSection(target);
		setPatientSearch("");
		setMobileMenuOpen(false);
	};
	if (authLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-svh place-items-center text-sm text-muted-foreground",
		children: "Checking clinic sign-in…"
	});
	if (!role) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignIn, {});
	getVisibleSections(role);
	const adminName = currentUser.name || (role === "admin" ? "Mitali Gadge" : "Rachel Adams");
	const adminInitials = currentUser.name.trim().split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase() || (role === "admin" ? "MG" : "RA");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-svh",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: `hidden shrink-0 flex-col border-r border-border bg-sidebar transition-[width] duration-200 lg:flex ${sidebarOpen ? "w-64" : "w-20"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
							role,
							active: section,
							collapsed: !sidebarOpen,
							onSelect: openSection,
							patientCount: patients.length
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
						open: mobileMenuOpen,
						onOpenChange: setMobileMenuOpen,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "left",
							className: "w-72 p-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: "Clinic navigation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
								role,
								active: section,
								collapsed: false,
								onSelect: openSection,
								patientCount: patients.length
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
								className: "sticky top-0 z-20 flex h-16 shrink-0 items-center gap-3 border-b border-border bg-card/95 px-4 backdrop-blur sm:px-6 lg:px-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"aria-label": "Open navigation",
										variant: "ghost",
										size: "icon",
										className: "lg:hidden",
										onClick: () => setMobileMenuOpen(true),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"aria-label": sidebarOpen ? "Collapse sidebar" : "Expand sidebar",
										title: sidebarOpen ? "Collapse sidebar" : "Expand sidebar",
										variant: "ghost",
										size: "icon",
										className: "hidden lg:inline-flex",
										onClick: () => setSidebarOpen((current) => !current),
										children: sidebarOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-5 w-px bg-border sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "min-w-0 flex-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-sm text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline",
													children: "Clinic"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "hidden size-3.5 sm:block" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate font-medium text-foreground",
													children: clinicSections.find((item) => item.id === section)?.label
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden items-center gap-2 text-right sm:flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-8 place-items-center rounded-md border border-border bg-muted text-primary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium",
												children: "Wednesday, Oct 21"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 text-muted-foreground" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/feedback",
										target: "_blank",
										className: "hidden sm:inline-flex",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											className: "gap-1.5 text-xs border-primary/30 text-primary hover:bg-primary/5 shadow-2xs",
											title: "Open Public Grievance & Feedback Portal",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5" }), " Public Grievance Portal"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										"aria-label": "Notifications",
										title: "Notifications",
										variant: "ghost",
										size: "icon",
										className: "relative",
										onClick: () => setNotice("You're all caught up on notifications."),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-card" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-8 w-px bg-border sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 sm:gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": `Edit ${adminName} profile`,
											title: `Edit Profile: ${adminName} • ${role === "admin" ? "Administrator" : "Staff"}`,
											className: "group flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-2 py-1 text-left transition-all hover:bg-muted hover:border-primary/40 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring",
											onClick: () => setProfileModalOpen(true),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
													className: "size-7 ring-1 ring-border group-hover:ring-primary/40 transition-colors",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
														className: "bg-primary/10 text-[11px] font-bold text-primary",
														children: adminInitials
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "hidden text-left sm:block",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1.5 leading-tight",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors",
															children: adminName
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: "outline",
															className: "text-[9px] uppercase px-1 py-0 font-medium",
															children: role === "admin" ? "Admin" : "Staff"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground truncate max-w-[140px] leading-tight mt-0.5",
														children: currentUser.designation || (role === "admin" ? "Administrator" : "Staff")
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3 text-muted-foreground/70 group-hover:text-foreground transition-colors ml-0.5" })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											className: "size-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10",
											"aria-label": "Sign out",
											title: "Sign out of clinic workspace",
											onClick: async () => {
												await fetch("/api/auth/logout", {
													method: "POST",
													credentials: "same-origin"
												});
												window.location.assign("/");
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										hidden: true,
										"aria-hidden": "true",
										className: "hidden",
										onClick: async () => {
											await fetch("/api/auth/logout", {
												method: "POST",
												credentials: "same-origin"
											});
											window.location.assign("/");
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
												className: "size-8",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
													className: "bg-primary/10 text-xs font-semibold text-primary",
													children: adminInitials
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden text-sm font-semibold md:block",
												children: adminName
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "ml-1 size-4 text-muted-foreground" })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
								className: "min-w-0 flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto w-full max-w-[1440px] px-4 pb-8 pt-7 sm:px-6 sm:pt-8 lg:px-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mb-1 flex items-center gap-2 text-xs font-medium text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[color:var(--chart-2)]" }), "CLINIC OVERVIEW"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
													className: "text-2xl font-semibold tracking-normal sm:text-[26px]",
													children: clinicSections.find((item) => item.id === section)?.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-muted-foreground",
													children: sectionDescriptions[section]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageActions, {
												section,
												onSelect: openSection,
												onNotice: setNotice,
												onAddPatient: openAddModal,
												onCreateInvoice: () => setCreateInvoiceModalOpen(true)
											})]
										}),
										section === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {
											onSelect: openSection,
											onNotice: setNotice,
											onAddPatient: openAddModal,
											onEditPatient: openEditModal,
											onViewPatient: openViewModal,
											patients
										}),
										section === "patients" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientRecords, {
											patients,
											search: patientSearch,
											onSearch: setPatientSearch,
											onAdd: openAddModal,
											onEdit: openEditModal,
											onView: openViewModal,
											onDelete: handleDeletePatient,
											onNotice: setNotice
										}),
										section === "invoices" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceModule, {
											invoices,
											patients,
											onAddInvoice: handleAddInvoice,
											onUpdateInvoice: handleUpdateInvoice,
											onDeleteInvoice: handleDeleteInvoice,
											onNotice: setNotice
										}),
										section === "payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentsModule, {
											patients,
											invoices,
											onNotice: setNotice
										}),
										section === "feedback" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackAdminModule, { onNotice: setNotice }),
										section === "staff" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffManagementModule, { onNotice: setNotice }),
										section === "reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsModule, {
											patients,
											invoices,
											dateFilter,
											onDateFilter: setDateFilter
										}),
										section === "activity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityView, {}),
										section === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, {
											currentUser,
											onUpdateUser: (updated) => setCurrentUser(updated),
											onNotice: setNotice,
											onOpenEditModal: () => setProfileModalOpen(true)
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8",
								children: [
									"Sailor's Medical Clinic ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-1.5",
										children: "·"
									}),
									" Centre for Marine Medical Examinations",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-1.5",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/feedback",
										target: "_blank",
										className: "text-primary font-medium hover:underline inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3" }), " Candidate Feedback Form"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-1.5",
										children: "·"
									}),
									" MongoDB Atlas Connected"
								]
							})
						]
					})
				]
			}),
			notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "fixed bottom-5 right-5 z-[60] flex max-w-[calc(100vw-2rem)] items-start gap-2.5 rounded-md border border-border bg-card px-4 py-3 text-sm shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-accent-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notice }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"aria-label": "Dismiss notification",
						variant: "ghost",
						size: "icon",
						className: "-mr-2 -mt-1 size-7",
						onClick: () => setNotice(""),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientModal, {
				open: patientModalOpen,
				onOpenChange: setPatientModalOpen,
				patientToEdit: selectedPatientForEdit,
				nextSrNo,
				onSave: handleSavePatient
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateInvoiceModal, {
				open: createInvoiceModalOpen,
				onOpenChange: setCreateInvoiceModalOpen,
				patients,
				nextInvoiceNum: invoices.length + 85,
				onSave: handleAddInvoice
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientDetailModal, {
				patient: selectedPatientForView,
				open: detailModalOpen,
				onOpenChange: setDetailModalOpen,
				onEdit: (p) => {
					setSelectedPatientForEdit(p);
					setPatientModalOpen(true);
				},
				onPrintNotice: () => setNotice("Medical dossier sent to print queue.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminProfileModal, {
				open: profileModalOpen,
				onOpenChange: setProfileModalOpen,
				currentUser,
				onProfileUpdated: (updated) => setCurrentUser(updated),
				onNotice: setNotice
			})
		]
	});
}
function SidebarContent({ role, active, collapsed, onSelect, patientCount }) {
	const groups = getVisibleSections(role).reduce((acc, item) => {
		acc[item.group] = [...acc[item.group] ?? [], item];
		return acc;
	}, {});
	const displayCount = patientCount ?? initialPatients.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex h-16 shrink-0 items-center border-b border-sidebar-border px-4 ${collapsed ? "justify-center px-2" : "gap-3"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicLogo, {
					size: "sm",
					showText: !collapsed,
					subtitle: "Marine Medical Centre"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto px-3 py-5",
				children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center gap-2 rounded-md border border-sidebar-border bg-muted/50 px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-8 shrink-0 place-items-center rounded bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs font-semibold",
								children: "Sailors Medical Clinic"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 truncate text-[10px] text-muted-foreground",
								children: "CBD Belapur, Navi Mumbai"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 shrink-0 text-muted-foreground" })
					]
				}), Object.entries(groups).map(([groupName, items], groupIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: groupIndex > 0 ? "mt-7" : "",
					children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 px-3 text-[10px] font-semibold uppercase text-muted-foreground",
						children: groupName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": groupName,
						className: "space-y-1",
						children: items.map((item) => {
							const Icon = navIcons[item.id];
							const selected = active === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								title: collapsed ? item.label : void 0,
								"aria-current": selected ? "page" : void 0,
								"aria-label": collapsed ? item.label : void 0,
								onClick: () => onSelect(item.id),
								className: `h-9 w-full justify-start gap-2.5 rounded-md px-3 text-[13px] font-medium ${selected ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary" : "text-muted-foreground hover:text-foreground"} ${collapsed ? "justify-center px-0" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[17px] shrink-0" }),
									!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: item.label
									}),
									!collapsed && item.id === "patients" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto rounded px-1.5 py-0.5 text-[10px] text-muted-foreground font-semibold",
										children: displayCount.toString().padStart(2, "0")
									})
								]
							}, item.id);
						})
					})]
				}, groupName))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `border-t border-sidebar-border p-3 ${collapsed ? "flex justify-center" : ""}`,
				children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					className: "size-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
						className: "bg-secondary text-xs font-semibold text-secondary-foreground",
						children: role === "admin" ? "MG" : "RA"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 rounded-md px-2 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "size-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
								className: "bg-secondary text-xs font-semibold text-secondary-foreground",
								children: role === "admin" ? "MG" : "RA"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs font-semibold",
								children: role === "admin" ? "Mitali Gadge" : "Rachel Adams"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3" }), role === "admin" ? "Administrator" : "Staff member"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4 text-muted-foreground" })
					]
				})
			})
		]
	});
}
function SignIn() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const signIn = async (event) => {
		event.preventDefault();
		setLoading(true);
		setError("");
		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "same-origin",
				body: JSON.stringify({
					email,
					password
				})
			});
			const result = await response.json();
			if (!response.ok) {
				setError(result.message || "Unable to sign in.");
				return;
			}
			window.location.assign("/");
		} catch {
			setError("Unable to connect to the clinic server.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grid min-h-svh bg-card lg:grid-cols-[1.05fr_0.95fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "clinic-grid relative hidden min-h-svh overflow-hidden border-r border-border bg-secondary/50 px-12 py-10 lg:flex lg:flex-col xl:px-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-12%] top-[18%] size-[450px] rounded-full border border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-3%] top-[26%] size-[310px] rounded-full border border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[8%] top-[35%] size-[145px] rounded-full border border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicLogo, {
						size: "lg",
						subtitle: "Centre for Marine Medical Examinations"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative my-auto max-w-[560px] pb-12 pt-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-4 flex items-center gap-2 text-xs font-medium uppercase text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary" }), " D.G. SHIPPING APPROVED CLINICAL CENTRE"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-[500px] text-[44px] font-semibold leading-[1.1] tracking-normal text-foreground xl:text-[52px]",
							children: "Centre for Marine Medical Examinations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-[430px] text-base leading-7 text-muted-foreground",
							children: "CBD Belapur, Navi Mumbai • Tel: +91 95614 50104 • Email: medical@sailorsmedical.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center gap-3 border-t border-border pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex -space-x-2",
									children: [
										"MB",
										"DK",
										"RA",
										"AK"
									].map((initials) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										className: "size-9 border-2 border-background",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
											className: "bg-card text-[10px] font-semibold text-secondary-foreground",
											children: initials
										})
									}, initials))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs leading-5 text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: "D.G. Approved Doctors & Care Team"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"ISO 9001:2015 & ISO 45001:2018 Certified"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "ml-auto size-8 text-primary/40" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-between border-t border-border pt-5 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Sailor's Medical Clinic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-primary" }), " D.G. Shipping Govt. of India Approved"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex min-h-svh items-center justify-center px-5 py-10 sm:px-10 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-[430px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicLogo, {
							size: "md",
							subtitle: "Marine Medical Examinations"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 text-xs font-medium uppercase text-primary",
								children: "Secure Portal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[28px] font-semibold leading-tight",
								children: "Sign in to your workspace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Enter your verified clinic credentials to continue."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "space-y-4",
						onSubmit: signIn,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "clinic-email",
									className: "text-sm font-medium",
									children: "Email address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "clinic-email",
									type: "email",
									autoComplete: "username",
									placeholder: "medical@sailorsmedical.com",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									required: true,
									disabled: loading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "clinic-password",
									className: "text-sm font-medium",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "clinic-password",
										type: showPassword ? "text" : "password",
										autoComplete: "current-password",
										placeholder: "Enter password",
										value: password,
										onChange: (event) => setPassword(event.target.value),
										required: true,
										disabled: loading,
										className: "pr-16"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword((current) => !current),
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-primary",
										children: showPassword ? "Hide" : "Show"
									})]
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "rounded-md border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm text-destructive",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								disabled: loading,
								className: "h-11 w-full justify-center rounded-md text-sm font-semibold",
								children: [loading ? "Signing in…" : "Sign in", !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg border border-primary/20 bg-primary/5 p-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/feedback",
							className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5" }), " Patient Grievance & Feedback Portal →"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-muted-foreground",
							children: "Official public submission for reviews, complaints, and inquiries"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-5 flex items-center gap-3 text-[11px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CLINICAL WORKSPACE" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-xs leading-5 text-muted-foreground",
						children: [
							"Workspace access is granted by your clinic administrator.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"All data is synced with MongoDB Atlas."
						]
					})
				]
			})
		})]
	});
}
function PageActions({ section, onSelect, onNotice, onAddPatient, onCreateInvoice }) {
	if (section === "patients") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: onAddPatient,
		className: "gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundPlus, { className: "size-4" }), "Add patient"]
	});
	if (section === "dashboard") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: () => onNotice("Today's clinic summary is ready to download."),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Export"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: onAddPatient,
			className: "gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New patient"]
		})]
	});
	if (section === "invoices") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: onCreateInvoice,
		className: "gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlusCorner, { className: "size-4" }), " New invoice"]
	});
	if (section === "staff") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => onNotice("Invite link copied for a new team member."),
		className: "gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundPlus, { className: "size-4" }), " Add team member"]
	});
	return null;
}
function Dashboard({ onSelect, onNotice, onAddPatient, onEditPatient, onViewPatient, patients }) {
	const metricCards = [
		{
			label: "Total seafarers",
			value: `${2480 + patients.length}`,
			detail: "+14 registered today",
			positive: true,
			icon: Users,
			shade: "bg-secondary text-secondary-foreground",
			trend: "M0 18 L10 15 L20 17 L30 8 L40 11 L50 4 L60 7"
		},
		{
			label: "Medicals today",
			value: "38",
			detail: "USG & X-Ray active",
			positive: true,
			icon: CalendarDays,
			shade: "bg-accent text-accent-foreground",
			trend: "M0 16 L10 13 L20 15 L30 7 L40 10 L50 2 L60 5"
		},
		{
			label: "Revenue this month",
			value: "₹4,82,900",
			detail: "+6.2% vs last month",
			positive: true,
			icon: WalletCards,
			shade: "bg-[color:color-mix(in_oklab,var(--chart-3)_14%,white)] text-foreground",
			trend: "M0 19 L10 16 L20 12 L30 15 L40 8 L50 7 L60 2"
		},
		{
			label: "Pending medicals",
			value: "6",
			detail: "Awaiting USG / Lab",
			positive: false,
			icon: FileText,
			shade: "bg-[color:color-mix(in_oklab,var(--chart-4)_12%,white)] text-foreground",
			trend: "M0 5 L10 9 L20 4 L30 11 L40 8 L50 15 L60 13"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 2xl:grid-cols-4",
				children: metricCards.map((metric) => {
					const Icon = metric.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-md border border-border bg-card p-4 sm:p-[18px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-medium text-muted-foreground",
								children: metric.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid size-8 place-items-center rounded ${metric.shade}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[17px]" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-end justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[26px] font-semibold leading-none",
								children: metric.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `mt-2 flex items-center gap-1 text-[11px] ${metric.positive ? "text-accent-foreground" : "text-muted-foreground"}`,
								children: [metric.positive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-3.5" }), metric.detail]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								"aria-hidden": "true",
								viewBox: "0 0 60 24",
								className: "mb-1 h-8 w-[62px] text-primary/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: metric.trend,
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})]
						})]
					}, metric.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.85fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 rounded-md border border-border bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Appointments today"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Your clinic schedule at a glance"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => onNotice("Full appointment calendar opened."),
								children: ["View schedule ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 ml-1" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								className: "hover:bg-transparent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "w-[105px] pl-5",
										children: "Time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Candidate" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "hidden md:table-cell",
										children: "Provider"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "hidden sm:table-cell",
										children: "Examination"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										className: "pr-5 text-right",
										children: "Status"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: appointmentRecords.map((appointment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "whitespace-nowrap pl-5 text-xs font-medium",
									children: appointment.time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										className: "size-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
											className: "bg-secondary text-[9px] font-semibold text-secondary-foreground",
											children: appointment.initials
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "whitespace-nowrap text-xs font-medium",
										children: appointment.patient
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "hidden whitespace-nowrap text-xs text-muted-foreground md:table-cell",
									children: appointment.doctor
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "hidden whitespace-nowrap text-xs text-muted-foreground sm:table-cell",
									children: appointment.type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "pr-5 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: appointment.status })
								})
							] }, appointment.patient)) })] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onSelect("patients"),
							className: "flex w-full items-center justify-between border-t border-border px-5 py-3 text-xs font-medium text-primary hover:bg-muted/40",
							children: ["See all patient records ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-md border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Quick actions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Frequently used shortcuts"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4 text-muted-foreground" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2.5 p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
									icon: UserRoundPlus,
									title: "Add patient",
									detail: "Popup form with CDC & INDoS",
									onClick: onAddPatient
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
									icon: FilePlusCorner,
									title: "New invoice",
									detail: "Candidate billing draft",
									onClick: () => onSelect("invoices")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
									icon: CreditCard,
									title: "Record payment",
									detail: "Paid / Own status",
									onClick: () => onSelect("payments")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
									icon: FileChartColumnIncreasing,
									title: "View reports",
									detail: "DG Shipping statistics",
									onClick: () => onSelect("reports")
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-md border border-border bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border px-4 py-4 sm:px-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm font-semibold",
									children: "Recent activity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Latest updates from your team"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-8 px-2 text-xs text-primary",
									onClick: () => onSelect("activity"),
									children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 ml-1" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-border px-4 sm:px-5",
								children: activityRecords.slice(0, 3).map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3 py-3.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 grid size-7 shrink-0 place-items-center rounded bg-secondary text-secondary-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs leading-5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: entry.user
													}),
													" ",
													entry.action.toLowerCase()
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-[11px] text-muted-foreground",
												children: entry.subject
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "whitespace-nowrap pt-0.5 text-[10px] text-muted-foreground",
											children: entry.time
										})
									]
								}, entry.subject))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onSelect("activity"),
								className: "flex w-full items-center justify-between border-t border-border px-5 py-3 text-xs font-medium text-primary hover:bg-muted/40",
								children: ["Open activity log ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Recently examined seafarers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Latest marine candidate records with full fields"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: onAddPatient,
							className: "gap-1.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), " Add candidate"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "text-xs text-primary",
							onClick: () => onSelect("patients"),
							children: ["All patients ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 ml-1" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTable, {
					patients: patients.slice(0, 4),
					compact: true,
					onEdit: onEditPatient,
					onView: onViewPatient
				})]
			})
		]
	});
}
function QuickAction({ icon: Icon, title, detail, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "outline",
		onClick,
		className: "h-auto min-h-[86px] flex-col items-start justify-start gap-2 rounded-md whitespace-normal px-3 py-3 text-left hover:border-primary/50 transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-7 place-items-center rounded bg-secondary text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "w-full text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs font-semibold text-foreground",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-[10px] font-normal leading-4 text-muted-foreground",
				children: detail
			})]
		})]
	});
}
function PatientRecords({ patients, search, onSearch, onAdd, onEdit, onView, onDelete, onNotice }) {
	const filtered = (0, import_react.useMemo)(() => patients.filter((patient) => `${patient.name} ${patient.id} ${patient.rank || ""} ${patient.companyName || ""} ${patient.vesselName || patient.vessel || ""} ${patient.certificateNo || ""} ${patient.indosNo || ""} ${patient.cdcNo || ""} ${patient.typeOfMedical || ""} ${patient.paymentStatus || ""} ${patient.condition || ""}`.toLowerCase().includes(search.toLowerCase())), [patients, search]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmallMetric, {
						label: "Total seafarer records",
						value: `${patients.length}`,
						icon: Users,
						note: "DG Shipping approved register"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmallMetric, {
						label: "Paid / Cleared",
						value: `${patients.filter((p) => p.paymentStatus === "Paid").length}`,
						icon: Activity,
						note: "Company & candidate settled"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmallMetric, {
						label: "Own / Pending",
						value: `${patients.filter((p) => p.paymentStatus !== "Paid").length}`,
						icon: CalendarDays,
						note: "Pending verification"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-md border border-border bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "All seafarer patient records"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "text-[10px] font-mono",
								children: [filtered.length, " records"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Includes INDoS, CDC, Certificate, USG/X-Ray, Time In/Out & Payment Status (Paid / Own)"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:flex-row sm:items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative sm:w-[260px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"aria-label": "Search patient records",
										placeholder: "Search name, INDoS, CDC, rank...",
										value: search,
										onChange: (event) => onSearch(event.target.value),
										className: "h-9 pl-9 text-xs"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => onNotice("Filtered by all active statuses."),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5 mr-1" }), " Filter"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: onAdd,
									className: "gap-1.5 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundPlus, { className: "size-4" }), " Add patient"]
								})
							]
						})]
					}),
					filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTable, {
						patients: filtered,
						onEdit,
						onView,
						onDelete
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						title: "No matching seafarer found",
						detail: "Try another candidate name, INDoS, CDC, or certificate number."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Showing ",
							filtered.length,
							" of ",
							patients.length,
							" records"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"aria-label": "Previous page",
									variant: "outline",
									size: "icon",
									className: "size-7",
									onClick: () => onNotice("Viewing latest seafarer records."),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									className: "size-7 text-xs font-semibold",
									"aria-current": "page",
									children: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"aria-label": "Next page",
									variant: "outline",
									size: "icon",
									className: "size-7",
									onClick: () => onNotice("All demo records are displayed."),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "rounded-xl border border-primary/25 bg-gradient-to-r from-primary/5 via-card to-secondary/30 p-5 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-foreground",
							children: "Examine & Register New Marine Candidate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: "Opens complete popup form: Candidate Details (with Rank, Company, Vessel Name, INDoS & CDC Credentials), Medical & Timing, Payment & Invoice."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: onAdd,
						className: "gap-2 shrink-0 font-medium shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundPlus, { className: "size-4" }), " Add Patient Record"]
					})]
				})
			})
		]
	});
}
function PatientTable({ patients, compact = false, onEdit, onView, onDelete }) {
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "hover:bg-transparent",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[60px] pl-5 text-xs",
					children: "Sr."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[190px] text-xs",
					children: "Candidate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[170px] text-xs",
					children: "Rank & Company"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[140px] text-xs",
					children: "Payment (Paid/Own)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "hidden min-w-[120px] md:table-cell text-xs",
					children: "Time In/Out"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "pr-5 text-right text-xs",
					children: "Actions"
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: patients.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "hover:bg-muted/40 transition-colors",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "pl-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "font-mono text-[11px] font-semibold bg-muted/40",
						children: ["#", patient.srNo]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						className: "size-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-secondary text-[10px] font-semibold text-secondary-foreground",
							children: patient.initials
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onView?.(patient),
						className: "text-left font-semibold text-xs hover:text-primary transition-colors hover:underline block",
						children: patient.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-muted-foreground",
						children: patient.phone
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-foreground",
					children: patient.rank
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px] text-muted-foreground truncate max-w-[150px]",
					children: [patient.companyName, patient.vesselName || patient.vessel ? ` · ${patient.vesselName || patient.vessel}` : ""]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: patient.paymentStatus === "Paid" ? "default" : "outline",
						className: "text-[10px] px-1.5 py-0",
						children: patient.paymentStatus
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold",
						children: patient.paymentAmount
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] text-muted-foreground",
					children: patient.paymentMode
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "hidden md:table-cell",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							patient.timeIn,
							" - ",
							patient.timeOut
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "pr-5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "h-7 gap-1 px-2 text-xs font-medium text-primary hover:bg-primary/10 border-primary/30",
							onClick: () => onEdit?.(patient),
							title: "Edit Patient Details",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3" }), "Edit"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: "size-7 p-0",
							onClick: () => onView?.(patient),
							title: "View Medical Dossier",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" })
						})]
					})
				})
			]
		}, patient.id)) })] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "hover:bg-transparent",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[55px] pl-5 text-xs",
					children: "Sr."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[200px] text-xs",
					children: "Candidate & Rank"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[170px] text-xs",
					children: "Credentials (INDoS / CDC / Cert)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[180px] text-xs",
					children: "Medical & Company"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[160px] text-xs",
					children: "USG / X-Ray"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[130px] text-xs",
					children: "Time In & Out"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[160px] text-xs",
					children: "Payment (Paid / Own)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "min-w-[110px] text-xs",
					children: "Exam Date"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "pr-5 text-right min-w-[130px] text-xs",
					children: "Actions"
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: patients.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "hover:bg-muted/40 transition-colors",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "pl-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "font-mono text-xs font-bold bg-muted/60",
						children: ["#", patient.srNo]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						className: "size-9 border border-primary/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-primary/10 text-[11px] font-bold text-primary",
							children: patient.initials
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onView?.(patient),
							className: "text-left font-semibold text-xs text-foreground hover:text-primary transition-colors hover:underline block",
							children: patient.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 mt-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-secondary/80 px-1 py-0.2 text-[10px] font-medium text-secondary-foreground",
								children: patient.rank
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] text-muted-foreground",
								children: [
									patient.age,
									"y · ",
									patient.dob
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground mt-0.5",
							children: patient.phone
						})
					] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-0.5 font-mono text-[11px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-sans",
								children: "Cert:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground tracking-wide",
								children: patient.certificateNo || "—"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-sans",
								children: "INDoS:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: patient.indosNo || "—"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-sans",
								children: "CDC:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: patient.cdcNo || "—"
							})]
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold text-foreground truncate max-w-[170px]",
						title: patient.companyName,
						children: patient.companyName
					}),
					(patient.vesselName || patient.vessel) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] text-primary flex items-center gap-1 font-medium truncate max-w-[170px]",
						title: patient.vesselName || patient.vessel,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-3" }),
							" ",
							patient.vesselName || patient.vessel
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden",
						children: patient.companyName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted-foreground truncate max-w-[170px]",
						title: patient.typeOfMedical,
						children: patient.typeOfMedical
					}),
					patient.invoiceNo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-[10px] text-primary/80 mt-0.5",
						children: ["Inv: ", patient.invoiceNo]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-1 text-xs font-medium text-accent-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate max-w-[140px]",
						title: patient.usgXray,
						children: patient.usgXray
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-foreground whitespace-nowrap",
					children: patient.timeIn
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[10px] text-muted-foreground whitespace-nowrap",
					children: ["to ", patient.timeOut]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: patient.paymentStatus === "Paid" ? "default" : "outline",
						className: "text-[10px] font-semibold px-2 py-0.5",
						children: patient.paymentStatus
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-foreground",
						children: patient.paymentAmount
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[10px] text-muted-foreground mt-0.5 truncate max-w-[150px]",
					children: [
						patient.paymentMode,
						" · ",
						patient.transactionId || patient.paymentProof || "—"
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "whitespace-nowrap text-xs text-muted-foreground",
					children: patient.date || patient.lastVisit
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "pr-5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "h-7 gap-1 px-2.5 text-xs font-medium text-primary hover:bg-primary/10 border-primary/30 shadow-xs",
								onClick: () => onEdit?.(patient),
								title: "Edit candidate record",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3" }), "Edit"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "size-7 p-0",
								onClick: () => onView?.(patient),
								title: "View seafarer dossier",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "size-7 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10",
								onClick: () => onDelete?.(patient.id, patient.name),
								title: "Remove record",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})
						]
					})
				})
			]
		}, patient.id)) })] })
	});
}
function ActivityView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-md border border-border bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-4 py-4 sm:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Activity log"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Recent events across your clinic workspace"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {}), " Filters"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "hover:bg-transparent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "pl-5",
							children: "Team member"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Action" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Record" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Category" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "pr-5",
							children: "Time"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: activityRecords.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap pl-5 text-xs font-medium",
						children: event.user
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap text-xs",
						children: event.action
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap text-xs text-muted-foreground",
						children: event.subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "text-[10px]",
						children: event.kind
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap pr-5 text-xs text-muted-foreground",
						children: event.time
					})
				] }, `${event.user}-${event.subject}`)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableFooterNote, { text: "Showing 6 recent activities" })
		]
	});
}
function SettingsView({ currentUser, onUpdateUser, onNotice, onOpenEditModal }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("admin");
	const [name, setName] = (0, import_react.useState)(currentUser.name);
	const [phone, setPhone] = (0, import_react.useState)(currentUser.phone || "");
	const [designation, setDesignation] = (0, import_react.useState)(currentUser.designation || "");
	const [regNo, setRegNo] = (0, import_react.useState)(currentUser.regNo || "");
	const [department, setDepartment] = (0, import_react.useState)(currentUser.department || "");
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setName(currentUser.name);
		setPhone(currentUser.phone || "");
		setDesignation(currentUser.designation || "");
		setRegNo(currentUser.regNo || "");
		setDepartment(currentUser.department || "");
	}, [currentUser]);
	const initials = name.trim().split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase() || (currentUser.role === "admin" ? "MG" : "RA");
	async function handleSaveAdminProfile(e) {
		e.preventDefault();
		if (!name.trim()) {
			onNotice("Please specify the administrator name.");
			return;
		}
		setIsSaving(true);
		try {
			const response = await fetch("/api/auth/profile", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					phone: phone.trim(),
					designation: designation.trim(),
					regNo: regNo.trim(),
					department: department.trim()
				})
			});
			if (!response.ok) throw new Error("Failed to save administrator profile.");
			const data = await response.json();
			onUpdateUser({
				...currentUser,
				name: name.trim(),
				phone: phone.trim(),
				designation: designation.trim(),
				regNo: regNo.trim(),
				department: department.trim(),
				...data.user
			});
			onNotice("Admin profile credentials saved to MongoDB Atlas.");
		} catch {
			onNotice("Failed to save admin profile to database.");
		} finally {
			setIsSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-start gap-5 xl:grid-cols-[220px_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Settings categories",
			className: "flex gap-1 overflow-x-auto border-b border-border pb-2 xl:block xl:space-y-1 xl:border-b-0 xl:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `flex w-full shrink-0 items-center gap-2.5 rounded-md px-3 py-2 text-left text-xs font-medium transition-colors ${activeTab === "admin" ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-muted"}`,
					onClick: () => setActiveTab("admin"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" }), "Administrator profile"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `flex w-full shrink-0 items-center gap-2.5 rounded-md px-3 py-2 text-left text-xs font-medium transition-colors ${activeTab === "clinic" ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-muted"}`,
					onClick: () => setActiveTab("clinic"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-4" }), "Clinic profile"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `flex w-full shrink-0 items-center gap-2.5 rounded-md px-3 py-2 text-left text-xs font-medium transition-colors ${activeTab === "access" ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-muted"}`,
					onClick: () => setActiveTab("access"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), "Access & roles"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full shrink-0 items-center gap-2.5 rounded-md px-3 py-2 text-left text-xs font-medium text-muted-foreground hover:bg-muted",
					onClick: () => onNotice("Preferences settings opened."),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), "Preferences"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full shrink-0 items-center gap-2.5 rounded-md px-3 py-2 text-left text-xs font-medium text-muted-foreground hover:bg-muted",
					onClick: () => onNotice("Notification channels are all active."),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), "Notifications"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				activeTab === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-md border border-border bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm font-semibold",
									children: "Administrator Profile & Medical Credentials"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "text-[10px]",
									children: "MongoDB Synced"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Official personal credentials and licensing information displayed across medical certificates and reports"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: onOpenEditModal,
								className: "gap-1.5 text-xs border-primary/30 text-primary hover:bg-primary/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), " Quick Edit Modal"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-border bg-muted/20 p-4 sm:p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										className: "size-12 ring-2 ring-primary/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
											className: "bg-primary text-primary-foreground font-bold",
											children: initials
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-sm text-foreground",
												children: name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "text-[9px] uppercase",
												children: currentUser.role
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-primary font-medium mt-0.5",
											children: designation || "Administrator"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-muted-foreground flex items-center gap-2 mt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentUser.email }), phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["• ", phone] })]
										})
									] })]
								}), regNo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md border border-border bg-background p-2 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[9px] uppercase tracking-wider text-muted-foreground",
										children: "Council Reg. No."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono font-semibold",
										children: regNo
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveAdminProfile,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 p-4 sm:grid-cols-2 sm:p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Administrator Name",
										htmlFor: "admin-edit-name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "admin-edit-name",
											value: name,
											onChange: (e) => setName(e.target.value),
											placeholder: "e.g. Dr. Mitali Gadge",
											required: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Official Login Email",
										htmlFor: "admin-edit-email",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "admin-edit-email",
											value: currentUser.email,
											readOnly: true,
											disabled: true,
											className: "bg-muted/50 cursor-not-allowed"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Mobile / Contact Phone",
										htmlFor: "admin-edit-phone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "admin-edit-phone",
											value: phone,
											onChange: (e) => setPhone(e.target.value),
											placeholder: "+91 95614 50104"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Professional Designation",
										htmlFor: "admin-edit-designation",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "admin-edit-designation",
											value: designation,
											onChange: (e) => setDesignation(e.target.value),
											placeholder: "Chief Medical Officer / Clinic Administrator"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Medical Council / DG Reg. No.",
										htmlFor: "admin-edit-regno",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "admin-edit-regno",
											value: regNo,
											onChange: (e) => setRegNo(e.target.value),
											placeholder: "MMC-2015-84920 / DG-SMC-04"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Clinical Division / Department",
										htmlFor: "admin-edit-dept",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "admin-edit-dept",
											value: department,
											onChange: (e) => setDepartment(e.target.value),
											placeholder: "Marine Medical Examination & DG Shipping Care"
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end gap-2 border-t border-border px-4 py-3 sm:px-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									size: "sm",
									disabled: isSaving,
									className: "gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), isSaving ? "Saving to MongoDB..." : "Save Admin Profile"]
								})
							})]
						})
					]
				}),
				activeTab === "clinic" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-md border border-border bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Clinic profile"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "The details your team sees across the workspace"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 p-4 sm:grid-cols-2 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Clinic name",
									htmlFor: "setting-clinic-name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "setting-clinic-name",
										defaultValue: "Sailor's Medical Clinic"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Contact email",
									htmlFor: "setting-clinic-email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "setting-clinic-email",
										defaultValue: "medical@sailorsmedical.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone number",
									htmlFor: "setting-clinic-phone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "setting-clinic-phone",
										defaultValue: "+91 95614 50104"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Location",
									htmlFor: "setting-clinic-location",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "setting-clinic-location",
										defaultValue: "Shop No. 21, Punit Tower - 1, CBD Belapur, Navi Mumbai"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Timezone",
									htmlFor: "setting-clinic-timezone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "setting-clinic-timezone",
										defaultValue: "India Standard Time (IST, UTC+5:30)"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Clinic hours",
									htmlFor: "setting-clinic-hours",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "setting-clinic-hours",
										defaultValue: "Monday – Saturday, 8:30 AM – 6:30 PM"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end border-t border-border px-4 py-3 sm:px-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => onNotice("Clinic profile saved."),
								children: "Save changes"
							})
						})
					]
				}),
				activeTab === "access" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-md border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border px-4 py-4 sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Workspace access"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Current clinic role-based access control"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 p-4 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold",
								children: "Admin access"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-5 text-muted-foreground",
								children: "Full access to all clinic areas: Patient Records, Invoices, Payments, Grievances & Reviews, Staff Management, Reports, Activity Logs, and System Settings."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold",
								children: "Staff access"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-5 text-muted-foreground",
								children: "Access to daily clinical operations: Dashboard, Patient Records, Invoices, Payments, and Reports."
							})] })]
						})]
					})]
				})
			]
		})]
	});
}
function SmallMetric({ label, value, icon: Icon, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-2xl font-semibold",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-[11px] text-muted-foreground",
				children: note
			})
		]
	});
}
function StatusBadge({ status }) {
	const tone = /paid|active|completed|on duty/i.test(status) ? "border-transparent bg-accent text-accent-foreground" : /overdue|refunded/i.test(status) ? "border-transparent bg-destructive/10 text-destructive" : /pending|upcoming|processing|follow-up|break/i.test(status) ? "border-transparent bg-secondary text-secondary-foreground" : "border-border bg-muted text-muted-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: `whitespace-nowrap px-2 py-0.5 text-[10px] font-medium ${tone}`,
		children: status
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "text-xs font-medium",
			children: label
		}), children]
	});
}
function TableFooterNote({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2 border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"aria-label": "Previous page",
					variant: "outline",
					size: "icon",
					className: "size-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"aria-current": "page",
					size: "icon",
					className: "size-7",
					children: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"aria-label": "Next page",
					variant: "outline",
					size: "icon",
					className: "size-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
				})
			]
		})]
	});
}
function EmptyState({ title, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center px-4 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-6 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: detail
			})
		]
	});
}
//#endregion
export { ClinicApp as component };
