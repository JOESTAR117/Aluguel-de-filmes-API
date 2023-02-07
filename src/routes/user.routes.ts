import { Router } from 'express'
import { CreateUserController } from '../modules/users/userCases/createUser/createUserController'
import { GetAllUsersController } from '../modules/users/userCases/getAllUser/GetAllUsersController'

const createUserController = new CreateUserController()
const getAllUsersController = new GetAllUsersController()

const userRoutes = Router()

userRoutes.post('/register', createUserController.handle)
userRoutes.get('/', getAllUsersController.handle)

export { userRoutes }
