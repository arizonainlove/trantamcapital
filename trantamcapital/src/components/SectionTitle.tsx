interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2
        className={`text-[28px] font-bold leading-tight ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-sm max-w-[600px] mx-auto ${light ? "text-text-light" : "text-text-secondary"}`}>
          {subtitle}
        </p>
      )}
      <div className="w-[60px] h-[3px] bg-primary mx-auto mt-4 rounded-full" />
    </div>
  );
}
