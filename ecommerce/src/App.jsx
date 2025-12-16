
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DealsAndOffers from './components/DealsAndOffers'
import Footer from './components/Footer'
import HomeAndOutdoor from './components/HomeAndOutDoor'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Hero />
        <DealsAndOffers />
        <HomeAndOutdoor/>
      </main>
      <Footer/>
    </>
  )
}

export default App
