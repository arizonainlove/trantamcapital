import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-[96px] md:text-[120px] font-extrabold text-primary leading-none mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-text-primary mb-3">Page Not Found</h2>
        <p className="text-sm text-text-secondary max-w-[400px] mx-auto mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex text-sm font-bold text-white bg-primary hover:bg-primary-hover px-8 py-3 rounded transition-colors min-h-[44px] items-center shadow-[0_2px_8px_rgba(232,73,16,0.3)]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
