const uuid = require('uuid');

const access = JSON.parse('[{"id":"43511ad4-37ba-4433-856f-f4dc53053846","role":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84","user":null,"policy":"f1eb9d5a-699e-4a6c-8cdb-d9a194eec728","sort":1}]');
access.forEach(p => {
    p.id = uuid.v4();
});

module.exports = {
    up: async knex => {
        const role = 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84';
        await knex('directus_access')
            .delete()
            .where('role', role !== 'null' ? role : null);
        return access.length ? knex('directus_access').insert(access) : true;
    },

    down: async knex => true,
};
