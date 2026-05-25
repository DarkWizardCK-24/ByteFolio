import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-accent via-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl font-bold text-text">Page not found</p>
        <p className="text-gray-400">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-blue-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
