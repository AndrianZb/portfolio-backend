const reservations = require("./06_images.json");

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE images RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("images").insert(reservations);
        });
};
