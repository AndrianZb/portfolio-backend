exports.up = function (knex) {
    return knex.schema.createTable("messages", (table) => {
        table.increments("message_id").primary();
        table.text("name");
        table.text("email");
        table.text("message");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("messages");
};
