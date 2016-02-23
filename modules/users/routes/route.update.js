const express = require('express');
const router = express.Router();

const url = '/';
const method = 'put';

const ROUTER = function (action, Model) {
    return router[method](url, (req, res) => {
        Model(req, res);
    });
};

module.exports = ROUTER;