"use client";
import { useMemo } from "react";

const contributions = [
  { name: "Sriram", amount: 100 },
  { name: "A.Yadagiri", amount: 200 },
  { name: "Krishna", amount: 250 },
  { name: "Tanush", amount: 450 },
];

export default function FinancePage() {
  const total = useMemo(
    () => contributions.reduce((sum, c) => sum + c.amount, 0),
    []
  );

  const average = Math.round(total / contributions.length);

  return (
    <main className="px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-semibold mb-3 text-center">
          Finance Overview
        </h1>

        <p className="text-gray-400 text-center mb-16">
          Transparent contribution tracking for MindGrid activities.
        </p>

        {/* SUMMARY CARDS */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">

          <SummaryCard
            label="Total Contributions"
            value={`₹${total}`}
          />

          <SummaryCard
            label="Total Contributors"
            value={contributions.length}
          />

          <SummaryCard
            label="Average Contribution"
            value={`₹${average}`}
          />

        </section>

        {/* CONTRIBUTION LIST */}
        <section>

          <h2 className="text-2xl font-medium mb-8">
            Contribution Records
          </h2>

          <div className="space-y-4">

            {contributions.map((person, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                <span className="font-medium">
                  {person.name}
                </span>

                <span className="text-gray-300">
                  ₹{person.amount}
                </span>
              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}


/* Summary Card */
function SummaryCard({ label, value }) {
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg text-center">
      <p className="text-sm text-gray-500 mb-3">
        {label}
      </p>
      <h3 className="text-3xl font-semibold">
        {value}
      </h3>
    </div>
  );
}