import express, { Router } from "express";

interface Options{
    routes: Router;
    port: number;
} 

export class Server{
    private app = express();
    private routes;
    private port;
    
    constructor(
        private options: Options,
    ){
        const { port, routes } = options;
        this.routes = routes;
        this.port = port;
    }

    start(){
        // Middlewares
        this.app.use( express.json() );
        this.app.use( express.urlencoded({extended: true}) );
        
        // Routes
        this.app.use( this.routes )

        // Server
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        })

    }
}