export default function Home() {
  return (
    <main className="relative px-6">

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center">

        <span className="mb-6 px-4 py-1 text-sm border border-white/20 rounded-full text-gray-400">
          Innovation • Collaboration • Engineering
        </span>

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
          MindGrid
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
          A focused student innovation community building technical depth,
          leadership capacity, and real-world project execution.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="/signup"
            className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Join Now
          </a>

          <a
            href="/about"
            className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition"
          >
            Learn More
          </a>
        </div>

      </section>


      {/* FEATURE STRIP */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-6">

        <Feature label="Founded" value="2023" />
        <Feature label="Active Members" value="60+" />
        <Feature label="Annual Events" value="15+" />

      </section>


      {/* WHAT WE DO */}
      <section className="max-w-6xl mx-auto mt-28">

        <h2 className="text-3xl font-medium mb-14 text-center">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <PremiumCard
            title="Workshops"
            desc="Hands-on technical sessions focused on applied system design and practical engineering."
          />

          <PremiumCard
            title="Hackathons"
            desc="Competitive events where ideas evolve into functional prototypes under time pressure."
          />

          <PremiumCard
            title="Leadership"
            desc="Execution-focused teamwork built on communication, clarity, and accountability."
          />

        </div>

      </section>


      {/* PROCESS SECTION */}
      <section className="max-w-5xl mx-auto mt-32">

        <h2 className="text-3xl font-medium mb-12 text-center">
          How We Operate
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <Step number="01" title="Ideate" />
          <Step number="02" title="Build" />
          <Step number="03" title="Deliver" />

        </div>

      </section>


      {/* METRICS */}
      <section className="max-w-5xl mx-auto mt-32 text-center">

        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">

          <Metric number="60+" label="Members" />
          <Metric number="15+" label="Events" />
          <Metric number="10+" label="Projects" />

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="mt-32 mb-32 flex justify-center">

        <div className="w-full max-w-3xl p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg text-center">

          <h2 className="text-3xl font-medium mb-4">
            Ready to build with us?
          </h2>

          <p className="text-gray-400 mb-8">
            Join a community that values execution over noise.
          </p>

          <a
            href="/signup"
            className="px-10 py-4 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Become a Member
          </a>

        </div>

      </section>

    </main>
  );
}


/* Feature */
function Feature({ label, value }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-center">
      <p className="text-2xl font-medium">{value}</p>
      <p className="text-gray-500 text-sm mt-2">{label}</p>
    </div>
  );
}


/* Premium Card */
function PremiumCard({ title, desc }) {
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}


/* Step */
function Step({ number, title }) {
  return (
    <div>
      <p className="text-gray-600 text-sm mb-2">{number}</p>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
  );
}


/* Metric */
function Metric({ number, label }) {
  return (
    <div>
      <h3 className="text-4xl font-semibold">{number}</h3>
      <p className="text-gray-500 mt-2">{label}</p>
    </div>
  );
}   