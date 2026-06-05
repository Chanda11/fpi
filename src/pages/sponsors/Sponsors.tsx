import { HeartHandshake } from "lucide-react";

const sponsors = [
  {
    name: "Media Development Fund",
    description:
      "Supporting journalism training and media development initiatives.",
  },
  {
    name: "International Development Partner",
    description:
      "Providing support for governance and civic engagement programs.",
  },
  {
    name: "Democracy Support Initiative",
    description:
      "Supporting media freedom and democratic participation projects.",
  },
  {
    name: "Research & Innovation Fund",
    description:
      "Funding research, publications and media literacy activities.",
  },
  {
    name: "Strategic Development Partner",
    description:
      "Contributing to institutional growth and sustainability.",
  },
  {
    name: "Community Impact Fund",
    description:
      "Supporting local community engagement and outreach programs.",
  },
];

const Sponsors = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Sponsors & Supporters
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            We are grateful to the organizations and institutions
            that support our mission to strengthen journalism,
            media freedom and democratic participation.
          </p>
        </div>
      </section>

      {/* SPONSORS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-center mb-4">
                  {sponsor.name}
                </h3>

                <p className="text-gray-600 text-center">
                  {sponsor.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* THANK YOU */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Thank You For Your Support
          </h2>

          <p className="text-gray-600 text-lg">
            Together we continue to promote media freedom,
            professional journalism, media literacy and
            democratic participation throughout Zambia.
          </p>
        </div>
      </section>
    </>
  );
};

export default Sponsors;