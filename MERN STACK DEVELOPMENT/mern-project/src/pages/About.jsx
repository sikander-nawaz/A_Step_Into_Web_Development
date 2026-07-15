import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
  return (
    <div>
     <p>about page </p>   

     <button onClick={()=>navigate("/")} className='p-3 rounded-lg bg-blue-700 text-white m-3'> Go to Home</button>
     <button onClick={()=>navigate("/contact")} className='p-3 rounded-lg bg-purple-600  text-white'> Go to contact</button>



    </div>
  )
}

export default About