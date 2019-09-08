
const pgp = require('pg-promise')({promiseLib : Promise})


const cn = {
  host: 'satao.db.elephantsql.com',
  port: 5432,
  database: 'fchhltfc',
  user: 'fchhltfc',
  password: 'vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV'
};

const db = pgp(cn);
db.connect()
    .then(obj => {
      console.log("sucess");
       obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
   });


const query = {
  Users : 'INSERT INTO Users(id,name, username, email, address, phone, website, company) VALUES(${id}, ${name},${username},${email},${address},${phone},${website} ,${company})',
  Posts : 'INSERT INTO Posts(userId, id, title, body) VALUES(${userId}, ${id},${title},${body})',
  Comments : 'INSERT INTO Comments(postId, id, name, email , body) VALUES(${postId}, ${id},${name},${email},${body})',
  Albums : 'INSERT INTO Albums(userId, id, title) VALUES(${userId}, ${id},${title})',
  Photos : 'INSERT INTO Photos(albumId, id, title, url, thumbnailUrl) VALUES(${albumId}, ${id},${title},${url},${thumbnailUrl})',
  Todos : 'INSERT INTO Todos(userId, id, title, completed) VALUES(${userId}, ${id},${title},${completed})'
}



module.exports = {db , query};