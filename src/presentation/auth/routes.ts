import { Router } from "express";
import { AuthController } from "./constroller";

export class AuthRoutes{


    static get routes(): Router{

        const routes = Router();
        const controller = new AuthController();

        // api/login
        routes.post("/register", controller.register);
        routes.post("/login", controller.login);

        return routes;
    }
}