const knex = require("../db/connection");

const tableName = "fields";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(fieldId) {
    return knex(tableName)
        .select("*")
        .where({ field_id: fieldId });
}

function update(fieldId, data) {
    return knex(tableName)
        .select("*")
        .where({ field_id: fieldId })
        .update({
            field_title: data.field_title,
            field_type: data.field_type,
            field_placeholder: data.field_placeholder,
            field_required: data.field_required,
            field_active: data.field_active,
            form_id: data.form_id
        });
}

function remove(fieldId) {
    return knex(tableName)
        .where({ field_id: fieldId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
