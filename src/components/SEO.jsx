import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>
        Dori Lal WiFi | High-Speed Broadband Provider in Madhya Pradesh &
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
          name: "Dorilal Airtel WiFi",
          image: "https://www.dorilalairtelwifi.com/logo.png",
          url: "https://www.dorilalairtelwifi.com",
          telephone: "+91-7354232967",
          email: "dorilaly14@gmail.com",
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
            "https://facebook.com/yourpage",
            "https://instagram.com/yourpage",
          ],
        })}
      </script>

    </Helmet>
  );
}