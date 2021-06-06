const knex = require('../db/connection')

function create(data) {
    return knex('subscriptions')
        .insert({'email': data}, '*')
}

module.exports = {
    create,
}