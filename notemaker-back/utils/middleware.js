const logger = require('./logger')

const unknownEndpoint = (request, response) => {
    response.status(404).json({ error: 'unknown endpoint' })
}
const errorHandler = (error, request, response, next) => {
    if (error.name === 'CastError') {
        return response.status(400).json({ error: 'malformatted id' })

    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token'
        })
    }
    else if (error.name === 'TokenExpiredError') {
        return response.status(401).json(
            {
                error: 'token expired'
            }
        )
    }
    logger.error(error.message)
    next(error)



}


const requestLogger = (request, response, next) => {

    logger.print(`**************************************************`)
    logger.print('METHOD:', request.method)
    logger.print('PATH:', request.path)
    logger.print(' BODY:', request.body)
    logger.print(`**************************************************`)
    next()
}



module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}