import { envs } from "./config/env";
import { Routes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async()=>{
    main();
})()

function main(){

    // levantar base de datos

    // levantar el servidor
    const server = new Server({
        port: envs.PORT,
        routes: Routes.routes,
    });

    server.start();
}