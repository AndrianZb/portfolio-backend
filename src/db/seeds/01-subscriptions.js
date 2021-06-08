const subscriptions = require("./01-subscriptions.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE subscriptions RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("subscriptions").insert(subscriptions);
        });
};
