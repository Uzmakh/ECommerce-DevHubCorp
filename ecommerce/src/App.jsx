import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DealsAndOffers from "./components/DealsAndOffers";
import Footer from "./components/Footer";
import HomeAndOutdoor from "./components/HomeAndOutDoor";
import ElecronicsAndGadgets from "./components/ElecronicsAndGadgets";
import SectionEnquiry from "./components/SectionEnquiry";
import SectionRecommended from "./components/SectionRecommended";
import SectionService from "./components/SectionService";
import SectionCountry from "./components/SectionCountry";
import SectionNewsletter from "./components/SectionNewsletter";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Hero />
        <DealsAndOffers />
        <HomeAndOutdoor />
        <ElecronicsAndGadgets />
        <SectionEnquiry />
        <SectionRecommended />
        <SectionService />
        <SectionCountry />
      </main>
      <SectionNewsletter />
      <Footer />
    </>
  );
};

export default App;
