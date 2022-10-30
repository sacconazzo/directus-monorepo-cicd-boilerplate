module.exports = function registerEndpoint(router, { services, exceptions }) {
  const { ItemsService } = services
  const { ServiceUnavailableException } = exceptions

  router.post('/register', async (req, res, next) => {
    try {
      const item = new ItemsService('directus_users', {
        schema: req.schema,
        accountability: req.accountability,
      })
      const created = await item.createOne(req.body)

      res.json({ user_id: created })
    } catch (error) {
      return next(new ServiceUnavailableException(error.message || error[0]))
    }
  })
}
