module.exports = {
    '/public-api/users': {
        get: {
            operationId: 'fetch users',
            security: [],
            parameters: [
                {
                    in: 'query',
                    name: 'name',
                    schema: {type: 'string'}
                },
                {
                    in: 'query',
                    name: 'username',
                    schema: {type: 'string'}
                },
                {
                    in: 'query',
                    name: 'email',
                    schema: {type: 'string'}
                }
            ],
            description: 'Fetch users from jsonplaceholder',
            responses: {
                200: {
                    description: 'validate token success',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/ValidateToken'}}}
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    }
};
