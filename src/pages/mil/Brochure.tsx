import {
  Download, FileText, BookOpen, Users, ArrowRight,
  ShieldCheck, Globe, Search,
} from "lucide-react";

const BG = "/images/brochure.jpg";

// Reusable section with background image bleed-through
const BgSection = ({
  children, overlay = "rgba(10,4,0,0.72)", py = 80, center = false, id = "",
}: {
  children: React.ReactNode; overlay?: string; py?: number; center?: boolean; id?: string;
}) => (
  <section id={id} style={{ position: "relative", padding: `${py}px 24px`, textAlign: center ? "center" : "left", overflow: "hidden" }}>
    {/* Background photo */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover", backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }} />
    {/* Dark tinted overlay */}
    <div style={{ position: "absolute", inset: 0, background: overlay }} />
    {/* Content */}
    <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
      {children}
    </div>
  </section>
);

// Light section — white card feel but image peeks at edges
const LightSection = ({
  children, py = 80, center = false, id = "",
}: {
  children: React.ReactNode; py?: number; center?: boolean; id?: string;
}) => (
  <section id={id} style={{ position: "relative", padding: `${py}px 24px`, textAlign: center ? "center" : "left", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(255,248,240,0.93)" }} />
    <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
      {children}
    </div>
  </section>
);

const Pill = ({ label }: { label: string }) => (
  <span style={{
    display: "inline-block", padding: "5px 14px", borderRadius: 999,
    background: "rgba(232,97,10,0.15)", color: "#E8610A",
    fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12
  }}>{label}</span>
);

const GradText = ({ children, size = "clamp(1.8rem,4.5vw,3.2rem)" }: { children: React.ReactNode; size?: string }) => (
  <span style={{
    fontFamily: "Georgia,serif", fontWeight: 900, fontSize: size,
    background: "linear-gradient(120deg,#E8610A,#F5A623)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
    display: "inline-block", fontStyle: "italic"
  }}>{children}</span>
);

const Brochure = () => {
  const topics = [
    "Fact Checking", "Digital Citizenship", "Online Safety", "Critical Thinking",
    "Responsible Media Use", "Combating Misinformation", "Information Verification", "Media Awareness",
  ];

  const stats = [
    { value: "500+", label: "Learners Reached" },
    { value: "100+", label: "Workshops Conducted" },
    { value: "25+",  label: "Schools Engaged" },
    { value: "10+",  label: "Districts Reached" },
  ];

  return (
    <div style={{ fontFamily: "'Inter','Helvetica Neue',sans-serif" }}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <BgSection overlay="linear-gradient(135deg,rgba(10,3,0,0.88) 0%,rgba(20,5,0,0.80) 60%,rgba(232,97,10,0.35) 100%)" py={110}>
        {/* Top colour bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#C9293A,#E8610A,#F5A623,#E8610A,#C9293A)", zIndex: 2 }} />

        <div style={{ maxWidth: 760 }}>
          <Pill label="Media & Information Literacy" />

          <h1 style={{
            fontFamily: "Georgia,serif", fontWeight: 900, lineHeight: 1.05,
            fontSize: "clamp(2.4rem,6vw,4.5rem)", color: "#fff", margin: "12px 0 6px"
          }}>
            MIL
          </h1>
          <div style={{ marginBottom: 18 }}>
            <GradText size="clamp(2.6rem,6.5vw,5rem)">Brochure</GradText>
          </div>

          <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "clamp(14px,1.8vw,17px)", lineHeight: 1.75, maxWidth: 560, marginBottom: 32 }}>
            Discover FPI Zambia's Media and Information Literacy initiatives, educational
            resources, community programs and opportunities that help citizens navigate
            today's information landscape responsibly.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg,#C9293A,#E8610A)",
              color: "#fff", fontWeight: 700, fontSize: 14,
              padding: "12px 26px", borderRadius: 999, border: "none", cursor: "pointer",
              boxShadow: "0 4px 20px rgba(201,41,58,0.45)"
            }}>
              <Download size={16} /> Download Brochure
            </button>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.10)", backdropFilter: "blur(6px)",
              color: "#fff", fontWeight: 600, fontSize: 14,
              padding: "12px 26px", borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.22)", cursor: "pointer"
            }}>
              View Online
            </button>
          </div>
        </div>
      </BgSection>

      {/* ══ OVERVIEW ══════════════════════════════════════════════ */}
      <LightSection py={80}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 48, alignItems: "center" }}>

          {/* Text */}
          <div>
            <div style={{
              width: 52, height: 52, borderRadius: 14, marginBottom: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg,#C9293A,#E8610A)"
            }}>
              <FileText size={24} color="#fff" />
            </div>

            <Pill label="About the Brochure" />
            <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 900, fontSize: "clamp(1.4rem,3vw,2.2rem)", lineHeight: 1.15, color: "#1A0A00", margin: "8px 0 14px" }}>
              Media &amp; Information<br />Literacy Guide
            </h2>
            <p style={{ color: "#6B3A2A", fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
              This brochure introduces our MIL programs, educational campaigns, learning
              resources and community engagement initiatives.
            </p>
            <p style={{ color: "#6B3A2A", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
              It serves as a practical guide for individuals, schools, journalists, community
              leaders and institutions seeking to strengthen their ability to access, evaluate
              and use information responsibly.
            </p>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg,#C9293A,#E8610A)",
              color: "#fff", fontWeight: 700, fontSize: 14,
              padding: "11px 24px", borderRadius: 999, border: "none", cursor: "pointer",
              boxShadow: "0 4px 16px rgba(201,41,58,0.3)"
            }}>
              <Download size={15} /> Download Brochure
            </button>
          </div>

          {/* Mockup card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "100%", maxWidth: 300,
              borderRadius: 24, overflow: "hidden",
              boxShadow: "0 24px 60px rgba(201,41,58,0.25)",
              transform: "rotate(-3deg)",
              transition: "transform 0.4s ease",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "rotate(-3deg)"}
            >
              {/* Card header */}
              <div style={{ background: "linear-gradient(135deg,#C9293A,#E8610A)", padding: "32px 28px", color: "#fff" }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>FPI Zambia</p>
                <h3 style={{ fontFamily: "Georgia,serif", fontWeight: 900, fontSize: 28, lineHeight: 1.15, margin: 0 }}>
                  Media &<br />Information<br />Literacy
                </h3>
              </div>
              {/* Card body */}
              <div style={{ background: "#fff", padding: "28px", textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "linear-gradient(135deg,rgba(201,41,58,0.1),rgba(232,97,10,0.12))"
                }}>
                  <BookOpen size={32} color="#E8610A" />
                </div>
                <p style={{ color: "#6B3A2A", fontSize: 13, lineHeight: 1.65 }}>
                  Building informed, critical and resilient communities through media literacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LightSection>

      {/* ══ STATS ═════════════════════════════════════════════════ */}
      <BgSection overlay="linear-gradient(135deg,rgba(12,4,0,0.86) 0%,rgba(25,7,0,0.82) 100%)" py={64} center>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>Our Impact</p>
        <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 900, fontSize: "clamp(1.5rem,3.5vw,2.5rem)", color: "#fff", margin: "0 0 40px" }}>
          FPI Zambia <GradText size="inherit">by the Numbers</GradText>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              borderRadius: 20, padding: "28px 16px", textAlign: "center",
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(6px)"
            }}>
              <div style={{
                fontFamily: "Georgia,serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,2.8rem)",
                background: "linear-gradient(120deg,#F5A623,#E8610A)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>{s.value}</div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 6 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </BgSection>

      {/* ══ WHAT'S INSIDE ═════════════════════════════════════════ */}
      <LightSection py={80} center>
        <Pill label="Explore the Brochure" />
        <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 900, fontSize: "clamp(1.5rem,3.5vw,2.5rem)", color: "#1A0A00", margin: "8px 0 40px" }}>
          What's Inside?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20, textAlign: "left" }}>
          {[
            { Icon: BookOpen, title: "Educational Resources", desc: "Access learning materials, guides and tools designed to strengthen media literacy skills." },
            { Icon: Users,    title: "Community Programs",    desc: "Learn about outreach activities, workshops, campaigns and public awareness initiatives." },
            { Icon: FileText, title: "Opportunities",         desc: "Discover ways to collaborate, participate and support media literacy initiatives." },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} style={{
              borderRadius: 20, padding: 24,
              background: "linear-gradient(135deg,#FFF8F0,#FFF0E0)",
              border: "1px solid #FFE0C0",
              boxShadow: "0 3px 16px rgba(201,41,58,0.07)",
              transition: "transform .22s, box-shadow .22s"
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(201,41,58,0.16)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 3px 16px rgba(201,41,58,0.07)"; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 13, marginBottom: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "linear-gradient(135deg,#C9293A,#E8610A)"
              }}>
                <Icon size={22} color="#fff" />
              </div>
              <h3 style={{ fontFamily: "Georgia,serif", fontWeight: 700, fontSize: 16, color: "#1A0A00", margin: "0 0 8px" }}>{title}</h3>
              <p style={{ color: "#6B3A2A", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </LightSection>

      {/* ══ FEATURED TOPICS ═══════════════════════════════════════ */}
      <BgSection overlay="linear-gradient(160deg,rgba(10,3,0,0.88) 0%,rgba(201,41,58,0.30) 50%,rgba(10,3,0,0.88) 100%)" py={80} center>
        <Pill label="Key Learning Areas" />
        <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 900, fontSize: "clamp(1.5rem,3.5vw,2.5rem)", color: "#fff", margin: "8px 0 32px" }}>
          Featured Topics
        </h2>

        {/* Topic pills */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 48 }}>
          {topics.map((t, i) => (
            <span key={i} style={{
              padding: "8px 18px", borderRadius: 999, fontSize: 13, fontWeight: 600,
              background: "rgba(232,97,10,0.18)", color: "#F5A623",
              border: "1px solid rgba(232,97,10,0.35)"
            }}>{t}</span>
          ))}
        </div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16, textAlign: "left" }}>
          {[
            { Icon: Search,      title: "Fact Checking",      desc: "Learn practical methods for verifying information and identifying misleading content." },
            { Icon: ShieldCheck, title: "Online Safety",       desc: "Understand digital security, privacy and safe participation in online spaces." },
            { Icon: Globe,       title: "Digital Citizenship", desc: "Develop responsible and ethical behaviours in the digital environment." },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} style={{
              borderRadius: 20, padding: 24,
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              transition: "transform .22s, background .22s"
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(232,97,10,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)"; }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12, marginBottom: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "linear-gradient(135deg,#C9293A,#E8610A)"
              }}>
                <Icon size={20} color="#fff" />
              </div>
              <h3 style={{ fontFamily: "Georgia,serif", fontWeight: 700, fontSize: 16, color: "#fff", margin: "0 0 8px" }}>{title}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </BgSection>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <BgSection overlay="linear-gradient(135deg,rgba(8,2,0,0.92) 0%,rgba(201,41,58,0.40) 50%,rgba(8,2,0,0.92) 100%)" py={96} center>
        {/* Glowing ring behind heading */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(232,97,10,0.15) 0%,transparent 70%)",
          pointerEvents: "none"
        }} />

        <h2 style={{
          fontFamily: "Georgia,serif", fontWeight: 900,
          fontSize: "clamp(1.8rem,4.5vw,3.2rem)", color: "#fff", margin: "0 0 10px"
        }}>
          Start Your
        </h2>
        <div style={{ marginBottom: 18 }}>
          <GradText size="clamp(2rem,5vw,3.6rem)">Media Literacy Journey</GradText>
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.75, maxWidth: 520, margin: "0 auto 32px" }}>
          Explore our educational resources, participate in community programs and join the
          growing movement promoting Media and Information Literacy in Zambia.
        </p>
        <button style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "linear-gradient(135deg,#C9293A,#E8610A)",
          color: "#fff", fontWeight: 700, fontSize: 14,
          padding: "13px 28px", borderRadius: 999, border: "none", cursor: "pointer",
          boxShadow: "0 4px 24px rgba(201,41,58,0.5)"
        }}>
          Explore Resources <ArrowRight size={15} />
        </button>
      </BgSection>

    </div>
  );
};

export default Brochure;