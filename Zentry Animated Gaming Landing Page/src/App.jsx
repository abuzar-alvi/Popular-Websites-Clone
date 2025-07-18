import Hero from './components/Hero'
import NavBar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Story from "./components/Story";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-full">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Footer />
    </main>
  )
}

export default App