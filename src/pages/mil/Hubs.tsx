import {
  MapPin,
  Users,
  Laptop,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const provinces = [
  {
    name: "Lusaka Province",
    hubs: 7,
    path: "/mil/province/lusaka",
  },
  {
    name: "Copperbelt Province",
    hubs: 3,
    path: "/mil/province/copperbelt",
  },
  {
    name: "Southern Province",
    hubs: 1,
    path: "/mil/province/southern",
  },
  {
    name: "Eastern Province",
    hubs: 2,
    path: "/mil/province/eastern",
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

      {/* PROVINCES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            MIL Hub Provinces
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {provinces.map((province) => (
              <Link
                key={province.name}
                to={province.path}
                className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <MapPin className="w-10 h-10 text-blue-600 mb-4" />

                <h3 className="text-2xl font-bold mb-2">
                  {province.name}
                </h3>

                <p className="text-blue-600 font-medium">
                  {province.hubs} Active Hubs
                </p>
              </Link>
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
                13+
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