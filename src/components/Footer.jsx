import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";


const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "Plans", href: "#plans" },
  { title: "About", href: "#about" },
  // { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

const plans = [
  { title: "30 Mbps", href: "#plans" },
  { title: "40 Mbps", href: "#plans" },
  { title: "100 Mbps", href: "#plans" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">

      {/* Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full" />

      <div className="container-custom relative z-10 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div className="w-80 ">

            <Link
              to="home"
              smooth
              duration={600}
              className="cursor-pointer flex flex-col justify-center w-65"              
            >
              {/* <img
                src={logo}
                alt="Narmadapuram Airtel WiFi"
                className="h-12 md:h-14"
              /> */}
  
              <h2 className="text-[20px] font-bold">
                Narmadapuram
                <span className="text-red-600">
                  {" "}Airtel{" "} 
                </span>
                Wifi
              </h2>
              <span className="w-65 text-xs flex justify-center">MADHYA PRADESH | CHATTISGARH</span>
            </Link>

            <p className="text-gray-400 mt-6 leading-8 w-65">
              Delivering reliable high-speed
              fiber broadband with affordable
              plans, unlimited data and
              exceptional customer support.
            </p>

            <div className="flex gap-4 mt-8">

              <Social
                href="https://www.facebook.com/profile.php?id=61593677048599"
                icon={<FaFacebookF />}
              />

              <Social
                href="https://www.instagram.com/narmadapuram_airtel_wifi/"
                icon={<FaInstagram />}
              />

              <Social
                href="https://wa.me/917354232967"
                icon={<FaWhatsapp />}
              />

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="footer-title">
              Quick Links
            </h3>

            {quickLinks.map(link => (

              <a
                key={link.title}
                href={link.href}
                className="footer-link"
              >
                <FaArrowRight />

                {link.title}
              </a>

            ))}

          </div>

          {/* Plans */}

          <div>

            <h3 className="footer-title">
              Broadband Plans
            </h3>

            {plans.map(plan => (

              // <p
              //   key={plan}
              //   className="footer-link"
              // >
              //   <FaArrowRight />

              //   {plan}
              // </p>

              <a
                key={plan.title}
                href={plan.href}
                className="footer-link"
              >
                <FaArrowRight />

                {plan.title}
              </a>

            ))}

          </div>

          {/* Contact */}

          <div>

            <h3 className="footer-title">
              Contact
            </h3>

            <div className="space-y-5 flex flex-col">

              <div className="footer-contact flex align-middle">

                <FaPhoneAlt className="text-red-500"/>

                +91 7354232967

              </div>

              <div className="footer-contact flex align-middle">

                <MdEmail className="text-red-500"/>

                narmadapuram.airtel.wifi@gmail.com

              </div>

              <div className="footer-contact flex align-middle">

                <FaMapMarkerAlt className="text-red-500"/>

                Ashirwad Colony,
                Babai Road,
                Narmadapuram (M.P.)

              </div>

              <div className="mt-6 flex flex-col gap-4">

  {/* Call Button */}
  <a
    href="tel:18001036065"
    className="
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-full
    bg-red-600
    hover:bg-red-700
    px-4
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    shadow-lg
    hover:shadow-red-600/40
    "
    aria-label="Call Toll Free"
  >
    <FaPhoneAlt />
    Customer Care 
    <span className="font-bold">
      1800-103-6065
    </span>
  </a>

  {/* WhatsApp Button */}
  {/* <a
    href="https://wa.me/917354232967"
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-full
      border
      border-green-500
      bg-green-600
      hover:bg-green-700
      px-6
      py-4
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
    "
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp />

    Chat on WhatsApp
  </a> */}

</div>

            </div>


          </div>

        </div>

      </div>

      



      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Narmadapuram Airtel Wifi. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed with ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}

function Social({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
      w-12
      h-12
      rounded-full
      glass
      flex
      items-center
      justify-center
      hover:bg-red-600
      transition
      "
    >
      {icon}
    </a>
  );
}