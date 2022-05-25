
import { dobro, somar, temperatura, media, numeroMaior, primaria, cinema, frequencia } from './services.js'
import { Router } from 'express'
const server = Router();

server.get('/somar', (req, resp) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);

        const x = somar(a, b);

        resp.send({
            soma: x
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }

})

server.post('/somar', (req, resp) => {
    try {
        const { valores: { a, b } } = req.body
        const x = somar(a, b);

        resp.send({
            soma: x
        })
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

})

server.get('/dobro/:numero', (req, resp) => {
    try {
        const Numero = Number(req.params.numero);
        const x = dobro(Numero);

        resp.send({
            dobro: x
        })
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

})

server.post('/temperatura', (req, resp) => {
    try {
        const a = req.body.a;
        const x = temperatura(a);

        resp.send({
            temperatura: x
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.post('/media', (req, resp) => {
    try {
        const { valores: { a, b, c } } = req.body
        const x = media(a, b, c);

        resp.send({
            media: x
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.post('/maior', (req, resp) => {
    try {
        const a = req.body;
        const x = numeroMaior(a);

        resp.send({
            maior: x
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.get('/primaria/:cor', (req, resp) => {
    try {
        const { cor } = req.params;
        const corPrima = primaria(cor);
        resp.send({
            primaria: corPrima
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/ingresso', (req, resp) => {
    try{
        const { inteira, meia, dia, naci } = req.body;
        const total = cinema (inteira, meia, dia, naci); 
        resp.send({
            total: total
        })
    }catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.get('/frequencia/:texto/:caract', (req, resp) => {
    try{
        const { texto, caract } = req.params;
        const x = frequencia (texto, caract);
        resp.send({
            freq: x 
        })

    }catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

export default server;