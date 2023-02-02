import { createServer } from "node:http";

const martianObj = {
  id: "001",
  name: "Martian Man Hunter",
  status: "Alive",
  species: "Martian",
  gender: "Male",
  location: {
    name: "Mars",
  },
};

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify(martianObj);

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
