const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const addQues = require("./addQues");

let readAllUser = async() => {
    const connection = mysql.createConnection(addQues.db_config);

    await connection.connectAsync();

    let sql = "select * from quizapp";
    const results = await connection.queryAsync(sql);

    await connection.endAsync();

    return results;
};
module.exports = { readAllUser }