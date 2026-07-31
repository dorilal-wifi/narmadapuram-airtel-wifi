// import CountUp from "react-countup";
import { motion } from "framer-motion";

import { stats } from "../data/stats";

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Stats = () => {
  return (
    <section
      className="
        relative
        py-24
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-0
          top-20
          w-72
          h-72
          bg-red-600/10
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          w-80
          h-80
          bg-red-600/10
          blur-[140px]
          rounded-full
        "
      />

      <div className="container-custom">

        {/* Heading */}

        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <span
            className="
              text-red-500
              uppercase
              tracking-widest
              text-sm
            "
          >
            Why Choose Us
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            "
          >
            Trusted By Thousands
          </h2>

          <p
            className="
              text-gray-400
              mt-4
              max-w-2xl
              mx-auto
            "
          >
            Delivering high-speed broadband,
            exceptional support, and reliable
            connectivity for homes and businesses.
          </p>
        </div>

        {/* Stats Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

        {/* {stats.map((item) => {
          console.log(item);
          
        })} */}
        
        {stats.map((item) => (
            
            <motion.div
            key={item.id}
            variants={cardVariants}
            data-aos="zoom-in"
            className="
            glass
            stats-card
            rounded-3xl
            p-8
            text-center
            plan-card
            relative
            overflow-hidden
            "
            >
              {/* Red Accent */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1
                  bg-red-600
                "
              />

              {/* Value */}

              <h3
                className="
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-red-500
                  mb-4
                "
              >
                {/* <CountUp
                  end={item.value}
                  duration={3}
                  decimals={
                    item.value === 99.9 ? 1 : 0
                  }
                /> */}
                {item.value}
                {item.suffix}
              </h3>

              {/* Title */}

              <h4
                className="
                  text-xl
                  font-semibold
                  mb-2
                "
              >
                {item.title}
              </h4>

              {/* Description */}

              <p
                className="
                  text-gray-400
                  text-sm
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}


        </motion.div>

      </div>
    </section>
  );
};

export default Stats;