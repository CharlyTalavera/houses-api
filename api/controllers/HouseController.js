/**
 * HouseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addPoints: async (req,res) => {
        if(req.body.key != sails.config.secret)
            return res.sendStatus(401);
        if(!req.body.house || !req.body.points)
            return res.sendStatus(422);
        var house = await House.findOne({'name' : req.body.house});
        await House.update({'name' : req.body.house}, {'points' : house.points + parseInt(req.body.points)})
        res.status(200).send(await House.find())
    },

    showPoints: async (req,res) => {
        res.send(await House.find());
    }

};
