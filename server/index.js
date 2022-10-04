const express = require(`express`);
const cors = require(`cors`)

const server = express();


server.use(express.json());
server.use(cors());
const PORT = 4000;

const { getHouses, createHouse, updateHouse, deleteHouse } = require("./controller.js");

server.get("/api/Houses", getHouses);
server.post("/api/Houses", createHouse);
server.put("/api/Houses/:id", updateHouse);
server.delete("/api/Houses/:id", deleteHouse);

server.listen(PORT, () => { console.log(`Server is runnig on port: ${PORT}.`) });

