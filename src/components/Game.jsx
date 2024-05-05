import { useEffect, useState } from 'react';

import CARDS from '../cards.js';
import Button from './Button.jsx';
import SingleCard from './SingleCard.jsx';
import { shuffleCards } from '../cards.js';
import GameOver from './GameOver.jsx';

const initialCards= shuffleCards(CARDS)
let win= [];
export default function Game({username, onHome}){
    const [gameCards, setGameCards]= useState(initialCards);
    const [chance, setChance]= useState(5)
    const [choiceOne, setChoiceOne]= useState(null);
    const [choiceTwo, setChoiceTwo]= useState(null);
    const [disabled, setDisabled]= useState(false);
    const [gameOver, setGameOver]= useState(false)
    
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
        resetChoice();
        setGameOver(false)
    }

    function handleSelect(card){
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // console.log( choiceOne, choiceTwo);
    
    const youWin= gameCards.filter((card)=> card.matched)

    console.log('YOUWIN', youWin)
    // console.log('SHUFFLE', gameCards);
    // console.log('CHANCE', chance);
    
    let gameOverText= '';
    let remainingChance;
    if(youWin.length === 12){
        gameOverText= 'Hai vinto';
        remainingChance= chance;
        setTimeout(()=>{
            setGameOver(true)
        },1000)
    }else if(chance === 0){
        gameOverText= 'Hai Perso';
        remainingChance= chance;
        setTimeout(()=>{
            setGameOver(true)
        },1000)
    }

    // console.log('choiceOne ',choiceOne)
    // console.log('status game', gameOver());
    
    return (
        <>
            {gameOver &&  
                (<GameOver 
                    text={gameOverText} 
                    onBack={onHome} 
                    onRestart={handleRestart}
                    remainingChance={remainingChance}/>)}
            {!gameOver && (
                <>
                    <div className=' flex justify-between items-center'>
                        <div className='flex justify-end w-full gap-10 h-1/4'>
                            <Button onFunction={onHome}  text='Back'/>
                        </div>
                        <div className="z-10 w-full h-36 gap-4 flex justify-center items-center">
                            <p className="border border-black py-2 rounded-md px-5 text-2xl">
                                    User: 
                                    <span className='secondary-text ps-5'>{username}</span>
                            </p>
                            <p className="border border-black py-2 rounded-md px-5 text-2xl">
                                Chance:
                                <span className='secondary-text ps-5'>{chance}</span>
                            </p>
                        </div>
                        <div className='flex justify-start w-full gap-10  h-1/4'>
                            <Button  text='Restart' onFunction={handleRestart}/>
                        </div>
                    </div>
                    <div className='flex justify-center z-10 w-full'>
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