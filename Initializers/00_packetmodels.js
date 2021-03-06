/**
 * Created by salty on 12/03/2016.
 */
var Parser = require('binary-parser').Parser;
var StringOptions = {length: 99, zeroTerminated: true};

module.exports = PacketModels = {

    header: new Parser().skip(1).string('command', StringOptions),
    login: new Parser().skip(1).string('command', StringOptions).string('username', StringOptions).string('password', StringOptions),
    register: new Parser().skip(1).string('command', StringOptions).string('username', StringOptions).string('password', StringOptions),
    pos: new Parser().skip(1).string('command', StringOptions).int32le('target_x', StringOptions).int32le('target_y', StringOptions)


};

// FF F0 E7 AA BC 00    <-- Zero-terminaed string