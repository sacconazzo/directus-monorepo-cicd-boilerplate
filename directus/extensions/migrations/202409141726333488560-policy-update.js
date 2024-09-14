const policies = JSON.parse(
    '{"id":"abf8a154-5b1c-4a46-ac9c-7300570f4f17","name":"$t:public_label","icon":"public","description":"$t:public_description","ip_access":null,"enforce_tfa":0,"admin_access":0,"app_access":0}',
);

module.exports = {
    up: async knex => {
        const [setPolicy] = await knex('directus_policies').select().where('id', 'abf8a154-5b1c-4a46-ac9c-7300570f4f17');
        return setPolicy ? knex('directus_policies').update(policies).where('id', 'abf8a154-5b1c-4a46-ac9c-7300570f4f17') : knex('directus_policies').insert(policies);
    },

    down: async knex => true,
};
