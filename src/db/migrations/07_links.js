exports.up = function (knex) {
    return knex.schema.createTable("links", (table) => {
        table.increments("link_id").primary();
        table.text("link_text");
        table.text("link_url");
        table.boolean("link_active").defaultTo(true);
        table.integer("article_id").unsigned();
        table
            .foreign("article_id")
            .references("article_id")
            .inTable("articles")
            .onDelete("cascade");
        table.integer("form_id").unsigned();
        table
            .foreign("form_id")
            .references("form_id")
            .inTable("forms")
            .onDelete("cascade");
        table.integer("object_id").unsigned();
        table
            .foreign("object_id")
            .references("object_id")
            .inTable("objects")
            .onDelete("cascade");
        table.integer("user_id").unsigned();
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("users")
            .onDelete("cascade");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("links");
};
