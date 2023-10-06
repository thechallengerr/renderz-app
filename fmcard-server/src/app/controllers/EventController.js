const { mongooseToMultipleObjects, mongooseToSignleObject } = require('../../util/mongoose.js');

const Event = require('../models/Event');
const Player = require('../models/Player');
const mongoose = require('../../util/mongoose.js');

class EventController {


    //[GET] /events/:event_slug

    eventPlayers(req, res, next) {
        console.log(req.params.event_slug);
        var event;
        Event.findOne({ event_slug: req.params.event_slug }).then((e) => {
            event = e;
            Player.find({ event_slug: req.params.event_slug }).sort({ rating: -1 }).then((players) => {

                res.json(players)
            }).catch(next);
        })
    }


    //[GET] /events/all
    async getEvents(req, res, next) {

        try {
            var events = await Event.find()
            res.json(events)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    //[GET] /events
    index(req, res, next) {
        if (req.query) {
            console.log(req.query.noOfEvents);
            Event.find().sort({ createdAt: 1 }).limit(req.query.noOfEvents).then(events => {
                console.log(events.length);
                res.json(events)
            }).catch(next)
        } else {

            Event.find().sort({ event_name: 1 })
                .then((events) => {
                    console.log(events);
                    res.json(events)
                })
                .catch(next);
        }
    }

}


module.exports = new EventController();
