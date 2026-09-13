import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-4">
      <div className="max-w-md">
        <p className="tnum font-display text-7xl font-bold tracking-tight text-text">404</p>
        <h1 className="mt-5 text-2xl font-semibold text-text">This page doesn&apos;t exist</h1>
        <p className="mt-3 leading-relaxed text-muted">
          The link may be out of date, or the page has moved. Head back to the portfolio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-card bg-accent px-6 py-3 font-semibold text-primary transition-colors duration-300 hover:bg-accent-soft"
        >
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}
