import {
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react";

const newsletters = [
  {
    title: "FPI Zambia Newsletter - June 2025",
    date: "June 2025",
    description:
      "Highlights from training programs, partnerships and advocacy activities.",
  },
  {
    title: "FPI Zambia Newsletter - March 2025",
    date: "March 2025",
    description:
      "Updates on media literacy campaigns and community engagement initiatives.",
  },
  {
    title: "FPI Zambia Newsletter - January 2025",
    date: "January 2025",
    description:
      "Program achievements, strategic priorities and upcoming events.",
  },
];

const Newsletters = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Newsletters
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Stay informed with the latest updates,
            achievements and activities from FPI Zambia.
          </p>
        </div>
      </section>

      {/* NEWSLETTERS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid gap-8">

            {newsletters.map((newsletter, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                  <div>
                    <div className="flex items-center text-blue-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {newsletter.date}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">
                      {newsletter.title}
                    </h3>

                    <p className="text-gray-600">
                      {newsletter.description}
                    </p>
                  </div>

                  <button className="mt-6 md:mt-0 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Read Newsletter
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <Mail className="w-16 h-16 text-blue-600 mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-gray-600 mb-8">
            Receive updates on media freedom,
            journalism development, research,
            events and opportunities.
          </p>

          <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border rounded-lg px-4 py-3"
            />

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Newsletters;