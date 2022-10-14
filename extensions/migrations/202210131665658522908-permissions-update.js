const permissions = JSON.parse('[{"id":25,"role":null,"collection":"directus_users","action":"create","permissions":null,"validation":{"_and":[{"first_name":{"_nempty":true}},{"last_name":{"_nempty":true}},{"email":{"_contains":"@"}},{"password":{"_nempty":true}}]},"presets":{"role":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84"},"fields":"first_name,last_name,email,password,address1,address2,city,country,telephone,postalcode,username,externalRef,county,companyName,outbidEmailsOk"},{"id":38,"role":null,"collection":"landing_page","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":40,"role":null,"collection":"blog","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":41,"role":null,"collection":"boutique","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":42,"role":null,"collection":"brand","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":43,"role":null,"collection":"contatti","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":44,"role":null,"collection":"news","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":45,"role":null,"collection":"team","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":46,"role":null,"collection":"directus_folders","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":47,"role":null,"collection":"directus_files","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"}]')
permissions.forEach((p) => {
  p.permissions = JSON.stringify(p.permissions)
  p.validation = JSON.stringify(p.validation)
  p.presets = JSON.stringify(p.presets)
  delete p.id
})

module.exports = {
  async up(knex) {
    await knex('directus_permissions').delete().where('role', 'null')
    return permissions.length ? knex('directus_permissions').insert(permissions) : true
  },

  async down(knex) {
    return true
  },
}
