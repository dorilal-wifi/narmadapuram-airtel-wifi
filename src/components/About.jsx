import { motion } from "framer-motion";
import {
  FaWifi,
  FaRocket,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

import aboutImage from "../assets/dorilal-wifi-image.png";

const features = [
  {
    icon: <FaWifi />,
    title: "High-Speed Broadband",
    description:
      "Reliable fiber broadband plans for homes, offices, and businesses.",
  },
  {
    icon: <FaRocket />,
    title: "Quick Installation",
    description:
      "Fast connection activation with support from our local sales team.",
  },
  {
    icon: <FaHeadset />,
    title: "Sales & Support",
    description:
      "Friendly assistance before and after installation across MP & Chhattisgarh.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Service",
    description:
      "Affordable plans, transparent pricing, and dependable customer service.",
  },
];

const aboutStats = [
  {
    value: "5000+",
    label: "Happy Customers",
  },
  {
    value: "2",
    label: "States Covered",
  },
  {
    value: "24×7",
    label: "Sales Support",
  },
  {
    value: "100+",
    label: "Service Locations",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 w-96 h-96 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-red-700/10 blur-[140px]" />

      <div className="container-custom relative z-10">


          {/* HEADING */}
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-red-500 text-xl">
            About Us
          </span>
        </motion.div>




          
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            data-aos="fade-right"
            >
            <div className="glass rounded-[32px] p-4 relative flex align-middle justify-between border w-90">
              <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-red-600/30 to-transparent blur-xl"></div>
              <img
                src={aboutImage}
                alt="About Dori Lal WiFi"
                className="relative rounded-[28px] w-full h-full object-cover about-image"
                />
            </div>
          </motion.div>

          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            data-aos="fade-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Connecting Homes & Businesses with High-Speed Broadband
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              Dorilal Yadav is your trusted broadband sales and service partner, providing reliable internet solutions across Madhya Pradesh and Chhattisgarh. 
              We help customers choose the best broadband plans from providers with affordable pricing, quick installation, and local support.
              <br />
              Whether you need internet for your home, office, online classes, entertainment, or business, 
              our experienced sales team is always ready to help you find the right connection.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Our goal is to make high-speed broadband accessible to everyone with transparent pricing, 
              fast service activation, and excellent customer support. From selecting the right plan to 
              installation assistance, Dorilal Yadav is committed to providing a smooth and hassle-free experience.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-4 gap-5 mt-10 sm:w-145 ">

              {aboutStats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02
                  }}
                  className="glass rounded-2xl p-3 border border-white/10 flex flex-col"
                >
                  <h3 className="font-extrabold text-red-600 text-3xl text-center">
                    {item.value}
                  </h3>

                  <p className="font-semibold mt-2 text-sm leading-7 text-center">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>

          </motion.div>
          {/* </div> */}

        </div>

        <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            data-aos="fade-left"
          >

            {/* Features */}

            <div className="grid sm:grid-cols-4 gap-5 mt-20">

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02
                  }}
                  className="glass rounded-2xl p-5 border border-white/10"
                >
                  <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm leading-7">
                    {item.description}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* CTA */}
            <div className="flex items-center w-full">
            <a
              href="tel:7354232967"
              className="btn-primary mt-10 inline-flex items-center gap-3"
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

      </div>
    </section>
  );
}