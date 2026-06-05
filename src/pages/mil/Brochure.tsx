import {
  Download,
  FileText,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react";

const Brochure = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            MIL Brochure
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Learn more about FPI Zambia's Media &
            Information Literacy initiatives, programs
            and opportunities.
          </p>
        </div>
      </section>

      {/* BROCHURE OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Media & Information Literacy Guide
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              This brochure provides an overview of our
              Media & Information Literacy initiatives,
              community programs, educational resources
              and opportunities for participation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              It serves as a practical introduction to
              understanding media, combating misinformation
              and becoming a responsible digital citizen.
            </p>

            <button className="mt-8 inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-xl p-10">
            <div className="aspect-[3/4] bg-white rounded-xl shadow flex flex-col justify-center items-center text-center p-8">

              <BookOpen className="w-20 h-20 text-blue-600 mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                MIL Brochure
              </h3>

              <p className="text-gray-500">
                Media & Information Literacy
              </p>

              <p className="text-gray-500">
                Free Press Initiative Zambia
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            What's Inside?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <BookOpen className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Educational Resources
              </h3>

              <p className="text-gray-600">
                Tools and materials for media literacy
                learning and awareness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Community Programs
              </h3>

              <p className="text-gray-600">
                Information about workshops,
                campaigns and outreach activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <FileText className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                MIL Opportunities
              </h3>

              <p className="text-gray-600">
                Learn how individuals and institutions
                can participate and collaborate.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold mb-6">
            Start Your Media Literacy Journey
          </h2>

          <p className="text-blue-100 mb-8">
            Explore our resources, participate in our
            programs and become part of Zambia's growing
            Media & Information Literacy movement.
          </p>

          <button className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold">
            Explore Resources
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

        </div>
      </section>
    </>
  );
};

export default Brochure;