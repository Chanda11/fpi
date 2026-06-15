import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Briefcase,
  Newspaper,
  ArrowRight,
} from "lucide-react";

// ============================================================
// DATA CONFIGURATION – all content can be replaced from admin
// ============================================================
const contactData = {
  hero: {
    title: "Let's Build",
    highlight: "Change Together",
    subtitle:
      "Connect with our team for partnerships, training opportunities, media inquiries, research collaborations, and community programs.",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600",
    ctaPrimary: { text: "Send a Message", link: "#contact-form" },
    ctaSecondary: { text: "Contact Details", link: "#contact-info" },
  },
  info: {
    tag: "Get In Touch",
    title: "We'd Love To Hear From You",
    description:
      "Whether you're interested in partnering with us, requesting training, supporting our work, or learning more about our programs, our team is ready to assist.",
    contactDetails: [
      { icon: Mail, label: "Email Address", value: "info@fpizambia.org" },
      { icon: Phone, label: "Phone Number", value: "+260 XXX XXX XXX" },
      { icon: MapPin, label: "Office Location", value: "Lusaka, Zambia" },
      { icon: Clock, label: "Office Hours", value: "Monday – Friday\n08:00 – 17:00" },
    ],
    formTitle: "Send Us A Message",
  },
  quickContact: {
    tag: "How We Can Help",
    title: "Choose The Right Team",
    cards: [
      {
        icon: Users,
        title: "Partnerships",
        text: "Collaborate with FPI Zambia on media development, research, and community initiatives.",
      },
      {
        icon: Newspaper,
        title: "Media Inquiries",
        text: "Request interviews, press statements, and information about our work.",
      },
      {
        icon: Briefcase,
        title: "Training Requests",
        text: "Book media literacy workshops, journalism training, and capacity building sessions.",
      },
    ],
  },
  cta: {
    title: "Join Us In Strengthening",
    highlight: "Media Freedom",
    subtitle: "Together we can build a more informed, inclusive and democratic Zambia.",
    button: { text: "Learn More", link: "/about" },
  },
};

// ============================================================
// CUSTOM HOOK FOR SCROLL ANIMATION
// ============================================================
function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${delay}ms, transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${delay}ms`,
    } as React.CSSProperties,
  };
}

// ============================================================
// SECTION COMPONENTS
// ============================================================
const SectionBadge = ({ text, icon }: { text: string; icon?: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 bg-[#C9293A]/10 rounded-full px-4 py-1.5 mb-6">
    {icon && <span className="text-[#C9293A]">{icon}</span>}
    <span className="text-xs font-medium text-[#C9293A] tracking-wide">{text}</span>
  </div>
);

const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, style } = useFadeUp(delay);
  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

const GradText = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: "linear-gradient(120deg, #E8610A, #F5A623)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontStyle: "italic",
    }}
  >
    {children}
  </span>
);

// ============================================================
// MAIN COMPONENT
// ============================================================
const Contact = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-gray-50">
      {/* ========== HERO SECTION – FIXED BACKGROUND (static) ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${contactData.hero.backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C9293A]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/15 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="block w-6 h-[2px] bg-[#E8610A] rounded-full"></span>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/80">
                Contact FPI Zambia
              </span>
              <span className="block w-6 h-[2px] bg-[#E8610A] rounded-full"></span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              {contactData.hero.title}{" "}
              <GradText>{contactData.hero.highlight}</GradText>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
              {contactData.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={contactData.hero.ctaPrimary.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9293A] to-[#E8610A] text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                {contactData.hero.ctaPrimary.text}
              </a>
              <a
                href={contactData.hero.ctaSecondary.link}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                {contactData.hero.ctaSecondary.text}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT INFO + FORM ========== */}
      <section id="contact-info" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT: INFO */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C9293A] mb-4">
                <span className="block w-6 h-[2px] bg-[#C9293A]" />
                {contactData.info.tag}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-black mb-6">
                {contactData.info.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                {contactData.info.description}
              </p>
              <div className="space-y-6">
                {contactData.info.contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4 items-start">
                      <Icon className="text-[#C9293A] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-lg">{item.label}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* RIGHT: FORM */}
            <AnimatedSection delay={150}>
              <div className="bg-[#F8F6F2] p-6 md:p-10 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                  {contactData.info.formTitle}
                </h3>
                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C9293A] transition"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C9293A] transition"
                  />
                  <input
                    type="text"
                    placeholder="Organization"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C9293A] transition"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C9293A] transition"
                  />
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C9293A] transition"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C9293A] to-[#E8610A] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== QUICK CONTACT CARDS ========== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C9293A] mb-4">
              <span className="block w-6 h-[2px] bg-[#C9293A]" />
              {contactData.quickContact.tag}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-black">
              {contactData.quickContact.title}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {contactData.quickContact.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={card.title} delay={idx * 100}>
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100">
                    <Icon size={42} className="text-[#C9293A] mb-5" />
                    <h3 className="font-serif text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== MAP PLACEHOLDER (static background style) ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center shadow-md">
            <div className="text-center">
              <MapPin size={50} className="text-[#C9293A] mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold">Google Maps Location</h3>
              <p className="text-gray-500 mt-2">Embed Google Maps here later</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CALL TO ACTION ========== */}
      <section className="py-20 md:py-28 bg-[#080c1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              {contactData.cta.title}{" "}
              <span className="text-[#C9A84C] italic">{contactData.cta.highlight}</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {contactData.cta.subtitle}
            </p>
            <a
              href={contactData.cta.button.link}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9293A] to-[#E8610A] text-white px-8 py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              {contactData.cta.button.text}
              <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;