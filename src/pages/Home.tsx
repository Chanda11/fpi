import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
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

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

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

const useScrollReveal = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return ref;
};

const Eyebrow = ({ label, light = false }: { label: string; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 mb-3 ${light ? "text-blue-200" : "text-blue-700"}`}>
    <span className="block h-[2px] w-5 rounded-full bg-current" />
    <span className="text-[10px] font-bold tracking-[0.16em] uppercase">{label}</span>
    <span className="block h-[2px] w-5 rounded-full bg-current" />
  </div>
);

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const heroSlides = [
    {
      image: "/images/note.jpg",
      eyebrow: "FPI Zambia",
      title: "Promoting Free Press &",
      highlight: "Good Journalism",
      subtitle: "Defending Human Rights",
      description: "Empowering journalists and defending media freedom across Zambia.",
      cta: "Learn More",
      link: "/about",
    },
    {
      image: "/images/medai2.jpg",
      eyebrow: "FPI Zambia",
      title: "Media Literacy for All",
      highlight: "Critical Thinking",
      subtitle: "Against Misinformation",
      description: "Building resilient communities through digital literacy.",
      cta: "Explore Programs",
      link: "/programs/media-literacy",
    },
    {
      image: "/images/advo.jpg",
      eyebrow: "FPI Zambia",
      title: "Advocacy & Policy",
      highlight: "Change the Narrative",
      subtitle: "Stronger Democracy",
      description: "Supporting legal reforms for media freedom and access to information.",
      cta: "Get Involved",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/activities");
        if (!res.ok) throw new Error("Failed to fetch activities");
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

  const categories = [
    { id: "all", name: "All", icon: "📋" },
    { id: "training", name: "Trainings", icon: "🎓" },
    { id: "workshop", name: "Workshops", icon: "🔧" },
    { id: "webinar", name: "Webinars", icon: "💻" },
    { id: "dialogue", name: "Dialogues", icon: "💬" },
  ];

  const focusAreas = [
    { icon: TrendingUp, title: "Media Development", description: "Strengthening independent journalism and promoting professional media standards across Zambia.", color: "#2563EB" },
    { icon: Shield, title: "Media Freedom", description: "Advocating for freedom of expression, access to information and press freedom.", color: "#EA580C" },
    { icon: BookOpen, title: "Media Literacy", description: "Empowering citizens with critical thinking skills to identify misinformation and disinformation.", color: "#F59E0B" },
    { icon: Scale, title: "Policy Advocacy", description: "Supporting legal and policy reforms that strengthen democracy, transparency and accountability.", color: "#2563EB" },
    { icon: FileText, title: "Research & Publications", description: "Producing reports, studies and publications that inform media development and governance.", color: "#EA580C" },
    { icon: Users, title: "Community Engagement", description: "Building partnerships between journalists, communities, civil society and public institutions.", color: "#F59E0B" },
  ];

  const filteredActivities = selectedCategory === "all" ? activities : activities.filter((a) => a.category === selectedCategory);

  const welcomeRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const activitiesRef = useScrollReveal();
  const focusRef = useScrollReveal();
  const galleryRef = useScrollReveal();

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "linear-gradient(135deg, #F0F9FF 0%, #FFF7ED 100%)", color: "#1A1A2E" }}>
      <style>{`
        .sr-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .sr-section.sr-visible { opacity: 1; transform: translateY(0); }

        .hero-swiper .swiper-slide {
          position: absolute !important;
          top: 0; left: 0;
          width: 100% !important;
          height: 100% !important;
          pointer-events: none;
          opacity: 0 !important;
          transition: opacity 0.9s ease !important;
        }
        .hero-swiper .swiper-slide-active {
          position: relative !important;
          opacity: 1 !important;
          pointer-events: auto;
          z-index: 1;
        }
        .hero-swiper .swiper-pagination { bottom: 20px !important; }
        .hero-swiper .swiper-pagination-bullet {
          width: 6px !important; height: 6px !important;
          border-radius: 99px !important;
          background: rgba(255,255,255,0.4) !important;
          opacity: 1 !important;
          transition: width 0.3s ease !important;
          margin: 0 4px !important;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 20px !important;
          background: #EA580C !important;
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          width: 36px !important; height: 36px !important;
          border-radius: 999px !important;
          background: rgba(0,0,0,0.2) !important;
          backdrop-filter: blur(4px) !important;
          color: white !important;
        }
        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after { font-size: 12px !important; }
        @media (max-width: 640px) {
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev { display: none !important; }
        }
        .act-swiper .swiper-pagination-bullet { background: #2563EB !important; opacity: 0.35 !important; }
        .act-swiper .swiper-pagination-bullet-active { opacity: 1 !important; }
        .act-swiper .swiper-button-next,
        .act-swiper .swiper-button-prev { color: #2563EB !important; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      {/* ========== HERO CAROUSEL – LIGHTER GRADIENTS ========== */}
      <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: 500, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, zIndex: 10, background: "linear-gradient(90deg, #2563EB, #EA580C, #F59E0B, #EA580C, #2563EB)" }} />
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          className="hero-swiper"
          style={{ width: "100%", height: "100%" }}
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src={slide.image} alt={slide.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                {/* MUCH LIGHTER GRADIENTS: opacity reduced from 0.85/0.75 to 0.35/0.3 so images show through clearly */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(234,88,12,0.3) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.15), transparent)" }} />
                <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 20px" }}>
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} style={{ marginBottom: 16 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.25)", color: "#FDE047", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#EA580C" }} />
                      {slide.eyebrow}
                    </span>
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 6px", maxWidth: 700 }}>
                    {slide.title}
                  </motion.h1>
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} style={{ marginBottom: 10 }}>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, fontStyle: "italic", background: "linear-gradient(135deg, #FDE047, #FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>
                      {slide.highlight}
                    </span>
                  </motion.div>
                  <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", color: "rgba(255,255,255,0.9)", margin: "0 0 8px", fontWeight: 400 }}>
                    {slide.subtitle}
                  </motion.p>
                  <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", maxWidth: 420, lineHeight: 1.6, margin: "0 0 24px" }}>
                    {slide.description}
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                    <Link to={slide.link} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg, #2563EB, #EA580C)", color: "#fff", fontWeight: 600, fontSize: 12, padding: "8px 20px", borderRadius: 999, textDecoration: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
                      {slide.cta} <ArrowRight size={12} />
                    </Link>
                    <a href="#about" style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", textDecoration: "underline", textUnderlineOffset: 3 }}>Learn about FPI</a>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} style={{ marginTop: 32, display: "flex", gap: 20, justifyContent: "center" }}>
                    {[{ value: "10+", label: "Years" }, { value: "500+", label: "Journalists" }, { value: "50+", label: "Communities" }].map((s, i) => (
                      <div key={i} style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "Georgia, serif", fontWeight: 900, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", background: "linear-gradient(135deg, #FDE047, #FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ========== WELCOME SECTION ========== */}
      <section ref={welcomeRef} className="sr-section" style={{ padding: "50px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Eyebrow label="Free Press Initiative Zambia" />
          <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", lineHeight: 1.2, marginBottom: 12 }}>
            Advancing <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#2563EB,#EA580C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Free Press</span> & Journalism
          </h2>
          <p style={{ color: "#4B5563", fontSize: 14, lineHeight: 1.6, maxWidth: 520, margin: "0 auto" }}>
            FPI Zambia promotes media freedom and strengthens independent journalism across the country — building a more informed, transparent and accountable society.
          </p>
        </div>
      </section>

      {/* ========== ABOUT FPI ========== */}
      <section id="about" ref={aboutRef} className="sr-section" style={{ padding: "40px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <img src="/images/activity-1.jpg" alt="FPI Zambia Training" style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 20, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }} />
              <div style={{ position: "absolute", top: 16, left: 16, background: "linear-gradient(135deg,#2563EB,#EA580C)", color: "#fff", padding: "8px 14px", borderRadius: 14, textAlign: "center" }}>
                <div style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 22 }}>10+</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.85)" }}>Years of impact</div>
              </div>
            </div>
            <div>
              <Eyebrow label="About FPI" />
              <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", lineHeight: 1.2, marginBottom: 12 }}>Independent journalism,<br />democratic participation</h2>
              <p style={{ color: "#4B5563", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
                Free Press Initiative Zambia (FPI Zambia) is dedicated to promoting independent journalism, media freedom, media literacy and citizen participation in democratic governance.
              </p>
              <p style={{ color: "#4B5563", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
                Through training, research, advocacy and community engagement, we empower journalists, civil society organizations and communities.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
                {[
                  { value: "500+", label: "Journalists Trained" },
                  { value: "50+", label: "Communities Reached" },
                  { value: "100+", label: "Programs Run" },
                  { value: "25+", label: "Strategic Partners" },
                ].map((stat, i) => (
                  <div key={i} style={{ background: "linear-gradient(135deg, #EFF6FF, #FFF7ED)", borderRadius: 14, padding: "12px 8px", textAlign: "center" }}>
                    <div style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: 20, background: "linear-gradient(135deg,#2563EB,#EA580C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</div>
                    <div style={{ color: "#6B7280", fontSize: 10, marginTop: 2 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,#2563EB,#EA580C)", color: "#fff", fontSize: 12, fontWeight: 600, padding: "8px 20px", borderRadius: 999, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                Learn More About FPI <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACTIVITIES SECTION ========== */}
      <section ref={activitiesRef} className="sr-section" style={{ padding: "50px 20px", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <Eyebrow label="Latest Initiatives" />
            <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3.5vw, 2rem)", marginBottom: 6 }}>Recent Activities</h2>
            <p style={{ color: "#6B7280", fontSize: 13, maxWidth: 460, margin: "0 auto" }}>Trainings, workshops, webinars and dialogues.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 28 }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: "5px 14px", borderRadius: 999, fontSize: 12, fontWeight: 500, cursor: "pointer", border: "none",
                  ...(selectedCategory === cat.id
                    ? { background: "linear-gradient(135deg,#2563EB,#EA580C)", color: "#fff", boxShadow: "0 2px 6px rgba(37,99,235,0.3)", transform: "scale(1.02)" }
                    : { background: "#fff", color: "#374151", border: "1px solid #E2E8F0" })
                }}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
          {loading && (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", border: "3px solid #2563EB", borderRightColor: "transparent", animation: "spin 0.8s linear infinite", margin: "0 auto" }} />
              <p style={{ color: "#6B7280", marginTop: 10, fontSize: 12 }}>Loading activities...</p>
            </div>
          )}
          {error && <div style={{ textAlign: "center", color: "#DC2626", padding: 20, fontSize: 13 }}>Error: {error}</div>}
          {!loading && !error && (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="act-swiper"
              style={{ paddingBottom: 40 }}
            >
              {filteredActivities.map((activity) => (
                <SwiperSlide key={activity.id}>
                  <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transition: "transform 0.2s", height: "100%", display: "flex", flexDirection: "column" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                    <div style={{ position: "relative", height: 140 }}>
                      <img src={activity.image} alt={activity.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600"; }} />
                      <span style={{ position: "absolute", top: 8, left: 8, background: "linear-gradient(135deg,#2563EB,#EA580C)", color: "#fff", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 20 }}>{activity.category}</span>
                    </div>
                    <div style={{ padding: 14, display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{activity.title}</h3>
                      <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5, marginBottom: 12, flex: 1 }}>{activity.description.substring(0, 80)}...</p>
                      <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: 10, marginTop: "auto" }}>
                        <div style={{ display: "flex", gap: 8, color: "#9CA3AF", fontSize: 10, marginBottom: 8 }}>
                          <span><Calendar size={10} /> {activity.date}</span>
                          <span><MapPin size={10} /> {activity.location}</span>
                          <span><Users size={10} /> {activity.participants}</span>
                        </div>
                        <Link to={`/activities/${activity.id}`} style={{ color: "#2563EB", fontSize: 11, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                          Learn More <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>

      {/* ========== FOCUS AREAS ========== */}
      <section ref={focusRef} className="sr-section" style={{ padding: "50px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow label="Our Work" />
          <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3.5vw, 2rem)", marginBottom: 8 }}>Focus Areas</h2>
          <p style={{ color: "#6B7280", fontSize: 13, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.6 }}>
            FPI Zambia works to strengthen media freedom, media literacy, democratic governance and community participation.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div key={i} style={{ background: "linear-gradient(135deg, #F0F9FF, #FFF7ED)", borderRadius: 20, padding: 18, textAlign: "left", transition: "transform 0.2s", border: "1px solid #E2E8F0" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                  <div style={{ width: 36, height: 36, borderRadius: 12, marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${area.color}, #F59E0B)` }}>
                    <Icon size={18} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{area.title}</h3>
                  <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section ref={galleryRef} className="sr-section" style={{ padding: "50px 20px", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow label="Highlights" />
          <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3.5vw, 2rem)", marginBottom: 6 }}>Photo Gallery</h2>
          <p style={{ color: "#6B7280", fontSize: 13, marginBottom: 28 }}>Highlights from FPI Zambia activities.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "1 / 1", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.querySelector("img")!.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.querySelector("img")!.style.transform = "scale(1)")}>
                <img src={`/images/activity-${idx+1}.jpg`} alt={`Gallery ${idx+1}`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;