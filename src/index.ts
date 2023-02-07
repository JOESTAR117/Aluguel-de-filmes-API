import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { AppError } from './errors/AppError'

const app = express()

app.use(express.json())
app.use(routes)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        })
    }
    return res.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
    })
})

export default app
