const { mongooseToMultipleObjects, mongooseToSignleObject } = require('../../util/mongoose.js');

const Event = require('../models/Event');
const Player = require('../models/Player');

class HomeController {


    //[GET] /home
    index(req, res, next) {
        Player.find().sort({ createdAt: -1 }).limit(6).then((playerList) => {
            res.send(playerList)
        }).catch(next);

    }
}

module.exports = new HomeController();
