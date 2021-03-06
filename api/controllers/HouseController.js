/**
 * HouseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addPoints: async (req,res) => {
        if(req.query.key != sails.config.secret)
            return res.sendStatus(401);
        if(!req.query.house || !req.query.points)
            return res.sendStatus(422);
        var house = await House.findOne({'name' : req.query.house});
        if(house.points + parseInt(req.query.points) < 0)
            await House.update({'name' : req.query.house}, {'points' : 0})
        else
            await House.update({'name' : req.query.house}, {'points' : house.points + parseInt(req.query.points)})
        res.status(200).send(await House.find())
    },

    showPoints: async (req,res) => {
        res.send(await House.find());
    }

};
