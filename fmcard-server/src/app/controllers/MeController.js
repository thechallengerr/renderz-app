const { mongooseToMultipleObjects, mongooseToSignleObject } = require('../../util/mongoose.js');
const jwt = require('jsonwebtoken');

const Event = require('../models/Event');
const Player = require('../models/Player');
const Card = require('../models/Card');
const User = require('../models/User');
const mongoose = require('../../util/mongoose.js');

class MeController {

    index(req, res, next) {
        res.send('index page')
    }

    //[POST] /me/my-cards
    async myCards(req, res, next) {
        console.log(req.body);
        if (!req.body.createdBy) {
            res.json({
                message: 'User Id not found'
            })
        } else {
            try {
                var cards = await Card.find({
                    createdBy: req.body.createdBy,
                    deleted: false,
                })

                res.json(cards)
            } catch (error) {
                console.log(error);
            }
        }


    }

    async profile(req, res, next) {
        if (!req.cookies.accessToken) {
            res.status(501).json({ error: 'Bạn cần đăng nhập để xem trang này' });
            return;
        }
        var data = await jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN_SECRET)
        var user = await User.findOne({
            _id: data.payload.id,
        })
        var cards = await Card.find({
            createdBy: data.payload.id,
            deleted: false,
        }).limit(4)

        res.render('me/profile', {
            user: mongooseToSignleObject(user),
            cards: mongooseToMultipleObjects(cards)
        });
    }

    async updateAvatar(req, res, next) {
        // var img = fs.readFileSync(req.file.path);
        // var encode_image = img.toString('base64');

        // var finalImg = {
        //     contentType: req.file.mimetype,
        //     image: new Buffer(encode_image, 'base64')
        // };
        console.log(req.body);
        try {
            const updatedUser = await User.findOneAndUpdate(
                {
                    _id: req.body._id
                },
                {
                    userAvatar: req.body.userAvatar
                },
                {
                    new: true
                }
            )
            res.json(updatedUser)
        } catch (error) {
            res.json({
                message: error
            })
        }

    }


}


module.exports = new MeController();
