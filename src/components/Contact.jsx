import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  // FaPaperPlane,
  FaWifi,
  FaMapMarkerAlt,
  FaWhatsapp
} from "react-icons/fa";


const planOptions = [
  { value: "", label: "Select Broadband Plan" },
  { value: "40 Mbps - ₹499/month (Airtel Xstream)", label: "40 Mbps - ₹499/month (Airtel Xstream)" },
  { value: "30 Mbps - ₹599/month (Airtel Black)", label: "30 Mbps - ₹599/month (Airtel Black)" },
  { value: "100 Mbps - ₹799/month (Silver)", label: "100 Mbps - ₹799/month (Silver)" },
  { value: "100 Mbps - ₹899/month (Gold)", label: "100 Mbps - ₹899/month (Gold)" },
  { value: "100 Mbps - ₹999/month (Premium)", label: "100 Mbps - ₹999/month (Premium)" },
  { value: "100 Mbps - ₹1199/month (Ultra Premium)", label: "100 Mbps - ₹1199/month (Ultra Premium)" },
];


export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  const phone = "917354232967";

  const message = `
*New Broadband Inquiry*

Full Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email}
Selected Plan: ${data.plan}
🏠 Address: ${data.address}
`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  setTimeout(() => {
    reset();
  }, 500);
};

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-700/10 rounded-full blur-[150px]" />

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
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Need a new broadband connection or have
            a question? Fill out the form and our
            team will contact you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >

            <ContactCard
              icon={<FaPhoneAlt />}
              title="Call Us"
              text="+91 7354232967"
            />

            <ContactCard
              icon={<FaEnvelope />}
              title="Email"
              text="narmadapuram.airtel.wifi@gmail.com"
            />

            {/* <ContactCard
              icon={<FaMapMarkerAlt />}
              title="Office Address"
              text="Near Campion School,
Babai Road,
Narmadapuram (M.P.) - 461001"
            /> */}

            <div className="glass rounded-3xl p-8 border border-white/10">

              <h3 className="text-2xl font-semibold mb-4">
                Why Choose Us?
              </h3>

              <ul className="space-y-3 text-gray-300">

                <li>✓ Same Day Installation*</li>

                <li>✓ Unlimited Data</li>

                <li>✓ Affordable Plans</li>

                <li>✓ 24×7 Support</li>

                <li>✓ Reliable Fiber Network</li>

              </ul>

            </div>

          </motion.div>

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative glass rounded-3xl p-8 border border-white/10"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <Input
                  icon={<FaUser />}
                  placeholder="Full Name"
                  error={errors.name}
                  register={register("name", {
                    required: "Full Name is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters",
                    },
                  })}
                />

                <Input
                  icon={<FaPhoneAlt />}
                  placeholder="Mobile Number"
                  error={errors.mobile}
                  register={register("mobile", {
                    required: "Mobile Number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter valid mobile number",
                    },
                  })}
                />

              </div>

              <div className="mt-6">

                <Input
                  icon={<FaEnvelope />}
                  placeholder="Email Address"
                  error={errors.email}
                  register={register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid Email",
                    },
                  })}
                />

              </div>

              <div className="relative mt-6">
                <span className="absolute left-7 top-1/2 -translate-1/2 text-red-500 z-10 text-lg">
                  <FaWifi />
                </span>
                <select
                
                  className="contact-input cusror-pointer"
                  {...register("plan", {
                    required: "Please select a broadband plan",
                  })}
                >
                  {/* <div classNam><FaWifi /></div> */}
                  {planOptions.map((plan) => (
                    <option
                      key={plan.value}
                      value={plan.value}
                      className="bg-[#161616] cursor-pointer"
                    >
                      {plan.label}
                    </option>
                  ))}
                </select>

                {errors.plan && (
                  <p className="error-text">
                    {errors.plan.message}
                  </p>
                )}
              </div>

              <div className="relative mt-6">
                <span className="absolute left-5 top-5 text-red-500 text-base">
                  <FaMapMarkerAlt />
                </span>

                <textarea
                  rows={4}
                  placeholder="Address"
                  className="contact-input resize-none"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 10,
                      message:
                        "Minimum 10 characters",
                    },
                  })}
                />

                {errors.address && (
                  <p className="error-text">
                    {errors.address.message}
                  </p>
                )}

              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-8 flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />

Connect on WhatsApp
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <div className="glass rounded-3xl p-6 border border-white/10 flex gap-5 items-start">

      <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center text-xl">
        {icon}
      </div>

      <div>

        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p className="text-gray-400 whitespace-pre-line mt-2">
          {text}
        </p>

      </div>

    </div>
  );
}

function Input({
  icon,
  placeholder,
  register,
  error,
}) {
  return (
    <div>

      <div className="relative">

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-red-500">
          {icon}
        </span>

        <input
          className="contact-input pl-14"
          placeholder={placeholder}
          {...register}
        />

      </div>

      {error && (
        <p className="error-text">
          {error.message}
        </p>
      )}

    </div>
  );
}