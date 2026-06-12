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
    <section style={{ position: "relative", height: 560, overflow: "hidden" }}>
      <img
        src="images/activity-1.jpg"
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
          padding: "0 3.5rem",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <Eyebrow label="Media & Information Literacy" light />

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "3rem",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: "0 0 1.25rem",
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

    {/* ── WHAT IS MIL ──────────────────────────────────────────────────────── */}
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

      {/* left dark panel */}
      <div
        style={{
          background: INK,
          padding: "3rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.25rem",
        }}
      >
        <Eyebrow label="About MIL" light />

        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "1.75rem",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0,
          }}
        >
          What is Media &<br />
          <em style={{ fontStyle: "italic", color: GOLD }}>Information Literacy?</em>
        </h2>

        <p style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(255,255,255,0.62)", margin: 0 }}>
          MIL equips people with the ability to find, evaluate, use and create information
          effectively — a critical competency in the modern world.
        </p>

        <p style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(255,255,255,0.62)", margin: 0 }}>
          It helps communities navigate misinformation, disinformation and digital challenges
          while promoting informed participation in society.
        </p>

        {/* mini stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 10,
            overflow: "hidden",
            marginTop: "0.5rem",
          }}
        >
          {[
            { num: "13+",  label: "MIL Hubs"  },
            { num: "100+", label: "Sessions"   },
            { num: "4",    label: "Provinces"  },
          ].map((s) => (
            <div key={s.label} style={{ background: INK, padding: "1rem 0.75rem", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  color: RED,
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 3, lineHeight: 1.3 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right: image */}
      <div style={{ overflow: "hidden", aspectRatio: "1/1" }}>
        <img
          src="images/activity-1.jpg"
          alt="MIL training"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    </section>

    {/* ── PILLARS ──────────────────────────────────────────────────────────── */}
    <section style={{ background: "#f7f3ed" }}>
      <div
        style={{
          padding: "0.875rem 2.5rem",
          borderBottom: "0.5px solid #e2dcd3",
          display: "flex",
          alignItems: "baseline",
          gap: 10,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8c8275",
          }}
        >
          Focus areas
        </span>
        <span style={{ color: "#ccc", fontSize: 11 }}>—</span>
        <span style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 700, color: INK }}>
          MIL focus areas
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        {pillars.map((p, i) => (
          <div
            key={p.title}
            style={{
              padding: "2rem 1.75rem",
              borderRight: i < pillars.length - 1 ? "0.5px solid #e2dcd3" : "none",
              background: "#f7f3ed",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                background: p.bg,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              {p.icon}
            </div>
            <h3
              style={{
                fontFamily: SERIF,
                fontSize: "1.05rem",
                fontWeight: 700,
                margin: "0 0 0.6rem",
                color: INK,
              }}
            >
              {p.title}
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: MUTED_LIGHT, margin: 0 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ── QUICK LINKS ──────────────────────────────────────────────────────── */}
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 260 }}>

      {/* Brochure — red */}
      <Link
        to="/mil/brochure"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2.5rem",
          background: RED,
          textDecoration: "none",
          borderRight: "0.5px solid rgba(255,255,255,0.15)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "1.25rem",
            }}
          >
            Publication
          </div>
          <h3
            style={{
              fontFamily: SERIF,
              fontSize: "1.5rem",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#fff",
              margin: "0 0 0.75rem",
            }}
          >
            MIL brochure
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", margin: 0 }}>
            Learn more about our Media & Information Literacy initiatives and programmes.
          </p>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            color: "#fff",
            marginTop: "1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.4)",
            paddingBottom: 2,
            width: "fit-content",
          }}
        >
          View brochure <ArrowRight size={13} />
        </div>
      </Link>

      {/* Hubs — ink */}
      <Link
        to="/mil/hubs"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2.5rem",
          background: INK,
          textDecoration: "none",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.25rem",
            }}
          >
            Network
          </div>
          <h3
            style={{
              fontFamily: SERIF,
              fontSize: "1.5rem",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#fff",
              margin: "0 0 0.75rem",
            }}
          >
            MIL hubs
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.58)", margin: 0 }}>
            Explore community-based MIL hubs and learning opportunities across Zambia.
          </p>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            color: GOLD,
            marginTop: "1.5rem",
            borderBottom: "1px solid rgba(201,168,76,0.4)",
            paddingBottom: 2,
            width: "fit-content",
          }}
        >
          Explore hubs <ArrowRight size={13} />
        </div>
      </Link>
    </section>

  </div>
);

export default AboutMIL;