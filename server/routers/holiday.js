const router = require('express').Router();
const validator = require('validator');
const { Holiday } = require('../models');

router.route('/')
  // Gets all inventories
  .get(async function (req, res) {
    const all = await Holiday.findAll();

    const ret = {
      code: 0,
      data:{ 
        holidays: all,
      }
    }
    res.json(ret);
  });


module.exports = router;








