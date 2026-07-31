import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiMenuAlt3, HiX } from "react-icons/hi";

import { Link } from "react-scroll";

// import logo from "../assets/ott/netflix.avif";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      to: "home",
      id: "home",
    },
    {
      title: "Plans",
      to: "plans",
      id: "plans",
    },
    {
      title: "About",
      to: "about",
      id: "about",
    },
    {
      title: "Contact",
      to: "contact",
      id: "contact",
    },
    // {
    //   title: "FAQ",
    //   to: "faq",
    //   id: "faq",
    // },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        glass
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* <h1 className="h-12 md:h-14">Logo</h1> */}

        <Link
            to="home"
            smooth
            duration={600}
            className="cursor-pointer flex flex-col justify-center w-51.5"              
          >
            {/* <img
              src={logo}
              alt="Dori Lal WiFi"
              className="h-12 md:h-14"
            /> */}

            <h2 className="text-3xl font-bold">
              Dorilal
              <span className="text-red-600">
                {" "}Aitel{" "} 
              </span>
              Wifi
            </h2>
            <span className="text-xs flex justify-center">MADHYA PRADESH | CHATTISGARH</span>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                smooth
                offset={-80}
                duration={600}
                className="
                  cursor-pointer
                  text-gray-300
                  hover:text-red-500
                  transition
                  relative
                  group
                "
                // id={item.id}
              >
                {item.title}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    bg-red-600
                    w-0
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}

            {/* CTA */}

            {/* <Link
              // to="contact"
              to="tel:7987205439"
              smooth
              offset={-80}
              duration={600}
            >
              <button
                className="
                  px-6
                  py-1
                  rounded-full
                  bg-red-600
                  hover:bg-red-700
                  transition
                  font-semibold
                  cursor-pointer
                  shadow-lg
                  shadow-red-600/30
                  flex
                  flex-col
                  text-m
                "
              >
                <span className="text-[10px] p-0 m-0">Toll Free Number</span>
                1800 103 6065
              </button>
            </Link> */}


<a
  href="tel:7354232967"
  className="
    hidden
    lg:inline-flex
    items-center
    gap-3
    bg-red-600
    hover:bg-red-700
    px-6
    py-3
    rounded-full
    font-semibold
    transition-all
    duration-300
    shadow-lg
    hover:shadow-red-600/40
    hover:scale-105
  "
  aria-label="Call Dori Lal WiFi"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
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
  </svg>

  Call Me: +91 7354232967
</a>
          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl"
          >
            {menuOpen ? (
              <HiX />
            ) : (
              <HiMenuAlt3 />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            className="
              lg:hidden
              glass
              border-t
              border-white/10
            "
          >
            <div className="flex flex-col p-6 gap-6">

              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  smooth
                  offset={-80}
                  duration={600}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    text-lg
                    text-gray-300
                    cursor-pointer
                  "
                >
                  {item.title}
                </Link>
              ))}

              <a
  href="tel:7354232967"
  className="btn-primary w-full justify-center mt-6 flex"
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
  </svg>
 {"  "} Call Me +91 7354232967
</a>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.header>
  );
};

export default Header;