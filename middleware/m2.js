const m2 = (ctx) => {
    global.console.log(`m2 ing`);
}

module.exports = () => {
    return async (ctx, next) => {
        global.console.log('m2 start')
        m2(ctx)
        await next()
        global.console.log('m2 end')
    }
}