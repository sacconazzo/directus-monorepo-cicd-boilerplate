const settings = {
    project_name: 'SCN API',
    project_logo: 'EBB42C0E-B56B-4D70-A32F-A31583E29A55',
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
