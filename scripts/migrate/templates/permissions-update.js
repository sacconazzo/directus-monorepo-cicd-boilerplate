const permissions = JSON.parse('%%%%')
permissions.forEach((p) => {
  p.permissions = JSON.stringify(p.permissions || {})
  p.validation = JSON.stringify(p.validation || {})
  p.presets = JSON.stringify(p.presets || {})
  delete p.id
})

module.exports = {
  async up(knex) {
    const role = '$$$$'
    await knex('directus_permissions')
      .delete()
      .where('role', role !== 'null' ? role : null)
    return permissions.length ? knex('directus_permissions').insert(permissions) : true
  },

  async down(knex) {
    return true
  },
}
