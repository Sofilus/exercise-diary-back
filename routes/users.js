var express = require('express');
var router = express.Router();
const userModel = require('../models/users')

router.post('/', async (req, res) => {

    const newUser = await userModel.create(req.body)
    res.status(201).json(newUser)
  
  });

module.exports = router;