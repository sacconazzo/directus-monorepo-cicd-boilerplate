import { defineEndpoint } from '@directus/extensions-sdk';
const swaggerUi = require('swagger-ui-express');
const { findWorkspaceDir } = require('@pnpm/find-workspace-dir');

export default {
    id: 'api-docs',
    handler: defineEndpoint((router, { services, exceptions }) => {
        const { ServiceUnavailableException } = exceptions;
        const { SpecificationService } = services;

        const options = {
            swaggerOptions: {
                url: '/api-docs/oas',
            },
        };

        router.use('/', swaggerUi.serve);
        router.get('/', swaggerUi.setup({}, options));

        router.get('/oas', async (req: any, res: any, next: any) => {
            try {
                const service = new SpecificationService({
                    accountability: { admin: true }, // null or accountability.admin = true needed
                    schema: req.schema,
                });

                const swagger = await service.oas.generate();

                const pkg = require(`${await findWorkspaceDir('.')}/package.json`);

                swagger.info.title = pkg.name;
                swagger.info.version = pkg.version;
                swagger.info.description = pkg.description;

                // ! edit swagger object for custom definitions
                swagger.paths['/auctions/register'] = { post: swagger.paths['/users']['post'] };

                res.json(swagger);
            } catch (error: any) {
                return next(new ServiceUnavailableException(error.message || error[0].message));
            }
        });
    }),
};
