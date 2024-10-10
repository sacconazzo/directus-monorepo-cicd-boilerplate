const { validate } = require('directus-extension-api-docs');

export default async (router, { services, getSchema }) => {
    const { ItemsService } = services;

    const schema = await getSchema();
    await validate(router, services, schema);

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

            res.json({ id: user?.id || null });
        } catch (error) {
            return next(new Error(error.message || error[0].message));
        }
    });
};
