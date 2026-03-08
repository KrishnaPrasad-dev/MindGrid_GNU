export default function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">

      <div className="max-w-4xl w-full grid md:grid-cols-2 bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border border-zinc-800">

        {/* Left Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10 flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-4">
            Join MindGrid Club
          </h1>

          <p className="text-lg text-indigo-100 mb-6">
            Become part of a community of innovators, developers and
            problem solvers building amazing things together.
          </p>

          <ul className="space-y-3 text-indigo-100">
            <li>🚀 Learn modern technologies</li>
            <li>🤝 Collaborate with talented students</li>
            <li>🏆 Participate in hackathons</li>
            <li>💡 Build real world projects</li>
          </ul>

        </div>

        {/* Right Section */}
        <div className="p-10">

          <h2 className="text-2xl font-semibold mb-6 text-white">
            Create your account
          </h2>

          <form className="space-y-4">

            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Student ID
              </label>
              <input
                type="text"
                placeholder="Enter your student ID"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Department
              </label>
              <input
                type="text"
                placeholder="Enter your department"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-medium transition duration-200"
            >
              Sign Up
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}