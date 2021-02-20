var express = require('express');
var router = express.Router();
var UserVal = require('../models/User_val');

router.get('/', (req, res) => {
  res.send('Hi');
});

router.post('/', async (req, res) => {
  try {
    const newUser = new UserVal({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
      company: req.body.company
    });

    const post = await newUser.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
