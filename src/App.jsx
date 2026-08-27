import { Helmet } from "react-helmet-async";

import Header from "./components/Header";
import Hero from "./components/Hero";
// import Stats from "./components/Stats";
import Plans from "./components/Plans";
import LogoRibbon from "./components/LogoRibbon";
// import ComparisonTable from "./components/ComparisonTable";
import About from "./components/About";
// import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SEO from "./components/SEO";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Narmadapuram Airtel Wifi | High-Speed Broadband Internet Plans in Narmadapuram
        </title>

        <meta
          name="description"
          content="Get high-speed broadband internet with affordable plans and reliable connectivity."
        />
      </Helmet>

      <div className="bg-[#0A0A0A] text-white overflow-hidden">
        <SEO/>
        <Header />
        <Hero />
        {/* <Stats /> */}
        <LogoRibbon />
        <Plans />
        {/* <ComparisonTable /> */}
        <About />
        {/* <FAQ /> */}
        <Contact />
        <Footer />
        <WhatsAppButton /> 
        <ScrollToTopButton/>
      </div>
    </>
  );
}

export default App;