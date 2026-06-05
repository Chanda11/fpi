import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Eye,
  Shield,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About FPI Zambia
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Promoting media freedom, strengthening journalism,
            and empowering citizens through media literacy
            and democratic participation.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
              alt="FPI Zambia"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-blue-600 font-semibold uppercase">
              Who We Are
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Strengthening Independent Media and Democracy
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Free Press Initiative Zambia (FPI Zambia) is a
              media development organization committed to
              promoting media freedom, professional journalism,
              access to information, and democratic governance.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through advocacy, training, research and
              community engagement, we work with journalists,
              media institutions, civil society and citizens
              to build a more informed and accountable society.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <Target className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-2xl font-bold mb-4">
                Mission
              </h3>

              <p className="text-gray-600">
                To strengthen media freedom, enhance
                professional journalism and promote citizen
                participation through information and media
                literacy initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Eye className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-2xl font-bold mb-4">
                Vision
              </h3>

              <p className="text-gray-600">
                A Zambia where independent media,
                informed citizens and democratic values
                contribute to sustainable development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-2xl font-bold mb-4">
                Core Values
              </h3>

              <p className="text-gray-600">
                Integrity, accountability, inclusion,
                professionalism, transparency and
                respect for human rights.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                500+
              </h3>

              <p className="text-gray-600 mt-2">
                Journalists Trained
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                100+
              </h3>

              <p className="text-gray-600 mt-2">
                Workshops Conducted
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                50+
              </h3>

              <p className="text-gray-600 mt-2">
                Communities Reached
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                25+
              </h3>

              <p className="text-gray-600 mt-2">
                Strategic Partners
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">

          <Users className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Join Us in Strengthening Media Freedom
          </h2>

          <p className="text-blue-100 mb-8">
            Partner with us to promote independent
            journalism, media literacy and democratic
            participation in Zambia.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

        </div>
      </section>
    </>
  );
};

export default About;