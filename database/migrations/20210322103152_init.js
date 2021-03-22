exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('user_id')
        tbl.string('username').notNullable().unique()
        tbl.integer('balance').defaultTo(0)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
