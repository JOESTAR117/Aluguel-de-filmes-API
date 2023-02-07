import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    async handle(req:Request, res:Response){
        const {name,email} = req.body

        const createUserUseCases = new CreateUserUseCase()

        const result = await createUserUseCases.execute({name, email})

        return res.status(201).json({message: `User created successfully: ${result}`})

    }
}