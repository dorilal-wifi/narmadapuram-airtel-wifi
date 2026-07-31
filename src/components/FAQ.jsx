import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import { faqs } from "../data/faq";

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 w-80 h-80 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="container-custom relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-red-500 text-xl">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Got Questions?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Everything you need to know before choosing
            your Dori Lal WiFi broadband connection.
          </p>
        </motion.div>

        {/* Accordion */}

        <div className="max-w-4xl mx-auto space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .08
              }}
              className="glass faq-card rounded-3xl border border-white/10 overflow-hidden"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full px-7 py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0
                  }}
                  transition={{
                    duration: .25
                  }}
                >
                  <FaChevronDown className="text-red-500" />
                </motion.div>
              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: .35
                    }}
                  >
                    <div className="px-7 pb-7 text-gray-400 leading-8 border-t border-white/10">
                      <p className="pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}