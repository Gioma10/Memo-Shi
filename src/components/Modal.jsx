export default function Modal({text}){
    return (
        <dialog open>
            <p>{text}</p>
            <form method="dialog">
                <button>chiudi</button>
            </form>
        </dialog>
    )
}