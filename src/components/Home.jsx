import './home.css'

export default function Home({onStart}){
    return (
        <div className="w-96 h-64 flex flex-col justify-between items-center">
            <p className="text-black text-6xl text-center">
                <span className="">MEMO</span>
                <span className="secondary-text">SHI</span>
            </p>
            <div className="flex flex-col items-center">
                <label className="secondary-text text-2xl">User</label>
                <input className=" rounded-lg border-stone-900 border outline-none px-2 py-1" type="text" />
            </div>
            <button 
                id="btn-wave"
                className="bg-black rounded-md px-10 py-2 relative"
                onClick={onStart}>
                <span className='span-wave'>Play</span>
                <i className="w-full h-full wave"></i>
            </button>
        </div>
    )
}