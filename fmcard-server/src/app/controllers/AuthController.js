const { mongooseToMultipleObjects } = require('../../util/mongoose.js');
const { generateToken, updateRefreshToken } = require('../../util/jwt.js');
const randToken = require('rand-token');
const jwt = require('jsonwebtoken');
var passwordHash = require('password-hash');

const User = require('../models/User');
const accessTokenLife = `${process.env.ACCESS_TOKEN_LIFE}`;
const accessTokenSecret = `${process.env.ACCESS_TOKEN_SECRET}`;
class AuthController {

    // [GET] /
    index(req, res, next) {
        res.render("auth/sign_in");
    }

    //[GET] /signup
    signup(req, res, next) {
        res.render("auth/sign_up");
    }

    //[POST] /create
    createUser(req, res, next) {
        const formData = req.body;
        console.log(formData);
        User.findOne({ username: formData.username }, (err, user) => {
            if (err) throw err;
            console.log(user);
            if (user) {

                res.send({
                    error: 'Username already in used'
                });
                return
            }
            User.create({
                username: formData.username,
                password: formData.password,
                email: formData.email,
                userAvatar: ''
            }, (user, err) => {
                console.table({ err });
            });
            const accessToken = generateToken()
            res.json({
                statusCode: 200,
                message: 'User created successfully',

            })


        })
    }

    //[POST] auth/signin
    async signin(req, res, next) {

        console.log(req.body);

        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            res.json({ error: 'Username not found. Please check again' });
            return;
        }
        const isPasswordValid = passwordHash.verify(req.body.password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });

        }

        return res.json({
            msg: 'Đăng nhập thành công.',
            user,
        });
    }

    async refreshToken(req, res, next) {

    }

    async getCurrentUser(req, res, next) {
        if (!req.cookies.accessToken) {
            res.status(501).json({ error: 'Login to continue' });
            return;
        }
        var data = await jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN_SECRET)
        var currentUser = await User.findById(data.payload.id);
        res.json(currentUser);
    }
}


module.exports = new AuthController();
