exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("user_id").primary();
        table.text("user_name");
        table.text("user_email");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
