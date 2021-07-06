const knex = require("../db/connection");

const tableName = "pages";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(pageId) {
    return knex(tableName)
        .select("*")
        .where({ page_id: pageId });
}

function update(pageId, data) {
    return knex(tableName)
        .select("*")
        .where({ page_id: pageId })
        .update({
            page_title: data.page_title,
            page_active: data.page_active
        });
}

function remove(pageId) {
    return knex(tableName)
        .where({ page_id: pageId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
