"use client";

import { useState } from "react";

/* ───────────────────── NAV ───────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-dark text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold tracking-tight">
          Zy AI <span className="text-orange">Academy</span>
        </a>
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
          <a href="#how" className="hover:text-orange transition">How It Works</a>
          <a href="#pricing" className="hover:text-orange transition">Pricing</a>
          <a href="#faq" className="hover:text-orange transition">FAQ</a>
          <a
            href="#join"
            className="rounded-lg bg-orange px-5 py-2 text-center font-semibold transition hover:bg-orange-dark"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-center text-white md:py-28">
      <div className="mx-auto max-w-4xl">
        <span className="mb-4 inline-block rounded-full bg-orange/20 px-4 py-1 text-sm font-semibold text-orange">
          Early Access &mdash; Founding Family Pricing
        </span>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Your Child Learns More in{" "}
          <span className="text-teal">20 Minutes</span> with AI Than an Hour of
          Homework
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
          A done-for-you AI tutor system and Minecraft coding curriculum that
          turns screen time into the smartest 20 minutes of your child&apos;s day.
        </p>

        {/* Stat boxes */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { num: "40+", label: "Math problems solved daily" },
            { num: "3rd Grade", label: "Math level at age 5" },
            { num: "20 min", label: "Per day is all it takes" },
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
          href="#join"
          className="inline-block rounded-xl bg-orange px-8 py-4 text-lg font-bold shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
        >
          Get Founding Family Access &mdash; $47
        </a>
        <a
          href="#how"
          className="mt-4 block text-sm text-gray-400 underline hover:text-white"
        >
          See How It Works &darr;
        </a>
        <p className="mt-4 text-xs text-gray-500">
          30-day money-back guarantee. No subscriptions. Lifetime access.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── PROBLEM ───────────────────── */
const problems = [
  {
    icon: "\uD83D\uDCB8",
    title: "Tutoring Costs $60\u2013$120/hr",
    desc: "Private tutors are expensive and hard to schedule. AI tutoring gives your child 1-on-1 attention for a fraction of the cost.",
  },
  {
    icon: "\uD83D\uDE24",
    title: "Nightly Homework Battles",
    desc: "Stop fighting over homework. An AI tutor is endlessly patient, always available, and adapts to your child\u2019s pace.",
  },
  {
    icon: "\uD83C\uDFAE",
    title: "Screens Compete for Attention",
    desc: "If you can\u2019t beat the screen, join it. Minecraft coding turns gaming time into real learning.",
  },
  {
    icon: "\uD83E\uDD16",
    title: "The AI Gap Is Growing",
    desc: "Kids who learn AI now will have a massive advantage. Don\u2019t let your child fall behind.",
  },
];

function Problem() {
  return (
    <section className="bg-light px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Sound Familiar?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Most parents face the same struggles. Zy AI Academy was built to solve
          them.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 text-4xl">{p.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PROOF STRIP ───────────────────── */
function ProofStrip() {
  return (
    <section className="bg-teal px-4 py-16 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
          This System Wasn&apos;t Built in a Lab
        </h2>
        <p className="mb-10 text-lg opacity-80">
          It was built by a dad for his 5-year-old son, Zy. Here&apos;s what happened.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { num: "40+", label: "Daily math questions completed" },
            { num: "3rd+", label: "Grade-level math at age 5" },
            { num: "9\u201310yr", label: "Communication level" },
            { num: "Daily", label: "Learning habit formed" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold md:text-4xl">{s.num}</div>
              <div className="mt-1 text-sm opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── WHAT YOU GET ───────────────────── */
const features = [
  {
    icon: "\uD83E\uDDE0",
    title: "AI Tutor System",
    items: [
      "Pre-configured ChatGPT math & reading tutors",
      "Custom system prompts by grade level",
      "Weekly auto-generated progress summaries",
    ],
  },
  {
    icon: "\u26CF\uFE0F",
    title: "Minecraft Mod Curriculum",
    items: [
      "5 guided Java mod projects",
      "AI prompt starters for each module",
      "Step-by-step build guides",
    ],
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Parent Dashboard",
    items: [
      "Streak tracking & session logs",
      "Monthly level tracker",
      "Progress milestones & badges",
    ],
  },
  {
    icon: "\uD83C\uDF81",
    title: "Founding Family Bonus",
    items: [
      "Lifetime access to all future updates",
      "Private community access",
      "Early certification program access",
    ],
  },
];

function WhatYouGet() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Everything You Get
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          A complete system &mdash; not just a course. Set it up once and your child
          learns every day.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-3 text-4xl">{f.icon}</div>
              <h3 className="mb-4 text-xl font-bold">{f.title}</h3>
              <ul className="space-y-2">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-0.5 text-teal font-bold">&#10003;</span>
                    {item}
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

/* ───────────────────── HOW IT WORKS ───────────────────── */
const steps = [
  { num: 1, title: "Build Your Child\u2019s Profile", desc: "Enter their name, age, grade, and learning goals." },
  { num: 2, title: "Install the AI Tutors", desc: "Copy our pre-built prompts into ChatGPT. Takes 5 minutes." },
  { num: 3, title: "Set the Daily Habit", desc: "Pick a 20-minute time slot that works for your family." },
  { num: 4, title: "Your Child Starts Learning", desc: "They open ChatGPT, the tutor greets them by name, and the session begins." },
  { num: 5, title: "You Get Weekly Updates", desc: "Auto-generated progress emails so you always know how they\u2019re doing." },
];

function HowItWorks() {
  return (
    <section id="how" className="bg-light px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
          How It Works
        </h2>
        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-lg font-bold text-white">
                {s.num}
              </div>
              <div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-14 rounded-2xl border-2 border-teal bg-teal/5 p-8 text-center">
          <div className="mb-2 text-4xl">&#x1F6E1;&#xFE0F;</div>
          <h3 className="mb-2 text-xl font-bold text-teal">
            30-Day &ldquo;They&apos;ll Use It&rdquo; Guarantee
          </h3>
          <p className="mx-auto max-w-lg text-gray-700">
            If your child doesn&apos;t complete 10 AI tutoring sessions in their first
            30 days, you get a full refund &mdash; no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PRICING ───────────────────── */
const tiers = [
  {
    name: "Starter",
    price: "$97",
    period: "one-time",
    highlight: false,
    badge: null as string | null,
    features: [
      "AI tutors (math + reading)",
      "1 Minecraft mod project",
      "Parent dashboard",
      "Daily habit template",
      "Standard support",
    ],
  },
  {
    name: "Founding Family",
    price: "$47",
    period: "one-time",
    badge: "Most Popular",
    highlight: true,
    features: [
      "Everything in Starter",
      "All 5 Minecraft mods (lifetime)",
      "Free future updates forever",
      "Private community access",
      "Early certification access",
    ],
  },
  {
    name: "Custom Plan",
    price: "$297",
    period: "one-time",
    highlight: false,
    badge: null as string | null,
    features: [
      "Everything in Founding Family",
      "Done-for-you setup",
      "30-min onboarding call",
      "Custom mod project",
      "90-day priority support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Simple, One-Time Pricing
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-600">
          No subscriptions. No hidden fees. Pay once, get lifetime access.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border-2 p-8 ${
                t.highlight
                  ? "border-orange bg-orange/5 shadow-xl md:scale-105"
                  : "border-gray-200 bg-white"
              }`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-xs font-bold text-white">
                  {t.badge}
                </span>
              )}
              <h3 className="mb-1 text-xl font-bold">{t.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className="text-sm text-gray-500"> {t.period}</span>
              </div>
              {t.highlight && (
                <p className="mb-4 text-sm font-semibold text-orange">
                  50% off launch pricing
                </p>
              )}
              <ul className="mb-8 mt-4 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 font-bold text-teal">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className={`block rounded-lg py-3 text-center font-semibold transition ${
                  t.highlight
                    ? "bg-orange text-white hover:bg-orange-dark"
                    : "bg-dark text-white hover:bg-gray-800"
                }`}
              >
                {t.highlight ? "Get Founding Family Access" : `Get ${t.name}`}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FAQ ───────────────────── */
const faqs = [
  {
    q: "What ages is this for?",
    a: "Zy AI Academy works best for kids ages 5\u201314. The AI tutors adapt to any grade level, and the Minecraft mods are designed for beginners.",
  },
  {
    q: "Is it hard to set up?",
    a: "Not at all. Setup takes about 10 minutes. You copy our pre-built prompts into ChatGPT, and your child is ready to go.",
  },
  {
    q: "What do I need?",
    a: "A computer or tablet, a ChatGPT account (free tier works), and Minecraft Java Edition for the coding projects.",
  },
  {
    q: "Does ChatGPT cost extra?",
    a: "The free ChatGPT tier works for tutoring. ChatGPT Plus ($20/mo) gives a better experience but isn\u2019t required.",
  },
  {
    q: "Is this a subscription?",
    a: "No. You pay once and get lifetime access. No recurring charges, ever.",
  },
  {
    q: "What if my child doesn\u2019t use it?",
    a: "You\u2019re covered by our 30-day guarantee. If they don\u2019t complete 10 sessions, you get a full refund.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-light px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
          Frequently Asked Questions
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

/* ───────────────────── FINAL CTA ───────────────────── */
function FinalCTA() {
  return (
    <section
      id="join"
      className="bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-center text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Give Your Child the AI Advantage
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-300">
          Join the founding families and give your child a head start in math,
          reading, and real-world coding &mdash; all powered by AI.
        </p>
        <a
          href="#join"
          className="inline-block rounded-xl bg-orange px-10 py-4 text-lg font-bold shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
        >
          Get Founding Family Access &mdash; $47
        </a>
        <p className="mt-4 text-sm text-gray-400">
          30-day money-back guarantee &bull; No subscriptions &bull; Lifetime
          access
        </p>
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
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <ProofStrip />
      <WhatYouGet />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
