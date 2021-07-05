exports.up = function (knex) {
    return knex.schema.createTable("pages", (table) => {
        table.increments("page_id").primary();
        table.text("page_title");
        table.boolean("page_active");
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
    return knex.schema.dropTable("pages");
};
