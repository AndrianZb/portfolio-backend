const knex = require("../db/connection");

const tableName = "articles";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(articleId) {
    return knex(tableName)
        .select("*")
        .where({ article_id: articleId });
}

function update(articleId, data) {
    return knex(tableName)
        .select("*")
        .where({ article_id: articleId })
        .update({
            article_title: data.article_title,
            article_content: data.article_content,
            article_active: data.article_active,
            page_id: data.page_id
        });
}

function remove(articleId) {
    return knex(tableName)
        .where({ article_id: articleId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
