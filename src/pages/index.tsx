import Homepage from 'components/Homepage'
import Footer from 'components/Footer'
import Header from 'components/Header'
import About from 'components/About'
import Hobbies from 'components/Hobbies'
import Skills from 'components/Skills'
import Works from 'components/Works'

export default function Home() {
  return (
    <>
      <Header />
      <Homepage />
      <About />
      <Hobbies />
      <Skills />
      <Works />
      <Footer />
    </>
  )
}
