exports.up = function (knex) {
    return knex.schema.createTable("objects", (table) => {
        table.increments("object_id").primary();
        table.text("object_title");
        table.text("object_text");
        table.boolean("object_active");
        table.integer("page_id");
        table
            .foreign("page_id")
            .references("page_id")
            .inTable("pages")
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
    return knex.schema.dropTable("objects");
};
