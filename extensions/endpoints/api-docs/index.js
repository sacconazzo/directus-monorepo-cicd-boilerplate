const swaggerUi = require('swagger-ui-express')

module.exports = function registerEndpoint(router, { services, exceptions }) {
  // const { ForbiddenException } = exceptions

  //   router.use((req, res, next) => {
  //     if (!req.accountability.user) {
  //       throw new ForbiddenException()
  //     } else {
  //       next()
  //     }
  //   })

  const { ServiceUnavailableException } = exceptions
  const { SpecificationService } = services

  const options = {
    swaggerOptions: {
      url: '/api-docs/oas',
    },
  }

  router.use('/', swaggerUi.serve)
  router.get('/', swaggerUi.setup({}, options))

  router.get('/oas', async (req, res, next) => {
    try {
      const service = new SpecificationService({
        accountability: { admin: true }, // null or accountability.admin = true needed
        schema: req.schema,
      })

      const swagger = await service.oas.generate()

      // ! edit swagger object for custom definitions
      swagger.info.title = swagger.info.description = 'DeAngelis Auctions API'

      swagger.paths['/auctions/register'] = { post: swagger.paths['/users']['post'] }

      res.json(swagger)
    } catch (error) {
      return next(new ServiceUnavailableException(error.message || error[0].message))
    }
  })
}
