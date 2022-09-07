// const axios = require('axios')

module.exports = function registerHook(events, { services, exceptions }) {
  const { MailService } = services
  const { ServiceUnavailableException, ForbiddenException } = exceptions

  events.action('users.create', async function (input, { schema }) {
    const mailService = new MailService({ schema })

    try {
      // await axios.post('https://example.com/items', input)
      await mailService.send({
        to: input.payload.email || process.env.ADMIN_EMAIL,
        template: {
          name: 'registered-user',
          data: input.payload,
        },
      })
    } catch (error) {
      throw new ServiceUnavailableException(error)
    }
  })
}
