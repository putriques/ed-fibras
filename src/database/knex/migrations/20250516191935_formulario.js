/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('formulario', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable;
        table.string('telefone').notNullable;
        table.string('whatsapp').notNullable;
        table.string('email').notNullable;
        table.timestamp(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('formulario')
};