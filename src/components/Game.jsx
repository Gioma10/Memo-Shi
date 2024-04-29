export default function Game({username}){
    return (
        <>
            <div className="w-full h-52 bg-contain bg-no-repeat bg-center bg- bg-[url('./assets/game/name-target.png')] flex justify-center items-center">
                <p className=" text-2xl">{username}</p>
            </div>
            
        </>
    )
}