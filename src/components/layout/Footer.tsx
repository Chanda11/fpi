import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      {/* NEWSLETTER */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated
              </h2>

              <p className="text-slate-300">
                Subscribe to receive updates on media freedom,
                journalism training, research publications,
                events and opportunities.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />

              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* ABOUT */}
            <div>
              <h3 className="text-2xl font-bold mb-5">
                FPI Zambia
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Promoting media freedom, strengthening
                journalism and advancing democratic
                participation throughout Zambia.
              </p>

            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-xl font-bold mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">

                <li>
                  <Link
                    to="/about"
                    className="text-slate-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/team"
                    className="text-slate-400 hover:text-white"
                  >
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link
                    to="/partners"
                    className="text-slate-400 hover:text-white"
                  >
                    Partners
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-slate-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>

              </ul>
            </div>

            {/* PROGRAMS */}
            <div>
              <h3 className="text-xl font-bold mb-5">
                Programs
              </h3>

              <ul className="space-y-3">

                <li>
                  <Link
                    to="/programs/advocacy"
                    className="text-slate-400 hover:text-white"
                  >
                    Advocacy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/programs/media-literacy"
                    className="text-slate-400 hover:text-white"
                  >
                    Media Literacy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/programs/research"
                    className="text-slate-400 hover:text-white"
                  >
                    Research
                  </Link>
                </li>

                <li>
                  <Link
                    to="/programs/capacity-building"
                    className="text-slate-400 hover:text-white"
                  >
                    Capacity Building
                  </Link>
                </li>

              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-xl font-bold mb-5">
                Contact Us
              </h3>

              <div className="space-y-4 text-slate-400">

                <div className="flex items-start gap-3">
                  <MapPin size={18} />
                  <span>
                    Lusaka, Zambia
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} />
                  <span>
                    +260 XXX XXX XXX
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} />
                  <span>
                    info@fpizambia.org
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* COPYRIGHT */}
      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © {new Date().getFullYear()} FPI Zambia.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-500 mt-3 md:mt-0">
            Developed by FPI Media
            <ArrowRight size={14} />
          </div>

        </div>
      </section>

    </footer>
  );
};

export default Footer;