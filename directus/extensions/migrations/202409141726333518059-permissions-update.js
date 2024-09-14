const permissions = JSON.parse('[]');
permissions.forEach(p => {
    p.permissions = p.permissions ? JSON.stringify(p.permissions) : null;
    p.validation = p.validation ? JSON.stringify(p.validation) : null;
    p.presets = p.presets ? JSON.stringify(p.presets) : null;
    delete p.id;
});

module.exports = {
    up: async knex => {
        const policy = 'f1eb9d5a-699e-4a6c-8cdb-d9a194eec728';
        await knex('directus_permissions')
            .delete()
            .where('policy', policy !== 'null' ? policy : null);
        return permissions.length ? knex('directus_permissions').insert(permissions) : true;
    },

    down: async knex => true,
};
