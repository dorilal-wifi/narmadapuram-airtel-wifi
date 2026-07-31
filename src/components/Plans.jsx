import { motion } from "framer-motion";
import { plans } from "../data/plans";

import {
  FaCheckCircle,
  FaBolt
} from "react-icons/fa";

const Plans = () => {
  return (
    <section
      id="plans"
      className="
        py-28
        relative
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-20
          left-0
          w-96
          h-96
          bg-red-600/10
          blur-[150px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-red-700/10
          blur-[180px]
          rounded-full
        "
      />

      <div className="container-custom relative z-10">

        {/* Section Header */}

        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <span
            className="
              text-red-500
              uppercase
              tracking-widest
              text-xl
            "
          >
            Broadband Plans
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            "
          >
            Choose Your Perfect Plan
          </h2>

          <p
            className="
              text-gray-400
              mt-4
              max-w-2xl
              mx-auto
            "
          >
            Affordable fiber broadband plans
            designed for homes, students,
            professionals, and businesses.
          </p>
        </div>

        {/* Plans Grid */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{
                y: -12,
                scale: 1.02
              }}
              transition={{
                duration: 0.3
              }}
              data-aos="zoom-in"
              className={`
                relative
                glass
                plan-premium
                plan-card-premium
                rounded-3xl
                overflow-hidden
                p-8
                border
                cursor-pointer

                ${
                  plan.popular
                    ? "border-red-600 shadow-[0_0_40px_rgba(230,0,18,0.3)]"
                    : "border-white/10"
                }
              `}
            >
              {/* Popular Badge */}

              {plan.popular && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-red-600
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-semibold
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FaBolt />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}

              <span
                className="
                  text-red-500
                  uppercase
                  text-sm
                  tracking-widest
                "
              >
                {plan.name}
              </span>

              {/* Speed */}

              <h3
                className="
                  text-4xl
                  font-bold
                  mt-4
                "
              >
                {plan.speed}
              </h3>

              {/* Price */}

              <div className="mt-6">

                <span
                  className="
                    text-5xl
                    font-extrabold
                    text-red-500
                  "
                >
                  ₹{plan.price}
                </span>

                <span className="text-gray-400">
                  /month + GST
                </span>

              </div>

              {/* Divider */}

              <div
                className="
                  my-8
                  h-px
                  bg-white/10
                "
              />

              {/* Features */}

              <ul className="space-y-4">

                {plan.features.map(
                  (feature, index) => (
                    <li
                      key={index}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <FaCheckCircle
                        className="
                          text-red-500
                          shrink-0
                        "
                      />

                      <span
                        className="
                          text-gray-300
                        "
                      >
                        {feature}
                      </span>
                    </li>
                  )
                )}

              </ul>

              {/* Button */}

              {/* <button
                className={`
                  mt-8
                  w-full
                  py-4
                  rounded-xl
                  font-semibold
                  transition

                  ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-white/10 hover:bg-red-600"
                  }
                `}
              >
                Choose Plan
              </button> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Plans;