import {
  motion
} from "framer-motion";

// import netflix from "../assets/ott/netflix.png";
// import prime from "../assets/ott/prime.png";
// import hotstar from "../assets/ott/hotstar.png";
// import sonyliv from "../assets/ott/sonyliv.png";
// import zee5 from "../assets/ott/zee5.png";
// import jiocinema from "../assets/ott/jiocinema.png";
// import youtube from "../assets/ott/youtube.png";

import netflix from "../assets/ott/netflix.avif";
import primevideo from "../assets/ott/primevideo.avif";
import adobelogo from "../assets/ott/adobelogo.avif";
import appletv from "../assets/ott/appletv.avif";
import googleone from "../assets/ott/googleone.avif";
import hotstar from "../assets/ott/hotstar.avif";
import xtream from "../assets/ott/xtream.webp";
import zee5 from "../assets/ott/zee5.avif";


const logos = [
  netflix,
  hotstar,
  primevideo,
  appletv,
  zee5,
  xtream,
  googleone,
  adobelogo
];

const LogoRibbon = () => {
  return (
    <section
      className="
        py-20
        relative
        overflow-hidden
      "
    >
      <div className="container-custom">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center mb-14"
        >
          <span
            className="
              text-red-500
              uppercase
              tracking-widest
              text-xl
            "
          >
            Entertainment Ready
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            "
          >
            Stream Without Limits
          </h2>

          <p
            className="
              text-gray-400
              mt-4
              max-w-2xl
              mx-auto
            "
          >
            Enjoy buffer-free streaming
            on your favorite OTT platforms
            with ultra-fast broadband.
          </p>
        </motion.div>

      </div>

      {/* Ribbon */}

      <div className="logo-marquee">
        

        <div className="logo-track">

          {[...logos, ...logos].map(
            (logo, index) => (
              <div
                key={index}
                className="
                  logo-item
                  glass
                  rounded-2xl
                  p-6
                "
              >
                <img
                  src={logo}
                  alt="OTT Logo"
                  className="
                    h-12
                    md:h-16
                    object-contain
                  "
                />
              </div>
            )
          )}

        </div>

      </div>
      
<div className="container-custom mt-16">

  <div
    className="
      h-px
      mt-10
      bg-gradient-to-r
      from-transparent
      via-red-600
      to-transparent
    "
  />

</div>

    </section>
    
  );
};

export default LogoRibbon;