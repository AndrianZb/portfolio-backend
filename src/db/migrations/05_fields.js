exports.up = function (knex) {
    return knex.schema.createTable("fields", (table) => {
        table.increments("field_id").primary();
        table.text("field_title");
        table.text("field_type");
        table.text("field_placeholder");
        table.boolean("field_required");
        table.boolean("field_active");
        table.integer("form_id");
        table
            .foreign("form_id")
            .references("form_id")
            .inTable("forms")
            .onDelete("cascade");
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
    return knex.schema.dropTable("fields");
};
