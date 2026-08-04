import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import WhyProfessional from "./components/WhyProfessional";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#080808] text-white">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <WhyProfessional />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;