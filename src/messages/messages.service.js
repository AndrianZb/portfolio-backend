const knex = require("../db/connection");

function create(data) {
    return knex("messages").insert(data, "*");
}

module.exports = {
    create,
};
