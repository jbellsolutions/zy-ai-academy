"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   ZION'S DASHBOARD — His first business dashboard

   Update the data below as revenue comes in.
   All numbers are placeholders until first sales.
   ───────────────────────────────────────────── */

// ── UPDATE THESE NUMBERS AS REVENUE COMES IN ──
const BUSINESS_DATA = {
  totalRevenue: 0,        // Total gross revenue collected
  totalExpenses: 0,       // Total business expenses paid
  totalFamilies: 0,       // Number of families using the system
  totalSessions: 0,       // Total tutoring sessions across all families
  // Zion's contributions this month
  tutorsTested: 7,        // Number of tutors he's tested
  sessionsRecorded: 26,   // Proof videos recorded
  feedbackGiven: 14,      // Thumbs up/down reviews given
};

// Calculated from the data
const netRevenue = BUSINESS_DATA.totalRevenue - BUSINESS_DATA.totalExpenses;
const operationsCut = Math.round(netRevenue * 0.10);
const afterOps = netRevenue - operationsCut;
const investingAmount = Math.round(afterOps * (1/3));
const spendingAmount = Math.round(afterOps * (1/3));
const savingsAmount = afterOps - investingAmount - spendingAmount; // remainder to avoid rounding issues

const buckets = [
  {
    name: "Investing",
    amount: investingAmount,
    color: "bg-emerald-500",
    barColor: "bg-emerald-400",
    bgLight: "bg-emerald-50 border-emerald-200",
    icon: "\uD83D\uDCC8",
    desc: "Money that makes more money",
    lesson: "This money works for you while you sleep. It grows over time!",
  },
  {
    name: "Spending Cash",
    amount: spendingAmount,
    color: "bg-orange-500",
    barColor: "bg-orange-400",
    bgLight: "bg-orange-50 border-orange-200",
    icon: "\uD83D\uDCB0",
    desc: "Your paycheck — you earned it!",
    lesson: "This is yours. You decide what to do with it because you worked for it.",
  },
  {
    name: "Savings",
    amount: savingsAmount,
    color: "bg-blue-500",
    barColor: "bg-blue-400",
    bgLight: "bg-blue-50 border-blue-200",
    icon: "\uD83C\uDFE6",
    desc: "Money for future-you",
    lesson: "This is for something big later. It's there when you really need it.",
  },
  {
    name: "Operations",
    amount: operationsCut,
    color: "bg-gray-500",
    barColor: "bg-gray-400",
    bgLight: "bg-gray-50 border-gray-200",
    icon: "\u2699\uFE0F",
    desc: "Keeps the business running",
    lesson: "Every business has costs. The website, the tools — this pays for all of that.",
  },
];

const maxBucket = Math.max(...buckets.map(b => b.amount), 1);

function MoneyBar({ bucket }: { bucket: typeof buckets[0] }) {
  const pct = maxBucket > 0 ? (bucket.amount / maxBucket) * 100 : 0;
  const [showLesson, setShowLesson] = useState(false);

  return (
    <div
      className={`rounded-2xl border-2 p-5 transition-all cursor-pointer hover:scale-[1.02] ${bucket.bgLight}`}
      onClick={() => setShowLesson(!showLesson)}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{bucket.icon}</span>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{bucket.name}</h3>
          <p className="text-sm text-gray-500">{bucket.desc}</p>
        </div>
        <div className="ml-auto text-2xl font-extrabold text-gray-800">
          ${bucket.amount.toLocaleString()}
        </div>
      </div>
      <div className="h-6 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full rounded-full ${bucket.barColor} transition-all duration-700`}
          style={{ width: `${Math.max(pct, 2)}%` }}
        />
      </div>
      {showLesson && (
        <div className="mt-3 rounded-xl bg-white/80 p-3 text-sm text-gray-600 border border-gray-200">
          <span className="font-semibold text-gray-700">What this means: </span>
          {bucket.lesson}
        </div>
      )}
    </div>
  );
}

function StatCard({ icon, num, label }: { icon: string; num: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white border-2 border-gray-100 p-5 text-center shadow-sm hover:shadow-md transition">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-extrabold text-gray-800">{num}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function RoleCard({ icon, title, detail }: { icon: string; title: string; detail: string }) {
  return (
    <div className="rounded-2xl bg-white border-2 border-teal/20 p-5 hover:border-teal/40 transition">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{detail}</p>
    </div>
  );
}

export default function ZionsDashboard() {
  const hasRevenue = BUSINESS_DATA.totalRevenue > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-white to-[#F0F9FF]">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-4 py-8 text-white text-center">
        <div className="mx-auto max-w-4xl">
          <div className="text-5xl mb-3">&#x1F680;</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Zion&apos;s Business Dashboard
          </h1>
          <p className="text-lg opacity-90">
            Founder &amp; Chief Learning Officer — Zy AI Academy
          </p>
          <div className="mt-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            Your First Business
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 space-y-10">

        {/* ── IMPACT SECTION ── */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">&#x1F31F;</span> Your Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon="&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;"
              num={BUSINESS_DATA.totalFamilies.toString()}
              label="Families helped"
            />
            <StatCard
              icon="&#x1F4DA;"
              num={BUSINESS_DATA.totalSessions.toString()}
              label="Learning sessions"
            />
            <StatCard
              icon="&#x1F4B5;"
              num={`$${BUSINESS_DATA.totalRevenue.toLocaleString()}`}
              label="Total earned"
            />
            <StatCard
              icon="&#x1F3AF;"
              num={`$${spendingAmount.toLocaleString()}`}
              label="Your paycheck"
            />
          </div>
        </section>

        {/* ── MONEY BUCKETS ── */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-3xl">&#x1F4B0;</span> Where the Money Goes
          </h2>
          <p className="text-gray-500 mb-6">
            Tap any bucket to learn what it means.
          </p>

          {!hasRevenue && (
            <div className="rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50 p-6 text-center mb-6">
              <div className="text-4xl mb-3">&#x1F331;</div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Your business is just getting started!
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                When families buy the program, the money will show up here.
                You&apos;ll see exactly how much goes to investing, your paycheck,
                and savings. Keep testing those tutors — you&apos;re building
                something amazing.
              </p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {buckets.map((b) => (
              <MoneyBar key={b.name} bucket={b} />
            ))}
          </div>

          {/* Pie chart visual */}
          <div className="mt-8 rounded-2xl border-2 border-gray-100 bg-white p-6">
            <h3 className="text-center font-bold text-gray-700 mb-4">The Split</h3>
            <div className="flex items-center justify-center gap-2">
              <div className="h-10 rounded-l-full bg-emerald-400 flex items-center justify-center text-white text-xs font-bold px-3" style={{ width: '30%' }}>
                30%
              </div>
              <div className="h-10 bg-orange-400 flex items-center justify-center text-white text-xs font-bold px-3" style={{ width: '30%' }}>
                30%
              </div>
              <div className="h-10 bg-blue-400 flex items-center justify-center text-white text-xs font-bold px-3" style={{ width: '30%' }}>
                30%
              </div>
              <div className="h-10 rounded-r-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold px-2" style={{ width: '10%' }}>
                10%
              </div>
            </div>
            <div className="flex justify-between mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-full bg-emerald-400" /> Investing
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-400" /> Paycheck
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-400" /> Savings
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-400" /> Business
              </span>
            </div>
          </div>
        </section>

        {/* ── YOUR JOB ── */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">&#x1F4BC;</span> Your Job This Month
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <RoleCard
              icon="&#x1F9EA;"
              title="Tutors Tested"
              detail={`${BUSINESS_DATA.tutorsTested} tutors tested and reviewed`}
            />
            <RoleCard
              icon="&#x1F3AC;"
              title="Sessions Recorded"
              detail={`${BUSINESS_DATA.sessionsRecorded} real learning sessions filmed`}
            />
            <RoleCard
              icon="&#x1F44D;"
              title="Feedback Given"
              detail={`${BUSINESS_DATA.feedbackGiven} lessons reviewed with thumbs up or down`}
            />
          </div>
        </section>

        {/* ── WHAT YOU'RE LEARNING ── */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">&#x1F4A1;</span> What You&apos;re Learning
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-5">
              <h3 className="font-bold text-purple-800 mb-2">About Business</h3>
              <ul className="space-y-2 text-sm text-purple-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">&#x2713;</span>
                  How a business makes money
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">&#x2713;</span>
                  Why businesses have costs before profits
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">&#x2713;</span>
                  How to create something people want
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
              <h3 className="font-bold text-amber-800 mb-2">About Money</h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">&#x2713;</span>
                  The difference between investing, saving, and spending
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">&#x2713;</span>
                  Why you pay for business costs first
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">&#x2713;</span>
                  How investing makes your money grow
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FOOTER MESSAGE ── */}
        <div className="rounded-2xl bg-gradient-to-r from-teal/10 to-orange/10 border-2 border-teal/20 p-8 text-center">
          <div className="text-4xl mb-3">&#x1F3C6;</div>
          <h3 className="text-xl font-extrabold text-gray-800 mb-2">
            You Built This, Zion
          </h3>
          <p className="text-gray-600 max-w-lg mx-auto">
            Every tutor you tested, every session you recorded, every piece of
            feedback you gave — that&apos;s what made this real. This is your
            company. You&apos;re helping other kids learn, and you&apos;re
            learning how to build something amazing. Keep going.
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 px-4 py-6 text-center text-sm text-gray-400">
        <p>Zy AI Academy &mdash; Zion&apos;s First Business</p>
        <p className="mt-1">Built by Zion &amp; Dad</p>
      </footer>
    </div>
  );
}
