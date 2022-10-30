const settings = {
  project_name: 'SCN API',
  project_url: null,
  project_color: null,
  project_logo: 'EBB42C0E-B56B-4D70-A32F-A31583E29A55',
  public_foreground: null,
  public_background: null,
  public_note: null,
  auth_login_attempts: 25,
  auth_password_policy: null,
  storage_asset_transform: 'all',
  storage_asset_presets: null,
  custom_css: null,
  storage_default_folder: null,
  basemaps: null,
  mapbox_key: null,
  module_bar: null,
  project_descriptor: 'backoffice',
  translation_strings: null,
  default_language: 'it-IT',
  custom_aspect_ratios: null,
}

module.exports = {
  async up(knex) {
    const [setSettings] = await knex('directus_settings').select().where('id', 1)
    return setSettings
      ? knex('directus_settings').update(settings).where('id', 1)
      : knex('directus_settings').insert(settings)
  },

  async down(knex) {
    return true
  },
}
