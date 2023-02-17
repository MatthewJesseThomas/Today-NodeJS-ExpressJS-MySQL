const express = require("express");
const router = express.Router();
const con = require("../db");

router.get("/", (req, res) =>{
    try{
        con.query("SELECT * FROM Users", (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.get("/:id", (req, res) =>{
    try{
        con.query(`SELECT * FROM Users WHERE user_id=${req.params.id}`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.post("/", (req, res) =>{
    try{
        con.query(`INSERT INTO Users(full_name, email, user_password, phone) VALUE ("${req.body.full_name}","${req.body.email}","${req.body.user_password}","${req.body.phone}")`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.patch("/", (req, res) =>{
    try{
        con.query(`UPDATE Users SET full_name = "${req.body.full_name}", email = "${req.body.email}", user_password = "${req.body.user_password}", phone = "${req.body.phone}" WHERE user_id = ${req.params.id}`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.put("/:id", (req, res) =>{
    try{
        con.query(`UPDATE Users SET full_name = "${req.body.full_name}", email = "${req.body.email}", user_password = "${req.body.user_password}", phone = "${req.body.phone}" WHERE user_id = ${req.params.id}`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.delete("/:id", (req, res) =>{
    try{
        con.query(`DELETE FROM Users WHERE user_id = "${req.params.id}"`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});



module.exports = router;