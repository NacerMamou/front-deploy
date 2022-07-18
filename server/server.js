const http = require("http");
const PORT = 8015;
const app = require("./app");

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log("Server Started", `Listening on port ${PORT} ...`);
});
