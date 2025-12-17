
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DealsAndOffers from './components/DealsAndOffers'
import Footer from './components/Footer'
import HomeAndOutdoor from './components/HomeAndOutDoor'
import ElecronicsAndGadgets from './components/ElecronicsAndGadgets'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Hero />
        <DealsAndOffers />
        <HomeAndOutdoor />
        <ElecronicsAndGadgets/>
      </main>
      <Footer/>
    </>
  )
}

export default App
