import { useState } from 'react';

import CARDS from '../cards.js';
import Card from '../assets/game/retro-card.jpeg'

import Button from './Button.jsx';

import './game.css'

function shuffleCards(){
    return CARDS.sort(()=> Math.random()-0.5);
}
const initialCards= shuffleCards()


export default function Game({username}){
    const [isFlip, setIsFlip]= useState(null);
    const [chance, setChance]= useState(3)
    
    function handleFlipCard(index){
        setIsFlip(index)

    }

    const trueFlip= initialCards.filter((card)=> card.flip===true);
    console.log(trueFlip);
    
    if(trueFlip.length === 2){
        // console.log('si');
        if(trueFlip[0].id === trueFlip[1].id){
            console.log('giusto');
            for (let index = 0; index < initialCards.length; index++) {
                if(initialCards[index].flip === true){
                    initialCards[index].flip = undefined;
                }
            }
        }else{
            setChance(prevChance => prevChance - 1)
            for (let index = 0; index < initialCards.length; index++) {
                if(initialCards[index].flip === true){
                    initialCards[index].flip = undefined;
                }
            }   
        }   
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex justify-end w-full gap-10 h-1/4'>
                    <Button  text='Back'/>
                </div>
                <div className="w-full h-36 bg-contain bg-no-repeat bg-center bg- bg-[url('./assets/game/name-target.png')] flex justify-center items-center">
                    <p className=" text-2xl">{username}</p>
                </div>
                <div className='flex justify-start w-full gap-10  h-1/4'>
                    <Button  text='Restart'/>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' w-2/3 grid grid-cols-4 gap-4 '>
                    {initialCards.map((card, index )=>{
                        let cardClass= 'absolute w-full h-full rounded-md top-0'
                        let btnClass= 'border-2 shadow-md border-black rounded-md w-48 h-48 relative'
                
                        let image= Card;

                        if(isFlip === index){
                            card.flip= true;
                            // console.log(card);
                        }
                        if(card.flip || card.flip === undefined){
                            image = card.img
                        }

                        return (
                            <button 
                                className={btnClass}
                                onClick={()=>handleFlipCard(index)}>
                                <img className={cardClass} src={image}  alt="" />
                            </button>
                        )
                    })}
                    
                </div>
            </div>
            

            
        </>
    )
}