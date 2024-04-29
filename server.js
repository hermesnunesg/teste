const express = require('express');
const apiRoutes = require('./apiRoutes');
const errorHandler = require('./errorHandler');

function start(port) {
    const app = express();
    app.use(express.json());

    app.use('/api', apiRoutes);

    app.use(errorHandler.handle);
    
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = { start };
