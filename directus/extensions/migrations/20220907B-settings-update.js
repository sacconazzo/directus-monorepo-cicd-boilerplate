const settings = {
    project_name: 'SCN API',
    public_background: 'fea039b9-99a9-4a46-aac9-f45c05faa7a6',
    auth_login_attempts: 25,
    storage_asset_transform: 'all',
    project_descriptor: 'backoffice',
    default_language: 'it-IT',
};

module.exports = {
    up: async knex => {
        const [setSettings] = await knex('directus_settings').select().where('id', 1);
        return setSettings ? knex('directus_settings').update(settings).where('id', 1) : knex('directus_settings').insert(settings);
    },

    down: async knex => {
        return true;
    },
};
