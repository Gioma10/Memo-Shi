import { useEffect, useState } from 'react';

import CARDS from '../cards.js';
import Button from './Button.jsx';
import SingleCard from './SingleCard.jsx';
import { shuffleCards } from '../cards.js';
import GameOver from './GameOver.jsx';

const initialCards= shuffleCards(CARDS)

export default function Game({username, onStart}){
    const [gameCards, setGameCards]= useState(initialCards);
    const [chance, setChance]= useState(5)
    const [choiceOne, setChoiceOne]= useState(null);
    const [choiceTwo, setChoiceTwo]= useState(null);
    const [disabled, setDisabled]= useState(false)
    
    useEffect(()=>{
        if(choiceOne && choiceTwo){
            setDisabled(true);
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
                setTimeout(()=>resetChoice(),1000)
                setTimeout(()=>setChance(prevChance => prevChance - 1),1000);
            }
        }
    }, [choiceOne, choiceTwo])

    const resetChoice= ()=>{
        setChoiceOne(null)
        setChoiceTwo(null)
        setDisabled(false)
    }

    // console.log(gameCards);
    
    function handleRestart(){
        setGameCards(prevCards => {
            return shuffleCards(prevCards)
        })
        setChance(5);
    }

    function handleSelect(card){

        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
        
        
    }

    // console.log( choiceOne, choiceTwo);
    
    const youWin= gameCards.filter((card)=> card.matched)

    // console.log('YOUWIN', youWin)
    // console.log('SHUFFLE', gameCards);
    // console.log('CHANCE', chance);
    
    const gameOver = ()=>{
        if(youWin.length === 12 || chance === 0){
            return true
        }else{
            return false;
        }
    }
    

    // console.log('choiceOne ',choiceOne)
    // console.log('status game', gameOver());
    
    return (
        <>
            {gameOver() &&  (<GameOver onBack={onStart} onRestart={handleRestart}/>)}
            {!gameOver() && (
                <>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-end w-full gap-10 h-1/4'>
                            <Button onFunction={onStart}  text='Back'/>
                        </div>
                        <div className="z-10 w-full h-36 gap-4 flex justify-center flex-col items-center">
                            <p className="border border-black rounded-md px-5 text-2xl">
                                    User: 
                                    <span className='secondary-text ps-5'>{username}</span>
                            </p>
                            <p className=" text-2xl">
                                Chance:
                                <span className='secondary-text ps-5'>{chance}</span>
                            </p>
                        </div>
                        <div className='flex justify-start w-full gap-10  h-1/4'>
                            <Button  text='Restart' onFunction={handleRestart}/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className=' w-2/3 grid grid-cols-4 gap-4 '>
                            
                            {gameCards.map((card)=>{
                                let dis= false;
                                if(choiceOne){
                                     dis = choiceOne.id === card.id
                                }
                                return(
                                    <SingleCard 
                                    key={card.id}
                                    card={card}
                                    flip= {choiceOne === card || choiceTwo === card || card.matched}
                                    onSelect={handleSelect}
                                    disabled={ disabled || dis  || card.matched }
                                        />
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
            

            
        </>
    )
}