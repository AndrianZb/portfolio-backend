const knex = require("../db/connection");

const tableName = "images";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(imageId) {
    return knex(tableName)
        .select("*")
        .where({ image_id: imageId });
}

function update(imageId, data) {
    return knex(tableName)
        .select("*")
        .where({ image_id: imageId })
        .update({
            image_title: data.image_title,
            image_alt: data.image_alt,
            image_active: data.image_active,
            article_id: data.article_id,
            form_id: data.form_id,
            object_id: data.object_id
        });
}

function remove(imageId) {
    return knex(tableName)
        .where({ image_id: imageId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
