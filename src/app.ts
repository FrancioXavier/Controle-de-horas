import express, { NextFunction, Request, Response, Router } from 'express';

const app = express();
const route = Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 8080;
app.listen(PORT, () => {
    console.log('server on na porta 8080');
})