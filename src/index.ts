import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import config from "./configuration/Config" 

// create express app
const app = express();
app.use(bodyParser.json());

// register express routes from defined application routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});


createConnection().then(async connection => {

    
    // setup express app here
    // ...

    // start express server
    app.listen(config.port, '0.0.0.0', async () => {
        console.log(`Api initialize in port ${config.port}`);
        
        try {
            await createConnection();
            console.log('Database conectado')
        } catch (error) {
            console.error('Database not connected', error)
        }
    }); 

 
    

}).catch(error => console.log(error));
