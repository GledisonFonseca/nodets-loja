import{Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Clothe } from "../models/clothe";

export const home = (req: Request, res: Response) => {
    let list = Clothe.getAll();

    res.render("pages/page",{
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpg",
        },
list,
    });
};

export const vestidos = (req: Request, res: Response) => {
    let list = Clothe.getFromType('vestidos');
    res.render("pages/page",{
        menu: createMenuObject('vestido'),
        banner: {
            title: "Vestidos",
            background: "bvestidos.jpg",
        },
        list,
    });
};

export const sapatos = (req: Request, res: Response) => {
    let list = Clothe.getFromType('sapato');
    res.render("pages/page",{
        menu: createMenuObject('sapato'),
        banner: {
            title: "Sapatos",
            background: "bsapatos.jpg",
        },
        list,
    });
};

export const joias = (req: Request, res: Response) => {
    let list = Clothe.getFromType('joia');
    res.render("pages/page",{
        menu: createMenuObject('joia'),
        banner: {
            title: "Jóias",
            background: "bjoias.jpg",
        },
        list,
    });
};