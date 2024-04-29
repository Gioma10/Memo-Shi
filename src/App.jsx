import { useState } from 'react'
import Home from './components/Home.jsx'


function App() {
const[getStart, setGetStart]= useState(false)

function handleStart(){
  setGetStart(prevStart => true)
}

  return (
    <>
      {!getStart &&
        <div className="h-screen bg-[url('./assets/home/backgroundSign.jpeg')] bg-contain flex justify-center items-center" >
          <Home onStart={handleStart}/> 
        </div>}

      {getStart &&
        <div className="h-screen bg-[url('./assets/game/backgroundGame.jpeg')] bg-contain flex justify-center items-center" >
          
        </div>}
    </>
  )
}

export default App
