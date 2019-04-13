const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/plastic`;
const secret = "secret";

module.exports = { port, secret, dbURI };
