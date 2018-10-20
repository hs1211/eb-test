const router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    message: 'Node-Express-Sequelize Server in Prod'
  });
});


module.exports = router;