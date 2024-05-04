import Button from "./Button"

export default function GameOver({text, onRestart, onBack, remainingChance}){
    return (
        <div className='h-64 w-full flex flex-col justify-around items-center z-10'>
                <p className=" text-8xl">{text}</p>
                <div className="flex justify-center gap-4 items-center">
                    <p className=" text-xl">Remaining chance:</p>  
                    <span className="secondary-text text-2xl">{remainingChance}</span>              
                </div>
                
                <div className='flex justify-center gap-10 w-10  h-10'>
                            <Button  text='Restart' onFunction={onRestart}/>
                            <Button  text='Home' onFunction={onBack}/>
                </div>
        </div>
    )
}