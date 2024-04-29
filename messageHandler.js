const aiManager = require('./aiManager');
const sessionManager = require('./sessionManager');

async function handleMessage(sessionId, message) {
    const session = sessionManager.getSession(sessionId);
    if (!session) {
        sessionManager.createSession(sessionId, { messages: [] });
    }
    const response = await aiManager.getResponse(session.aiType, message);
    session.messages.push({ message, response });
    return response;
}

module.exports = { handleMessage };
