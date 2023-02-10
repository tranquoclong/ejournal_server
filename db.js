const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   password: '5HnmMA7eCEZfy7x1zW5M',
//   host: 'containers-us-west-144.railway.app',
//   port: 7527,
//   database: 'railway',
// });

//Local run
// const pool = new Pool({
//   user: 'postgres',
//   password: '123',
//   host: 'localhost',
//   port: 5432,
//   database: 'ejournal',
// });

const pool = new Pool({
  user: "tranquoclong",
  password: "Q5SmpLTlzD4C",
  host: "ep-wild-fog-161357.ap-southeast-1.aws.neon.tech",
  port: 5432,
  database: "neondb",
  ssl: true,
});

module.exports = pool;
