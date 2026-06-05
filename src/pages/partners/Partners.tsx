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

const Partners = () => {
  return (
    <>
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our Partners
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Building stronger journalism, media freedom and
            democratic participation through strategic partnerships.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xl">
                    {partner.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-center mb-4">
                  {partner.name}
                </h3>

                <p className="text-gray-600 text-center">
                  {partner.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;