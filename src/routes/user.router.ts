import { CreateUserController } from '@src/modules/users/userCases/createUser/createUserController'
import { Router } from 'express'

const createUserController = new CreateUserController()

const userRoutes = Router()

userRoutes.post('/', createUserController.handle)

export { userRoutes }
