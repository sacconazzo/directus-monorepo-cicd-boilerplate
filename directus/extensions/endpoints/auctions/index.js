const { validate } = require('directus-extension-api-docs');

module.exports = {
    id: 'auctions',
    handler: function registerEndpoint(router, { services, exceptions, logger }) {
        const { ItemsService } = services;
        const { ServiceUnavailableException } = exceptions;

        validate(router, ['/auctions/test']);

        router.post('/test', async (req, res, next) => {
            try {
                const item = new ItemsService('directus_users', {
                    schema: req.schema,
                    accountability: { admin: true },
                });

                const [user] = await item.readByQuery({
                    filter: {
                        email: req.body.email,
                    },
                });

                res.json({ id: user?.id });
            } catch (error) {
                return next(new ServiceUnavailableException(error.message || error[0].message));
            }
        });
    },
};
