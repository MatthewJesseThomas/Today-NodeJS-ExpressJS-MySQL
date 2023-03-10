const mysql = require('mysql2');
const dbConfig = require('./lib/db.connection');

// Create a connection to the database
const con = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
  
  // open the MySQL connection
  con.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the Valhalla.");
  });
  
  module.exports = con;