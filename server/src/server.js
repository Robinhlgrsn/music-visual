const http = require('http');
const app = require('./app');
var history = require('connect-history-api-fallback');
const PORT = 3000;
const server = http.createServer(app);

app.use(history());
server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
});
