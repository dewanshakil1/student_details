const nodeMaliler = require('nodemailer');
const showUserFrom = (req, res) => {
	res.render('users/index');
};
const storeUserData = (req, res) => {
	// create a transport
	const transport = nodeMaliler.createTransport({
		host: 'smtp.gmail.com',
		post: '578',
		auth: {
			user: 'dewanshakil88@gmail.com',
			pass: 'ihppyfjayudhnbcs',
		},
	});
	transport.sendMail({
		from: 'dewanshakil88@gmail.com',
		to: req.body.email,
		subject: 'email confermaition',
		text: `hi ${req.body.name} welcome to our page`,
	});
	res.json(req.body);
};
module.exports = {
	showUserFrom,
	storeUserData,
};
