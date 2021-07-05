const reservations = require("./01_pages.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE pages RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("pages").insert(reservations);
        });
};
