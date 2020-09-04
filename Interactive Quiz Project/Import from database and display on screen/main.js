const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const dbAddUser = require('./addQues');
const dbRead = require('./readall');
app.post("/adduser", async(req, res) => {
    try {
        const input = req.body;
        await dbAddUser.addUser(input)
        res.json({ msg: "successfull" });
    } catch (err) {
        res.json({ msg: "error" });
    }

});

app.get("/alluser", async(req, res) => {
    try {
        const results = await dbRead.readAllUser();

        res.json(results);
    } catch (err) {
        const json = { message: "Failure" };
        res.json(json);
    }
});

app.listen(3000);