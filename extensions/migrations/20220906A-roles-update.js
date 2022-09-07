const roles = [
  {
    id: '1F2A935B-B54F-44C8-8638-69829D5ED4CA',
    name: 'BackOffice',
    icon: 'home',
    description: 'Back Office',
    ip_access: null,
    enforce_tfa: false,
    admin_access: false,
    app_access: true,
  },
  {
    id: 'E8EDAA1E-EBBC-4024-83A6-A2C832AC7D84',
    name: 'Auctioners',
    icon: 'account_box',
    description: 'User subscribed on Bidjs',
    ip_access: null,
    enforce_tfa: false,
    admin_access: false,
    app_access: false,
  },
]

module.exports = {
  async up(knex) {
    return knex('directus_roles').insert(roles)
  },

  async down(knex) {
    return true
  },
}
