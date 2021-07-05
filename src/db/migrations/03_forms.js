exports.up = function (knex) {
    return knex.schema.createTable("forms", (table) => {
        table.increments("form_id").primary();
        table.text("form_title");
        table.boolean("form_submit");
        table.text("form_submit_text");
        table.boolean("form_cancel");
        table.text("form_cancel_text");
        table.boolean("form_active");
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
    return knex.schema.dropTable("forms");
};
