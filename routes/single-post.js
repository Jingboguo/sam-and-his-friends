const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/:id', (req, res) => {
	res.render('singlePost', { isSinglePost: true });
});

module.exports = router;
