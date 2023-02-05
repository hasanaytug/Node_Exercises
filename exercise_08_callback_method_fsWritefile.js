const fs = require("fs");

const data = "This exercise is done!";

fs.writeFile("message.txt", data, "utf8", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
