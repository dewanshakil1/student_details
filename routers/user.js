const express = require('express');
const multer = require('multer');
const path = require('path');
const {
	showUserFrom,
	storeUserData,
} = require('../Controllers/userController');
const route = express.Router();
// multer setup
const userPhoto = multer.diskStorage({
	destination: (req, file, cb) => {
		console.log(file);
		if (
			file.mimetype == 'image/jpeg' ||
			file.mimetype == 'image/jpg' ||
			file.mimetype == 'image/png' ||
			file.mimetype == 'image/gif' ||
			file.mimetype == 'image/webp' ||
			file.mimetype == 'application/pdf'
		) {
			cb(null, path.join(__dirname, '../public/images/'));
		} else {
			console.log('invalied');
		}
	},
	filename: (req, file, cb) => {
		cb(
			null,
			Date.now() +
				'_' +
				Math.floor(Math.random() * 10000000) +
				'_' +
				file.originalname
		);
	},
});
const userMulter = multer({
	storage: userPhoto,
}).array('photo');
// router
route.get('/', showUserFrom);
route.post('/', userMulter, storeUserData);

module.exports = route;
