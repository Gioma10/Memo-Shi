import Button from "./Button"

export default function GameOver({text, onRestart, onBack}){
    return (
        <div className='h-full w-full bg-black flex justify-center items-center'>
            <div className="h-full">
                <p >{text}</p>
                <div className='flex justify-start w-full gap-10  h-1/4'>
                            <Button  text='Restart' onFunction={onRestart}/>
                            <Button  text='Restart' onFunction={onBack}/>
                </div>
            </div>
            
        </div>
    )
}