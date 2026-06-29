import { cn } from "@/utils/cn";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className,
  ...props
}) {
  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700",

    secondary:
      "bg-amber-500 text-white hover:bg-amber-600",

    outline:
      "border border-gray-300 bg-white hover:bg-gray-100",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}