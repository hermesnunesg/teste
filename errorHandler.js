function handle(error, req, res, next) {
    res.status(500).json({ error: error.toString() });
}

module.exports = { handle };
