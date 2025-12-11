
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-dashed border-gray-300 bg-white/60 p-8 text-center text-gray-500">
          <p className="text-lg font-medium">Your ecommerce content goes here.</p>
          <p className="mt-2 text-sm">Replace this section with product grids or hero banners.</p>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
