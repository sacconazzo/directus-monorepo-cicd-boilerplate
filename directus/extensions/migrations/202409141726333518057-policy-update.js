const policies = JSON.parse('{"id":"f1eb9d5a-699e-4a6c-8cdb-d9a194eec728","name":"Users","icon":"account_box","description":null,"ip_access":null,"enforce_tfa":0,"admin_access":0,"app_access":0}');

module.exports = {
    up: async knex => {
        const [setPolicy] = await knex('directus_policies').select().where('id', 'f1eb9d5a-699e-4a6c-8cdb-d9a194eec728');
        return setPolicy ? knex('directus_policies').update(policies).where('id', 'f1eb9d5a-699e-4a6c-8cdb-d9a194eec728') : knex('directus_policies').insert(policies);
    },

    down: async knex => true,
};
