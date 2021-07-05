const reservations = require("./04_objects.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE objects RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("objects").insert(reservations);
        });
};
