import { useRef, useState } from 'react'
import Home from './components/Home.jsx'
import Game from './components/Game.jsx'
import Back from './assets/game/back.png'
import videoBack from './video/back.mp4'

function App() {
const[getStart, setGetStart]= useState()
const username= useRef()

function handleStart(){
  setGetStart(prevStart => !prevStart ? username.current.value : undefined)
}

  return (
    <>
    <header className='h-full w-full'>
      {!getStart &&
        <div className="h-screen w-full flex justify-center items-center" >
          <video 
            className=' h-screen w-full fixed z-0' 
            src={videoBack} 
            autoPlay 
            loop />
            <Home 
              ref={username}
              onStart={handleStart}/> 
        </div>

        }
            
    </header>
    <main>
      {getStart &&
        <div className="h-screen w-full flex flex-col justify-center" >
          <video className=' h-screen w-full fixed z-0' src={videoBack} autoPlay loop />
          <Game onStart={handleStart} username={getStart}/>
        </div>
        }
    </main>
      
   
    </>
  )
}

export default App
