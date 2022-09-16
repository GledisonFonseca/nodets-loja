import { vestidos } from "../controllers/pageController";

type ClotheType = 'vestido' | 'sapato' | 'joia';

type clothe ={
    type: ClotheType,
    image:string,
    name: string,
    color: string,
}

const data: Clothe[]= [
{
 type: 'vestidos', 
 image: 'foto01.jpg',
 name: 'Vestido-Midi',
 color: 'rosê', 
}
];

export const Clothe = {

    getAll: () => {
return data,
    },
}