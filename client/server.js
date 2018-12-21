const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
	console.log(`==> API Server now listening on PORT ${PORT}!`)
});


