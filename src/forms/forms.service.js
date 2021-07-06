const knex = require("../db/connection");

const tableName = "forms";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(formId) {
    return knex(tableName)
        .select("*")
        .where({ form_id: formId });
}

function update(formId, data) {
    return knex(tableName)
        .select("*")
        .where({ form_id: formId })
        .update({
            form_title: data.form_title,
            form_submit: data.form_submit,
            form_submit_text: data.form_submit_text,
            form_cancel: data.form_cancel,
            form_cancel_text: data.form_cancel_text,
            form_active: data.form_active,
            page_id: data.page_id
        });
}

function remove(formId) {
    return knex(tableName)
        .where({ form_id: formId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
