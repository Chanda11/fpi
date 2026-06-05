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

  const filteredActivities =
    selectedCategory === "all"
      ? activities
      : activities.filter((a) => a.category === selectedCategory);

  // =========================
  // FOCUS AREAS (UNCHANGED)
  // =========================
  const focusAreas = [
    { icon: Scale, title: "Advocacy", desc: "...", stats: "8 policies", color: "from-blue-600 to-blue-700" },
    { icon: BookOpen, title: "Media Literacy", desc: "...", stats: "2000+", color: "from-green-600 to-green-700" },
    { icon: TrendingUp, title: "Research", desc: "...", stats: "12 reports", color: "from-purple-600 to-purple-700" },
    { icon: Users, title: "Capacity Building", desc: "...", stats: "500+", color: "from-orange-600 to-orange-700" },
    { icon: Shield, title: "Digital Safety", desc: "...", stats: "30 workshops", color: "from-red-600 to-red-700" },
    { icon: FileText, title: "Knowledge Sharing", desc: "...", stats: "15 resources", color: "from-teal-600 to-teal-700" },
  ];

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
    </>
  );
};

export default Home;