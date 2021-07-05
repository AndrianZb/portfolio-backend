const reservations = require("./05_fields.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE fields RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("fields").insert(reservations);
        });
};
