import {
  BookOpen,
  ShieldCheck,
  Users,
  Globe,
} from "lucide-react";

const MediaLiteracy = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Media & Information Literacy
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Empowering citizens to critically access,
            analyze, evaluate and create information in
            an increasingly digital world.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Media Literacy Matters
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                In today's digital environment, citizens are
                exposed to large volumes of information from
                social media, websites, radio, television and
                online platforms.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Media and Information Literacy helps people
                identify misinformation, understand media
                messages, verify information and participate
                responsibly in democratic processes.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
                alt="Media Literacy"
                className="rounded-2xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* KEY AREAS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Critical Thinking
              </h3>
              <p className="text-gray-600">
                Teaching citizens how to evaluate information
                and news sources critically.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Fact Checking
              </h3>
              <p className="text-gray-600">
                Promoting verification skills to combat
                misinformation and fake news.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Community Awareness
              </h3>
              <p className="text-gray-600">
                Building informed communities capable of
                responsible media consumption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Digital Citizenship
              </h3>
              <p className="text-gray-600">
                Encouraging safe and responsible online
                participation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Program Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                100+
              </h3>
              <p>Training Sessions</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                5,000+
              </h3>
              <p>Citizens Reached</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                50+
              </h3>
              <p>Communities Engaged</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                25+
              </h3>
              <p>Partner Organizations</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default MediaLiteracy;