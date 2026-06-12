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
<>
  <HeroCarousel />

  {/* WELCOME */}
<section className="relative border-b border-gray-200 py-16 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto flex justify-center"></div>

    <div className="max-w-3xl text-center">
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="w-8 h-[2px] bg-red-700" />
        <span className="uppercase tracking-[0.15em] text-xs font-semibold text-gray-500">
          Free Press Initiative Zambia
        </span>
      </div>

      <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight mb-6">
        Advancing{" "}
        <span className="italic text-red-700">
          Free Press
        </span>
        <br />
        & Journalism
      </h2>

      <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
        FPI Zambia promotes media freedom and strengthens independent
        journalism across the country — building a more informed,
        transparent and accountable society.
      </p>
    </div>
  </section>

  {/* ABOUT FPI */}
  <section className="pt-12">
    {/* HEADER */}
    <div className="px-6 lg:px-12 pb-6 border-b border-gray-200 flex items-center gap-3">
      <span className="uppercase tracking-[0.15em] text-xs font-semibold text-gray-500">
        About FPI
      </span>

      <span className="text-gray-300">—</span>

      <span className="font-serif font-bold text-lg">
        Strengthening Media Freedom
      </span>
    </div>

    {/* BODY */}
    <div className="grid lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="p-6 lg:p-10 border-r border-gray-200 flex flex-col gap-8">

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="/images/activity-1.jpg"
            alt="FPI Zambia Training"
            className="w-full aspect-[4/3] object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white p-4 flex items-center gap-4">
            <span className="font-serif text-4xl font-black text-yellow-500">
              10+
            </span>

            <span className="text-sm text-gray-200 max-w-[140px]">
              Years supporting media development
            </span>
          </div>
        </div>

        {/* QUOTE */}
        <blockquote className="border-l-4 border-red-700 pl-5 italic font-serif text-lg leading-8 text-gray-700">
          "Empowering journalists and communities with the knowledge
          to build a more transparent society."
        </blockquote>

      </div>

      {/* RIGHT SIDE */}
      <div className="p-6 lg:p-10 flex flex-col gap-6">

        <h2 className="font-serif text-4xl font-black leading-tight">
          Independent journalism,
          <br />
          democratic participation
        </h2>

        <p className="text-gray-600 leading-8">
          Free Press Initiative Zambia (FPI Zambia) is dedicated to
          promoting independent journalism, media freedom, media
          literacy and citizen participation in democratic governance.
        </p>

        <p className="text-gray-600 leading-8">
          Through training, research, advocacy and community engagement,
          we empower journalists, civil society organizations and
          communities with the knowledge and tools needed to build a
          more informed, transparent and accountable society.
        </p>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 border border-gray-200 rounded-xl overflow-hidden">

          <div className="p-5 border-r border-b border-gray-200">
            <h3 className="font-serif text-3xl font-black text-red-700">
              500+
            </h3>
            <p className="text-sm text-gray-500">
              Journalists Trained
            </p>
          </div>

          <div className="p-5 border-b border-gray-200">
            <h3 className="font-serif text-3xl font-black text-red-700">
              50+
            </h3>
            <p className="text-sm text-gray-500">
              Communities Reached
            </p>
          </div>

          <div className="p-5 border-r border-gray-200">
            <h3 className="font-serif text-3xl font-black text-red-700">
              100+
            </h3>
            <p className="text-sm text-gray-500">
              Capacity Building Programs
            </p>
          </div>

          <div className="p-5">
            <h3 className="font-serif text-3xl font-black text-red-700">
              25+
            </h3>
            <p className="text-sm text-gray-500">
              Strategic Partners
            </p>
          </div>

        </div>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition w-fit"
        >
          Learn More About FPI
          <ArrowRight size={16} />
        </Link>

      </div>

    </div>
  </section>
</>

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
        className="glass-effect hover:scale-105 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          flex
          items-center
          justify-center
          "
        >          
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

      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4">
      Photo Gallery
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Highlights from FPI Zambia activities and engagements.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <img src="/images/activity-1.jpg" className="rounded-xl h-72 w-full object-cover" />
      <img src="/images/activity-2.jpg" className="rounded-xl h-72 w-full object-cover" />
      <img src="/images/activity-3.jpg" className="rounded-xl h-72 w-full object-cover" />
      <img src="/images/activity-4.jpg" className="rounded-xl h-72 w-full object-cover" />
      <img src="/images/hero-bg-1.jpg" className="rounded-xl h-72 w-full object-cover" />
      <img src="/images/hero-bg-2.jpg" className="rounded-xl h-72 w-full object-cover" />
    </div>
  </div>
</section>

      {/* CTA */}
        <section
     className="py-24 text-white text-center relative bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/activity-4.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10"></div>     
      <h2 className="text-3xl font-bold mb-4">
          Join Our Mission
        </h2>

        <p className="text-blue -100 mb-8">
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