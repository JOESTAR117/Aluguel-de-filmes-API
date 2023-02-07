import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../prisma/client'
import { CreateMovieRentDTO } from '../dto/CreateMovieRendDTO'

export class CreateMovieRentUseCase {
    async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId,
            },
        })

        if (!movieExists) {
            throw new AppError('Movie does not exists!')
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId,
            },
        })

        if (movieAlreadyRented) {
            throw new AppError('Movie already rented!')
        }

        const useExists = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })

        if (!useExists) {
            throw new AppError('User does not exists!')
        }

        await prisma.movieRent.create({
            data: {
                movieId,
                userId,
            },
        })
    }
}
