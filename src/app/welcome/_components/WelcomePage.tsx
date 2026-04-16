"use client";

import { useState, useRef, useEffect } from "react";

/* ───────────────────── TYPES ───────────────────── */
interface WelcomePageProps {
  tier: string;
  tierName: string;
  includeMinecraft: boolean;
  includeVipCall: boolean;
  includeSponsorSection: boolean;
}

/* ───────────────────── LAZY VIDEO (YouTube Embed) ───────────────────── */
function LazyYouTube({ videoId, title }: { videoId: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: "56.25%" }}>
      {visible ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-dark/20">
          <div className="h-16 w-16 rounded-full bg-orange/80 flex items-center justify-center">
            <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

/* ───────────────────── CONFETTI DOTS ───────────────────── */
function ConfettiDots() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: ["#0D7C66", "#E8651A", "#FFD700", "#FF6B9D", "#7C3AED"][Math.floor(Math.random() * 5)],
            opacity: 0.15 + Math.random() * 0.25,
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────── TUTOR DATA ───────────────────── */
const TUTORS = [
  {
    name: "Math Lab",
    icon: "🔢",
    type: "Required" as const,
    description: "Core math skills with adaptive difficulty -- arithmetic, word problems, and problem solving.",
    slug: "math-lab",
  },
  {
    name: "Language Arts",
    icon: "📖",
    type: "Required" as const,
    description: "Reading comprehension, writing, grammar, vocabulary, and spelling practice.",
    slug: "language-arts",
  },
  {
    name: "Mental Math Wizard",
    icon: "⚡",
    type: "Elective" as const,
    description: "Speed drills and mental calculation tricks to build number fluency.",
    slug: "mental-math-wizard",
  },
  {
    name: "Communication Tutor",
    icon: "🎤",
    type: "Elective" as const,
    description: "Public speaking, conversation skills, and confidence building.",
    slug: "communication-tutor",
  },
  {
    name: "AI Adventure Tutor",
    icon: "🗺️",
    type: "Elective" as const,
    description: "Interactive story-based learning through choose-your-own-adventure education.",
    slug: "ai-adventure-tutor",
  },
  {
    name: "Spanish Tutor",
    icon: "🇪🇸",
    type: "Elective" as const,
    description: "Conversational Spanish, vocabulary, pronunciation, and cultural context.",
    slug: "spanish-tutor",
  },
  {
    name: "Creative Thinking",
    icon: "💡",
    type: "Elective" as const,
    description: "Lateral thinking, brainstorming, invention challenges, and creativity exercises.",
    slug: "creative-thinking",
  },
];

/* ───────────────────── TUTOR CARD ───────────────────── */
function TutorCard({ tutor }: { tutor: (typeof TUTORS)[number] }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-3xl">{tutor.icon}</span>
        <div>
          <h3 className="text-lg font-bold text-dark">{tutor.name}</h3>
          <span
            className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
              tutor.type === "Required"
                ? "bg-teal/10 text-teal"
                : "bg-orange/10 text-orange"
            }`}
          >
            {tutor.type}
          </span>
        </div>
      </div>
      <p className="mb-4 flex-1 text-sm text-gray-600">{tutor.description}</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <a
          href="https://chat.openai.com/g/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark"
        >
          Open Custom GPT
        </a>
        <a
          href={`/downloads/${tutor.slug}-prompt.txt`}
          download
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-dark transition hover:bg-gray-50"
        >
          Download Prompt
        </a>
      </div>
    </div>
  );
}

/* ───────────────────── STEP CARD ───────────────────── */
function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange text-lg font-bold text-white">
        {number}
      </div>
      <div>
        <h3 className="mb-1 text-lg font-bold text-dark">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

/* ───────────────────── DOWNLOAD ITEM ───────────────────── */
function DownloadItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      download
      className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-dark transition hover:border-teal hover:shadow-sm"
    >
      <svg className="h-5 w-5 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
      </svg>
      {label}
    </a>
  );
}

/* ───────────────────── SECTION WRAPPER ───────────────────── */
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

/* ───────────────────── MAIN COMPONENT ───────────────────── */
export default function WelcomePage({
  tier,
  tierName,
  includeMinecraft,
  includeVipCall,
  includeSponsorSection,
}: WelcomePageProps) {
  return (
    <main className="min-h-screen bg-light text-gray-900">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-white md:py-28">
        <ConfettiDots />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-orange/20 px-4 py-1 text-sm font-semibold text-orange">
            You&apos;re In!
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Welcome to Zy AI Academy,{" "}
            <span className="text-teal">{tierName}!</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Everything you need to give your child personalized, one-on-one AI
            tutoring is right here on this page. Let&apos;s get you set up.
          </p>
          <a
            href="#start"
            className="inline-block rounded-xl bg-orange px-8 py-4 text-lg font-bold shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
          >
            Start Setup
          </a>
        </div>
      </section>

      {/* ─── START HERE: 3 STEPS ─── */}
      <Section id="start" className="bg-white">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-dark md:text-4xl">
          Start Here
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-gray-500">
          Three steps. Fifteen minutes. Your child is learning.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <StepCard
            number={1}
            title="Watch the Setup Video"
            description="A 5-minute walkthrough showing you exactly how to install your first tutor and run a session."
          />
          <StepCard
            number={2}
            title="Install Your First Tutor"
            description="Start with Math Lab. Copy the prompt, paste it into ChatGPT, and you're ready to go. Two minutes."
          />
          <StepCard
            number={3}
            title="Run Your First Session"
            description="Sit with your child, open the tutor, and let the AI lead. Your first session takes about 20 minutes."
          />
        </div>
      </Section>

      {/* ─── SETUP VIDEO ─── */}
      <Section className="bg-light">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-dark md:text-4xl">
          Setup Video
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-gray-500">
          Watch this first. It covers everything you need to know.
        </p>
        <div className="mx-auto max-w-3xl">
          <LazyYouTube videoId="SETUP_VIDEO_ID" title="Zy AI Academy Setup Walkthrough" />
        </div>
      </Section>

      {/* ─── YOUR AI TUTORS ─── */}
      <Section id="tutors" className="bg-white">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-dark md:text-4xl">
          Your AI Tutors
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-gray-500">
          7 specialized tutors. 2 required daily, 2 electives of your child&apos;s choice.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TUTORS.map((tutor) => (
            <TutorCard key={tutor.slug} tutor={tutor} />
          ))}
        </div>
      </Section>

      {/* ─── DOWNLOAD EVERYTHING ─── */}
      <Section id="downloads" className="bg-light">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-dark md:text-4xl">
          Download Everything
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-gray-500">
          Grab the master ZIP or download individual files.
        </p>
        <div className="mx-auto max-w-lg">
          <a
            href={`/downloads/zy-ai-academy-${tier}-complete.zip`}
            download
            className="mb-6 flex items-center justify-center gap-3 rounded-xl bg-teal px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-teal-dark hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
            </svg>
            Download Complete Package (ZIP)
          </a>
          <div className="grid gap-3">
            <DownloadItem label="Parent Setup Guide (PDF)" href="/downloads/parent-setup-guide.pdf" />
            <DownloadItem label="Daily Session Templates (PDF)" href="/downloads/daily-session-templates.pdf" />
            <DownloadItem label="Progress Tracker (PDF)" href="/downloads/progress-tracker.pdf" />
            {includeMinecraft && (
              <DownloadItem label="Minecraft Curriculum (PDF)" href="/downloads/minecraft-curriculum.pdf" />
            )}
          </div>
        </div>
      </Section>

      {/* ─── BOOK A SETUP CALL ─── */}
      <Section id="setup-call" className="bg-white">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-dark md:text-4xl">
          Book a Setup Call
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-gray-500">
          Stuck on anything? Book a free 15-minute call and I&apos;ll walk you through it personally.
        </p>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200">
          <iframe
            src="https://calendly.com/jbellsolutions/setup"
            className="h-[650px] w-full border-0"
            title="Book a Setup Call"
          />
        </div>
      </Section>

      {/* ─── JOIN THE COMMUNITY ─── */}
      <Section className="bg-light">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
          <span className="mb-3 inline-block text-4xl">👋</span>
          <h2 className="mb-3 text-2xl font-extrabold text-dark md:text-3xl">
            Join the Parent Community
          </h2>
          <p className="mb-6 text-gray-500">
            Connect with other families using Zy AI Academy. Share tips,
            ask questions, and celebrate your child&apos;s wins together.
          </p>
          <a
            href="https://www.skool.com/zyaiacademy-6081"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-orange px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
          >
            Join the Skool Community
          </a>
        </div>
      </Section>

      {/* ─── VIP CALL (conditional) ─── */}
      {includeVipCall && (
        <Section id="vip-call" className="bg-white">
          <h2 className="mb-2 text-center text-3xl font-extrabold text-dark md:text-4xl">
            Your VIP Setup Call
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-center text-gray-500">
            As a VIP backer, you get a dedicated 30-minute call with me.
            We&apos;ll customize the system for your child&apos;s specific needs
            and set up a personalized learning plan.
          </p>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              src="https://calendly.com/jbellsolutions/vip-setup"
              className="h-[650px] w-full border-0"
              title="VIP Setup Call"
            />
          </div>
        </Section>
      )}

      {/* ─── FOUNDING SPONSOR (conditional) ─── */}
      {includeSponsorSection && (
        <Section id="sponsor" className="bg-light">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <h2 className="mb-3 text-center text-2xl font-extrabold text-dark md:text-3xl">
              Founding Sponsor
            </h2>
            <p className="mb-6 text-center text-gray-500">
              Upload your logo and we&apos;ll feature it on the Zy AI Academy site
              as a Founding Sponsor. Thank you for believing in this mission.
            </p>
            <SponsorUploadForm />
          </div>
        </Section>
      )}

      {/* ─── SUPPORT FOOTER ─── */}
      <footer className="border-t border-gray-200 bg-white px-4 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-2 text-lg font-bold text-dark">
            Need Help?
          </p>
          <p className="mb-6 text-gray-500">
            We are here for you. Reach out anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="mailto:jbellsolutions@gmail.com"
              className="rounded-lg border border-gray-200 px-4 py-2 font-medium text-dark transition hover:border-teal hover:text-teal"
            >
              Email Support
            </a>
            <a
              href="#faq"
              className="rounded-lg border border-gray-200 px-4 py-2 font-medium text-dark transition hover:border-teal hover:text-teal"
            >
              FAQ
            </a>
            <a
              href="/privacy"
              className="rounded-lg border border-gray-200 px-4 py-2 font-medium text-dark transition hover:border-teal hover:text-teal"
            >
              Privacy Policy
            </a>
          </div>
          <p className="mt-8 text-xs text-gray-400">
            Zy AI Academy &copy; {new Date().getFullYear()}. Built with love by a dad who wanted better for his kid.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ───────────────────── SPONSOR UPLOAD FORM ───────────────────── */
function SponsorUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to API endpoint for logo submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-teal/10 p-6 text-center">
        <span className="mb-2 inline-block text-3xl">✅</span>
        <p className="font-semibold text-teal">
          Logo received! We&apos;ll be in touch to confirm placement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4">
      <div>
        <label htmlFor="sponsor-email" className="mb-1 block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          id="sponsor-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
        />
      </div>
      <div>
        <label htmlFor="sponsor-logo" className="mb-1 block text-sm font-medium text-gray-700">
          Upload Logo (PNG, SVG, or JPG)
        </label>
        <input
          id="sponsor-logo"
          type="file"
          required
          accept=".png,.svg,.jpg,.jpeg"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-teal/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-teal hover:file:bg-teal/20"
        />
      </div>
      <button
        type="submit"
        disabled={!file || !email}
        className="w-full rounded-lg bg-teal px-6 py-3 font-semibold text-white transition hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        Submit Logo
      </button>
    </form>
  );
}
