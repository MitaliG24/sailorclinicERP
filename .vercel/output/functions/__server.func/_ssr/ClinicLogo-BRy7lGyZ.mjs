import { o as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime, u as Slot } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ClinicLogo-BRy7lGyZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function ClinicLogo({ size = "md", showText = true, subtitle = "Centre for Marine Medical Examinations", className = "" }) {
	const imgSizes = {
		sm: "h-9 w-auto max-w-[55px]",
		md: "h-12 w-auto max-w-[75px]",
		lg: "h-16 w-auto max-w-[100px]",
		xl: "h-24 w-auto max-w-[145px]"
	}[size];
	const titleSizes = {
		sm: "text-xs font-bold leading-tight",
		md: "text-sm font-bold leading-tight",
		lg: "text-base font-bold tracking-tight",
		xl: "text-xl font-bold tracking-tight"
	}[size];
	const subSizes = {
		sm: "text-[9px]",
		md: "text-[10px]",
		lg: "text-xs",
		xl: "text-xs"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-3 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative shrink-0 flex items-center justify-center rounded-lg bg-white p-1 shadow-2xs border border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/logo.png",
				alt: "Sailor's Medical Clinic Logo",
				className: `${imgSizes} object-contain`,
				loading: "eager"
			})
		}), showText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `${titleSizes} text-foreground flex items-center gap-1.5`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sailors Medical Clinic" })
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `${subSizes} font-medium text-muted-foreground uppercase tracking-wide truncate mt-0.5`,
				children: subtitle
			})]
		})]
	});
}
//#endregion
export { ClinicLogo as n, cn as r, Button as t };
