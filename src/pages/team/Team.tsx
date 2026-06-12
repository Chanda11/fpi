import React from "react";
import { Mail, Crown, LayoutGrid, Megaphone, BookOpen } from "lucide-react";

// ─── tokens ──────────────────────────────────────────────────────────
const SERIF  = "'Playfair Display', Georgia, serif";
const SANS   = "'Inter', system-ui, sans-serif";
const RED    = "#C9293A";
const GOLD   = "#C9A84C";
const DARK   = "#1A1F2C";
const MUTED  = "#5B6A7F";
const SOFT_BG = "#FCFBF9";
const CARD_BG = "#FFFFFF";

// ─── data (unchanged) ────────────────────────────────────────────────
const team = [
  {
    role:        "Executive Director",
    category:    "Leadership",
    categoryIcon: <Crown size={11} />,
    image:       "/images/notes.jpg",
    bio:         "Provides strategic leadership and oversees all organizational programs and partnerships. Represents FPI Zambia at national and international forums, drives policy engagement and ensures the organization's mission is advanced with integrity and impact.",
    responsibilities: [
      "Strategic leadership & governance",
      "International media partnerships",
      "Policy engagement & advocacy",
    ],
  },
  {
    role:        "Programs Manager",
    category:    "Programs",
    categoryIcon: <LayoutGrid size={11} />,
    image:       "/images/note1.jpg",
    bio:         "Coordinates all project planning, stakeholder engagement and program implementation across FPI Zambia's portfolio. Manages relationships with civil society partners, monitors program outcomes and ensures effective delivery of training and capacity-building initiatives.",
    responsibilities: [
      "Stakeholder & partner management",
      "Program monitoring & evaluation",
      "Capacity building coordination",
    ],
  },
  {
    role:        "Communications Officer",
    category:    "Comms",
    categoryIcon: <Megaphone size={11} />,
    image:       "/images/note4.jpg",
    bio:         "Leads all communications, media relations and public outreach initiatives. Manages FPI Zambia's digital presence, produces editorial content and builds strategic narratives that amplify the organization's impact on media freedom and democracy in Zambia.",
    responsibilities: [
      "Digital & social media strategy",
      "Media relations & PR",
      "Editorial content production",
    ],
  },
  {
    role:        "Research Officer",
    category:    "Research",
    categoryIcon: <BookOpen size={11} />,
    image:       "/images/note3.jpg",
    bio:         "Conducts independent research, policy analysis and publishes reports on media freedom, misinformation and democratic governance in Zambia. Provides evidence-based insights that inform FPI Zambia's advocacy, programmatic priorities and public discourse.",
    responsibilities: [
      "Media freedom research & reports",
      "Policy & data analysis",
      "Publications & knowledge sharing",
    ],
  },
];

const govPrinciples = [
  {
    title: "Transparency & accountability",
    body:  "All decisions, finances and program outcomes are documented and reported openly to stakeholders.",
  },
  {
    title: "Independence & integrity",
    body:  "FPI Zambia operates free from political influence, upholding editorial and programmatic independence at all times.",
  },
  {
    title: "Inclusive leadership",
    body:  "Board composition reflects Zambia's diversity, bringing together voices from media, civil society and the public sector.",
  },
];

const orgStats = [
  { num: "10+", label: "Years of experience" },
  { num: "500+", label: "Journalists trained" },
  { num: "25+",  label: "Strategic partners"  },
  { num: "50+",  label: "Communities reached" },
];

// ─── sub-components (unchanged) ──────────────────────────────────────
function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div
      style={{
        marginBottom: "2.5rem",
        display: "flex",
        alignItems: "baseline",
        gap: 12,
        fontFamily: SANS,
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: RED,
          background: "rgba(201,41,58,0.08)",
          padding: "0.2rem 0.8rem",
          borderRadius: 30,
        }}
      >
        {tag}
      </span>
      <span style={{ color: "#E2E4E9", fontSize: 16 }}>—</span>
      <span
        style={{
          fontFamily: SERIF,
          fontSize: "1.5rem",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          color: DARK,
        }}
      >
        {title}
      </span>
    </div>
  );
}

function CategoryTag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: RED,
        color: "#fff",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "4px 10px",
        borderRadius: 40,
        backdropFilter: "blur(2px)",
      }}
    >
      {icon}
      {label}
    </div>
  );
}

// ─── main component with responsive styles ───────────────────────────
const Team = () => (
  <>
    {/* Responsive CSS overrides (media queries) */}
    <style>{`
      @media (max-width: 768px) {
        .team-hero {
          padding: 0 1.5rem !important;
        }
        .team-hero h1 {
          font-size: 2rem !important;
        }
        .team-stats {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem !important;
          margin-top: -1rem !important;
        }
        .team-container {
          padding: 0 1rem !important;
        }
        .team-grid {
          grid-template-columns: 1fr !important;
        }
        .team-gov-grid {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
        .team-gov-left {
          padding-right: 0 !important;
        }
        .team-hero-badge {
          bottom: 1rem !important;
          right: 1rem !important;
          padding: 0.5rem 1rem !important;
        }
        .team-hero-badge div:first-child {
          font-size: 1.4rem !important;
        }
        .team-section-header span:last-child {
          font-size: 1.2rem !important;
        }
      }
    `}</style>

    <div style={{ fontFamily: SANS, background: SOFT_BG, color: DARK }}>
      {/* ── HERO ─────────────────────────────────────────────────────────*/}
      <section style={{ position: "relative", height: "auto", minHeight: 420, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400"
          alt="FPI team"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(110deg, rgba(10,14,23,0.92) 35%, rgba(10,14,23,0.65) 70%)",
          }}
        />

        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 6, height: "100%", background: RED }} />

        <div className="team-hero" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 4rem" }}>
          <div style={{ maxWidth: 580 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "1.2rem",
              }}
            >
              <span style={{ display: "block", width: 28, height: 2, background: RED }} />
              Free Press Initiative Zambia
            </div>

            <h1
              style={{
                fontFamily: SERIF,
                fontSize: "3.2rem",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: "0 0 1rem",
              }}
            >
              The people behind{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>the mission</em>
            </h1>

            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: 0 }}>
              Meet the professionals driving media freedom, media literacy and democratic participation across Zambia.
            </p>
          </div>
        </div>

        <div className="team-hero-badge" style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
          borderRadius: 16,
          padding: "0.75rem 1.2rem",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.2)",
        }}>
          <div style={{ fontFamily: SERIF, fontSize: "1.8rem", fontWeight: 900, color: GOLD, lineHeight: 1 }}>4</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>Core team</div>
        </div>
      </section>

      {/* ── STATS SECTION ────────────────────────────────────────────────*/}
      <div className="team-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div className="team-stats" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
          marginTop: "-2rem",
          position: "relative",
          zIndex: 2,
        }}>
          {orgStats.map((s) => (
            <div
              key={s.label}
              style={{
                background: CARD_BG,
                borderRadius: 24,
                padding: "1.5rem 1rem",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.02), 0 2px 6px rgba(0,0,0,0.05)",
                border: "1px solid #EDEFF2",
              }}
            >
              <div style={{ fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 900, color: RED, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── TEAM SECTION ───────────────────────────────────────────────*/}
        <div style={{ margin: "4rem 0 3rem" }}>
          <SectionHeader tag="The team" title="Core staff" />
        </div>

        <div className="team-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
        }}>
          {team.map((member) => (
            <div
              key={member.role}
              style={{
                background: CARD_BG,
                borderRadius: 20,
                overflow: "hidden",
                transition: "all 0.25s ease",
                boxShadow: "0 6px 14px rgba(0,0,0,0.02), 0 1px 3px rgba(0,0,0,0.05)",
                border: "1px solid #EDF0F3",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={member.image}
                  alt={member.role}
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                    filter: "grayscale(20%)",
                    transition: "filter 0.3s, transform 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(20%)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <div aria-hidden="true" style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }} />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                  <CategoryTag icon={member.categoryIcon} label={member.category} />
                </div>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: RED,
                  marginBottom: "0.4rem",
                }}>
                  {member.role}
                </div>

                <h3 style={{
                  fontFamily: SERIF,
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  margin: "0 0 0.75rem",
                  lineHeight: 1.2,
                }}>
                  {member.role}
                </h3>

                <p style={{ fontSize: 12.5, lineHeight: 1.7, color: MUTED, margin: "0 0 1.2rem" }}>{member.bio}</p>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  marginBottom: "1.5rem",
                  padding: "0.9rem",
                  background: SOFT_BG,
                  borderRadius: 14,
                }}>
                  {member.responsibilities.map((r) => (
                    <div key={r} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: DARK }}>
                      <span style={{ width: 10, height: 2, background: RED, borderRadius: 2, flexShrink: 0 }} />
                      {r}
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 11,
                    fontWeight: 600,
                    color: RED,
                    border: "1px solid rgba(201,41,58,0.3)",
                    padding: "0.45rem 1rem",
                    borderRadius: 40,
                    background: "transparent",
                    cursor: "pointer",
                    fontFamily: SANS,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,41,58,0.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <Mail size={13} />
                  Get in touch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── GOVERNANCE SECTION ─────────────────────────────────────────*/}
        <SectionHeader tag="Governance" title="Leadership & oversight" />

        <div className="team-gov-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          marginTop: "1rem",
          marginBottom: "4rem",
        }}>
          <div className="team-gov-left">
            <h2 style={{
              fontFamily: SERIF,
              fontSize: "1.7rem",
              fontWeight: 900,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              margin: "0 0 1rem",
            }}>
              Governance &amp;{" "}
              <em style={{ color: RED, fontStyle: "italic" }}>leadership</em>
            </h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.75, color: MUTED, marginBottom: "1rem" }}>
              FPI Zambia is guided by a dedicated governance structure committed to transparency, accountability,
              professional excellence and public service. Our board provides independent oversight to ensure the
              organisation operates with the highest ethical standards.
            </p>
            <p style={{ fontSize: 13.5, lineHeight: 1.75, color: MUTED, margin: 0 }}>
              The leadership structure ensures strategic direction is set in consultation with civil society, media
              practitioners and governance experts across Zambia.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {govPrinciples.map((p) => (
              <div
                key={p.title}
                style={{
                  padding: "1.2rem 1.5rem",
                  background: CARD_BG,
                  borderLeft: `4px solid ${RED}`,
                  borderRadius: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  border: "1px solid #EDF0F3",
                  borderLeftWidth: 4,
                }}
              >
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: RED,
                  marginBottom: "0.4rem",
                }}>
                  Principle
                </div>
                <div style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.6 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Team;