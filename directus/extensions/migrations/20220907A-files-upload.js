const files = [
    {
        id: 'fea039b9-99a9-4a46-aac9-f45c05faa7a6',
        storage: 'local',
        filename_disk: 'fea039b9-99a9-4a46-aac9-f45c05faa7a6.jpg',
        filename_download: '160822-MINIMAL-SEA-4K.png',
        title: 'Wallpaper',
        type: 'image/png',
        folder: null,
        uploaded_by: null,
        uploaded_on: new Date(),
        modified_by: null,
        modified_on: new Date(),
        charset: null,
        filesize: '178362',
        width: 3840,
        height: 2160,
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
