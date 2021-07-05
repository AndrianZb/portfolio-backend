exports.up = function (knex) {
    return knex.schema.createTable("submissions", (table) => {
        table.increments("submission_id").primary();
        table.text("submission_data");
        table.integer("user_id");
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("users")
            .onDelete("cascade");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("submissions");
};
