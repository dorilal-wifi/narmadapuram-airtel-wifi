import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaBolt } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    speed: "50 Mbps",
    price: "₹399",
    unlimited: true,
    ott: false,
    router: "Optional",
    support: "Standard",
    installation: "Free*",
    popular: false,
  },
  {
    name: "Gold",
    speed: "150 Mbps",
    price: "₹799",
    unlimited: true,
    ott: true,
    router: "Included",
    support: "Priority",
    installation: "Free",
    popular: true,
  },
  {
    name: "Ultra",
    speed: "500 Mbps",
    price: "₹1599",
    unlimited: true,
    ott: true,
    router: "Premium",
    support: "VIP",
    installation: "Free",
    popular: false,
  },
];

const yes = (
  <FaCheckCircle className="mx-auto text-green-400 text-xl" />
);

const no = (
  <FaTimesCircle className="mx-auto text-red-500 text-xl" />
);

const ComparisonTable = () => {
  return (
    <section
      className="py-28 relative overflow-hidden"
      id="comparison"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="container-custom relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <span className="text-red-500 uppercase tracking-[4px] text-xl">
            Compare Plans
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Find Your Perfect Broadband Plan
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-5">
            Compare internet speeds, OTT benefits,
            router options, installation and support
            to choose the plan that fits your needs.
          </p>
        </motion.div>

        {/* Table */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            glass
            rounded-3xl
            overflow-x-auto
            border
            border-white/10
        "
        >
          <table className="w-full min-w-[900px] text-center">

            {/* Head */}

            <thead className="sticky top-0 bg-[#111111]/90 backdrop-blur-xl">

              <tr>

                <th className="p-6 text-left text-lg">
                  Features
                </th>

                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`p-6 relative ${
                      plan.popular
                        ? "bg-red-600/10"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <div
                        className="
                        absolute
                        top-2
                        right-2
                        bg-red-600
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        flex
                        items-center
                        gap-2
                      "
                      >
                        <FaBolt />
                        Best
                      </div>
                    )}

                    <h3 className="text-2xl font-bold">
                      {plan.name}
                    </h3>

                    <p className="text-red-500 text-lg mt-2">
                      {plan.speed}
                    </p>

                    <p className="text-3xl font-bold mt-3">
                      {plan.price}
                    </p>

                    <span className="text-gray-400">
                      /month
                    </span>
                  </th>
                ))}
              </tr>

            </thead>

            <tbody>

              <Row
                title="Unlimited Data"
                values={[
                  yes,
                  yes,
                  yes,
                ]}
              />

              <Row
                title="OTT Benefits"
                values={[
                  no,
                  yes,
                  yes,
                ]}
              />

              <Row
                title="Router"
                values={[
                  "Optional",
                  "Included",
                  "Premium",
                ]}
              />

              <Row
                title="Installation"
                values={[
                  "Free*",
                  "Free",
                  "Free",
                ]}
              />

              <Row
                title="Support"
                values={[
                  "Standard",
                  "Priority",
                  "VIP",
                ]}
              />

              <Row
                title="Gaming"
                values={[
                  "Basic",
                  "Low Latency",
                  "Ultra Low Latency",
                ]}
              />

              <tr className="border-t border-white/10">

                <td className="p-6 font-semibold text-left">
                  Choose Plan
                </td>

                {plans.map((plan) => (
                  <td
                    key={plan.name}
                    className="p-6"
                  >
                    <button
                      className={`
                        px-8
                        py-3
                        rounded-full
                        transition

                        ${
                          plan.popular
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-white/10 hover:bg-red-600"
                        }
                      `}
                    >
                      Select
                    </button>
                  </td>
                ))}

              </tr>

            </tbody>

          </table>
        </motion.div>

      </div>

    </section>
  );
};

function Row({ title, values }) {
  return (
    <tr className="border-t border-white/10">

      <td className="text-left p-6 font-medium">
        {title}
      </td>

      {values.map((item, index) => (
        <td
          key={index}
          className="p-6 text-gray-300"
        >
          {item}
        </td>
      ))}

    </tr>
  );
}

export default ComparisonTable;