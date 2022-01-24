const { PSDB } = require('planetscale-node');

const conn = new PSDB('main');

async function main() {
  const [rows, fields] = await conn.execute('select * from reminders where id > ?', [10]);
  console.log(rows, fields);
}

main();
