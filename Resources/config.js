/**
 * Created by salty on 11/03/2016.
 */
//Import required libraries
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');
var express = require('express');

//Store the environment variable
var environment = args.env || "test";

//Common config... ie: name, version, max player etc...
var common_conf = {
    name: "Poker MMORL Server",
    version: "0.0.1",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "/GameData/Items/",
        maps: __dirname + "/GameData/Maps/"
    },
    starting_zone: "rm_map_home"
};

// Environment Specific Configuration
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: process.env.PORT || 3000,
        database: "mongodb://<dbuser>:<dbpassword>@ds021681.mlab.com:21681/gmud"
    },

    test: {
        ip: args.ip || "0.0.0.0",
        port: process.env.PORT || 3000,
        database: "mongodb://<dbuser>:<dbpassword>@ds021681.mlab.com:21681/gmud"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];
