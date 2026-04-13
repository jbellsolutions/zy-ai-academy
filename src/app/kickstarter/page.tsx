"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/* ───────────────────── LAZY VIDEO ───────────────────── */
function LazyVideo({
  src,
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  className = "",
  preload = "none",
}: {
  src: string;
  poster: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  preload?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {visible ? (
        <video
          className="w-full"
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          preload={preload}
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className="w-full" loading="lazy" />
      )}
    </div>
  );
}

/* ───────────────────── NAV ───────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-dark text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Zy AI <span className="text-orange">Academy</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <div className={`${open ? "flex" : "hidden"} absolute top-full left-0 w-full flex-col gap-3 bg-dark px-4 pb-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}>
          <Link href="/" className="hover:text-orange transition">Home</Link>
          <Link href="/founding-circle" className="hover:text-orange transition">Founding Circle</Link>
          <a
            href="#notify"
            className="rounded-lg bg-orange px-5 py-2 text-center font-semibold transition hover:bg-orange-dark"
          >
            Get Notified
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full bg-teal/20 px-4 py-1 text-sm font-semibold text-teal">
          Coming to Kickstarter
        </span>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          The AI Tutor System{" "}
          <span className="text-teal">Built by a Dad, Proven by His 5-Year-Old</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          A done-for-you AI tutoring system that gives any child personalized
          1-on-1 learning in math, reading, and coding &mdash; for the price of
          one hour with a human tutor.
        </p>
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { num: "40+", label: "Math problems solved daily" },
            { num: "Age 5", label: "Doing 3rd-grade math" },
            { num: "$47", label: "Founding family price" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur"
            >
              <div className="text-3xl font-extrabold text-teal">{s.num}</div>
              <div className="mt-1 text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
        <a
          href="#notify"
          className="inline-block rounded-xl bg-orange px-8 py-4 text-lg font-bold shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
        >
          Notify Me When We Launch
        </a>
      </div>
    </section>
  );
}

/* ───────────────────── VIDEO PREVIEW ───────────────────── */
function VideoPreview() {
  return (
    <section className="bg-light px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Real Results. Real Kid. No Scripts.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          This is Zy &mdash; 5 years old, doing 3rd-grade math every morning
          before breakfast. No bribing. No fighting. He asks to do it.
        </p>
        <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-gray-200">
          <LazyVideo
            src="/videos/IMG_5585_audio_enhanced.mp4"
            poster="/videos/thumb_5585_ae.jpg"
            preload="none"
            className="aspect-video"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── REWARD TIERS ───────────────────── */
const tiers = [
  { price: "$1", name: "The Believer", features: ["Name on the supporter wall", "All campaign updates", "Our eternal gratitude"], highlight: false },
  { price: "$27", name: "Early Bird", features: ["AI tutor system (math + reading)", "Daily habit templates", "Homework help prompts", "Standard support"], highlight: false },
  { price: "$47", name: "Founding Family", features: ["Everything in Early Bird", "Minecraft Vibe Coding ($197 value)", "Lifetime updates forever", "Private community access", "Founding Family certificate"], highlight: true },
  { price: "$97", name: "Family + Friends", features: ["2x Founding Family licenses", "Gift one to another family", "Everything in Founding Family"], highlight: false },
  { price: "$197", name: "Homeschool Hero", features: ["5 family licenses", "Co-op setup guide", "Group coaching session", "Everything in Founding Family"], highlight: false },
  { price: "$297", name: "VIP Family", features: ["Everything in Homeschool Hero", "1-on-1 setup call with Justin", "Custom tutor configuration", "90-day priority support"], highlight: false },
  { price: "$497", name: "Founding Sponsor", features: ["Everything in VIP Family", "Logo on website", "Partner-level access", "Quarterly strategy calls"], highlight: false },
];

function RewardTiers() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Kickstarter Reward Tiers
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Back the project at any level. Every backer helps bring AI tutoring
          to more families.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border-2 p-6 ${
                t.highlight
                  ? "border-orange bg-orange/5 shadow-xl"
                  : "border-gray-200 bg-white"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <div className="mb-1">
                <span className="text-3xl font-extrabold">{t.price}</span>
              </div>
              <h3 className="mb-4 text-lg font-bold">{t.name}</h3>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 font-bold text-teal">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── STRETCH GOALS ───────────────────── */
const goals = [
  { amount: "$5,000", goal: "Funded!", desc: "AI Math & Reading Tutor system ships to all backers" },
  { amount: "$10,000", goal: "Science Tutor", desc: "Add an AI Science tutor module for all backers" },
  { amount: "$15,000", goal: "Spanish Tutor", desc: "AI-powered Spanish language learning for kids" },
  { amount: "$25,000", goal: "Skool Community", desc: "Private learning community unlocked for all backers" },
  { amount: "$35,000", goal: "10 Scholarships", desc: "Fund 10 free memberships for underserved families" },
  { amount: "$50,000", goal: "Mobile App", desc: "Dedicated iOS & Android app development begins" },
];

function StretchGoals() {
  return (
    <section className="bg-teal px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Stretch Goals
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg opacity-80">
          The more backers we get, the more we build. Every goal unlocked
          benefits every backer.
        </p>
        <div className="space-y-4">
          {goals.map((g) => (
            <div
              key={g.amount}
              className="flex items-center gap-6 rounded-xl bg-white/10 p-5 backdrop-blur"
            >
              <div className="shrink-0 text-2xl font-extrabold">{g.amount}</div>
              <div>
                <h3 className="font-bold">{g.goal}</h3>
                <p className="text-sm opacity-80">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── EMAIL SIGNUP ───────────────────── */
function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="notify" className="bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-white">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Be First to Back Us
        </h2>
        <p className="mb-8 text-gray-300">
          Get notified the moment we go live on Kickstarter. Early backers
          get the best rewards and help us hit our goal on day one.
        </p>

        {submitted ? (
          <div className="rounded-2xl border-2 border-teal bg-teal/10 p-10">
            <div className="mb-3 text-5xl">&#127881;</div>
            <h3 className="mb-2 text-2xl font-bold text-teal">You&apos;re on the list!</h3>
            <p className="text-gray-300">
              We&apos;ll email you the moment we go live. Share this page with
              other parents who&apos;d love this.
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
              }).then(() => setSubmitted(true));
            }}
          >
            <input type="hidden" name="_subject" value="Kickstarter Launch Notification Signup" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-orange py-4 text-lg font-bold transition hover:bg-orange-dark"
            >
              Notify Me on Launch Day
            </button>
            <p className="text-xs text-gray-400">
              No spam. One email when we go live, that&apos;s it.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

/* ───────────────────── FAQ ───────────────────── */
const faqs = [
  {
    q: "When does the Kickstarter launch?",
    a: "We\u2019re targeting a launch in late April 2026. Sign up above to get notified the moment we go live.",
  },
  {
    q: "What\u2019s the funding goal?",
    a: "$5,000. This covers the initial development and delivery of the AI tutor system to all backers. Stretch goals unlock additional features for everyone.",
  },
  {
    q: "When will I receive my reward?",
    a: "The AI tutor system is already built and working. Backers will receive access within 7 days of the campaign ending. Physical rewards (if any) ship within 30 days.",
  },
  {
    q: "Is this a subscription?",
    a: "No. Your Kickstarter pledge is a one-time payment. You get lifetime access with no recurring fees.",
  },
  {
    q: "What if the campaign doesn\u2019t reach its goal?",
    a: "Kickstarter is all-or-nothing. If we don\u2019t hit $5,000, you\u2019re not charged. But based on our community, we\u2019re confident we\u2019ll fund on day one.",
  },
];

function KickstarterFAQ() {
  return (
    <section className="bg-light px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
          Kickstarter FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-semibold list-none flex items-center justify-between">
                {f.q}
                <span className="ml-2 text-teal transition group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FOOTER ───────────────────── */
function Footer() {
  return (
    <footer className="bg-dark px-4 py-8 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Zy AI Academy. All rights reserved.</p>
      <p className="mt-1">
        Questions?{" "}
        <a
          href="mailto:jbellsolutions@gmail.com"
          className="text-teal underline hover:text-white"
        >
          jbellsolutions@gmail.com
        </a>
      </p>
    </footer>
  );
}

/* ───────────────────── PAGE ───────────────────── */
export default function Kickstarter() {
  return (
    <>
      <Nav />
      <Hero />
      <VideoPreview />
      <RewardTiers />
      <StretchGoals />
      <EmailSignup />
      <KickstarterFAQ />
      <Footer />
    </>
  );
}
