const role = JSON.parse(
    '{"id":"dc7be20f-7b81-431e-8db2-3ffbbf4f9174","name":"BackOffice Manager","icon":"admin_panel_settings","description":"Amministratore di sistema","ip_access":null,"enforce_tfa":0,"admin_access":0,"app_access":1}',
);

module.exports = {
    up: async knex => {
        const [setRole] = await knex('directus_roles').select().where('id', 'dc7be20f-7b81-431e-8db2-3ffbbf4f9174');
        return setRole ? knex('directus_roles').update(role).where('id', 'dc7be20f-7b81-431e-8db2-3ffbbf4f9174') : knex('directus_roles').insert(role);
    },

    down: async knex => {
        return true;
    },
};
