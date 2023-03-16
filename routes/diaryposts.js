var express = require('express');
var router = express.Router();
const diarypostModel = require('../models/diarypost')
const userModel = require('../models/users')

/* GET users listing. */
router.get('/', async (req, res) => {

  const diaryposts = await diarypostModel.find()
  res.status(200).json(diaryposts)
});

router.post('/', async (req, res) => {

  const newDiarypost = await diarypostModel.create(req.body)

  const username = req.body.username;

  const user = await userModel.findOne({
    username: username
  })

  user.diary_post.push(newDiarypost._id)
  await user.save()

  res.status(201).json(newDiarypost)

});

module.exports = router;
