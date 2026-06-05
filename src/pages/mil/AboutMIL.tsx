import {
  BookOpen,
  Globe,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutMIL = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Media & Information Literacy (MIL)
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Empowering citizens with the skills to access,
            analyze, evaluate and create information responsibly
            in today's digital world.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              What is Media & Information Literacy?
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Media and Information Literacy (MIL) equips people
              with the ability to find, evaluate, use and create
              information effectively.
            </p>

            <p className="text-gray-600 leading-relaxed">
              MIL helps communities navigate misinformation,
              disinformation and digital challenges while
              promoting informed participation in society.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            alt="Media Literacy"
            className="rounded-2xl shadow-xl"
          />

        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            MIL Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Critical Thinking
              </h3>
              <p className="text-gray-600">
                Developing skills to analyze and evaluate
                information critically.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Fact Verification
              </h3>
              <p className="text-gray-600">
                Identifying misinformation and verifying
                information sources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Digital Citizenship
              </h3>
              <p className="text-gray-600">
                Promoting responsible and safe online
                participation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Community Awareness
              </h3>
              <p className="text-gray-600">
                Strengthening informed communities and
                civic participation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Explore MIL Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Link
              to="/mil/brochure"
              className="bg-gray-50 p-10 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                MIL Brochure
              </h3>

              <p className="text-gray-600 mb-4">
                Learn more about our Media &
                Information Literacy initiatives.
              </p>

              <span className="text-blue-600 inline-flex items-center">
                View Brochure
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/mil/hubs"
              className="bg-gray-50 p-10 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                MIL Hubs
              </h3>

              <p className="text-gray-600 mb-4">
                Explore community-based MIL hubs
                and learning opportunities.
              </p>

              <span className="text-blue-600 inline-flex items-center">
                Explore Hubs
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

          </div>

        </div>
      </section>
    </>
  );
};

export default AboutMIL;