import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Intro from './components/Intro'
import MissionVisionGoals from './components/MissionVisionGoals'
import ProgramPillars from './components/ProgramPillars'
import GlobalMarketTrends from './components/GlobalMarketTrends'
import SDGAlignment from './components/SDGAlignment'
import SWOT from './components/SWOT'
import SocioEconomicImpact from './components/SocioEconomicImpact'
import ValueProposition from './components/ValueProposition'
import WhatWeDo from './components/WhatWeDo'
import Journey from './components/Journey'
import CurriculumTimeline from './components/CurriculumTimeline'
import Investment from './components/Investment'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <MissionVisionGoals />
        <ProgramPillars />
        <GlobalMarketTrends />
        <SDGAlignment />
        <SWOT />
        <SocioEconomicImpact />
        <ValueProposition />
        <WhatWeDo />
        <Journey />
        <CurriculumTimeline />
        <Marquee
          band="magenta"
          tilt="rotate-1"
          items={['Enroll Now', 'RM 2,499 / month', 'Limited Seats', '14 Weeks', 'Graduate as Junior CEO']}
        />
        <Investment />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
