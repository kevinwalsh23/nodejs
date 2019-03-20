const express = require('express');
const cors = require('cors');
const app = express();

//all origins that the server is willing to accept
const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
//function to configure cors options
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);