"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-text-secondary mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="text-sm font-bold text-white bg-primary hover:bg-primary-hover px-6 py-3 rounded transition-colors min-h-[44px] shadow-[0_2px_8px_rgba(232,73,16,0.3)]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
