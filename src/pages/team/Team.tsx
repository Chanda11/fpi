import { Mail,} from "lucide-react";

const team = [
  {
    name: "Executive Director",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
    bio: "Provides strategic leadership and oversees organizational programs and partnerships.",
  },
  {
    name: "Programs Manager",
    role: "Programs Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
    bio: "Coordinates projects, stakeholder engagement and program implementation.",
  },
  {
    name: "Communications Officer",
    role: "Communications Officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    bio: "Leads communications, media relations and public outreach initiatives.",
  },
  {
    name: "Research Officer",
    role: "Research Officer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800",
    bio: "Conducts research, publications and policy analysis activities.",
  },
];

const Team = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our Team
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Meet the professionals driving media freedom,
            media literacy and democratic participation
            across Zambia.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {member.name}
                  </h3>

                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>

                  <div className="flex gap-3">
                    <button className="p-2 rounded-full bg-gray-100">
                      <Mail size={18} />
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOARD */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Governance & Leadership
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow">
            <p className="text-gray-600 leading-relaxed text-center">
              FPI Zambia is guided by a dedicated leadership and governance
              structure committed to transparency, accountability,
              professional excellence and public service.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Team;