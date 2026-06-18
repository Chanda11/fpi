import {
  Handshake,
  Users,
  Globe,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const partners = [
  {
    name: "UNESCO",
    description:
      "Supporting media development, freedom of expression and access to information.",
  },
  {
    name: "MISA Zambia",
    description:
      "Advancing media freedom and journalists' rights across Zambia.",
  },
  {
    name: "BBC Media Action",
    description:
      "Strengthening media and communication for positive social change.",
  },
  {
    name: "Internews",
    description:
      "Supporting independent media and access to trusted information.",
  },
  {
    name: "Panos Institute",
    description:
      "Promoting informed public debate and citizen participation.",
  },
  {
    name: "Local Universities",
    description:
      "Collaborating on research, training and media literacy initiatives.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Strategic Partners",
  },
  {
    value: "15+",
    label: "Joint Projects",
  },
  {
    value: "10",
    label: "Provinces Reached",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

const collaboration = [
  {
    icon: <Handshake className="w-8 h-8 text-white" />,
    title: "Collaboration",
    text: "Working together to strengthen journalism and civic engagement.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Capacity Building",
    text: "Training journalists, educators and communities across Zambia.",
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "National Impact",
    text: "Creating sustainable programmes that improve access to trusted information.",
  },
];

const Partners = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: "url('/images/partners.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <span className="inline-block bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Strategic Partnerships
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Partners
          </h1>

          <p className="max-w-3xl text-xl text-gray-200 leading-9">
            Building stronger journalism, media freedom, media literacy and
            democratic participation through meaningful partnerships that
            create lasting impact across Zambia.
          </p>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center p-8 hover:-translate-y-2 border border-blue-100"
              >
                <h2 className="text-5xl font-bold text-blue-600">
                  {item.value}
                </h2>
                <p className="text-gray-600 mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Working Together
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Our Strategic Partners
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Through collaboration with national and international
              organisations, FPI Zambia continues to strengthen independent
              journalism, media literacy and democratic participation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-500/20 group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-10 h-10 text-white" />
                </div>

                <span className="block text-center text-sm uppercase tracking-widest text-amber-600 font-semibold mb-3">
                  Strategic Partner
                </span>

                <h3 className="text-2xl font-bold text-center mb-4">
                  {partner.name}
                </h3>

                <p className="text-gray-600 text-center leading-8">
                  {partner.description}
                </p>

                <div className="border-t mt-8 pt-6 flex justify-center">
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-blue-600 uppercase tracking-widest font-semibold">
              Collaboration
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              How We Work Together
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaboration.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-3xl p-10 text-center hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-5">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="uppercase tracking-widest text-amber-400 font-semibold">
            Join Us
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Become A Strategic Partner
          </h2>
          <p className="text-gray-300 text-lg leading-8 mb-10">
            We welcome organisations committed to strengthening media freedom,
            promoting media literacy and advancing democratic participation
            throughout Zambia. Together we can create lasting impact for
            communities across the country.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/20">
            Partner With FPI Zambia
          </button>
        </div>
      </section>
    </>
  );
};

export default Partners;