const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
	next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/hello', (req, res) => res.send('hoho'));

app.get('/api/resume', (req, res) => {
	res.contentType("application/pdf");
	res.download(path.join(__dirname, 'static', 'DyaneAvalosResume.pdf'), (err) => {
		console.log('callback called from res.download');
		if (err) {
			console.error(`new error: ${err}`);
		} else {
			console.log('success');
		}

		res.headersSent = true;
	});
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

exports.app = functions.https.onRequest(app);
