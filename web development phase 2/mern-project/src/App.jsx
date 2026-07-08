import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'

function App() {
  const [count,setCount ] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [name,setName] =useState("")
  function increase(){
    setCount(count + 1)
  }
  function decrease(){
    setCount(count - 1)
  }
  return (
    <>
      <Navbar/>
       <Hero/>
      <h1>{count}</h1>
      <button onClick={increase} >Increase by 1</button>
      <button onClick={decrease} >decrease by 1</button>

      <h2>{isLoggedIn ? "welcome user ": "please login" }</h2>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle button</button>
      <br />
      <input type="text" 
              placeholder='Enter your name'
              onChange={(event)=>setName(event.target.value)}
      />

      <h2>hello  {name}</h2>

    </>
  )
}

export default App
