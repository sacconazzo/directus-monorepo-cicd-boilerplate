const files = [
    {
        id: 'EBB42C0E-B56B-4D70-A32F-A31583E29A55',
        storage: 'local',
        filename_disk: 'ebb42c0e-b56b-4d70-a32f-a31583e29a55.png',
        filename_download: 'Logo.png',
        title: 'Logo',
        type: 'image/png',
        folder: null,
        uploaded_by: null,
        uploaded_on: new Date(),
        modified_by: null,
        modified_on: new Date(),
        charset: null,
        filesize: '739',
        width: 66,
        height: 100,
        duration: null,
        embed: null,
        description: null,
        location: null,
        tags: null,
        metadata: '{}',
    },
];

module.exports = {
    up: async knex => {
        return knex('directus_files').insert(files);
    },

    down: async knex => {
        return true;
    },
};
