import { motion } from "framer-motion";
import { Link } from "react-scroll";

// import logo from "../assets/ott/netflix.avif";
import heroBanner from "../assets/hero-banner-airtel.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        pt-24
        absolute
        inset-0
        bg-gradient-to-r
        from-black
        via-black/80
        to-transparent
        z-0
      "
    >
      {/* RED GLOW EFFECTS */}

      <div className="red-glow glow-1"></div>
      <div className="red-glow glow-2"></div>

      {/* FLOATING PARTICLES */}

      <div className="absolute inset-0 z-0">

        <div className="absolute top-20 left-20 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>

        <div className="absolute top-40 right-40 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>

        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>

        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-red-600 rounded-full animate-ping"></div>

      </div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            {/* Logo */}

            {/* <img
              src={logo}
              alt="Dori Lal WiFi"
              className="h-16 mb-8"
            /> */}

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-red-600/20
                border
                border-red-600/30
                text-red-400
                mb-6
              "
            >
              📍 Now Serving Madhya Pradesh & Chhattisgarh
            </div>

            {/* Heading */}

            <h1
              className="
                text-4xl
                md:text-6xl
                xl:text-7xl
                font-extrabold
                leading-tight
                mb-6
              "
            >
              Superfast Fiber
              <br />

              <span className="gradient-text">
                Internet
              </span>

              <br />

              For Every Home
            </h1>

            {/* Description */}

            <p
              className="
                text-gray-400
                text-lg
                md:text-l
                max-w-xl
                leading-relaxed
                mb-10
              "
            >
              {/* Providing reliable high-speed broadband connections across Madhya Pradesh and Chhattisgarh. 
              Our dedicated sales team is ready to help you choose the perfect plan with quick installation and local support. */}

              {/* Serving customers across Madhya Pradesh and Chhattisgarh with affordable broadband plans, unlimited data, fast installation, 
              and a dedicated sales team to assist you every step of the way. */}

              High-speed fiber internet for homes, offices, schools, and businesses with affordable broadband plans across <span className="text-red-400 text-bold">Madhya Pradesh and Chhattisgarh</span>. 
              <br />
              Connect our dedicated sales team is ready to help you choose the perfect plan with quick installation and local support.

              {/* Dori Lal WiFi delivers reliable, high-speed fiber broadband across Madhya Pradesh and Chhattisgarh. Whether you're a homeowner, business, 
              school, or organization, our experienced sales team is ready to help you choose the right plan with quick installation and dependable local support. */}



              {/* Experience lightning-fast connectivity,
              buffer-free streaming, online gaming,
              video conferencing, and seamless work
              from home internet. */}
            </p>

            {/* CTA BUTTONS */}

            <div className="flex flex-wrap gap-4">

              <Link
                to="plans"
                smooth
                duration={600}
                offset={-80}
              >
                <button className="btn-primary cursor-pointer">
                  View Plans
                </button>
              </Link>

              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
              >
                <button className="btn-outline cursor-pointer">
                  Contact Us
                </button>
              </Link>

              <a
                href="tel:7354232967"
                className="btn-primary cursor-pointer flex "
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.548 2.191a2 2 0 01-.502 1.91l-1.27 1.27a16 16 0 007.628 7.628l1.27-1.27a2 2 0 011.91-.502l2.191.548A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.716 23 1 14.284 1 4V3a2 2 0 012-2z"
                  />
                </svg> Call Me
              </a>

            </div>

            {/* FEATURES */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-6
                text-sm
                text-gray-300
              "
            >
              <span>✓ Affordable Broadband Plans*</span>
              <span>✓ Unlimited Data</span>
              <span>✓ Free Installation*</span>
              <span>✓ 24×7 Support</span>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            {/* IMAGE GLOW */}

            <div
              className="
                absolute
                inset-0
                bg-red-600/20
                blur-3xl
                rounded-full
              "
            ></div>

            <img
              src={heroBanner}
              alt="Fiber Internet"
              className="
                relative
                z-10
                w-full
                max-w-xl
                mx-auto
                rounded-3xl
                shadow-2xl
              "
            />
          </motion.div>

        </div>

      </div>

      {/* NETWORK SVG WAVE */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          opacity-30
          z-1
        "
      >
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e60012"
            fillOpacity="1"
            d="
            M0,160
            L48,149.3
            C96,139,192,117,288,122.7
            C384,128,480,160,576,181.3
            C672,203,768,213,864,197.3
            C960,181,1056,139,1152,138.7
            C1248,139,1344,181,1392,202.7
            L1440,224
            L1440,320
            L0,320Z
            "
          />
        </svg>
      </div>

    </section>
  );
};

export default Hero;