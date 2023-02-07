import { Router } from 'express'
import { userRoutes } from './user.routes'
import { movieRoutes } from './movie.routes'

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/movies', movieRoutes)

export { routes }
