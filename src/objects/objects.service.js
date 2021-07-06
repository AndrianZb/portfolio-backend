const knex = require("../db/connection");

const tableName = "objects";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(objectId) {
    return knex(tableName)
        .select("*")
        .where({ object_id: objectId });
}

function update(objectId, data) {
    return knex(tableName)
        .select("*")
        .where({ object_id: objectId })
        .update({
            object_title: data.object_title,
            object_text: data.object_text,
            object_active: data.object_active,
            page_id: data.page_id
        });
}

function remove(objectId) {
    return knex(tableName)
        .where({ object_id: objectId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
