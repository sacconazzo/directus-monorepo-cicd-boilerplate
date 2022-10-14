const swaggerUi = require('swagger-ui-express')
const root = require('find-root')()
const package = require(`${root}/package.json`)

module.exports = function registerEndpoint(router, { services, exceptions }) {
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

      swagger.info.title = package.name
      swagger.info.version = package.version
      swagger.info.description = package.description

      // ! edit swagger object for custom definitions
      swagger.paths['/auctions/register'] = { post: swagger.paths['/users']['post'] }

      res.json(swagger)
    } catch (error) {
      return next(new ServiceUnavailableException(error.message || error[0].message))
    }
  })
}
