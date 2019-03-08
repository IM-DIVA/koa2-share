const m1 = (ctx) => {
    global.console.log(`m1 ing`);
}

module.exports = () => {
    return async (ctx, next) => {
        global.console.log('m1 start')
        m1(ctx)
        await next()
        global.console.log('m1 end')
    }
}