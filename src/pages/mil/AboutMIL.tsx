import { BookOpen, Globe, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// ─── tokens ───────────────────────────────────────────────────────────────────
const SERIF = "'Playfair Display', Georgia, serif";
const SANS  = "'Inter', system-ui, sans-serif";
const INK   = "#0f1923";
const RED   = "#C9293A";
const GOLD  = "#C9A84C";
const MUTED_LIGHT = "#6b6259";

// ─── pillar data ──────────────────────────────────────────────────────────────
const pillars = [
  {
    bg: RED,
    icon: <BookOpen size={20} color="#fff" />,
    title: "Critical thinking",
    body: "Developing skills to analyze and evaluate information critically.",
  },
  {
    bg: GOLD,
    icon: <ShieldCheck size={20} color="#fff" />,
    title: "Fact verification",
    body: "Identifying misinformation and verifying information sources.",
  },
  {
    bg: "#185FA5",
    icon: <Globe size={20} color="#fff" />,
    title: "Digital citizenship",
    body: "Promoting responsible and safe online participation.",
  },
  {
    bg: "#2d6a4f",
    icon: <Users size={20} color="#fff" />,
    title: "Community awareness",
    body: "Strengthening informed communities and civic participation.",
  },
];

// ─── reusable eyebrow ─────────────────────────────────────────────────────────
function Eyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.5)" : "#8c8275",
        marginBottom: "1.25rem",
      }}
    >
      <span style={{ display: "block", width: 20, height: 2, background: RED }} />
      {label}
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────
const AboutMIL = () => (
  <div style={{ fontFamily: SANS }}>

    {/* ── HERO ─────────────────────────────────────────────────────────────── */}
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <img
        src="/images/note.jpg"
        alt="Media Literacy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* dark gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(8,12,30,0.93) 38%, rgba(8,12,30,0.50) 70%, transparent)",
        }}
      />

      {/* left red accent stripe */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: RED }}
      />

      {/* text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          padding: "0 1.5rem",
        }}
      >
        <div style={{ maxWidth: 700, width: "100%" }}>
          <Eyebrow label="Media & Information Literacy" light />

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#ec0909",
              margin: "0 0 1.25rem",
              textAlign: "center",
            }}
          >
            Empowering citizens
            <br />
            with{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>critical skills</em>
            <br />
            for the digital age
          </h1>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.68)",
              maxWidth: 420,
              margin: "0 0 2rem",
              textAlign: "center",
            }}
          >
            Equipping communities to access, analyze, evaluate and create information
            responsibly in today's complex media landscape.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              to="/mil/hubs"
              style={{
                background: RED,
                color: "#fff",
                padding: "0.7rem 1.5rem",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Explore MIL Hubs
            </Link>
            <Link
              to="/mil/brochure"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "0.7rem 1.5rem",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              View Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* floating stat badge */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2.5rem",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 12,
          padding: "1rem 1.5rem",
          color: "#fff",
          textAlign: "right",
        }}
      >
        <div
          style={{
            fontFamily: SERIF,
            fontSize: "2rem",
            fontWeight: 900,
            color: GOLD,
            lineHeight: 1,
          }}
        >
          5,000+
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 3 }}>
          citizens reached
        </div>
      </div>
    </section>

{/* WHAT IS MIL */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* IMAGE SIDE */}
      <div className="relative">

        <img
          src="/images/note3.jpg"
          alt="MIL Training"
          className="
            w-full
            h-[550px]
            object-cover
            rounded-3xl
            shadow-2xl
          "
        />

        <img
          src="/images/activity-4.jpg"
          alt="MIL Activity"
          className="
            hidden md:block
            absolute
            -bottom-10
            -right-10
            w-64
            h-44
            object-cover
            rounded-2xl
            border-4
            border-white
            shadow-xl
          "
        />

        <div
          className="
            absolute
            top-6
            left-6
            bg-[#C9293A]
            text-white
            px-6
            py-4
            rounded-xl
            shadow-lg
          "
        >
          <h3 className="text-3xl font-bold">
            13+
          </h3>

          <p className="text-sm">
            Active MIL Hubs
          </p>
        </div>

      </div>

      {/* CONTENT SIDE */}
      <div>

        <span className="uppercase tracking-[0.15em] text-xs font-semibold text-[#C9293A]">
          About MIL
        </span>

        <h2 className="font-serif text-5xl font-black leading-tight mt-4 mb-6">
          What is Media &
          <br />
          <span className="italic text-[#C9293A]">
            Information Literacy?
          </span>
        </h2>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          MIL equips people with the ability to find,
          evaluate, use and create information effectively
          in an increasingly digital world.
        </p>

        <p className="text-gray-600 text-lg leading-8 mb-8">
          It helps communities navigate misinformation,
          disinformation and digital challenges while
          promoting informed participation in society.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4">

          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <h3 className="font-serif text-3xl font-black text-[#C9293A]">
              13+
            </h3>
            <p className="text-gray-500 text-sm">
              MIL Hubs
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <h3 className="font-serif text-3xl font-black text-[#C9293A]">
              100+
            </h3>
            <p className="text-gray-500 text-sm">
              Sessions
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <h3 className="font-serif text-3xl font-black text-[#C9293A]">
              4
            </h3>
            <p className="text-gray-500 text-sm">
              Provinces
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ── FOCUS AREAS ───────────────────────────────────────── */}
    <section className="py-24 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.15em] text-xs font-semibold text-[#C9293A]">
            Focus Areas
          </span>

          <h2 className="font-serif text-5xl font-black mt-4 mb-6">
            Building Media &
            Information Literacy
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-8">
            Our work focuses on empowering citizens with the skills,
            knowledge and confidence needed to navigate today's
            information ecosystem.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <img
              src="/images/activity-3.jpg"
              alt="MIL Focus Areas"
              className="
                w-full
                h-[600px]
                object-cover
                rounded-3xl
                shadow-2xl
              "
            />

            <img
              src="/images/activity-4.jpg"
              alt="MIL Community"
              className="
                hidden md:block
                absolute
                -bottom-10
                -right-10
                w-64
                h-44
                object-cover
                rounded-2xl
                border-4
                border-white
                shadow-xl
              "
            />

            <div
              className="
                absolute
                top-6
                left-6
                bg-[#C9293A]
                text-white
                px-6
                py-4
                rounded-xl
                shadow-lg
              "
            >
              <h3 className="text-3xl font-bold">
                4
              </h3>

              <p className="text-sm">
                Core Focus Areas
              </p>
            </div>

          </div>

          {/* FEATURES */}
          <div className="space-y-5">

            {pillars.map((pillar) => (

              <div
                key={pillar.title}
                className="
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >

                <div className="flex gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                    style={{
                      background: pillar.bg,
                    }}
                  >
                    {pillar.icon}
                  </div>

                  <div>

                    <h3 className="font-serif text-xl font-bold mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {pillar.body}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>

    {/* ── EXPLORE MORE ───────────────────────────────────────── */}
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.15em] text-xs font-semibold text-[#C9293A]">
            Explore More
          </span>

          <h2 className="font-serif text-5xl font-black mt-4">
            Resources & Opportunities
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* BROCHURE */}
          <Link
            to="/mil/brochure"
            className="
              group
              rounded-3xl
              overflow-hidden
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            <div className="relative overflow-hidden">

              <img
                src="/images/activity-1.jpg"
                alt="MIL Brochure"
                className="
                  w-full
                  h-80
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">

                <span className="uppercase text-xs tracking-[0.15em]">
                  Publication
                </span>

                <h3 className="font-serif text-4xl font-black mt-2">
                  MIL Brochure
                </h3>

                <p className="text-white/80 mt-2">
                  Learn more about our initiatives
                </p>

              </div>

            </div>

          </Link>

          {/* HUBS */}
          <Link
            to="/mil/hubs"
            className="
              group
              rounded-3xl
              overflow-hidden
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            <div className="relative overflow-hidden">

              <img
                src="/images/activity-4.jpg"
                alt="MIL Hubs"
                className="
                  w-full
                  h-80
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">

                <span className="uppercase text-xs tracking-[0.15em]">
                  Community Network
                </span>

                <h3 className="font-serif text-4xl font-black mt-2">
                  MIL Hubs
                </h3>

                <p className="text-white/80 mt-2">
                  Explore learning opportunities across Zambia
                </p>

              </div>

            </div>

          </Link>

        </div>

      </div>

    </section>

  </div>
);

export default AboutMIL;