import {
  GraduationCap,
  Users,
  Briefcase,
  Award,
} from "lucide-react";

const CapacityBuilding = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Capacity Building
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Strengthening the knowledge, skills and
            capabilities of journalists, media institutions
            and communities across Zambia.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Building Skills for Sustainable Impact
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              FPI Zambia delivers practical training,
              mentorship and professional development
              opportunities designed to strengthen
              journalism, leadership and civic engagement.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our capacity-building initiatives empower
              individuals and institutions with tools,
              knowledge and confidence to create
              lasting positive change.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
            alt="Capacity Building"
            className="rounded-2xl shadow-xl"
          />

        </div>
      </section>

      {/* AREAS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Capacity Building Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Professional Training
              </h3>

              <p className="text-gray-600">
                Journalism, media ethics,
                investigative reporting and
                digital media skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Leadership Development
              </h3>

              <p className="text-gray-600">
                Building leadership and
                management capacity within
                organizations and communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Briefcase className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Institutional Support
              </h3>

              <p className="text-gray-600">
                Strengthening systems,
                governance and operational
                effectiveness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Award className="w-10 h-10 text-blue-600 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Mentorship Programs
              </h3>

              <p className="text-gray-600">
                Connecting experienced
                professionals with emerging
                leaders and journalists.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Capacity Building Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                500+
              </h3>
              <p>Professionals Trained</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                100+
              </h3>
              <p>Workshops Conducted</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                50+
              </h3>
              <p>Partner Organizations</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                20+
              </h3>
              <p>Mentorship Programs</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default CapacityBuilding;