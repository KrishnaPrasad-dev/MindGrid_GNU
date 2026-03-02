"use client";

const announcements = [
  {
    title: "Website Contest",
    date: "February 20, 2025",
    status: "Completed",
    description:
      "Internal web development competition focused on UI/UX and performance.",
  },
  {
    title: "Core Team Meeting",
    date: "February 20, 2025",
    status: "Completed",
    description:
      "Strategic planning session for upcoming semester initiatives.",
  },
  {
    title: "Annual Hackathon",
    date: "April 2025",
    status: "Upcoming",
    description:
      "48-hour innovation sprint focused on solving real-world problems.",
  },
];

export default function AnnouncementsPage() {
  return (
    <main className="px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold mb-3 text-center">
          Announcements
        </h1>

        <p className="text-gray-400 text-center mb-16">
          Updates, events, and important notices from MindGrid.
        </p>

        {/* LATEST ANNOUNCEMENT */}
        <section className="mb-20">

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300">
                Latest
              </span>

              <span className="text-sm text-gray-500">
                {announcements[0].date}
              </span>
            </div>

            <h2 className="text-2xl font-medium mb-3">
              {announcements[0].title}
            </h2>

            <p className="text-gray-400">
              {announcements[0].description}
            </p>

          </div>

        </section>

        {/* TIMELINE LIST */}
        <section>

          <div className="space-y-8 border-l border-white/10 pl-6">

            {announcements.map((item, index) => (
              <div key={index} className="relative">

                {/* Timeline Dot */}
                <div className="absolute -left-[13px] top-2 w-3 h-3 rounded-full bg-white/40"></div>

                <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">

                  <div className="flex justify-between items-center mb-2">

                    <h3 className="text-lg font-medium">
                      {item.title}
                    </h3>

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        item.status === "Upcoming"
                          ? "bg-white text-black"
                          : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 mb-2">
                    {item.date}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}