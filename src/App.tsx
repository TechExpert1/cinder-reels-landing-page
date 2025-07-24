import Header from './components/Header'
import Hero from './components/Hero'
import LaunchSection from './components/LaunchSection'
import Video from './components/Video'
import Features from './components/Features'
import SignupPerks from './components/SignupPerks'
import FAQ from './components/FAQ'


function App() {
  return (
    <div className="relative w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <LaunchSection />
      <Video/>
      <Features />
      <SignupPerks />
      <FAQ />
    </div>
  )
}

export default App
