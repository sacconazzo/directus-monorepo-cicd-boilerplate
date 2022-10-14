const permissions = JSON.parse(
  '[{"id":26,"role":null,"collection":"directus_users","action":"create","permissions":null,"validation":{"_and":[{"first_name":{"_nempty":true}},{"last_name":{"_nempty":true}},{"email":{"_contains":"@"}},{"password":{"_nempty":true}}]},"presets":{"role":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84"},"fields":"first_name,last_name,email,password,address1,address2,city,country,telephone,postalcode,username,externalRef,county,companyName,outbidEmailsOk"},{"id":27,"role":null,"collection":"landing_page","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":28,"role":null,"collection":"blog","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":29,"role":null,"collection":"boutique","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":30,"role":null,"collection":"brand","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":31,"role":null,"collection":"contatti","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":32,"role":null,"collection":"news","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":33,"role":null,"collection":"team","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":34,"role":null,"collection":"directus_folders","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"},{"id":35,"role":null,"collection":"directus_files","action":"read","permissions":{},"validation":{},"presets":null,"fields":"*"}]'
)
permissions.forEach((p) => {
  p.permissions = JSON.stringify(p.permissions || {})
  p.validation = JSON.stringify(p.validation || {})
  p.presets = JSON.stringify(p.presets || {})
  delete p.id
})

module.exports = {
  async up(knex) {
    await knex('directus_permissions').delete().where('role', null)
    return permissions.length ? knex('directus_permissions').insert(permissions) : true
  },

  async down(knex) {
    return true
  },
}
