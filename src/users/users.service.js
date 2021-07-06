const knex = require("../db/connection");

const tableName = "users";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(userId) {
    return knex(tableName)
        .select("*")
        .where({ user_id: userId });
}

function update(userId, data) {
    return knex(tableName)
        .select("*")
        .where({ user_id: userId })
        .update({
            user_name: data.user_name,
            user_email: data.user_email,
        });
}

function remove(userId) {
    return knex(tableName)
        .where({ user_id: userId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
