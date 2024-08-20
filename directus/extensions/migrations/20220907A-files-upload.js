const files = [
    {
        id: '93e53670-58fa-4e6f-9628-f424786859fc',
        storage: 'local',
        filename_disk: '93e53670-58fa-4e6f-9628-f424786859fc.jpg',
        filename_download: 'wp4066843-bumblebee-wallpapers.jpg',
        title: 'Wallpaper',
        type: 'image/png',
        folder: null,
        uploaded_by: null,
        uploaded_on: new Date(),
        modified_by: null,
        modified_on: new Date(),
        charset: null,
        filesize: '1749654',
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
