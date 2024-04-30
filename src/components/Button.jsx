export default function Button({onFunction, text}){
    return (
        <button 
            id="btn-wave"
            className="bg-black rounded-md px-10 py-2 w-1/4 h-full relative"
            onClick={onFunction}>
                <span className='span-wave inset-x-2 inset-y-2'>{text}</span>
                <i className="w-full h-full wave"></i>
        </button>
    )
}