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
    await House.findOrCreate({name:'griffindor'},{name:'griffindor'});
    await House.findOrCreate({name:'slytherin'},{name:'slytherin'});
    await House.findOrCreate({name:'ravenclaw'},{name:'ravenclaw'});
    await House.findOrCreate({name:'hufflepuf'},{name:'hufflepuf'});
    return done();

};
