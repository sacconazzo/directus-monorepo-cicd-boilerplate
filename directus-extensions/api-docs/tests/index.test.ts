import extension from '../src/index';

describe('extension-api-docs', () => {
    afterAll(async () => {
        //
    });

    beforeAll(async () => {
        //
    });

    describe('extension', () => {
        test('shoud right id', async () => {
            expect(extension.id).toBe('api-docs');
        });
    });
});
