const reservations = require("./02_articles.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE articles RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("articles").insert(reservations);
        });
};
