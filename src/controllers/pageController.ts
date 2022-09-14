import{Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render("pages/page",{
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpg",
        }
    });
};

export const vestidos = (req: Request, res: Response) => {
    res.render("pages/page",{
        banner: {
            title: "Vestidos",
            background: "bvestidos.jpg",
        }
    });
};

export const sapatos = (req: Request, res: Response) => {
    res.render("pages/page",{
        banner: {
            title: "Sapatos",
            background: "bsapatos.jpg",
        }
    });
};

export const joias = (req: Request, res: Response) => {
    res.render("pages/page",{
        banner: {
            title: "Jóias",
            background: "bjoias.jpg",
        }
    });
};