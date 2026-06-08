import {
  MapPin,
  Users,
  Laptop,
  BookOpen,
} from "lucide-react";

const hubs = [
  {
    city: "Lusaka",
    title: "Lusaka MIL Hub",
    description:
      "A center for media literacy training, digital skills development and community engagement.",
  },
  {
    city: "Ndola",
    title: "Ndola MIL Hub",
    description:
      "Supporting youth, educators and journalists through media literacy initiatives.",
  },
  {
    city: "Mazabuka",
    title: "Mazabuka MIL Hub",
    description:
      "Promoting responsible media consumption and digital citizenship.",
  },
    {
    city: "Livingstone",
    title: "Livingstone MIL Hub",
    description:
      "Promoting responsible media consumption and digital citizenship.",
  },

];

const Hubs = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            MIL Hubs
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Community-based learning spaces promoting
            Media & Information Literacy across Zambia.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Connecting Communities Through Knowledge
          </h2>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            MIL Hubs provide safe and inclusive spaces where
            citizens can learn about digital literacy,
            information verification, critical thinking and
            responsible participation in the digital world.
          </p>

        </div>
      </section>

      {/* HUB FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <Laptop className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Digital Skills
              </h3>

              <p className="text-gray-600">
                Training communities on digital tools,
                online safety and responsible internet use.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <BookOpen className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Learning Resources
              </h3>

              <p className="text-gray-600">
                Access to educational materials,
                toolkits and media literacy resources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Community Engagement
              </h3>

              <p className="text-gray-600">
                Encouraging dialogue and participation
                through local activities and workshops.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* HUB LOCATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Current Hubs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {hubs.map((hub, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <MapPin className="w-10 h-10 text-blue-600 mb-4" />

                <h3 className="text-2xl font-bold mb-2">
                  {hub.title}
                </h3>

                <p className="text-blue-600 font-medium mb-4">
                  {hub.city}
                </p>

                <p className="text-gray-600">
                  {hub.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold">
                10+
              </h3>
              <p>MIL Hubs</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                5,000+
              </h3>
              <p>Citizens Reached</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                100+
              </h3>
              <p>Training Sessions</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                50+
              </h3>
              <p>Community Events</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Hubs;