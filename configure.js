require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    openAiKey: process.env.OPENAI_KEY,
    googleApiKey: process.env.GOOGLE_API_KEY,
    azureApiKey: process.env.AZURE_API_KEY,
    loggingLevel: process.env.LOGGING_LEVEL || 'info'
};
