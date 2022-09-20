import { vestidos } from "../controllers/pageController";

type ClotheType = 'vestidos' | 'sapato' | 'joia';

type Clothe ={
    type: ClotheType,
    image:string,
    name: string,
    color: string,
}

const data: Clothe[]= [
{
 type: 'vestidos', 
 image: 'foto01.jpg',
 name: 'Vestido Midi',
 color: 'rosê', 
},
{
    type: 'vestidos', 
    image: 'foto02.jpg',
    name: 'Vestido Midi',
    color: 'verde', 
   },
   {
    type: 'vestidos', 
    image: 'foto03.jpg',
    name: 'Vestido Midi',
    color: 'mescla', 
   },
   {
    type: 'joia', 
    image: 'foto04.jpg',
    name: 'colar perolas',
    color: 'Branco e Preto', 
   },
   {
    type: 'joia', 
    image: 'foto05.jpg',
    name: 'colar trass',
    color: 'Amarelo', 
   },
   {
    type: 'joia', 
    image: 'foto06.jpg',
    name: 'colar multiplo',
    color: 'Branco', 
   },
   {
    type: 'sapato', 
    image: 'foto07.jpg',
    name: 'Sapatilha',
    color: 'Nude', 
   },
   {
    type: 'sapato', 
    image: 'foto08.jpg',
    name: 'Scarpin',
    color: 'Vermelho', 
   },
   {
    type: 'sapato', 
    image: 'foto09.jpg',
    name: 'Tenis',
    color: 'Azul', 
   },
];

export const Clothe = {

    getAll: () => {
return data;
    },

    getFromType: (type: ClotheType): Clothe[] => {
        return data.filter((item) => {
            if (item.type === type) {
                return true;
            } else {
                return false;
            }
        });
    },

getFromName:(name: string): Clothe[] => {
    return data.filter((item) => {
        if (
            item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
            ){
         return true;
        }else{
            return false;
         }
    });
    },
};

