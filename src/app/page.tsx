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
          <a href="#community" className="hover:text-orange transition">Community</a>
          <a href="#pricing" className="hover:text-orange transition">Pricing</a>
          <Link href="/founding-circle" className="hover:text-orange transition">Founding Circle</Link>
          <a href="#faq" className="hover:text-orange transition">FAQ</a>
          <Link
            href="/founding-circle"
            className="rounded-lg bg-orange px-5 py-2 text-center font-semibold transition hover:bg-orange-dark"
          >
            Join Founding Circle
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_280px]">
          {/* Text content */}
          <div className="text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-orange/20 px-4 py-1 text-sm font-semibold text-orange">
              Early Access &mdash; Founding Family Pricing
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              School Was Built for Factories.{" "}
              <span className="text-teal">Your Kid Deserves Better.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:mx-0">
              A done-for-you AI tutor system &mdash; with a community of parents
              behind you. Personalized 1-on-1 learning in 1 hour a day, with real
              setup help and daily accountability from families on the same journey.
            </p>

            {/* Stat boxes */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { num: "40+", label: "Math problems solved daily" },
                { num: "3rd Grade", label: "Math level at age 5" },
                { num: "1 hour", label: "Per day is all it takes" },
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
              30-day money-back guarantee. Lifetime product access. 30 days free community included.
            </p>
          </div>

          {/* Floating video preview - hidden on mobile */}
          <div className="hidden md:flex md:justify-center">
            <div className="relative w-[240px] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/10">
              <video
                className="w-full"
                poster="/videos/thumb_5580_01.jpg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/IMG_5580_short_01.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-3 left-3 right-3 rounded-full bg-black/60 px-3 py-1.5 text-center text-xs font-semibold backdrop-blur">
                Real session with Zy, age 5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── WHY NOW ───────────────────── */
function WhyNow() {
  return (
    <section className="bg-light px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          The Education System Is 150 Years Behind
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          Classrooms were designed in the 1800s to produce factory workers &mdash;
          sit still, follow instructions, memorize, repeat. That model has barely
          changed. But the world your child is growing up in looks nothing like a factory.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-3 text-4xl">&#x1F3ED;</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">The Old Way</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">&#10005;</span> One teacher, 30 kids, same pace for everyone</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">&#10005;</span> Memorize-and-test, forget everything after</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">&#10005;</span> Creativity gets graded out of kids</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">&#10005;</span> Parents have zero visibility into daily learning</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-teal bg-teal/5 p-8 shadow-sm">
            <div className="mb-3 text-4xl">&#x1F680;</div>
            <h3 className="mb-2 text-xl font-bold text-teal">The Zy Way</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-teal font-bold mt-0.5">&#10003;</span> 1-on-1 AI tutor that adapts to YOUR child</li>
              <li className="flex items-start gap-2"><span className="text-teal font-bold mt-0.5">&#10003;</span> Learn by doing, not memorizing</li>
              <li className="flex items-start gap-2"><span className="text-teal font-bold mt-0.5">&#10003;</span> 1 hour/day &mdash; fits any schedule</li>
              <li className="flex items-start gap-2"><span className="text-teal font-bold mt-0.5">&#10003;</span> Parent dashboard with daily progress tracking</li>
            </ul>
            <div className="mt-5 overflow-hidden rounded-xl">
              <LazyVideo
                src="/videos/IMG_5584_audio_enhanced.mp4"
                poster="/videos/thumb_5584_ae.jpg"
                autoPlay
                muted
                loop
                controls={false}
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── WHO IT'S FOR ───────────────────── */
const personas = [
  {
    icon: "\u23F0",
    title: "Busy Professionals",
    desc: "You work 50+ hours a week and can\u2019t sit down for homework every night. Zy gives your child a dedicated AI tutor that\u2019s ready when they are \u2014 before school, after dinner, weekends.",
  },
  {
    icon: "\uD83C\uDFE0",
    title: "Homeschool Families",
    desc: "You already know one-size-fits-all doesn\u2019t work. Add AI-powered math, reading, and coding to your curriculum in 10 minutes. It adapts to your child\u2019s level automatically.",
  },
  {
    icon: "\uD83C\uDF1F",
    title: "Parents Who Want More",
    desc: "School teaches the minimum. You want your child solving problems, coding, and thinking critically. Zy goes beyond worksheets and into real-world skills.",
  },
  {
    icon: "\uD83D\uDCB8",
    title: "Families Tired of $100/hr Tutors",
    desc: "Private tutoring is a luxury. AI tutoring is better \u2014 infinitely patient, always available, and a fraction of the cost. Pay once, use forever.",
  },
];

function WhoItsFor() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Built for Families Like Yours
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Whether you homeschool, supplement, or just want your kid ahead of the
          curve &mdash; this system meets you where you are.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => (
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

/* ───────────────────── VIDEO CARD ───────────────────── */
function VideoCard({ src, poster, caption, badge }: { src: string; poster: string; caption: string; badge?: string }) {
  return (
    <div className="w-[220px] shrink-0 snap-center sm:w-[240px]">
      <div className="relative overflow-hidden rounded-2xl shadow-xl ring-2 ring-white/20">
        <LazyVideo src={src} poster={poster} preload="none" />
        {badge && (
          <div className="absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
            {badge}
          </div>
        )}
      </div>
      <p className="mt-2 text-center text-xs opacity-70">{caption}</p>
    </div>
  );
}

/* ───────────────────── PROOF STRIP ───────────────────── */
const proofVideos = [
  { src: "/zy-proof-video.mp4", poster: "/zy-proof-thumb.jpg", caption: "Morning math session", badge: "Original clip" },
  { src: "/videos/IMG_5579_short_01.mp4", poster: "/videos/thumb_5579_01.jpg", caption: "Getting started at the desk", badge: "Unscripted" },
  { src: "/videos/IMG_5580_short_02.mp4", poster: "/videos/thumb_5580_02.jpg", caption: "Subtraction & word problems", badge: "Real session" },
  { src: "/videos/IMG_5580_short_03.mp4", poster: "/videos/thumb_5580_03.jpg", caption: "Building streaks & progress", badge: "40+ daily" },
  { src: "/videos/IMG_5585_short_03.mp4", poster: "/videos/thumb_5585_03.jpg", caption: "Focus mode — full session", badge: "New session" },
  { src: "/videos/IMG_5583_short_01.mp4", poster: "/videos/thumb_5583_01.jpg", caption: "Snack time = learning time", badge: "Real life" },
];

function ProofStrip() {
  return (
    <section className="bg-teal px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
            This System Wasn&apos;t Built in a Lab
          </h2>
          <p className="mx-auto max-w-2xl text-lg opacity-80">
            It was built by a dad for his 5-year-old son, Zy. No focus groups.
            No beta testers. Just a kid, a tablet, and an AI tutor. Swipe
            through real, unscripted sessions.
          </p>
        </div>

        {/* Scrollable video carousel */}
        <div className="-mx-4 mb-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {proofVideos.map((v) => (
            <VideoCard key={v.src} {...v} />
          ))}
        </div>

        {/* Stats */}
        <div className="mb-10">
          <h3 className="mb-6 text-center text-2xl font-bold">
            This is what 1 hour a day looks like.
          </h3>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
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
          <p className="mt-6 text-center text-sm opacity-70">
            Zy does this every morning before breakfast. No bribing. No fighting. He asks to do it.
          </p>
        </div>

        {/* Outro */}
        <div className="text-center">
          <p className="mx-auto max-w-xl text-lg font-medium opacity-90">
            We built this for our family first. Now we&apos;re sharing it with yours.
          </p>
          <a
            href="#join"
            className="mt-6 inline-block rounded-xl bg-orange px-8 py-3 font-bold text-white transition hover:bg-orange-dark"
          >
            Join the Founding Families
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── WATCH A REAL SESSION ───────────────────── */
function WatchRealSession() {
  return (
    <section className="bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange/20 px-4 py-1 text-sm font-semibold text-orange">
            Sound On
          </span>
          <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
            Watch a Full Session
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            No scripts. No editing. Just Zy, his tablet, and his AI tutor.
            Press play and hear a real session &mdash; this is exactly what your
            child&apos;s daily hour sounds like.
          </p>
        </div>

        {/* Main video - 117s full session */}
        <div className="mb-8 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/10">
          <LazyVideo
            src="/videos/IMG_5585_audio_enhanced.mp4"
            poster="/videos/thumb_5585_ae.jpg"
            preload="none"
            className="aspect-video"
          />
        </div>

        {/* Secondary video - 68s desk setup */}
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="overflow-hidden rounded-xl shadow-lg ring-2 ring-white/10">
            <LazyVideo
              src="/videos/IMG_5583_audio_enhanced.mp4"
              poster="/videos/thumb_5583_ae.jpg"
              preload="none"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-3 text-xl font-bold">
              A tablet, a snack, and an hour.
            </h3>
            <p className="mb-4 text-gray-300">
              That&apos;s the whole setup. No fancy equipment. No classroom.
              Just a kid who sits down every morning because he wants to &mdash;
              not because anyone makes him.
            </p>
            <a
              href="#join"
              className="inline-block rounded-xl bg-orange px-8 py-3 font-bold transition hover:bg-orange-dark"
            >
              Get Founding Family Access &mdash; $47
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── WHAT YOU GET ───────────────────── */
const features: { icon: string; title: string; items: string[]; highlight?: boolean; video?: { src: string; poster: string } }[] = [
  {
    icon: "\uD83E\uDDE0",
    title: "AI Tutor System",
    items: [
      "Pre-configured ChatGPT math & reading tutors",
      "Custom system prompts by grade level",
      "Weekly auto-generated progress summaries",
    ],
    video: { src: "/videos/IMG_5579_short_03.mp4", poster: "/videos/thumb_5579_03.jpg" },
  },
  {
    icon: "\uD83D\uDCDA",
    title: "Complete Learning Library",
    items: [
      "Daily habit templates & scheduling tools",
      "Homework help prompts for any subject",
      "\"Explain it like I\u2019m 5\" mode for tough topics",
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
    icon: "\uD83D\uDC65",
    title: "Parent Community on Skool",
    highlight: true,
    items: [
      "Private group of parents doing this alongside you",
      "Done-for-you setup help \u2014 we install the tutors WITH you",
      "Daily check-ins, wins, and accountability",
      "Ask questions and get answers from real humans",
      "30 days FREE with your Founding Family access",
    ],
  },
  {
    icon: "\uD83C\uDF81",
    title: "Founding Family Bonuses",
    items: [
      "Lifetime access to all future updates",
      "FREE Safe Vibe Coding for Kids (Minecraft!)",
      "Early access to new subjects as we build them",
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
          A complete system &mdash; not just a product. AI tutors, a parent
          community, and real humans helping you every step of the way.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl p-8 shadow-sm ${
                f.highlight
                  ? "border-2 border-teal bg-teal/5 sm:col-span-2"
                  : "border border-gray-200 bg-white"
              }`}
            >
              <div className="mb-3 text-4xl">{f.icon}</div>
              <h3 className="mb-4 text-xl font-bold">{f.title}</h3>
              <ul className="space-y-2">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className={`mt-0.5 font-bold ${f.highlight ? "text-teal" : "text-teal"}`}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              {f.video && (
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-gray-200">
                  <LazyVideo
                    src={f.video.src}
                    poster={f.video.poster}
                    preload="none"
                  />
                  <p className="bg-gray-50 px-3 py-1.5 text-center text-xs text-gray-500">
                    See the actual AI tutor in action
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── COMMUNITY SUPPORT ───────────────────── */
function CommunitySupport() {
  return (
    <section id="community" className="bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal/20 px-4 py-1 text-sm font-semibold text-teal">
            Included Free for 30 Days
          </span>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            You&apos;re Not Doing This Alone
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Most digital products hand you a download and disappear. We give you
            a community of parents and a team that helps you set everything up &mdash;
            so your child is actually learning by Day 1, not stuck on setup.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="mb-3 text-4xl">{"\uD83D\uDEE0\uFE0F"}</div>
            <h3 className="mb-2 text-xl font-bold">Done-For-You Setup</h3>
            <p className="text-gray-300">
              Stuck on setup? Post in the community and our team walks you through
              it &mdash; screen shares, video walkthroughs, whatever it takes.
              You won&apos;t be left guessing.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="mb-3 text-4xl">{"\uD83D\uDCAC"}</div>
            <h3 className="mb-2 text-xl font-bold">Daily Accountability</h3>
            <p className="text-gray-300">
              Share your child&apos;s wins, see what other families are doing, and
              stay motivated. When 50 parents are all doing the same thing,
              it&apos;s harder to quit on Day 3.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="mb-3 text-4xl">{"\uD83E\uDD1D"}</div>
            <h3 className="mb-2 text-xl font-bold">Real Human Support</h3>
            <p className="text-gray-300">
              Questions about prompts? Not sure if it&apos;s working right? Ask the
              community. Other parents and our team respond &mdash; usually within
              hours, not days.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-2 border-teal bg-teal/10 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold">
            30 Days Free. No Credit Card Required for Community Access.
          </h3>
          <p className="mx-auto max-w-xl text-gray-300">
            Your Founding Family purchase includes 30 days of full community
            access. After 30 days, you can continue for a small monthly fee &mdash;
            or keep your AI tutors forever, no community required. The product
            is yours for life either way.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── HOW IT WORKS ───────────────────── */
const steps = [
  { num: 1, title: "Build Your Child\u2019s Profile", desc: "Enter their name, age, grade, and learning goals." },
  { num: 2, title: "Install the AI Tutors (We Help)", desc: "Copy our pre-built prompts into ChatGPT \u2014 or post in the community and we\u2019ll walk you through it step by step. Most parents are done in 10 minutes." },
  { num: 3, title: "Set the Daily Habit", desc: "Pick a 1-hour time slot that works for your family. Share it in the community for accountability." },
  { num: 4, title: "Your Child Starts Learning", desc: "They open ChatGPT, the tutor greets them by name, and the session begins." },
  { num: 5, title: "You Get Weekly Updates", desc: "Auto-generated progress emails so you always know how they\u2019re doing. Share milestones with other parents in the group." },
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
            <div key={s.num}>
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-lg font-bold text-white">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
              {s.num === 4 && (
                <div className="ml-[60px] mt-4 max-w-[280px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
                  <video
                    className="w-full"
                    poster="/videos/thumb_5580_05.jpg"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src="/videos/IMG_5580_short_05.mp4" type="video/mp4" />
                  </video>
                  <p className="bg-white px-3 py-1.5 text-center text-xs text-gray-500">
                    A real daily session in action
                  </p>
                </div>
              )}
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
    name: "Founding Family",
    price: "$47",
    period: "one-time",
    badge: "Most Popular",
    highlight: true,
    features: [
      "AI tutors (math + reading)",
      "Parent dashboard & progress tracking",
      "Daily habit templates & homework help prompts",
      "FREE Vibe Coding for Kids bonus ($197 value)",
      "Free future updates forever",
      "30 days FREE Skool community access",
      "Done-for-you setup help from our team",
      "Daily accountability with other parents",
    ],
  },
  {
    name: "VIP Family",
    price: "$297",
    period: "one-time",
    highlight: false,
    badge: null as string | null,
    features: [
      "Everything in Founding Family",
      "Private 30-min onboarding video call",
      "Custom tutor configuration for your child",
      "6 months FREE Skool community (not just 30 days)",
      "Direct message access to Justin",
      "Priority support \u2014 responses within 4 hours",
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
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
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
                  50% off launch pricing &mdash; includes 30 days free community
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

/* ───────────────────── FREE BONUS: VIBE CODING ───────────────────── */
function VibeCodingBonus() {
  return (
    <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full bg-teal/20 px-4 py-1 text-sm font-semibold text-teal">
          FREE Bonus for Founding Families
        </span>
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Safe Vibe Coding for Kids
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
          Learn to code by building Minecraft mods together. Your child gets
          access to a kid-friendly coding team trained to help them create
          real mods &mdash; custom swords, new creatures, entire worlds &mdash;
          while learning real programming skills.
        </p>
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-3 text-4xl">{"\u26CF\uFE0F"}</div>
            <h3 className="mb-2 font-bold">Build Real Mods</h3>
            <p className="text-sm text-gray-300">
              Your child designs and builds actual Minecraft Java mods with
              AI-assisted coding guidance.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-3 text-4xl">{"\uD83D\uDEE1\uFE0F"}</div>
            <h3 className="mb-2 font-bold">Safe &amp; Supervised</h3>
            <p className="text-sm text-gray-300">
              A kid-trained coding team guides every session. No unsupervised
              AI interactions &mdash; everything is designed for children.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-3 text-4xl">{"\uD83C\uDFAE"}</div>
            <h3 className="mb-2 font-bold">Play What They Build</h3>
            <p className="text-sm text-gray-300">
              The best part? They test every mod in Minecraft. Coding stops
              feeling like homework and starts feeling like a game.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border-2 border-teal bg-teal/10 p-6">
          <p className="text-lg font-semibold">
            Included FREE with every Founding Family membership &mdash; a $197 value.
          </p>
          <a
            href="#join"
            className="mt-4 inline-block rounded-xl bg-orange px-8 py-3 font-bold transition hover:bg-orange-dark"
          >
            Get Founding Family Access &mdash; $47
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FAQ ───────────────────── */
const faqs = [
  {
    q: "What ages is this for?",
    a: "Zy AI Academy works best for kids ages 5\u201314. The AI tutors adapt to any grade level automatically.",
  },
  {
    q: "Is it hard to set up?",
    a: "Not at all. Setup takes about 10 minutes, and you don\u2019t have to do it alone. When you join, you get 30 days of free access to our Skool community where our team will walk you through every step. Most parents are set up and running their first session on Day 1.",
  },
  {
    q: "What do I need?",
    a: "A computer or tablet and a ChatGPT account (free tier works). That\u2019s it. For the bonus Vibe Coding program, you\u2019ll also want Minecraft Java Edition.",
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
  {
    q: "What is the Skool community?",
    a: "It\u2019s a private online group (hosted on Skool.com) where Founding Families connect, share wins, ask questions, and get setup help. Think of it as your support system \u2014 other parents doing the exact same thing, plus our team answering questions daily.",
  },
  {
    q: "What does \u201Cdone-for-you setup\u201D mean?",
    a: "It means you\u2019re not on your own. When you join the community, post that you need help setting up the AI tutors, and our team will walk you through every step \u2014 from copying the prompts to configuring ChatGPT to running your child\u2019s first session. We\u2019ll do it with you, not just hand you instructions.",
  },
  {
    q: "What happens after the 30 days of free community access?",
    a: "After 30 days, you can choose to continue in the Skool community for a small monthly fee. But here\u2019s the important part: your AI tutors, templates, dashboard, and Vibe Coding bonus are yours forever regardless. The community is a bonus, not a requirement. Many families are fully self-sufficient after the first month.",
  },
  {
    q: "Do I NEED the community to use the AI tutors?",
    a: "No. The AI tutors work completely on their own. The community is there for setup help, accountability, and support \u2014 but once you\u2019re set up, you don\u2019t need it. Think of it like training wheels: incredibly helpful at the start, optional once you\u2019re rolling.",
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
          Give Your Child the AI Advantage &mdash; With a Community Behind You
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-300">
          Join the founding families getting personalized AI tutoring, real setup
          help, and a community of parents on the same mission. Everything you
          need for $47 &mdash; including 30 days of free community access.
        </p>
        <a
          href="#join"
          className="inline-block rounded-xl bg-orange px-10 py-4 text-lg font-bold shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
        >
          Get Founding Family Access &mdash; $47
        </a>
        <p className="mt-4 text-sm text-gray-400">
          30-day money-back guarantee &bull; Lifetime product access &bull; 30
          days free community
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── BECOME A TUTOR ───────────────────── */
function BecomeTutor() {
  return (
    <section id="tutor" className="bg-light px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-teal/20 px-4 py-1 text-sm font-semibold text-teal">
          Now Recruiting
        </span>
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Become an AI Tutor Helper
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-600">
          Love teaching? Know your way around AI? We&apos;re building a network of
          AI-powered tutors who help families get the most out of the Zy system.
          Flexible hours, remote work, and you&apos;ll be at the forefront of
          education&apos;s biggest shift.
        </p>
        <div className="mb-8 grid gap-4 text-left sm:grid-cols-3">
          {[
            { icon: "\uD83D\uDCBB", title: "100% Remote", desc: "Work from anywhere on your schedule" },
            { icon: "\uD83D\uDCB0", title: "Earn $25\u2013$50/hr", desc: "Competitive pay, growing demand" },
            { icon: "\uD83C\uDF31", title: "Make an Impact", desc: "Help kids learn skills school doesn\u2019t teach" },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
              <div className="mb-2 text-3xl">{b.icon}</div>
              <h3 className="font-bold">{b.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          className="mx-auto max-w-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
          <select
            name="experience"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          >
            <option value="">Your experience with AI</option>
            <option value="beginner">Beginner &mdash; I use ChatGPT sometimes</option>
            <option value="intermediate">Intermediate &mdash; I build with AI tools regularly</option>
            <option value="advanced">Advanced &mdash; I develop AI systems / teach AI</option>
          </select>
          <textarea
            name="message"
            placeholder="Why do you want to be an AI tutor? (optional)"
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-teal py-3 font-semibold text-white transition hover:bg-teal/90"
          >
            Apply to Be a Tutor
          </button>
          <p className="text-xs text-gray-500">
            We&apos;ll review your application and get back within 48 hours.
          </p>
        </form>
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
      <WhyNow />
      <WhoItsFor />
      <ProofStrip />
      <WatchRealSession />
      <WhatYouGet />
      <CommunitySupport />
      <HowItWorks />
      <Pricing />
      <VibeCodingBonus />
      <FAQ />
      <FinalCTA />
      <BecomeTutor />
      <Footer />
    </>
  );
}
