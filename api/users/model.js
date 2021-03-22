const db = require('../../database/dbConfig');

const getUsers = () => {
    return db('users')
}

const getById = (id) => {
    return db('users')
    .where({id})
    .first()
}

const addUser = (user)=> {
    return db('users')
    .insert(user)
    .then(id => getById(id))
}

module.exports = {
    getUsers,
    getById,
    addUser,
}
