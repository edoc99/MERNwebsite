// handlers
const db = require('../models');

exports.showUsers = async (req, res, next) => {
    try {
        const users = await db.User.find();

        // 201 user successfully registered
        res.status(201).json(users);
    } catch (err) {
            err.status = 400;
        next(err);
    }
};

exports.showUserInfo = async (req, res, next) => {
    try {
        console.log(req.decoded);
        const {id} = req.decoded;
        const user = await db.User.findById(id);

        const { username, created } = user;

        // 201 user successfully registered
        res.status(201).json({ 
            username, 
            created
        });

        // 201 user successfully registered
        //res.status(201).json(user);
    } catch (err) {
            err.status = 400;
        next(err);
    }
};