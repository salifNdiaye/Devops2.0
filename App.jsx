import { useState } from 'react'
import Header from './header'
import Section1 from './section1Devops'
import Service from './section2'
import './app.css'
import Detail from './DetailService'
import About from './about'
import Contact from './contact'
import Footer from './footer'

function App() {

  const [show, setShow]= useState(false)

    

  return <div className="app">
  <Header/> <br /><br /><br />
  <Section1/>  
  <Service setShow={setShow} show={show}/>
  {show ?< Detail/>:null }
  <About/>
   < Contact /> <br />
   <Footer/>

  </div>  
}

export default App
