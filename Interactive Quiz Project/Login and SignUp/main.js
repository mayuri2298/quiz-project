const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const dbAddUser = require('./db.add.user');


app.get("/adduser", async(req, res) => {
    try {
        const input = req.query;
        await dbAddUser.addUser(input)
        res.json({ msg: "successfull" });
    } catch (err) {
        res.json({ msg: "error" });
    }

});
app.post("/auth-user", async(req, res) => {
    try {
        const input = req.body;

        await dbAddUser.authenticateUser(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
})

app.post("/adduser", async(req, res) => {
    try {
        const input = req.body;
        await dbAddUser.addUser(input)
        res.json({ msg: "successfull" });
    } catch (err) {
        res.json({ msg: "error" });
    }

});

app.listen(3000);