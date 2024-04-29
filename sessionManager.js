const dataStore = require('./dataStore');

function getSession(sessionId) {
    return dataStore.getSession(sessionId);
}

function createSession(sessionId, initialData) {
    dataStore.storeSession(sessionId, initialData);
}

function endSession(sessionId) {
    dataStore.removeSession(sessionId);
}

module.exports = { getSession, createSession, endSession };
