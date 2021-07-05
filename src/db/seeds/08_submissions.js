const reservations = require("./08_submissions.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE submissions RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("submissions").insert(reservations);
        });
};
