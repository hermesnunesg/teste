const express = require('express');
const messageHandler = require('./messageHandler');
const router = express.Router();

router.post('/message', async (req, res) => {
    try {
        const { sessionId, message } = req.body;
        const response = await messageHandler.handleMessage(sessionId, message);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
