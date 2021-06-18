import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name')
      table.string('description')
      table.integer('product_category_id')
      table.integer('product_genre_id')
      table.integer('price')
      table.integer('views')
      table.jsonb('json_data')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
