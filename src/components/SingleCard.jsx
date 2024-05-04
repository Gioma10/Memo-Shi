import Card from '../assets/game/retro-card.jpeg'
import './single-card.css'

export default function SingleCard({onSelect, card, flip, disabled}){

    // let cardClass= 'absolute w-full h-full rounded-md top-0'
    let btnClass= 'border-2 shadow-md border-black rounded-md w-48 h-48 relative btn-memo'


    if(flip){
        btnClass += ' active'
    }

    return (
        <button 
            className={btnClass}
            onClick={()=>onSelect(card)} 
            disabled= {disabled}>
            <img className='front rounded-md style' src={Card}  alt="" />
            <img className='back rounded-md' src={card.img}  alt="" />
        </button>
    )
}