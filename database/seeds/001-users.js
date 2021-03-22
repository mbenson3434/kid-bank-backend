
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Joe', balance: 0 },
        {username: 'Robbie', balance: 0},
        {username: 'Elora', balance: 0}
      ]);
    });
};
