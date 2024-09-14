const policies = JSON.parse(
    '{"id":"07adb3e8-ee1e-4b7c-b8b8-a03399ac3c57","name":"BackOffice","icon":"home_app_logo","description":null,"ip_access":null,"enforce_tfa":0,"admin_access":0,"app_access":1}',
);

module.exports = {
    up: async knex => {
        const [setPolicy] = await knex('directus_policies').select().where('id', '07adb3e8-ee1e-4b7c-b8b8-a03399ac3c57');
        return setPolicy ? knex('directus_policies').update(policies).where('id', '07adb3e8-ee1e-4b7c-b8b8-a03399ac3c57') : knex('directus_policies').insert(policies);
    },

    down: async knex => true,
};
