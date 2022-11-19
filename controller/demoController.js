const client = require("../database/connection");

exports.createRole = (req, res) => {
    try {

        const { displayName } = req.user;

        const { role_name, created_by, created_date } = req.body

        const userData = {
            role_name: role_name,
            created_by: created_by,
            created_date: created_date
        }
        client.hSet(displayName, userData);

        res.status(200).json({
            data: req.user
        })
    } catch (err) {
        res.send({
            error: err.message,
            status: 404
        })
    }
}

exports.insertUser = (req, res) => {
    try {
        const { displayName } = req.user;

        const { name, email } = req.body

        const userData = {
            name: name,
            email: email
        }
        client.hSet(displayName, userData);

        res.status(200).json({
            data: req.user
        })
    } catch (err) {
        console.log(err)
        res.send({
            error: err.message,
            status: 404
        })
    }
}

exports.insertPost = (req, res) => {
    try {
        const { displayName } = req.user;

        const { title, description } = req.body

        const userData = {
            title: title,
            description: description
        }
        client.hSet(displayName, userData);

        res.status(200).json({
            data: req.user
        })
    } catch (err) {
        console.log(err)
        res.send({
            error: err.message,
            status: 404
        })
    }
}

exports.getAllData = async (req, res) => {
    try {
        const getKey = await client.keys("*");
        const getValue = await getKey.map((item) => {
            return client.hGetAll(item)
        });
        const getData = await Promise.all(getValue)
        res.status(200).json({
            success: true,
            data: getData
        })
    } catch (err) {
        res.send({
            error: err.message,
            status: 404
        })
    }
}