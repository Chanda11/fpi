import {
  MapPin,
  Users,
  Laptop,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const provinces = [
  {
    name: "Lusaka Province",
    hubs: 7,
    path: "/mil/province/lusaka",
  },
  {
    name: "Copperbelt Province",
    hubs: 3,
    path: "/mil/province/copperbelt",
  },
  {
    name: "Southern Province",
    hubs: 1,
    path: "/mil/province/southern",
  },
  {
    name: "Eastern Province",
    hubs: 2,
    path: "/mil/province/eastern",
  },
];

const features = [
  {
    icon: <Laptop size={18} />,
    title: "Digital Skills",
    body: "Training communities on digital tools, online safety and responsible internet use.",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Learning Resources",
    body: "Access to educational materials, toolkits and media literacy resources.",
  },
  {
    icon: <Users size={18} />,
    title: "Community Engagement",
    body: "Encouraging dialogue and participation through local activities and workshops.",
  },
];

const stats = [
  {
    num: "13+",
    label: "MIL Hubs",
  },
  {
    num: "5,000+",
    label: "Citizens Reached",
  },
  {
    num: "100+",
    label: "Training Sessions",
  },
  {
    num: "50+",
    label: "Community Events",
  },
];

const Hubs = () => {
  return (
    <>
      {/* HERO */}
{/* HERO */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/activity-2.jpg"
    alt="MIL Hubs"
    className="absolute inset-0 w-full h-full object-cover scale-105"  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80" />

  {/* Content */}
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center -mt-12">
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-8 h-[2px] bg-[#C9293A]" />

      <span className="uppercase tracking-[0.15em] text-xs font-semibold text-white/80">
        Media & Information Literacy
      </span>
    </div>

    <h1 className="font-serif text-5xl md:text-7xl font-black text-white mb-6">
      MIL{" "}
      <span className="italic text-[#C9293A]">
        Hubs
      </span>
    </h1>

    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-8">
      Community-based learning spaces promoting Media &
      Information Literacy across Zambia.
    </p>

  </div>

</section>

      {/* INTRO */}
{/* INTRO */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* IMAGE SIDE */}
      <div className="relative">

        <img
          src="/images/activity-1.jpg"
          alt="MIL Hubs Activity"
          className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
        />

        <img
          src="/images/activity-2.jpg"
          alt="MIL Hubs Community"
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
          Media & Information Literacy
        </span>

        <h2 className="font-serif text-5xl font-black leading-tight mt-4 mb-6">
          Connecting Communities Through Knowledge
        </h2>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          MIL Hubs provide safe and inclusive spaces where citizens
          can learn about digital literacy, information verification,
          critical thinking and responsible participation in the
          digital world.
        </p>

        <p className="text-gray-600 text-lg leading-8">
          Through community-based learning, citizens gain practical
          skills that empower them to engage responsibly with media,
          access information confidently and participate actively in
          democratic processes.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* SECTION HEADER */}
      <div className="px-6 lg:px-12 py-4 border-b border-t border-gray-200 flex items-center gap-3">
        <span className="uppercase tracking-[0.15em] text-xs font-semibold text-gray-500">
          What We Offer
        </span>

        <span className="text-gray-300">—</span>

        <span className="font-serif font-bold text-lg">
          Hub Features
        </span>
      </div>

  {/* HUB FEATURES */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* CONTENT SIDE */}
      <div>

        <span className="uppercase tracking-[0.15em] text-xs font-semibold text-[#C9293A]">
          What We Offer
        </span>

        <h2 className="font-serif text-5xl font-black leading-tight mt-4 mb-6">
          Empowering Communities Through Learning
        </h2>

        <p className="text-gray-600 text-lg leading-8 mb-8">
          MIL Hubs provide practical learning opportunities that
          strengthen digital citizenship, media literacy and
          community participation across Zambia.
        </p>

        <div className="space-y-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white
                p-6
                rounded-2xl
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
                    bg-red-50
                    flex
                    items-center
                    justify-center
                    text-[#C9293A]
                    flex-shrink-0
                  "
                >
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {feature.body}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* IMAGE SIDE */}
      <div className="relative">

        <img
          src="/images/activity-3.jpg"
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
            -left-10
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
            right-6
            bg-[#C9293A]
            text-white
            px-6
            py-4
            rounded-xl
            shadow-lg
          "
        >
          <h3 className="text-3xl font-bold">
            5,000+
          </h3>

          <p className="text-sm">
            Citizens Reached
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* SECTION HEADER */}
      <div className="px-6 lg:px-12 py-4 border-b border-gray-200 flex items-center gap-3">
        <span className="uppercase tracking-[0.15em] text-xs font-semibold text-gray-500">
          Where We Are
        </span>

        <span className="text-gray-300">—</span>

        <span className="font-serif font-bold text-lg">
          MIL Hub Provinces
        </span>
      </div>

{/* PROVINCES */}
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="uppercase tracking-[0.15em] text-xs font-semibold text-[#C9293A]">
        Where We Are
      </span>

      <h2 className="font-serif text-5xl font-black mt-4 mb-6">
        MIL Hub Provinces
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 leading-8">
        Our Media & Information Literacy hubs are spread across
        Zambia, providing communities with access to learning,
        resources and engagement opportunities.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {provinces.map((province, index) => (

        <Link
          key={province.name}
          to={province.path}
          className="
            group
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-sm
            hover:shadow-2xl
            transition-all
            duration-300
          "
        >

          {/* IMAGE */}
          <div className="relative overflow-hidden">

            <img
              src={`/images/activity-${(index % 4) + 1}.jpg`}
              alt={province.name}
              className="
                w-full
                h-72
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">

              <h3 className="font-serif text-3xl font-bold">
                {province.name}
              </h3>

              <p className="text-white/80">
                Explore local hubs
              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-8 flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Active Hubs
              </p>

              <h4 className="text-4xl font-black text-[#C9293A]">
                {province.hubs}
              </h4>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-full
                bg-red-50
                flex
                items-center
                justify-center
                text-[#C9293A]
              "
            >
              <MapPin size={22} />
            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>

      {/* SECTION HEADER */}
      <div className="px-6 lg:px-12 py-4 border-b border-t border-gray-200 flex items-center gap-3">
        <span className="uppercase tracking-[0.15em] text-xs font-semibold text-gray-500">
          Our Reach
        </span>

        <span className="text-gray-300">—</span>

        <span className="font-serif font-bold text-lg">
          Impact At A Glance
        </span>
      </div>

      {/* IMPACT */}
      <section className="grid md:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`py-10 px-6 text-center ${
              index !== stats.length - 1
                ? "md:border-r border-gray-200"
                : ""
            }`}
          >
            <div className="font-serif text-5xl font-black text-[#C9293A] mb-2">
              {stat.num}
            </div>

            <div className="text-gray-500 text-sm">
              {stat.label}
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default Hubs;