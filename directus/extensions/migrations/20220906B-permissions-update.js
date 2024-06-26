const permissions = [
    {
        role: 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84',
        collection: 'directus_users',
        action: 'update',
        permissions: '{"id":{"_eq":"$CURRENT_USER"}}',
        validation: null,
        presets: null,
        fields: 'first_name,last_name,email,password,address1,address2,country,city,postalcode,telephone,companyName,county,outbidEmailsOk',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_files',
        action: 'create',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_files',
        action: 'read',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_files',
        action: 'update',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    // {
    //   role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
    //   collection: 'directus_files',
    //   action: 'delete',
    //   permissions: '{}',
    //   validation: null,
    //   presets: null,
    //   fields: '*',
    // },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_dashboards',
        action: 'create',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_dashboards',
        action: 'read',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_dashboards',
        action: 'update',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_dashboards',
        action: 'delete',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_panels',
        action: 'create',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_panels',
        action: 'read',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_panels',
        action: 'update',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_panels',
        action: 'delete',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_folders',
        action: 'create',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_folders',
        action: 'read',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_folders',
        action: 'update',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_users',
        action: 'read',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_users',
        action: 'update',
        permissions: '{"_or":[{"id":{"_eq":"$CURRENT_USER"}},{"role":{"_eq":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84"}}]}',
        validation: null,
        presets: null,
        fields: 'first_name,last_name,email,password,location,title,description,avatar,language,theme,tfa_secret',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_roles',
        action: 'read',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_shares',
        action: 'read',
        permissions: '{"_or":[{"role":{"_eq":"$CURRENT_ROLE"}},{"role":{"_null":true}}]}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_shares',
        action: 'create',
        permissions: '{}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_shares',
        action: 'update',
        permissions: '{"user_created":{"_eq":"$CURRENT_USER"}}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_shares',
        action: 'delete',
        permissions: '{"user_created":{"_eq":"$CURRENT_USER"}}',
        validation: null,
        presets: null,
        fields: '*',
    },
    {
        role: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
        collection: 'directus_flows',
        action: 'read',
        permissions: '{"trigger":{"_eq":"manual"}}',
        validation: null,
        presets: null,
        fields: 'id,name,icon,color,options,trigger',
    },
    {
        role: 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84',
        collection: 'directus_users',
        action: 'read',
        permissions: '{"id":{"_eq":"$CURRENT_USER"}}',
        validation: null,
        presets: null,
        fields: 'first_name,last_name,email,avatar,location,description,title,auth_data,bidjs_id,id,language,tags,preferences_divider,theme,email_notifications,last_page,last_access,external_identifier,address1,address2,country,city,provider,postalcode,telephone,username,externalRef,county,companyName,outbidEmailsOk',
    },
    {
        role: null,
        collection: 'directus_users',
        action: 'create',
        permissions: null,
        validation: '{"_and":[{"first_name":{"_nempty":true}},{"last_name":{"_nempty":true}},{"email":{"_contains":"@"}},{"password":{"_nempty":true}}]}',
        presets: '{"role":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84"}',
        fields: 'first_name,last_name,email,password,address1,address2,city,country,telephone,postalcode,username,externalRef,county,companyName,outbidEmailsOk',
    },
];

module.exports = {
    up: async knex => {
        // const allArticles = await knex('directus_permissions')
        //   .select('*')
        //   .whereNull('role')
        //   .where({ collection: 'articles', action: 'read' })
        //   .first()
        // if (!allArticles) {
        return knex('directus_permissions').insert(permissions);
        // }
    },

    down: async knex => {
        return true;
    },
};
