import { forwardRef } from 'react'
import './home.css'
import Button from './Button.jsx'

const Home= forwardRef(function Home({onStart, validation}, ref){

    let inputClass= "rounded-lg outline-none px-2 py-1"
    let validationText = '';
    if(validation){
        validationText= 'Compila il campo'
        inputClass += ' bg-red-200 border border-red-500'
    }else {
        inputClass += ' border-stone-900 border'
    }

    
    return (
        <div className="w-96 z-10 h-80 flex flex-col justify-around items-center">
            <p className="text-black text-6xl text-center">
                <span className="">MEMO</span>
                <span className="secondary-text">SHI</span>
            </p>
            <div className="flex flex-col items-center">
                <label className="secondary-text text-2xl mb-1">User</label>
                <input 
                    ref={ref}
                    className={inputClass}
                    type="text"/>
                    <p className=' text-sm mt-2 text-red-300'>{validationText}</p>
            </div>
            <div className='h-10 change-text'>
                <Button onFunction={onStart} text= 'Play' />
            </div>
        </div>
    )
})

export default Home;