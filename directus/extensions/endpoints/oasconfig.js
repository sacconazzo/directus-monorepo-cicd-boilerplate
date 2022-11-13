module.exports = {
    docsPath: 'api-docs',
    tags: [
        {
            name: 'Auctions',
            description: 'CustomTag',
        },
    ],
    paths: {
        '/auctions/test': {
            post: {
                summary: 'Test',
                description: 'Test',
                tags: ['Users', 'Auctions'],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                required: ['email'],
                                properties: {
                                    email: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Ok',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: 'Unauthorized',
                        content: {},
                    },
                    403: {
                        description: 'Forbidden',
                        content: {},
                    },
                    404: {
                        description: 'Not Found',
                        content: {},
                    },
                    422: {
                        description: 'Unprocessable Entity',
                        content: {},
                    },
                    500: {
                        description: 'Server Error',
                        content: {},
                    },
                },
            },
        },
    },
};
