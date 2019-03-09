const router = require('koa-router')()

router.get('/', async (ctx, next) => {
	ctx.cookies.set('democookie', Math.random())
	await ctx.render('index', {
		title: 'Hello Koa 2!'
	})
})

router.get('/string', async (ctx, next) => {
	ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
	ctx.body = {
		title: 'koa2 json',
		cookie: ctx.cookies.get('democookie')
	}
})

router.get('/testAsync', async (ctx, next) => {
	global.console.log(`start a: ${new Date().getTime()}`);
	const a = await new Promise((resolve, reject) => {
		setTimeout(() => {
			global.console.log(`async a: ${new Date().getTime()}`);
			resolve('a');
		}, 1000);
	})
	const b = await 'bb';
	const c = await Promise.resolve('cc')
	ctx.body = {
		a,
		b,
		c
	}
})

module.exports = router
