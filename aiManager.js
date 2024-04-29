const OpenAI = require('./integrations/OpenAI');
const GoogleAI = require('./integrations/GoogleAI');
const AzureAI = require('./integrations/AzureAI');
const config = require('./config');

const aiClients = {
    openai: new OpenAI(config.openAiKey),
    google: new GoogleAI(config.googleApiKey),
    azure: new AzureAI(config.azureApiKey)
};

function getResponse(aiType, message) {
    const client = aiClients[aiType];
    if (!client) {
        throw new Error(`Unsupported AI type: ${aiType}`);
    }
    return client.generateResponse(message);
}

module.exports = { getResponse };
