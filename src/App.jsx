import { useRef, useState } from 'react'
import Home from './components/Home.jsx'
import Game from './components/Game.jsx'
import Back from './assets/game/back.png'

function App() {
const[getStart, setGetStart]= useState()
const username= useRef()

function handleStart(){
  setGetStart(username.current.value)
}

  return (
    <>
    <header className=' h-full w-full relative'>
      {!getStart &&
        <div className="h-screen w-full bg-[url('./assets/home/backgroundSign.jpeg')] bg-center bg-cover flex justify-center items-center" >
          <Home 
            ref={username}
            onStart={handleStart}/> 
        </div>}

      {getStart &&
        <div className="h-screen w-full bg-[url('./assets/game/backgroundGame.jpeg')] bg-center bg-cover" >
          <Game username={getStart}/>
        </div>
        }
    </header>
    </>
  )
}

export default App
