const role = JSON.parse('{"id":"1F2A935B-B54F-44C8-8638-69829D5ED4CA","name":"BackOffice","icon":"home_app_logo","description":"Back Office","parent":null}');

module.exports = {
    up: async knex => {
        const [setRole] = await knex('directus_roles').select().where('id', '1F2A935B-B54F-44C8-8638-69829D5ED4CA');
        return setRole ? knex('directus_roles').update(role).where('id', '1F2A935B-B54F-44C8-8638-69829D5ED4CA') : knex('directus_roles').insert(role);
    },

    down: async knex => true,
};
