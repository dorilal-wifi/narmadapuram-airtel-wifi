import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>
        Narmadapuram Airtel Wifi | High-Speed Broadband Provider in Madhya Pradesh &
        Chhattisgarh
      </title>

      <meta
        name="description"
        content="Get high-speed fiber broadband connections across Madhya Pradesh and Chhattisgarh."
      />

      {/* Other meta tags */}

      {/* ===== Structured Data ===== */}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Narmadapuram Airtel Wifi",
          image: "https://narmadapuram-airtel-wifi.vercel.app/wifi-favicon.png",
          url: "https://narmadapuram-airtel-wifi.vercel.app",
          telephone: "+91-7354232967",
          email: "dorilal.wifi@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Ahirwad Colony, Babai Road",
            addressLocality: "Narmadapuram",
            addressRegion: "Madhya Pradesh",
            postalCode: "461001",
            addressCountry: "IN",
          },
          areaServed: [
            "Madhya Pradesh",
            "Chhattisgarh",
          ],
          openingHours: "Mo-Su 09:00-20:00",
          sameAs: [
            "https://www.facebook.com/profile.php?id=61593677048599",
            "https://www.instagram.com/narmadapuram_airtel_wifi/",
          ],
        })}
      </script>

    </Helmet>
  );
}