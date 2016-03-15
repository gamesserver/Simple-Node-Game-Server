/**
 * Created by salty on 11/03/2016.
 */
//Import required libraries
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//Store the environment variable
var environment = args.env || "test";

//Common config... ie: name, version, max player etc...
var common_conf = {
    name: "Poker MMORL Server",
    version: "0.0.1",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "\\Game Data\\" + "Items\\",
        maps: __dirname + "\\Game Data\\" + "Maps\\"
    },
    starting_zone: "rm_map_home"
};

// Environment Specific Configuration
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 5000,
        // database: "mongodb://127.0.0.1/poker_mmorl_prod"
	    // database: "mongodb://saltytaro:maluka333@ds011379.mlab.com:11379/pokermmorl"
        database: "mongodb://saltytaro:maluka333@ds011379.mlab.com:11379/pokermmorl"
        // database: "mongodb://ds064718.mongolab.com:27769/demo_database"
    },

    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 5000,
        // database: "mongodb://127.0.0.1/poker_mmorl_test"
	    database: "mongodb://saltytaro:maluka333@ds011379.mlab.com:11379/pokermmorl"
        // database: "mongodb://ds064718.mongolab.com:27769/demo_database"
        // database: "mongodb://demo_user:demo_password@ds064718.mlab.com:64718/pmmorl?authSource=dbWithUserCredentials"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];