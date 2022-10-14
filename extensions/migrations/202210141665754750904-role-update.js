const role = JSON.parse(
  '{"id":"E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84","name":"Auctioners","icon":"account_box","description":"User subscribed","ip_access":null,"enforce_tfa":0,"admin_access":0,"app_access":0}'
)

module.exports = {
  async up(knex) {
    const [setRole] = await knex('directus_roles').select().where('id', 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84')
    return setRole
      ? knex('directus_roles').update(role).where('id', 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84')
      : knex('directus_roles').insert(role)
  },

  async down(knex) {
    return true
  },
}
