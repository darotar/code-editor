const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

require('./routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
