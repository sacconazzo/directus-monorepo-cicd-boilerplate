const permissions = JSON.parse('[{"id":140,"role":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84","collection":"directus_users","action":"update","permissions":{"id":{"_eq":"$CURRENT_USER"}},"validation":null,"presets":null,"fields":"first_name,last_name,email,password,address1,address2,country,city,postalcode,telephone,companyName,county,outbidEmailsOk"},{"id":141,"role":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84","collection":"directus_users","action":"read","permissions":{"id":{"_eq":"$CURRENT_USER"}},"validation":null,"presets":null,"fields":"first_name,last_name,email,avatar,location,description,title,auth_data,bidjs_id,id,language,tags,preferences_divider,theme,email_notifications,last_page,last_access,external_identifier,address1,address2,country,city,provider,postalcode,telephone,username,externalRef,county,companyName,outbidEmailsOk"}]')
permissions.forEach((p) => {
  p.permissions = JSON.stringify(p.permissions || {})
  p.validation = JSON.stringify(p.validation || {})
  p.presets = JSON.stringify(p.presets || {})
  delete p.id
})

module.exports = {
  async up(knex) {
    await knex('directus_permissions').delete().where('role', 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84')
    return permissions.length ? knex('directus_permissions').insert(permissions) : true
  },

  async down(knex) {
    return true
  },
}
