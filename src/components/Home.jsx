import { forwardRef } from 'react'
import './home.css'
import Button from './Button.jsx'

const Home= forwardRef(function Home({onStart}, ref){
    return (
        <div className="w-96 z-10 h-80 flex flex-col justify-around items-center">
            <p className="text-black text-6xl text-center">
                <span className="">MEMO</span>
                <span className="secondary-text">SHI</span>
            </p>
            <div className="flex flex-col items-center">
                <label className="secondary-text text-2xl">User</label>
                <input 
                    ref={ref}
                    className=" rounded-lg border-stone-900 border outline-none px-2 py-1" type="text" />
            </div>
            <div className='h-10 change-text'>
                <Button onFunction={onStart} text= 'Play' />
            </div>
        </div>
    )
})

export default Home;