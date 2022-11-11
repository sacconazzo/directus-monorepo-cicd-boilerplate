module.exports = {
    id: 'auctions',
    handler: function registerEndpoint(router, { services, exceptions, logger }) {
        const { ItemsService } = services;
        const { ServiceUnavailableException } = exceptions;

        router.post('/register', async (req, res, next) => {
            try {
                const item = new ItemsService('directus_users', {
                    schema: req.schema,
                    accountability: { admin: true },
                });

                const user = await item.readByQuery({
                    filter: {
                        email: req.body.email,
                        status: 'draft',
                    },
                });

                res.json({ user });

                try {
                    const awsService = new AWSService();
                    await awsService.sendSMS('OTP: ' + req.body.otp, req.body.telephone, 'DeAngelis');
                } catch (e) {
                    logger.error(e);
                }
            } catch (error) {
                return next(new ServiceUnavailableException(error.message || error[0].message));
            }
        });
    },
};
