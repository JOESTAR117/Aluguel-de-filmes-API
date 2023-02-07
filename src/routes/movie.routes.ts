import { Router } from 'express'
import { CreateMovieController } from '../modules/movies/useCases/createMovie/CreateMovieController'
import { GetMoviesByReleaseDateController } from '../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController'
import { CreateMovieRentController } from '../modules/moviesRent/createMovieRent/CreateMovieRentController'

const createMovieController = new CreateMovieController()

const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController()

const createMovieRentController = new CreateMovieRentController()

const movieRoutes = Router()

movieRoutes.post('/register', createMovieController.handle)

movieRoutes.get('/release', getMoviesByReleaseDateController.handle)

movieRoutes.post('/rent', createMovieRentController.handle)

export { movieRoutes }
