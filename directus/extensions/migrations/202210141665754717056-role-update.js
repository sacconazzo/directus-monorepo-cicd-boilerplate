const role = JSON.parse('{"id":"1F2A935B-B54F-44C8-8638-69829D5ED4CA","name":"BackOffice","icon":"home","description":"Back Office","ip_access":null,"enforce_tfa":0,"admin_access":0,"app_access":1}');

module.exports = {
    async up(knex) {
        const [setRole] = await knex('directus_roles').select().where('id', '1F2A935B-B54F-44C8-8638-69829D5ED4CA');
        return setRole ? knex('directus_roles').update(role).where('id', '1F2A935B-B54F-44C8-8638-69829D5ED4CA') : knex('directus_roles').insert(role);
    },

    async down(knex) {
        return true;
    },
};
