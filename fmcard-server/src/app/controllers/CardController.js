const { query } = require('express');
const jwt = require('jsonwebtoken');
const { mongooseToMultipleObjects, mongooseToSignleObject } = require('../../util/mongoose.js');
const Nation = require('../models/Nation')
const League = require('../models/League')
const Player = require('../models/Player')
const User = require('../models/User');
const Card = require('../models/Card.js');
const { TRUE } = require('node-sass');

class CardController {

    // [GET] /
    index(req, res, next) {
        res.render('card-generator/card')
    }

    //[GET] /:id/edit
    edit(req, res, next) {
        Card.findById(req.params.id)
            .then(function (card) {
                res.render('card-generator/card-edit', {
                    card: mongooseToSignleObject(card)
                })
            })
            .catch(next);
    }

    //[PUT] :id/update
    update(req, res, next) {
        Card.updateOne({ _id: req.params.id }, req.body)
            .then(function (card) {
                res.json(card)
            })
            .catch(() => {
                res.json({ error: "Update card falied" });
            });
    }

    //[DELETE] :id/delete
    delete(req, res, next) {
        Card.findById(req.params.id).then(function (card) {
            console.log(card);
            card.delete();
            res.redirect('/me/my-cards')
        })
    }

    getNations(req, res, next) {
        Nation.aggregate([
            {
                $match: {
                    "nation": { $regex: new RegExp('.*' + req.body.nation + '.*', 'i') }
                }
            },
            {
                $sort: {
                    rating: -1
                }
            },
        ])
            .then(nations => {
                res.json(nations);
            }).catch(next);
    }

    async getBackgrounds(req, res, next) {
        var backgrounds = await Player.findOne().distinct('background')
        res.json(backgrounds);
    }

    //[POST] card-generator/get-clubs
    async getClubs(req, res, next) {
        var club_name = req.body.club_name
        var clubs = await League.aggregate(
            [
                { $unwind: "$clubs" },
                {
                    $group: {
                        _id: 0,
                        selectedGroups: {
                            $addToSet: '$clubs'
                        }
                    }
                },
                {
                    $project: { selectedGroups: 1, _id: 0 }
                },
                {
                    $match: {
                        "selectedGroups": {
                            $elemMatch: { "club_name": { $regex: new RegExp('.*' + club_name + '.*', 'i') } }
                        }
                    }
                }


            ])
        var result = [];
        // const regex = .* + club_name + .* /i;
        clubs[0].selectedGroups.forEach(club => {
            if (club.club_name.toLowerCase().includes(club_name)) {
                result.push(club);
            }
        })

        res.json(result);
    }

    // SAVE /card-generator/save
    async save(req, res, next) {


        console.log(req.body)
        try {
            const result = await Card.create(req.body)

            res.json({ result, createdBy: req.body.createdBy })
        } catch (error) {
            next(error)
        }


    }

    async myCards(req, res, next) {
        
        var cards = await Card.find({
            createdBy: req.body.createdBy,
            deleted: false,
        })
        res.render('me/my-card', {
            cards: mongooseToMultipleObjects(cards)
        })

    }



}


module.exports = new CardController();
