import { o as __toESM } from "../_runtime.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ratingOptions, n as feedbackQuestions } from "./feedback-Clu2AqVp.mjs";
import { p as submitFeedbackServer } from "./clinic.server-CScDC1af.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as ClinicLogo, t as Button } from "./ClinicLogo-vQhzZWTZ.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Z as CircleCheck, ft as ArrowLeft, v as Send, w as Printer, x as RotateCcw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-OcXBpJrf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-dUg28igB.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error("Application error:", error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sailors Medical Clinic · Marine Medical Examinations" },
			{
				name: "description",
				content: "Sailors Medical Clinic - Centre for Marine Medical Examinations by DG Shipping Govt. of India Approved Doctors. CBD Belapur, Navi Mumbai."
			},
			{
				name: "author",
				content: "Sailors Medical Clinic"
			},
			{
				property: "og:title",
				content: "Sailors Medical Clinic · Marine Medical Examinations"
			},
			{
				property: "og:description",
				content: "Centre for Marine Medical Examinations by DG Shipping Govt. of India Approved Doctors."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.png"
			},
			{
				rel: "alternate icon",
				href: "/favicon.ico"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$1 = () => import("./routes-DBivm53y.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sailors Medical Clinic | Centre for Marine Medical Examinations" },
		{
			name: "description",
			content: "D.G. Shipping Approved Marine Medical Examination Centre, CBD Belapur, Navi Mumbai."
		},
		{
			property: "og:title",
			content: "Sailors Medical Clinic | Marine Medical Examinations"
		},
		{
			property: "og:description",
			content: "D.G. Shipping Approved Marine Medical Examination Centre, CBD Belapur, Navi Mumbai."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./db-test-B7gLTiGI.mjs");
var Route$1 = createFileRoute("/db-test")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route = createFileRoute("/feedback")({
	head: () => ({ meta: [{ title: "Feedback Form | Sailor's Medical Clinic - Centre for Marine Medical Examinations" }, {
		name: "description",
		content: "Official Candidate Feedback Form for Sailor's Medical Clinic, approved by the D.G. Shipping Govt. of India."
	}] }),
	component: SailorFeedbackFormPage
});
function SailorFeedbackFormPage() {
	const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const [name, setName] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)(todayStr);
	const [companyName, setCompanyName] = (0, import_react.useState)("");
	const [vessel, setVessel] = (0, import_react.useState)("");
	const [rank, setRank] = (0, import_react.useState)("");
	const [passportOrCdcNo, setPassportOrCdcNo] = (0, import_react.useState)("");
	const [indosNo, setIndosNo] = (0, import_react.useState)("");
	const [mobileNo, setMobileNo] = (0, import_react.useState)("+91 ");
	const [email, setEmail] = (0, import_react.useState)("");
	const [ratings, setRatings] = (0, import_react.useState)({
		timeTakenAtReception: "Good",
		skillAndFriendlinessTechnician: "Good",
		ecgAudiometryTechnician: "Good",
		guidanceByStaffDuringWait: "Good",
		hygieneCleanlinessClinics: "Good",
		friendlinessMedicalStaff: "Good",
		interactionWithDoctor: "Good",
		turnaroundTimeReports: "Good"
	});
	const [suggestionsComments, setSuggestionsComments] = (0, import_react.useState)("");
	const [candidateSignature, setCandidateSignature] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const [submittedRecord, setSubmittedRecord] = (0, import_react.useState)(null);
	const handleRatingChange = (qId, val) => {
		setRatings((prev) => ({
			...prev,
			[qId]: val
		}));
	};
	async function handleSubmit(event) {
		event.preventDefault();
		setErrorMessage("");
		if (!name.trim()) {
			setErrorMessage("Please enter candidate name.");
			return;
		}
		if (!mobileNo.trim() || mobileNo.trim() === "+91") {
			setErrorMessage("Please enter a valid mobile number.");
			return;
		}
		setIsSubmitting(true);
		try {
			const payload = {
				name: name.trim(),
				date,
				companyName: companyName.trim(),
				vessel: vessel.trim(),
				rank: rank.trim(),
				passportOrCdcNo: passportOrCdcNo.trim(),
				indosNo: indosNo.trim(),
				mobileNo: mobileNo.trim(),
				email: email.trim(),
				timeTakenAtReception: ratings.timeTakenAtReception,
				skillAndFriendlinessTechnician: ratings.skillAndFriendlinessTechnician,
				ecgAudiometryTechnician: ratings.ecgAudiometryTechnician,
				guidanceByStaffDuringWait: ratings.guidanceByStaffDuringWait,
				hygieneCleanlinessClinics: ratings.hygieneCleanlinessClinics,
				friendlinessMedicalStaff: ratings.friendlinessMedicalStaff,
				interactionWithDoctor: ratings.interactionWithDoctor,
				turnaroundTimeReports: ratings.turnaroundTimeReports,
				suggestionsComments: suggestionsComments.trim(),
				candidateSignature: candidateSignature.trim() || name.trim()
			};
			let record = null;
			try {
				const result = await submitFeedbackServer({ data: payload });
				if (result?.success && result.record) record = result.record;
				else if (result && !result.success && result.message) {
					setErrorMessage(result.message);
					return;
				}
			} catch (sfErr) {
				console.warn("serverFn call error, falling back to direct endpoint:", sfErr);
			}
			if (!record) {
				const res = await fetch("/api/feedback/submit", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload)
				});
				if (!res.ok) {
					const errData = await res.json().catch(() => null);
					throw new Error(errData?.message || "Failed to submit feedback.");
				}
				const data = await res.json();
				if (!data.success || !data.record) {
					setErrorMessage(data.message || "Failed to submit feedback.");
					return;
				}
				record = data.record;
			}
			setSubmittedRecord(record);
		} catch (err) {
			console.error("Submission failed:", err);
			setErrorMessage("Could not save feedback to MongoDB Atlas. Please verify internet connection and retry.");
		} finally {
			setIsSubmitting(false);
		}
	}
	function handleReset() {
		setName("");
		setDate(todayStr);
		setCompanyName("");
		setVessel("");
		setRank("");
		setPassportOrCdcNo("");
		setIndosNo("");
		setMobileNo("+91 ");
		setEmail("");
		setRatings({
			timeTakenAtReception: "Good",
			skillAndFriendlinessTechnician: "Good",
			ecgAudiometryTechnician: "Good",
			guidanceByStaffDuringWait: "Good",
			hygieneCleanlinessClinics: "Good",
			friendlinessMedicalStaff: "Good",
			interactionWithDoctor: "Good",
			turnaroundTimeReports: "Good"
		});
		setSuggestionsComments("");
		setCandidateSignature("");
		setErrorMessage("");
		setSubmittedRecord(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-100 py-6 text-slate-900 print:bg-white print:py-0 print:text-black dark:bg-slate-950 dark:text-slate-100",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-6 flex max-w-4xl items-center justify-between px-4 print:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "gap-1.5 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), " Back to Clinic Workspace"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => window.print(),
						className: "gap-1.5 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), " Print Physical Form"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-4xl px-4 sm:px-6",
				children: submittedRecord ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-lg rounded-2xl border border-emerald-500/30 bg-card p-8 text-center shadow-xl print:hidden sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 ring-8 ring-emerald-500/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-6 inline-block text-xs font-bold uppercase tracking-wider text-emerald-600",
							children: "Response Submitted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
							children: "Thank You!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground sm:text-base",
							children: "Thank you for taking the time to share your feedback."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-xl border border-border/80 bg-muted/40 p-4 text-xs text-muted-foreground text-left space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border/50 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reference Token ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-primary text-sm",
										children: submittedRecord.id
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border/50 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Candidate Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: submittedRecord.name
									})]
								}),
								submittedRecord.vessel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border/50 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vessel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: submittedRecord.vessel
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Date Recorded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: submittedRecord.date
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-muted-foreground leading-relaxed",
							children: "Your feedback has been securely registered with Sailor's Medical Clinic. Your ratings and suggestions help us continually uphold high medical standards."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: handleReset,
								className: "w-full sm:w-auto text-xs",
								children: "Submit Another Response"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "w-full sm:w-auto text-xs",
									children: "Back to Clinic Home"
								})
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-lg border border-slate-300 bg-white p-6 shadow-md print:rounded-none print:border-none print:p-0 print:shadow-none dark:border-slate-800 dark:bg-card sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "border-b-2 border-slate-800 pb-4 text-center dark:border-slate-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-start sm:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicLogo, {
									size: "lg",
									showText: false
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-left text-[9px] font-bold leading-tight text-slate-700 dark:text-slate-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "ISO 9001: 2015" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "ISO 45001: 2018" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[8px] uppercase tracking-wider text-slate-500",
											children: "CERTIFIED CENTRE"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "font-serif text-2xl font-extrabold uppercase tracking-tight text-blue-950 dark:text-blue-300 sm:text-3xl",
										children: "SAILOR'S MEDICAL CLINIC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-0.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200",
										children: "CENTRE FOR MARINE MEDICAL EXAMINATIONS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-semibold uppercase text-slate-600 dark:text-slate-400",
										children: "BY"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-[11px] font-bold uppercase tracking-wide text-slate-900 dark:text-slate-100",
										children: "THE D.G. SHIPPING GOVT. OF INDIA APPROVED DOCTORS"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 border-t border-slate-300 pt-2 text-[10px] font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300 sm:text-[11px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shop No. 21, Punit Tower - 1, Sec-11, CBD Belapur, Navi Mumbai" }),
								" ",
								"| ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mob.: +91 95614 50104" }),
								" |",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email : medical@sailorsmedical.com" })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-xs sm:text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-3 sm:grid-cols-12 sm:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 sm:col-span-8",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "cand-name",
												className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
												children: "Name :"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "cand-name",
												required: true,
												value: name,
												onChange: (e) => setName(e.target.value),
												placeholder: "Full Name as in CDC / Passport",
												className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 sm:col-span-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "cand-date",
												className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
												children: "Date :"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "cand-date",
												required: true,
												type: "date",
												value: date,
												onChange: (e) => setDate(e.target.value),
												className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-3 sm:grid-cols-12 sm:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 sm:col-span-7",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "cand-company",
												className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
												children: "Company Name :"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "cand-company",
												value: companyName,
												onChange: (e) => setCompanyName(e.target.value),
												placeholder: "Shipping Company / Manning Agency",
												className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 sm:col-span-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "cand-vessel",
												className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
												children: "Vessel :"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "cand-vessel",
												value: vessel,
												onChange: (e) => setVessel(e.target.value),
												placeholder: "e.g. MV Maersk Mc-Kinney",
												className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-3 sm:grid-cols-12 sm:items-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 sm:col-span-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "cand-rank",
													className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
													children: "Rank :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "cand-rank",
													value: rank,
													onChange: (e) => setRank(e.target.value),
													placeholder: "e.g. Master, Chief Officer, Bosun",
													className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 sm:col-span-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "cand-cdc",
													className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
													children: "Passport or CDC No:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "cand-cdc",
													value: passportOrCdcNo,
													onChange: (e) => setPassportOrCdcNo(e.target.value),
													placeholder: "CDC / Passport",
													className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium font-mono text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 sm:col-span-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "cand-indos",
													className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
													children: "Indos No:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "cand-indos",
													value: indosNo,
													onChange: (e) => setIndosNo(e.target.value),
													placeholder: "e.g. 12NL8492",
													className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium font-mono text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 gap-3 sm:grid-cols-12 sm:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 sm:col-span-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "cand-mobile",
												className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
												children: "Mobile No :"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "cand-mobile",
												required: true,
												value: mobileNo,
												onChange: (e) => setMobileNo(e.target.value),
												placeholder: "+91 95614 50104",
												className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium font-mono text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 sm:col-span-7",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "cand-email",
												className: "whitespace-nowrap font-bold text-slate-900 dark:text-slate-100",
												children: "Email Add :"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "cand-email",
												type: "email",
												value: email,
												onChange: (e) => setEmail(e.target.value),
												placeholder: "candidate@maritime.com",
												className: "w-full border-b border-slate-500 bg-transparent px-2 py-1 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none dark:border-slate-600 dark:text-slate-100"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-base font-extrabold uppercase tracking-wide text-blue-950 dark:text-blue-300",
									children: "FEEDBACK FORM"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] italic text-slate-600 dark:text-slate-400",
									children: "Please Tick the appropriate rating"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto rounded border border-slate-300 dark:border-slate-700",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-slate-50 text-[11px] font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-slate-300 dark:border-slate-700",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 pl-3 pr-2 sm:w-1/2",
													children: "Evaluation Criteria"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-1 text-center sm:w-1/8",
													children: "[ Excellent ]"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-1 text-center sm:w-1/8",
													children: "[ Good ]"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-1 text-center sm:w-1/8",
													children: "[ Avg ]"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 pr-3 text-center sm:w-1/8",
													children: "[ Below Avg ]"
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-slate-200 dark:divide-slate-800",
										children: feedbackQuestions.map((q) => {
											const selectedVal = ratings[q.id];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-900/40",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-2.5 pl-3 pr-2 font-medium text-slate-800 dark:text-slate-200",
													children: q.label
												}), ratingOptions.map((opt) => {
													const isChecked = selectedVal === opt;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-2.5 px-1 text-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "inline-flex cursor-pointer items-center justify-center p-1",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "radio",
																name: q.id,
																value: opt,
																checked: isChecked,
																onChange: () => handleRatingChange(q.id, opt),
																className: "size-4 cursor-pointer accent-blue-900"
															})
														})
													}, opt);
												})]
											}, q.id);
										})
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "cand-suggestions",
									className: "block font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100",
									children: "Suggestions / Comments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "cand-suggestions",
										rows: 4,
										maxLength: 3e3,
										value: suggestionsComments,
										onChange: (e) => setSuggestionsComments(e.target.value),
										placeholder: "Write any suggestions, feedback, or appreciation for our clinical staff and doctors...",
										className: "w-full rounded border border-slate-300 bg-transparent p-2.5 text-xs leading-6 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-slate-100"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] leading-relaxed text-slate-600 dark:text-slate-400",
									children: "We thanks you for taking the time to leave your feedback. It is your comments and suggestions that will help us to serve you better."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-end pt-2 text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-64 border-b border-slate-600 pb-1 dark:border-slate-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: candidateSignature,
											onChange: (e) => setCandidateSignature(e.target.value),
											placeholder: "Type name as signature",
											className: "w-full bg-transparent text-right font-serif text-sm italic text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 text-xs font-bold text-slate-900 dark:text-slate-200",
										children: "Signature of Candidate"
									})]
								})]
							}),
							errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md border border-red-500/30 bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/30 dark:text-red-300",
								children: errorMessage
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 print:hidden dark:border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									onClick: handleReset,
									className: "gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), " Clear Form"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: isSubmitting,
										className: "gap-2 bg-blue-900 px-6 font-semibold text-white hover:bg-blue-800 shadow-sm",
										children: isSubmitting ? "Saving..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), " Submit Feedback Form"] })
									})
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-8 text-center text-xs text-slate-500 print:hidden dark:text-slate-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sailor's Medical Clinic · Centre for Marine Medical Examinations · CBD Belapur, Navi Mumbai" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px]",
					children: "Approved by the D.G. Shipping Govt. of India · ISO 9001:2015 & ISO 45001:2018 Certified Centre"
				})]
			})
		]
	});
}
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	DbTestRoute: Route$1.update({
		id: "/db-test",
		path: "/db-test",
		getParentRoute: () => Route$3
	}),
	FeedbackRoute: Route.update({
		id: "/feedback",
		path: "/feedback",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
