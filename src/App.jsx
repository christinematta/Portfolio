
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Technologies from './Components/Technologies/Technologies'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import { useState } from 'react'
import SubmitPopup from './Components/SubmitPopup/SubmitPopup'


const App = () => {
  const [showSubPopup,setShowSubPopup]=useState(false)
  return (
    <>
        <div>
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <MyWork/>
      {showSubPopup&&<SubmitPopup setShowSubPopup={setShowSubPopup}/>}
      <Contact setShowSubPopup={setShowSubPopup}/>
    </div>
    </>

  )
}

export default App
