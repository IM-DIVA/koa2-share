// ctx是挂载的全局对象
// 当处在洋葱模型中的时候，可以被其他中间件所取到
const pv = (ctx) => {
    ctx.session.count++
    global.console.log(`pv: ${ctx.path}`);
}

module.exports = () => {
    return async (ctx, next) => {
        pv(ctx)
        // 当前的中间件处理完成后
        // 请交给下一个中间件处理
        await next()
    }
}