export default function AboutPage() {
  return (
    <main className="px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-semibold text-center mb-4">
          About MindGrid
        </h1>

        <p className="text-gray-400 text-center mb-20">
          A student-driven innovation and engineering community.
        </p>


        {/* WHO WE ARE */}
        <section className="mb-20">

          <h2 className="text-2xl font-medium mb-6">
            Who We Are
          </h2>

          <p className="text-gray-400 leading-relaxed">
            MindGrid is a collaborative student organization focused on
            technical excellence, innovation, and leadership development.
            We create a space where ideas are explored, refined, and
            transformed into real-world impact.
          </p>

        </section>


        {/* VISION & MISSION */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
            <h3 className="text-xl font-medium mb-4">
              Our Vision
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To cultivate a culture of innovation where students
              grow technically, think critically, and execute with clarity.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
            <h3 className="text-xl font-medium mb-4">
              Our Mission
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To provide hands-on learning opportunities, collaborative
              projects, and leadership experiences that prepare members
              for real-world challenges.
            </p>
          </div>

        </section>


        {/* CORE VALUES */}
        <section className="mb-20">

          <h2 className="text-2xl font-medium mb-8">
            Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <ValueCard title="Innovation" />
            <ValueCard title="Collaboration" />
            <ValueCard title="Integrity" />
            <ValueCard title="Growth" />

          </div>

        </section>


        {/* FACULTY COORDINATOR */}
        <section className="p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">

          <h2 className="text-2xl font-medium mb-6">
            Faculty Coordinator
          </h2>

          <p className="text-gray-400 leading-relaxed">
            <span className="text-white font-medium">
              Dr. Sanjeev Srivastava
            </span>
            <br />
            Department of Computer Science Engineering [UIET]
            <br />
            Contact: director@gnuindia.org
          </p>

        </section>

      </div>

    </main>
  );
}


/* Value Card */
function ValueCard({ title }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-center hover:bg-white/10 transition">
      <h3 className="font-medium">{title}</h3>
    </div>
  );
}