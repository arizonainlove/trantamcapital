interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Card({ children, className = "", dark }: CardProps) {
  return (
    <div
      className={`rounded-lg p-5 ${
        dark
          ? "bg-dark text-white border border-dark-card"
          : "bg-white text-text-primary border border-border"
      } shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}
