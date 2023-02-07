import { Router } from 'express'
import { userRoutes } from './user.router'

const routes = Router()

routes.use('/register', userRoutes)

export { routes }
