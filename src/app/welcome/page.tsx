import Link from "next/link";

export default function WelcomeLanding() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-light px-4">
      <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
        <span className="mb-4 inline-block text-4xl">🎓</span>
        <h1 className="mb-4 text-2xl font-extrabold text-dark md:text-3xl">
          Looking for your Zy AI Academy access?
        </h1>
        <p className="mb-6 text-gray-500">
          Check your email for your personalized welcome link. Each membership
          tier has a unique page with your tutors, downloads, and setup
          instructions.
        </p>
        <a
          href="mailto:jbellsolutions@gmail.com"
          className="inline-block rounded-xl bg-teal px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-teal-dark hover:shadow-xl"
        >
          Contact Support
        </a>
        <p className="mt-6 text-xs text-gray-400">
          <Link href="/" className="underline hover:text-teal">
            Back to Zy AI Academy
          </Link>
        </p>
      </div>
    </main>
  );
}
