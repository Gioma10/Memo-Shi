import { useRef, useState } from 'react'
import Home from './components/Home.jsx'
import Game from './components/Game.jsx'
import videoBack from './video/back.mp4'

function App() {
const[getStart, setGetStart]= useState(false)
const[validation, setValidation]= useState(false)
const username= useRef()

function handleStart(){
  setGetStart(prevStart => !prevStart ? username.current.value : undefined)
  setValidation(prevValidation => prevValidation ? false : true )
}
function handleHome(){
  setGetStart(prevStart => !prevStart ? username.current.value : undefined)
  setValidation(false)
}



  return (
    <>
    <header className='h-full w-full'>
      {!getStart &&
        <div className="h-screen w-full flex justify-center items-center relative" >
          <video 
            className='absolute bottom-0 z-0' 
            src={videoBack} 
            autoPlay 
            loop />
            <Home 
              validation= {validation}
              ref={username}
              onStart={handleStart}/> 
        </div>

        }
            
    </header>
    <main className='h-full w-full'>
      {getStart &&
        <div className="h-screen w-full flex flex-col justify-center relative" >
          <video className=' absolute bottom-0 z-0' src={videoBack} autoPlay loop />
          <Game onHome={handleHome} username={getStart}/>
        </div>
        }
    </main>
      
   
    </>
  )
}

export default App
