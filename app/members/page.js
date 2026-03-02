"use client";
import { useState } from "react";

const coreTeam = [
  { name: "A.Yadagiri", role: "President" },
  { name: "K.Madhulika", role: "Vice President" },
  { name: "A.Vyshnavi", role: "Secretary" },
  { name: "T.Felin Tressa", role: "Treasurer" },
  { name: "Y.Ashely", role: "Project Coordinator" },
  { name: "K.Sreeja", role: "Skills Coordinator" },
  { name: "L.Hasini Reddy", role: "Skills Lead - Communication" },
];

const members = [
  "M.Varshitha","Mahitha","M.Monisha","K.Rajasri","Samyuktha","Spandana",
  "R.Bhavya","E.Varshitha","K.Jahnavi","Sreechandana","A.Bhavna",
  "K.Pravalika","K.Shashirekha","K.Lakshmi Sai","L.Hasini",
  "P.Tanush","K.Dinesh","G.Varshith","K.Hasini Chowdary",
  "J.Divya","S.Madhupriya","R.Roshitha Shri","N.Ishitha",
  "K.Rajeshwar Reddy","S.Pranay Samuel","A.Ramcharan",
  "B.Deeraj","B.Shiva Sai","R.Harika","T.Vishnu","M.Soumya",
  "CH.Srihitha","Sriram","Y.Tarun","Krishna Prasad",
  "P.Komali","V.Varsha","Anjali","G.Harshitha",
  "M.Vignesh","T.Manvish","RadhaGopal",
  "S.Harshdeep Singh","A.Shamba Shiva Reddy",
  "M.Akshitha","N.Vinay","Sri Vinaya",
  "J.Charitha","K.Praneetha","P.Vijay"
];

export default function MembersPage() {
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter((m) =>
    m.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold mb-3 text-center">
          Members Directory
        </h1>

        <p className="text-gray-400 text-center mb-12">
          The people behind MindGrid.
        </p>

        {/* SEARCH */}
        <div className="mb-14">
          <input
            type="text"
            placeholder="Search member..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/30 transition"
          />
        </div>

        {/* CORE TEAM */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">
            Core Team
          </h2>

          <div className="space-y-4">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                <span className="font-medium">
                  {member.name}
                </span>

                <span className="text-sm px-3 py-1 rounded-full border border-white/20 text-gray-400">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CLUB MEMBERS */}
        <section>
          <h2 className="text-2xl font-medium mb-6">
            Club Members
          </h2>

          <div className="space-y-3">
            {filteredMembers.map((name, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                {name}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}