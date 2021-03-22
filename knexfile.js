// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/little-bank.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  }

};

// const pg = require("pg");

// const localConnection = "postgresql://localhost/relationship_goals";

// let connection;

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false };
//   connection = process.env.DATABASE_URL;
// } else {
//   connection = localConnection;
// }

// const sharedConfig = {
//   client: "pg",
//   connection,
//   migrations: { directory: "./data/migrations" },
//   seeds: { directory: "./data/seeds" },
// };

// const devConfig = {
//   client: "pg",
//   connection: "postgresql://localhost/relationship_goals",
//   migrations: { directory: "./data/migrations" },
//   seeds: { directory: "./data/seeds" },
// };

// module.exports = {
//   development: { ...devConfig },
//   production: {
//     ...sharedConfig,
//     pool: { min: 2, max: 10 },
//   },
// };
