import React from 'react'
import Header from '../components/Header'
import Step from '../components/Step'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'
import Result from './Result'


const Home = () => {
  return (
    <div>
      <Header/>
      <Step/>
      <Description/>
        <Result/>
      <Testimonials /> 

      <GenerateBtn/>
    
     
    </div>
  )
}

export default Home
