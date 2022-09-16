import{Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
export const home = (req: Request, res: Response) => {
    res.render("pages/page",{
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpg",
        }
    });
};

export const vestidos = (req: Request, res: Response) => {
    res.render("pages/page",{
        menu: createMenuObject('vestido'),
        banner: {
            title: "Vestidos",
            background: "bvestidos.jpg",
        }
    });
};

export const sapatos = (req: Request, res: Response) => {
    res.render("pages/page",{
        menu: createMenuObject('sapato'),
        banner: {
            title: "Sapatos",
            background: "bsapatos.jpg",
        }
    });
};

export const joias = (req: Request, res: Response) => {
    res.render("pages/page",{
        menu: createMenuObject('joia'),
        banner: {
            title: "Jóias",
            background: "bjoias.jpg",
        }
    });
};