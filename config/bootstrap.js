/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {
    await House.findOrCreate({name:'gryffindor'},{name:'gryffindor'});
    await House.findOrCreate({name:'slytherin'},{name:'slytherin'});
    await House.findOrCreate({name:'ravenclaw'},{name:'ravenclaw'});
    await House.findOrCreate({name:'hufflepuff'},{name:'hufflepuff'});
    return done();

};
