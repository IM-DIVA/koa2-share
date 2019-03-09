const router = require('koa-router')()

const Person = require('../dbs/models/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/addPerson', async (ctx, next) => {
  // post 用 body，get 用 query
  const person = new Person({
    name: ctx.request.query.name,
    age: ctx.request.query.age
  })
  let code
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code
  }
})

router.get('/getPerson', async (ctx) => {
  const result = await Person.findOne({
    name: ctx.request.query.name
  })
  // 查询集合
  const results = await Person.find({
    name: ctx.request.query.name
  })
  ctx.body = {
    code: 0,
    result,
    results
  }
})

router.get('/updatePerson', async (ctx) => {
  const result = await Person.where({
    name: ctx.request.query.name
  }).update({
    age: ctx.request.query.age
  })
  ctx.body = {
    code: 0
  }
})

router.get('/removePerson', async (ctx) => {
  const result = await Person.where({
    name: ctx.request.query.name
  }).remove()
  ctx.body = {
    code: 0
  }
})

module.exports = router
