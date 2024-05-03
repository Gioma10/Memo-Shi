import { useEffect, useState } from 'react';

import Button from './Button.jsx';
import SingleCard from './SingleCard.jsx';
import { shuffleCards } from '../cards.js';
import Modal from './Modal.jsx';

const initialCards= shuffleCards()

export default function Game({username, onStart}){
    const [gameCards, setGameCards]= useState(initialCards);
    const [chance, setChance]= useState(5)
    const [choiceOne, setChoiceOne]= useState(null);
    const [choiceTwo, setChoiceTwo]= useState(null);
    
    useEffect(()=>{
        if(choiceOne && choiceTwo){
            if(choiceOne.title === choiceTwo.title){
                console.log('sono uguali');
                setGameCards((prevCards)=>{
                    return prevCards.map(card =>{
                        if(card.title === choiceOne.title){
                            return {...card, matched: true}
                        }else{
                            return card;
                        }
                    })
                })
                resetChoice()
            }else{
                console.log('sono diversi');
                setChance(prevChance => prevChance - 1);
                setTimeout(()=>resetChoice(),1000)
            }
        }
    }, [choiceOne, choiceTwo])

    const resetChoice= ()=>{
        setChoiceOne(null)
        setChoiceTwo(null)
    }

    // console.log(gameCards);
    
    function handleRestart(){
        setGameCards(shuffleCards)
        setChance(5);
    }

    function handleSelect(card){
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
        
    }

    console.log( choiceOne, choiceTwo);
    

    return (
        <>
            {chance === 0 ? <Modal text= 'Hai perso' /> : <Modal text='Hai vinto'/>}
            <div className='flex justify-between items-center'>
                <div className='flex justify-end w-full gap-10 h-1/4'>
                    <Button onFunction={onStart}  text='Back'/>
                </div>
                <div className="w-full h-36 bg-contain bg-no-repeat bg-center bg- bg-[url('./assets/game/name-target.png')] flex justify-center items-center">
                    <p className=" text-2xl">{username}</p>
                </div>
                <div className="w-full h-36 bg-contain bg-no-repeat bg-center bg- bg-[url('./assets/game/name-target.png')] flex justify-center items-center">
                    <p className=" text-2xl">{chance}</p>
                </div>
                <div className='flex justify-start w-full gap-10  h-1/4'>
                    <Button  text='Restart' onFunction={handleRestart}/>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' w-2/3 grid grid-cols-4 gap-4 '>
                    
                    {gameCards.map((card)=>{
                        return(
                            <SingleCard 
                                key={card.id}
                                card={card}
                                flip= {choiceOne === card || choiceTwo === card || card.matched}
                                onSelect={handleSelect}
                                />
                        )
                    })}
                </div>
            </div>
            

            
        </>
    )
}