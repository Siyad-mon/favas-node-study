
import mysql from 'mysql2/promise'

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "my_database",
});

export default mysqlPool