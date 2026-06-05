import {
  Scale,
  Shield,
  Megaphone,
  Users,
} from "lucide-react";

const Advocacy = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Advocacy & Governance
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Promoting media freedom, access to information,
            accountability and democratic participation
            through evidence-based advocacy.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Strengthening Democratic Governance
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              FPI Zambia works with stakeholders to
              strengthen democratic institutions,
              protect media freedom and promote
              citizen participation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through advocacy campaigns, policy
              dialogue and strategic partnerships,
              we contribute to a more transparent,
              accountable and informed society.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1200"
            alt="Advocacy"
            className="rounded-2xl shadow-xl"
          />

        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Advocacy Pillars
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Media Freedom
              </h3>
              <p className="text-gray-600">
                Supporting independent journalism
                and freedom of expression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Scale className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Policy Reform
              </h3>
              <p className="text-gray-600">
                Advocating for laws and policies
                that support democracy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Megaphone className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Public Awareness
              </h3>
              <p className="text-gray-600">
                Raising awareness on governance
                and civic participation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Stakeholder Engagement
              </h3>
              <p className="text-gray-600">
                Bringing together citizens,
                media and institutions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Advocacy Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                30+
              </h3>
              <p>Policy Dialogues</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                100+
              </h3>
              <p>Stakeholder Meetings</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                20+
              </h3>
              <p>Advocacy Campaigns</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                10+
              </h3>
              <p>Policy Contributions</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Advocacy;