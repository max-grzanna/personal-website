const { PSDB } = require('planetscale-node');

const conn = new PSDB('main');

async function main() {
  const [rows, fields] = await conn.execute('select * from Views', [10]);
  console.log(rows, fields);
}

main();
