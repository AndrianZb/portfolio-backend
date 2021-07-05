exports.up = function (knex) {
    return knex.schema.createTable("articles", (table) => {
        table.increments("article_id").primary();
        table.text("article_title");
        table.text("article_content");
        table.boolean("article_active");
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
    return knex.schema.dropTable("articles");
};
