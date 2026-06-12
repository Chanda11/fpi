import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Eye,
  Shield,
  ArrowRight,
  Scale,
  Globe,
  Lightbulb,
  Heart,
  Landmark,
} from "lucide-react";

// ─── shared tokens ────────────────────────────────────────────────────────────
const RED    = "#C9293A";
const SERIF  = "'Playfair Display', Georgia, serif";
const SANS   = "'Inter', system-ui, sans-serif";
const BORDER = "0.5px solid #e5e7eb";
const MUTED  = "#6b7280";

// ─── reusable section header bar ─────────────────────────────────────────────
function SectionBar({ tag, title }: { tag: string; title: string }) {
  return (
    <div
      style={{
        padding: "0.75rem 2rem",
        borderTop: BORDER,
        borderBottom: BORDER,
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        fontFamily: SANS,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: MUTED,
        }}
      >
        {tag}
      </span>
      <span style={{ color: "#d1d5db", fontSize: 11 }}>—</span>
      <span style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 700 }}>
        {title}
      </span>
    </div>
  );
}

// ─── icon box ────────────────────────────────────────────────────────────────
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        border: "0.5px solid #d1d5db",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1.25rem",
        color: RED,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

// ─── data ─────────────────────────────────────────────────────────────────────
const mvv = [
  {
    icon: <Target size={18} />,
    title: "Mission",
    body: "To strengthen media freedom, enhance professional journalism and empower citizens through information access and media literacy initiatives.",
  },
  {
    icon: <Eye size={18} />,
    title: "Vision",
    body: "A Zambia where independent media, informed citizens and democratic values contribute to inclusive and sustainable development.",
  },
  {
    icon: <Shield size={18} />,
    title: "Core values",
    body: "Integrity, accountability, professionalism, inclusiveness, transparency and respect for human rights.",
  },
];

const values = [
  { icon: <Scale size={16} />,    title: "Integrity"      },
  { icon: <Globe size={16} />,    title: "Freedom"        },
  { icon: <Heart size={16} />,    title: "Inclusion"      },
  { icon: <Lightbulb size={16} />, title: "Innovation"   },
  { icon: <Landmark size={16} />, title: "Democracy"      },
  { icon: <Users size={16} />,    title: "Participation"  },
];

const stats = [
  { num: "500+", label: "Journalists trained"   },
  { num: "100+", label: "Workshops conducted"   },
  { num: "50+",  label: "Communities reached"   },
  { num: "25+",  label: "Strategic partners"    },
];

const timeline = [
  { year: "2020", label: "Organization founded"             },
  { year: "2021", label: "Media development programs"       },
  { year: "2022", label: "National advocacy campaigns"      },
  { year: "2023", label: "MIL Hub expansion"                },
  { year: "2024", label: "Digital democracy initiatives"    },
];

const activities = [
  { src: "/images/activity-1.jpg", alt: "FPI activity 1" },
  { src: "/images/activity-2.jpg", alt: "FPI activity 2" },
  { src: "/images/activity-3.jpg", alt: "FPI activity 3" },
  { src: "/images/activity-4.jpg", alt: "FPI activity 4" },
];

// ─── page ─────────────────────────────────────────────────────────────────────
const About = () => (
  <div style={{ fontFamily: SANS }}>
{/* HERO */}
<section
  style={{
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
  }}
>
  {/* Background Image */}
  <img
    src="/images/hero-bg-2.jpg"
    alt="FPI Zambia"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center center",
    }}
  />

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(rgba(10,14,26,0.75), rgba(10,14,26,0.75))",
    }}
  />

  {/* Content */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 2rem",
    }}
  >
    <div style={{ maxWidth: 900 }}>

      {/* Eyebrow */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginBottom: "1.5rem",
          color: "rgba(255,255,255,0.7)",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        <span
          style={{
            width: 28,
            height: 2,
            background: RED,
          }}
        />
        About FPI Zambia
      </div>

      <h1
        style={{
          fontFamily: SERIF,
          fontSize: "4.5rem",
          fontWeight: 900,
          lineHeight: 1.05,
          color: "#fff",
          marginBottom: "1.5rem",
        }}
      >
        Building informed
        <br />
        communities through{" "}
        <span style={{ color: RED, fontStyle: "italic" }}>
          media freedom
        </span>
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: "1.1rem",
          lineHeight: 1.9,
          maxWidth: 700,
          margin: "0 auto 2rem",
        }}
      >
        We empower journalists, strengthen democratic
        participation, advance media literacy and promote
        access to information across Zambia.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/team"
          style={{
            background: RED,
            color: "#fff",
            padding: "0.85rem 2rem",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Meet Our Team
        </Link>

        <Link
          to="/contact"
          style={{
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            padding: "0.85rem 2rem",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Partner With Us
        </Link>
      </div>

    </div>
  </div>
</section>

    {/* ── WHO WE ARE ───────────────────────────────────────────────────────── */}
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderBottom: BORDER,
      }}
    >
      <div style={{ borderRight: BORDER, overflow: "hidden", aspectRatio: "4/3" }}>
        <img
          src="/images/activity-3.jpg"
          alt="FPI Zambia"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <div
        style={{
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: RED }} />
          Who we are
        </div>

        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "1.65rem",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Strengthening independent media and democratic participation
        </h2>

        <p style={{ fontSize: 13, lineHeight: 1.8, color: MUTED, margin: 0 }}>
          Free Press Initiative Zambia (FPI Zambia) is committed to promoting media freedom,
          access to information, professional journalism, accountability and democratic governance.
        </p>

        <p style={{ fontSize: 13, lineHeight: 1.8, color: MUTED, margin: 0 }}>
          Through advocacy, capacity building, research and community engagement, we
          collaborate with journalists, civil society organizations and citizens to build a more
          informed, inclusive and democratic Zambia.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginTop: "0.5rem",
          }}
        >
          {[
            "Media Freedom Advocacy",
            "Capacity Building",
            "Media Literacy",
            "Research & Innovation",
          ].map((item) => (
            <div
              key={item}
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: RED,
                  flexShrink: 0,
                }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
    <section
  style={{
    padding: "2rem",
    borderTop: BORDER,
  }}
>
  <img
    src="/images/activity-4.jpg"
    alt="FPI Zambia"
    style={{
      width: "100%",
      height: 380,
      objectFit: "cover",
      borderRadius: 12,
      display: "block",
    }}
  />
</section>

    {/* ── MISSION / VISION / VALUES ────────────────────────────────────────── */}
    <SectionBar tag="Who we are" title="Mission, vision & values" />

    <section style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
      {mvv.map((item, i) => (
        <div
          key={item.title}
          style={{
            padding: "2rem 1.75rem",
            borderRight: i < mvv.length - 1 ? BORDER : "none",
          }}
        >
          <IconBox>{item.icon}</IconBox>
          <h3
            style={{
              fontFamily: SERIF,
              fontSize: "1.1rem",
              fontWeight: 700,
              margin: "0 0 0.75rem",
            }}
          >
            {item.title}
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: MUTED, margin: 0 }}>
            {item.body}
          </p>
        </div>
      ))}
    </section>

    {/* ── WHAT WE STAND FOR ────────────────────────────────────────────────── */}
    <SectionBar tag="Our principles" title="What we stand for" />

    <section
      style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
    >
      {values.map((item, i) => (
        <div
          key={item.title}
          style={{
            padding: "1.5rem 1rem",
            borderRight: i < values.length - 1 ? BORDER : "none",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              border: "0.5px solid #d1d5db",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem",
              color: RED,
            }}
          >
            {item.icon}
          </div>
          <div
            style={{
              fontFamily: SERIF,
              fontSize: "0.9rem",
              fontWeight: 700,
            }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </section>

    {/* ── IMPACT ───────────────────────────────────────────────────────────── */}
    <SectionBar tag="Our reach" title="Impact at a glance" />
{/* ── IMPACT ───────────────────────────────────────────────────────────── */}
<SectionBar tag="Our reach" title="Impact at a glance" />

<section
  style={{
    position: "relative",
    overflow: "hidden",
    minHeight: 450,
  }}
>

  {/* Background Image */}
  <img
    src="/images/hero-bg-1.jpg"
    alt="Impact"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(8, 20, 40, 0.82)",
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: 1200,
      margin: "0 auto",
      padding: "5rem 2rem",
    }}
  >

    <div
      style={{
        textAlign: "center",
        marginBottom: "3rem",
      }}
    >
      <h2
        style={{
          fontFamily: SERIF,
          fontSize: "2.5rem",
          fontWeight: 900,
          color: "#fff",
          marginBottom: "1rem",
        }}
      >
        Our Impact
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          maxWidth: 600,
          margin: "0 auto",
          lineHeight: 1.8,
        }}
      >
        Measuring our contribution to media freedom,
        media literacy and democratic participation.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "1.5rem",
      }}
    >

      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: SERIF,
              fontSize: "3rem",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            {s.num}
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 13,
            }}
          >
            {s.label}
          </div>
        </div>
      ))}

    </div>

  </div>

</section>

    {/* ── TIMELINE ─────────────────────────────────────────────────────────── */}
    <SectionBar tag="Our history" title="Our journey" />

    <section style={{ padding: "2rem" }}>
      {timeline.map((item, i) => (
        <div
          key={item.year}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: i < timeline.length - 1 ? "1rem" : 0,
          }}
        >
          <div
            style={{
              fontFamily: SERIF,
              fontSize: "1rem",
              fontWeight: 900,
              color: RED,
              minWidth: "3.5rem",
              flexShrink: 0,
            }}
          >
            {item.year}
          </div>
          <div
            style={{
              flex: 1,
              padding: "0.875rem 1.25rem",
              border: BORDER,
              borderLeft: `3px solid ${RED}`,
              borderRadius: 8,
              fontSize: 13,
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </section>

    {/* ── IN THE FIELD (activity gallery) ─────────────────────────────────── */}
    <SectionBar tag="In the field" title="Our work in action" />

    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {activities.map((img, i) => (
        <div
          key={img.src}
          style={{
            overflow: "hidden",
            aspectRatio: "4/3",
            borderRight: i % 2 === 0 ? BORDER : "none",
            borderBottom: i < 2 ? BORDER : "none",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
            }
          />
        </div>
      ))}
    </section>

    {/* ── CTA ──────────────────────────────────────────────────────────────── */}
    <section
      style={{
        padding: "3rem 2rem",
        borderTop: BORDER,
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div>
        {/* eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: MUTED,
            marginBottom: "1rem",
          }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: RED }} />
          Get involved
        </div>

        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "1.8rem",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: "0 0 0.75rem",
          }}
        >
          Join us in strengthening media freedom
        </h2>

        <p style={{ fontSize: 13, lineHeight: 1.8, color: MUTED, margin: 0, maxWidth: 480 }}>
          Partner with us to promote independent journalism, media literacy and democratic
          participation in Zambia.
        </p>
      </div>

      <Link
        to="/contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: RED,
          color: "#fff",
          padding: "0.75rem 1.75rem",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Contact us
        <ArrowRight size={14} />
      </Link>
    </section>

  </div>
);

export default About;