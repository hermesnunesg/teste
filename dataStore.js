let sessions = {};

function getSession(sessionId) {
    return sessions[sessionId];
}

function storeSession(sessionId, data) {
    sessions[sessionId] = data;
}

function removeSession(sessionId) {
    delete sessions[sessionId];
}

module.exports = { getSession, storeSession, removeSession };
