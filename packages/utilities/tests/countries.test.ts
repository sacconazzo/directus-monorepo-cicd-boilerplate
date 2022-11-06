import { countries } from '../src/index';

describe('countries', () => {
    afterAll(async () => {
        //
    });

    beforeAll(async () => {
        //
    });

    describe('list', () => {
        test('shoud be completed', async () => {
            expect(Object.keys(countries).length).toBe(246);
        });
    });
});
