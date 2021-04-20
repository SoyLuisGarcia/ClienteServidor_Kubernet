

import { Router, Request, Response } from 'express';

const router = Router();

router.post('/mensajespost', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const okreactive = true;
    res.json({
        okreactive,
        cuerpo,
        de
    });
});

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET cambio de git'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
        // mensaje: 'POST listo!'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id

    res.json({
        ok: true,
        cuerpo,
        de,
        id
        // mensaje: 'POST listo!'
    });
});

export default router;