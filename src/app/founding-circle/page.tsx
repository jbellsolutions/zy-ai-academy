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
          <Link href="/kickstarter" className="hover:text-orange transition">Kickstarter</Link>
          <a
            href="#apply"
            className="rounded-lg bg-orange px-5 py-2 text-center font-semibold transition hover:bg-orange-dark"
          >
            Apply Now
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
          Alpha Access &mdash; Only 50 Spots
        </span>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Join the First 50 Families{" "}
          <span className="text-teal">Building the Future of Education</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          Shape the product. Lock in $47 forever. Get direct access to the founder.
          The Founding Circle isn&apos;t a purchase &mdash; it&apos;s a partnership.
        </p>
        <a
          href="#apply"
          className="inline-block rounded-xl bg-orange px-8 py-4 text-lg font-bold shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
        >
          Apply for Founding Circle
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Free for the first 50 families &bull; Lifetime $47 pricing locked forever
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── BENEFITS ───────────────────── */
const benefits = [
  { icon: "\uD83D\uDD12", title: "Lifetime $47 Pricing", desc: "Lock in the founding price forever, even as it rises to $97+" },
  { icon: "\uD83D\uDCAC", title: "Direct Founder Access", desc: "Private Slack channel with Justin. Ask anything, anytime." },
  { icon: "\uD83C\uDF93", title: "Weekly Group Coaching", desc: "Live calls for the first 90 days to get your family set up and thriving" },
  { icon: "\uD83D\uDDF3\uFE0F", title: "Vote on the Roadmap", desc: "You decide what features get built next. Your voice shapes the product." },
  { icon: "\uD83C\uDFC6", title: "Founding Family Certificate", desc: "A real certificate for your child recognizing them as a founding learner" },
  { icon: "\uD83D\uDE80", title: "Early Access to Everything", desc: "New modules, new subjects, new features \u2014 you get them first" },
  { icon: "\u26CF\uFE0F", title: "Free Minecraft Vibe Coding", desc: "The full $197 coding curriculum included at no extra cost" },
  { icon: "\u2B50", title: "Founders Wall", desc: "Your family\u2019s name listed on the official Founders Wall on our website" },
];

function Benefits() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          What Founding Families Get
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          This isn&apos;t just early access. It&apos;s a seat at the table.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 text-4xl">{b.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── THE DEAL ───────────────────── */
function TheDeal() {
  return (
    <section className="bg-light px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
          The Partnership
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-teal bg-teal/5 p-8">
            <h3 className="mb-4 text-xl font-bold text-teal">What We Ask</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Use the system at least 3x per week",
                "Fill out a short monthly feedback form",
                "Give one honest testimonial after 30 days",
                "Share wins in the community (optional but encouraged)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-teal">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-orange bg-orange/5 p-8">
            <h3 className="mb-4 text-xl font-bold text-orange">What You Get</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Everything listed above \u2014 $47 locked forever",
                "Direct influence on what gets built",
                "A system your child actually uses daily",
                "The satisfaction of being first",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-orange">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── VIDEO PROOF ───────────────────── */
function VideoProof() {
  return (
    <section className="bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange/20 px-4 py-1 text-sm font-semibold text-orange">
            Sound On
          </span>
          <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
            See What Your Child&apos;s Sessions Look Like
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            No scripts. No acting. Just Zy, his tablet, and his AI tutor doing
            real work every single morning.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/10">
            <LazyVideo
              src="/videos/IMG_5585_audio_enhanced.mp4"
              poster="/videos/thumb_5585_ae.jpg"
              preload="none"
              className="aspect-video"
            />
            <p className="bg-white/10 px-4 py-2 text-center text-sm">Full math session &mdash; unscripted</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/10">
            <LazyVideo
              src="/videos/IMG_5583_audio_enhanced.mp4"
              poster="/videos/thumb_5583_ae.jpg"
              preload="none"
              className="aspect-video"
            />
            <p className="bg-white/10 px-4 py-2 text-center text-sm">A tablet, a snack, and an hour</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── APPLICATION FORM ───────────────────── */
function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="apply" className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
          Apply for the Founding Circle
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-gray-600">
          We&apos;re accepting 50 families. Fill out a quick application and
          we&apos;ll get back to you within 24 hours.
        </p>

        {submitted ? (
          <div className="rounded-2xl border-2 border-teal bg-teal/5 p-10 text-center">
            <div className="mb-3 text-5xl">&#127881;</div>
            <h3 className="mb-2 text-2xl font-bold text-teal">Application Received!</h3>
            <p className="text-gray-600">
              We&apos;ll review your application and reach out within 24 hours.
              Welcome to the beginning of something special.
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-5"
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
            <input type="hidden" name="_subject" value="New Founding Circle Application" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Parent Name *</label>
                <input
                  type="text"
                  name="parent_name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Child&apos;s Age *</label>
                <select
                  name="child_age"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                >
                  <option value="">Select age</option>
                  {[4,5,6,7,8,9,10,11,12,13,14].map((a) => (
                    <option key={a} value={a}>{a} years old</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">Child&apos;s Grade Level *</label>
                <select
                  name="grade_level"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                >
                  <option value="">Select grade</option>
                  <option value="pre-k">Pre-K</option>
                  <option value="k">Kindergarten</option>
                  <option value="1">1st Grade</option>
                  <option value="2">2nd Grade</option>
                  <option value="3">3rd Grade</option>
                  <option value="4">4th Grade</option>
                  <option value="5">5th Grade</option>
                  <option value="6">6th Grade</option>
                  <option value="7">7th Grade</option>
                  <option value="8">8th Grade</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                What&apos;s your child&apos;s biggest learning challenge? *
              </label>
              <textarea
                name="challenge"
                required
                rows={3}
                placeholder="e.g., Struggles with math confidence, needs more reading practice, wants to learn coding..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Why do you want to join the Founding Circle?
              </label>
              <textarea
                name="why_founding"
                rows={3}
                placeholder="Tell us about your family and what excites you about AI tutoring..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">How did you find us?</label>
              <select
                name="referral_source"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              >
                <option value="">Select one</option>
                <option value="youtube">YouTube</option>
                <option value="kickstarter">Kickstarter</option>
                <option value="facebook">Facebook Group</option>
                <option value="homeschool_group">Homeschool Group/Co-op</option>
                <option value="friend">Friend / Word of Mouth</option>
                <option value="search">Google Search</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-orange py-4 text-lg font-bold text-white transition hover:bg-orange-dark"
            >
              Submit Application
            </button>
            <p className="text-center text-xs text-gray-500">
              We review every application personally. You&apos;ll hear back within 24 hours.
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
    q: "What exactly is the Founding Circle?",
    a: "It\u2019s our alpha group \u2014 the first 50 families who get to shape Zy AI Academy from the ground up. You get lifetime pricing, direct founder access, and real influence on what gets built.",
  },
  {
    q: "Is there a cost to join?",
    a: "The Founding Circle membership locks in the $47 founding price forever. As the product grows and the price increases to $97+, you\u2019ll never pay more.",
  },
  {
    q: "What\u2019s the time commitment?",
    a: "We ask that your child uses the system at least 3 times per week (about 20 minutes each session). You\u2019ll also fill out a short monthly feedback form. That\u2019s it.",
  },
  {
    q: "Can I join with multiple children?",
    a: "Absolutely. Your founding membership covers your entire household. Set up tutors for each child at their own grade level.",
  },
  {
    q: "What if my child is younger than 5 or older than 12?",
    a: "The system works best for ages 5\u201314, but we\u2019ve seen younger kids do well with parent assistance. If your child can use a tablet and follow simple instructions, they can use Zy.",
  },
  {
    q: "How long does the Founding Circle last?",
    a: "The founding benefits (pricing, direct access, voting rights) are permanent. The weekly coaching calls run for the first 90 days to get everyone set up and thriving.",
  },
];

function FoundingFAQ() {
  return (
    <section className="bg-light px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
          Founding Circle FAQ
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
    <section className="bg-gradient-to-br from-dark via-[#16213E] to-dark px-4 py-20 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Only 50 Spots. No Exceptions.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-300">
          Once the Founding Circle is full, it&apos;s closed permanently.
          This is the only way to get lifetime pricing and direct founder access.
        </p>
        <a
          href="#apply"
          className="inline-block rounded-xl bg-orange px-10 py-4 text-lg font-bold shadow-lg transition hover:bg-orange-dark hover:shadow-xl"
        >
          Apply for Founding Circle
        </a>
        <p className="mt-4 text-sm text-gray-400">
          30-day money-back guarantee &bull; $47 locked forever &bull; Lifetime access
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
export default function FoundingCircle() {
  return (
    <>
      <Nav />
      <Hero />
      <Benefits />
      <TheDeal />
      <VideoProof />
      <ApplicationForm />
      <FoundingFAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
