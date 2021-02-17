import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import fs from "fs";
import App from "../src/App";

const app = express();
const PORT = 9000;

const router = express.Router();

const serverRender = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`));
    });
}
router.use('^/$', serverRender);
router.use(express.static(path.resolve(__dirname, '..', 'build'), {maxAge:30}));
app.use(router);
app.listen(PORT, ()=>{console.log(`server running on PORT ${PORT}`)});