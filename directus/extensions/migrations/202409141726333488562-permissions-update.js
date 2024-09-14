const permissions = JSON.parse('[]');
permissions.forEach(p => {
    p.permissions = p.permissions ? JSON.stringify(p.permissions) : null;
    p.validation = p.validation ? JSON.stringify(p.validation) : null;
    p.presets = p.presets ? JSON.stringify(p.presets) : null;
    delete p.id;
});

module.exports = {
    up: async knex => {
        const policy = 'abf8a154-5b1c-4a46-ac9c-7300570f4f17';
        await knex('directus_permissions')
            .delete()
            .where('policy', policy !== 'null' ? policy : null);
        return permissions.length ? knex('directus_permissions').insert(permissions) : true;
    },

    down: async knex => true,
};
