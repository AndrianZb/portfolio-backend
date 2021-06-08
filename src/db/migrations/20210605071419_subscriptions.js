exports.up = function (knex) {
    return knex.schema.createTable("subscriptions", (table) => {
        table.increments("subscription_id").primary();
        table.text("email");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("subscriptions");
};
