import { cn } from "@/utils/cn";

export default function SectionTitle({
  title,
  subtitle,
  className,
}) {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}