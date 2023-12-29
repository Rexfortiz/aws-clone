import './App.scss'
import Header from './Section/header.tsx'
import ReInvent from './Section/ReInvent.tsx'
import Highlights from './Section/Highlights.tsx'
import Announce from './Section/Announce.tsx'
import Feature from './Section/Feature.tsx'
import Speech from './Section/Speech.tsx'
import InnovationTalks from './Section/InnovationTalks.tsx'
import NewsBlog from './Section/NewsBlog.tsx'
import ReInventBottom from './Section/ReInventBottom.tsx'
import Footer from './Section/Footer.tsx'



function App() {

  return (
    <>
      <Header />
      <ReInvent />
      <Highlights />
      <Announce />
      <Feature />
      <Speech />
      <InnovationTalks />
      <NewsBlog />
      <ReInventBottom />
      <Footer />
    </>
  )
}

export default App
