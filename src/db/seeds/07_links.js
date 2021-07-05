const reservations = require("./07_links.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE links RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("links").insert(reservations);
        });
};
