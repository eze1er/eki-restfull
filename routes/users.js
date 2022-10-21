const express = require('express')

const router = express.Router();


router.get('/', (req, res) => { 
  res.send('We are on users')
})

router.get("/tim", (req, res) => {
  res.send("We are in specific user");
});

module.exports = router;