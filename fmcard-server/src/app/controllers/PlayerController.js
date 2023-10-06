const { query } = require('express');
const { mongooseToMultipleObjects, mongooseToSignleObject } = require('../../util/mongoose.js');

const Player = require('../models/Player');
const Nation = require('../models/Nation');
const League = require('../models/League');
const Event = require('../models/Event');
const CARD_PER_PAGE = 18;
class PlayerController {


    // [GET] /
    index(req, res, next) {
        // let skip = (req.query.page - 1) * CARD_PER_PAGE
        // let currentPage = req.query.page || 1;
        // let positions = [
        //     'LW', 'LF', 'ST', 'CF', 'RW', 'RF', 'LM', 'CAM', 'CM', 'CDM', 'RM', 'LWB', 'LB', 'CB', 'RB', 'RWB', 'GK'
        // ]
        Promise.all([Player.find().sort({ rating: -1 }),
        Player.count(),
        Nation.find(),
        League.find(),
        Event.find()])
            .then(([players, totalPlayers, nations, leagues, events]) => {

                res.json({ players, totalPlayers, nations, leagues, events })
            })
            .catch(next);
    }



    // GET /players/:id
    detail(req, res, next) {
        const id = req.params.id;
        Player.findOne({ _id: id }).then((player) => {
            // console.log(player)
            res.json(player)
        }).catch(next);
    }
    // [POST] /players/search
    liveSearch(req, res, next) {
        const player_name = req.body.player_name
        //full_name: { $regex: new RegExp('.*' + player_name + '.*', 'i') },

        Player.aggregate([

            {
                $match: {
                    "full_name": { $regex: new RegExp('.*' + player_name + '.*', 'i') }
                }
            },
            {
                $sort: {
                    rating: -1
                }
            },


        ])
            .then(players => {

                res.status(200).json(players)
            })
            .catch(next);
    }

    //[POST] /cards/filter

    filter(req, res, next) {
        console.log(req.query);

        let skip = (req.query.page - 1) * CARD_PER_PAGE
        let currentPage = req.query.page || 1;
        Player.find()
        res.send('<h3>Completed</h3>');
    }




}


module.exports = new PlayerController();
