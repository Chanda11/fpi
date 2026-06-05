import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  TrendingUp,
  Shield,
  BookOpen,
  Scale,
  FileText,
} from "lucide-react";

import HeroCarousel from "../components/home/HeroCarousel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// =========================
// TYPES
// =========================
type Activity = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  participants: number;
  category: string;
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // =========================
  // FETCH FROM API
  // =========================
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/activities");

        if (!res.ok) {
          throw new Error("Failed to fetch activities");
        }

        const data = await res.json();

        setActivities(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  // =========================
  // FILTER
  // =========================
  const categories = [
    { id: "all", name: "All Activities", icon: "📋" },
    { id: "training", name: "Trainings", icon: "🎓" },
    { id: "workshop", name: "Workshops", icon: "🔧" },
    { id: "webinar", name: "Webinars", icon: "💻" },
    { id: "dialogue", name: "Dialogues", icon: "💬" },
  ];
  const focusAreas = [
  {
    icon: TrendingUp,
    title: "Media Development",
    description:
      "Strengthening independent journalism and promoting professional media standards across Zambia.",
  },
  {
    icon: Shield,
    title: "Media Freedom",
    description:
      "Advocating for freedom of expression, access to information and press freedom.",
  },
  {
    icon: BookOpen,
    title: "Media Literacy",
    description:
      "Empowering citizens with critical thinking skills to identify misinformation and disinformation.",
  },
  {
    icon: Scale,
    title: "Policy Advocacy",
    description:
      "Supporting legal and policy reforms that strengthen democracy, transparency and accountability.",
  },
  {
    icon: FileText,
    title: "Research & Publications",
    description:
      "Producing reports, studies and publications that inform media development and governance.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Building partnerships between journalists, communities, civil society and public institutions.",
  },
];

  const filteredActivities =
    selectedCategory === "all"
      ? activities
      : activities.filter((a) => a.category === selectedCategory);

  return (
    <>
      <HeroCarousel />

      {/* WELCOME */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Advancing Free Press & Journalism
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Free Press Initiative Zambia promotes media freedom and strengthens journalism.
        </p>
      </section>

      {/* ABOUT FPI */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
          alt="FPI Zambia Training"
          className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
        />

        <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-sm">
            Years Supporting Media Development
          </p>
        </div>
      </div>

      {/* Content */}
      <div>
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          About FPI Zambia
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
          Strengthening Media Freedom and Democratic Participation
        </h2>

        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Free Press Initiative Zambia (FPI Zambia) is dedicated to promoting
          independent journalism, media freedom, media literacy, and citizen
          participation in democratic governance.
        </p>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Through training, research, advocacy, and community engagement,
          we empower journalists, civil society organizations, and communities
          with the knowledge and tools needed to build a more informed,
          transparent, and accountable society.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              500+
            </h3>
            <p className="text-gray-600">
              Journalists Trained
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              50+
            </h3>
            <p className="text-gray-600">
              Communities Reached
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              100+
            </h3>
            <p className="text-gray-600">
              Capacity Building Programs
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              25+
            </h3>
            <p className="text-gray-600">
              Strategic Partners
            </p>
          </div>
        </div>

        <Link
          to="/about"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

    </div>
  </div>
</section>

      {/* ACTIVITIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-8">
            Recent Activities
          </h2>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* LOADING / ERROR */}
          {loading && <p className="text-center">Loading activities...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* SWIPER */}
          {!loading && !error && (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {filteredActivities.map((a) => (
                <SwiperSlide key={a.id}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">

                    <img
                      src={a.image}
                      className="h-52 w-full object-cover"
                      alt={a.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800";
                      }}
                    />

                    <div className="p-5">
                      <h3 className="font-bold text-lg">{a.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {a.description}
                      </p>

                      <div className="mt-4 text-sm text-gray-500 space-y-1">
                        <p><Calendar className="inline w-4 h-4 mr-1" /> {a.date}</p>
                        <p><MapPin className="inline w-4 h-4 mr-1" /> {a.location}</p>
                        <p><Users className="inline w-4 h-4 mr-1" /> {a.participants}</p>
                      </div>

                      <Link
                        to={`/activities/${a.id}`}
                        className="inline-flex items-center text-blue-600 mt-4"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

        </div>
      </section>
            {/* IMPACT STATS */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          {[
            { n: "500+", l: "Journalists Trained" },
            { n: "50+", l: "Communities Reached" },
            { n: "100+", l: "Workshops Conducted" },
            { n: "25+", l: "Partners" },
          ].map((s, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold">{s.n}</h3>
              <p className="text-blue-200">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-4">
  Our Focus Areas
</h2>

<p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
  FPI Zambia works to strengthen media freedom, media literacy,
  democratic governance and community participation through advocacy,
  research and capacity building.
</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {focusAreas.map((area, index) => {
    const Icon = area.icon;

    return (
      <div
        key={index}
        className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {area.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {area.description}
        </p>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Mission
        </h2>

        <p className="text-gray-600 mb-6">
          Support free press and journalism development in Zambia.
        </p>

        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Involved
        </Link>
      </section>
    </>
  );
};

export default Home;