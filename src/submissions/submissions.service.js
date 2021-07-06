const knex = require("../db/connection");

const tableName = "submissions";

function create(data) {
    return knex(tableName)
        .insert(data, "*");
}

function find(submissionId) {
    return knex(tableName)
        .select("*")
        .where({ submission_id: submissionId });
}

function update(submissionId, data) {
    return knex(tableName)
        .select("*")
        .where({ submission_id: submissionId })
        .update({
            submission_data: data.submission_data,
        });
}

function remove(submissionId) {
    return knex(tableName)
        .where({ submission_id: submissionId })
        .del()
}

module.exports = {
    create,
    find,
    update,
    remove,
};
