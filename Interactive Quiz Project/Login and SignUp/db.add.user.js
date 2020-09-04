const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs",
};

let addUser = async(user) => {
    const connection = mysql.createConnection(db_config);
    await connection.connectAsync();

    let sql = "insert into day1(username,password,email,phone)values(?,?,?,?)";
    await connection.query(sql, [
        user.username,
        user.password,
        user.email,
        user.phone,
    ]);
    await connection.endAsync();
};
let authenticateUser = async(input) => {
    const connection = mysql.createConnection(db_config);
    await connection.connectAsync();
    let sql = "select * from day1 where username=? and password = ?";
    const results = await connection.queryAsync(sql, [input.username, input.password]);
    await connection.endAsync();
    if (results.length === 0) {
        throw new Error("Invalid Credential");
    }
}
module.exports = { addUser, authenticateUser };