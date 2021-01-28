const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/***************************
     * USER REGISTER *
****************************/

router.post('/register', (req, res) => {
    User.create({
        username: req.body.user.username,
        passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 13)
    })
    .then((user) => {

        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

        res.json({
            user: user,
            message: "User successfully create.",
            sessionToken: token
        });
    })
    .catch(err => res.status(500).json({ error: err }))
});

/***************************
      * USER LOGIN*
****************************/

router.post('/login', (req, res) => {
    User.findOne({ where: { username: req.body.user.username} })
    .then((user) => {
        if (user) {
            bcrypt.compare(req.body.user.passwordhash, user.passwordhash, (err, matches) => {
                if (matches) {
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

                    res.status(200).json({
                        user: user,
                        message: "User logged in successfully!",
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({ error: "Login Failed" });
                }
            });
        } else {
            res.status(500).json({ error: "User does not exist." })
        }
    })
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;