const role = JSON.parse('{"id":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84","name":"Auctioners","icon":"account_box","description":"User subscribed","parent":null}');

module.exports = {
    up: async knex => {
        const [setRole] = await knex('directus_roles').select().where('id', 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84');
        return setRole ? knex('directus_roles').update(role).where('id', 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84') : knex('directus_roles').insert(role);
    },

    down: async knex => true,
};
