const Countries = require('../repositories/countries')
const Validation = require('../services/validation')

const create = async (ctx, next) => {
    try {
        Validation.createCountry(ctx)

        await Countries.create()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const getList = async (ctx, next) => {
    try {
        const countries = await Countries.getCountries()

        ctx.successResponse(countries)
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const update = async (ctx, next) => {
    try {
        Validation.updateCountry(ctx)
        await Countries.update()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const remove = async (ctx, next) => {
    try {
        Validation.removeCountry(ctx)
        await Countries.remove()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

module.exports = {
    create,
    getList,
    update,
    remove,
}
