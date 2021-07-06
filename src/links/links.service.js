const knex = require("../db/connection");

const tableName = "links";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(linkId) {
    return knex(tableName)
        .select("*")
        .where({ link_id: linkId });
}

function update(linkId, data) {
    return knex(tableName)
        .select("*")
        .where({ link_id: linkId })
        .update({
            link_text: data.link_text,
            link_url: data.link_url,
            link_active: data.link_active,
            article_id: data.article_id,
            form_id: data.form_id,
            object_id: data.object_id
        });
}

function remove(linkId) {
    return knex(tableName)
        .where({ link_id: linkId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
