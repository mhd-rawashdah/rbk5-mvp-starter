var mysql = require('mysql');

var connection = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "password",
     database: "ChatApp"
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM users', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var addUser = function(user, callback) {
  console.log(user);
  var sql = `INSERT INTO users (username, email, password) VALUES ("${user[0]}", "${user[1]}", "${user[2]}");`;

  connection.query(sql, function(err, result){
    if (err) {
      console.log(err);
      callback(err, null)
    } else {
      console.log("saved!")
      callback(null, result)
    }
  })
}

var checkUserExist = function(username, callback){
  var sql = `select * from users where username ="${username}"`;

  connection.query(sql, function(err, result){
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.addUser = addUser;
module.exports.checkUserExist = checkUserExist;