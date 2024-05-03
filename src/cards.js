import Mochi from './assets/game/cards/mochi.jpeg'
import Hosomaki from './assets/game/cards/hosomaki.jpeg'
import SoiaBacchette from './assets/game/cards/soia-bacchette.jpeg'
import Nigiri from './assets/game/cards/nigiri.jpeg'
import Gambero from './assets/game/cards/gambero.jpeg'
import Onigiri from './assets/game/cards/onigiri.jpeg'

const Cards= [
    {
        id:1,
        img: Mochi,
        matched: false,
        title: 'Mochi',
    },
    {
        id:2,
        img: Mochi,
        matched: false,
        title: 'Mochi',
    },
    {
        id:3,
        img: Hosomaki,
        matched: false,
        title: 'Hosomaki',
    },
    {
        id:4,
        img: Hosomaki,
        matched: false,
        title: 'Hosomaki',
    },
    {
        id:5,
        img: SoiaBacchette,
        matched: false,
        title: 'Soia & Bacchette',
    },
    {
        id:6,
        img: SoiaBacchette,
        matched: false,
        title: 'Soia & Bacchette',
    },
    {
        id:7,
        img: Nigiri,
        matched: false,
        title: 'Nigiri',
    },
    {
        id:8,
        img: Nigiri,
        matched: false,
        title: 'Nigiri',
    },
    {
        id:9,
        img: Gambero,
        matched: false,
        title: 'Gambero',
    },
    {
        id:10,
        img: Gambero,
        matched: false,
        title: 'Gambero',
    },
    {
        id:11,
        img: Onigiri,
        matched: false,
        title: 'Onigiri',
    },
    {
        id:12,
        img: Onigiri,
        matched: false,
        title: 'Onigiri',
    },
]

export default Cards;

export function shuffleCards(){
    return Cards.sort(()=> Math.random()-0.5);
}