import { Request, Response } from "express";
import { LoginAuthDto } from "../../domain/dtos/auth/login.auth.dto";
import { json } from "stream/consumers";

export class AuthController{

    // DI
    constructor(){  }

    register = (req:Request, res: Response) => {
        return res.json({message:"register"});
    }

    login = (req:Request, res: Response) => {
        const [ error, loginAuthDto ] = LoginAuthDto.login(req.body);
        if(error) return res.status(400).json({ error });

        return res.json({loginAuthDto})
    }
}