const uuid = require('uuid');

const access = JSON.parse('[{"id":"2b1ea134-bcde-4eee-a131-7eeeb7284ca8","role":null,"user":null,"policy":"abf8a154-5b1c-4a46-ac9c-7300570f4f17","sort":1}]');
access.forEach(p => {
    p.id = uuid.v4();
});

module.exports = {
    up: async knex => {
        const role = 'null';
        await knex('directus_access')
            .delete()
            .where('role', role !== 'null' ? role : null);
        return access.length ? knex('directus_access').insert(access) : true;
    },

    down: async knex => true,
};
