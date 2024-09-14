const uuid = require('uuid');

const access = JSON.parse('[{"id":"96fc32b3-fe57-41ba-b62b-1682db54a084","role":"1F2A935B-B54F-44C8-8638-69829D5ED4CA","user":null,"policy":"07adb3e8-ee1e-4b7c-b8b8-a03399ac3c57","sort":null}]');
access.forEach(p => {
    p.id = uuid.v4();
});

module.exports = {
    up: async knex => {
        const role = '1F2A935B-B54F-44C8-8638-69829D5ED4CA';
        await knex('directus_access')
            .delete()
            .where('role', role !== 'null' ? role : null);
        return access.length ? knex('directus_access').insert(access) : true;
    },

    down: async knex => true,
};
