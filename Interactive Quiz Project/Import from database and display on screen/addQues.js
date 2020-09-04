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

    let sql = "insert into quizapp(question,option1,option2,option3)values(?,?,?,?)";
    await connection.query(sql, [
        user.question,
        user.option1,
        user.option2,
        user.option3,
    ]);
    await connection.endAsync();
};
module.exports = { addUser, db_config };