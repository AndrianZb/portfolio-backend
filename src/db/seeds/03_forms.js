const reservations = require("./03_forms.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE forms RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("forms").insert(reservations);
        });
};
