import CARDS from '../cards.js';
import './game.css'
import Card from '../assets/game/retro-card.jpeg'
import Mochi from '../assets/game/cards/mochi.jpeg'
import { useState } from 'react';

function shuffleCards(){
    return CARDS.sort(()=> Math.random()-0.5);
}
const initialCards= shuffleCards()


export default function Game({username}){
    const [isFlip, setIsFlip]= useState(false);

    let backClass= 'absolute hidden w-full h-full rounded-md top-0 col-start-2'
    let frontClass= 'absolute w-full h-full rounded-md top-0 col-start-2'
    let btnClass= 'border-2 shadow-md border-black rounded-md w-40 h-40 relative '

    
    function handleSpinCard(){
        setIsFlip(true)
    }

    return (
        <>
            <div className="w-full h-52 bg-contain bg-no-repeat bg-center bg- bg-[url('./assets/game/name-target.png')] flex justify-center items-center">
                <p className=" text-2xl">{username}</p>
            </div>
            <div className='w-full grid grid-cols-4 myborder'>
                <button 
                    className={btnClass}
                    onClick={handleSpinCard}>
                    <img className={!isFlip ? frontClass : backClass} src={Card}  alt="" />
                    <div>
                        <img className={isFlip ? frontClass : backClass} src={Mochi} alt="" />
                    </div>
                </button>
                <button 
                    className={btnClass}
                    onClick={handleSpinCard}>
                    <img className={!isFlip ? frontClass : backClass} src={Card}  alt="" />
                    <div>
                        <img className={isFlip ? frontClass : backClass} src={Mochi} alt="" />
                    </div>
                </button>
     
            </div>
            <div>
                Buttons...
            </div>

            
        </>
    )
}