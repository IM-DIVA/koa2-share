const m3 = (ctx) => {
    global.console.log(`m3 ing`);
}

module.exports = () => {
    return async (ctx, next) => {
        global.console.log('m3 start')
        m3(ctx)
        await next()
        global.console.log('m3 end')
    }
}