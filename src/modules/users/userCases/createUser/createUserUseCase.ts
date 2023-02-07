import { User } from '@prisma/client'
import { prisma } from '@src/prisma/client'
import { CreateUserDTO } from '../../dtos/createUserDTO'

export class CreateUserUseCase {
    async execute({ name, email }: CreateUserDTO): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        if (userAlreadyExists) {
            //
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
            },
        })

        return user
    }
}
