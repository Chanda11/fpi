import {
  FileText,
  Search,
  BarChart3,
  BookOpen,
} from "lucide-react";

const Research = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Research & Publications
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Generating evidence, insights and knowledge
            that strengthen media development, democratic
            governance and informed public participation.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Research That Drives Change
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              FPI Zambia conducts research and produces
              publications that contribute to evidence-based
              decision making within the media and governance sectors.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our studies, reports and policy briefs help
              stakeholders understand emerging challenges,
              opportunities and trends affecting media freedom,
              civic engagement and democratic development.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
            alt="Research"
            className="rounded-2xl shadow-xl"
          />

        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Research Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <Search className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Media Studies
              </h3>
              <p className="text-gray-600">
                Research on media trends, journalism
                practices and information ecosystems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <FileText className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Policy Briefs
              </h3>
              <p className="text-gray-600">
                Evidence-based recommendations for
                policy makers and stakeholders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Data Analysis
              </h3>
              <p className="text-gray-600">
                Measuring trends and impact across
                media and governance sectors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Publications
              </h3>
              <p className="text-gray-600">
                Reports, studies, manuals and
                knowledge products for public use.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SAMPLE PUBLICATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            Featured Publications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-8 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                State of Media Freedom Report
              </h3>

              <p className="text-gray-600">
                Annual assessment of media freedom
                and journalism conditions in Zambia.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Digital Media Trends Study
              </h3>

              <p className="text-gray-600">
                Exploring emerging technologies and
                digital transformation in media.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Media Literacy Toolkit
              </h3>

              <p className="text-gray-600">
                Resources for educators, journalists
                and community leaders.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Research;