const axios = require('axios');
const {db ,query } = require('./db');
const pgp = require('pg-promise')({promiseLib : Promise})



// order of names is important for insert due to relations
const tables = ["Users", "Posts", "Comments", "Albums", "Photos", "Todos"];

(async () => {
  for await (const table of tables) {
    const { data: tableData} = await axios.get(`https://jsonplaceholder.typicode.com/${table}`);

      db.tx(t => {
          var queries = tableData.map(u => {
             return t.none(
              query[table], u);
          });
          return t.batch(queries);
      })
      .then(data => {
        console.log('data: ', data);
        // OK
      })
      .catch(error => {
        console.log('error: ', error);
        // Error
      });
  }
})();

