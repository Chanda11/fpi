import {
  FileText,
  Download,
  Calendar,
  BookOpen,
} from "lucide-react";

const reports = [
  {
    title: "State of Media Freedom Report 2025",
    category: "Research Report",
    date: "May 2025",
    description:
      "An assessment of media freedom, journalism practices and access to information in Zambia.",
  },
  {
    title: "Media Literacy Toolkit",
    category: "Educational Resource",
    date: "March 2025",
    description:
      "A practical guide for educators, journalists and community leaders.",
  },
  {
    title: "Digital Media Trends Study",
    category: "Research Publication",
    date: "January 2025",
    description:
      "Exploring digital transformation and emerging technologies in the media sector.",
  },
];

const Reports = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Reports & Publications
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Research reports, policy briefs, toolkits and
            publications produced by FPI Zambia.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto text-blue-600 mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Knowledge Resources
          </h2>

          <p className="text-gray-600 text-lg">
            Our publications provide evidence, analysis and
            practical guidance to strengthen journalism,
            media literacy and democratic governance.
          </p>
        </div>
      </section>

      {/* REPORTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-3 gap-8">

            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <FileText className="w-12 h-12 text-blue-600 mb-5" />

                <span className="text-sm text-blue-600 font-medium">
                  {report.category}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {report.title}
                </h3>

                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {report.date}
                </div>

                <p className="text-gray-600 mb-6">
                  {report.description}
                </p>

                <button className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default Reports;