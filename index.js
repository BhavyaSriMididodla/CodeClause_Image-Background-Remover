var request = require("request");
var fs = require("fs");

request.post(
  {
    url: "https://api.remove.bg/v1.0/removebg",
    formData: {
      image_url:
        "https://variety.com/wp-content/uploads/2022/06/Minions-The-Rise-of-Gru.jpg?w=681&h=383&crop=1",

      size: "auto",
    },
    headers: {
      "X-Api-Key": "hwRdErFLPTCP16gueiV9QR13",
    },
    encoding: null,
  },
  function (error, response, body) {
    if (error)
      return console.error(
        "Request Failed Because Invalid URL or file:",
        error
      );

    if (response.statusCode != 200)
      return console.error(
        "Error:",
        response.statusCode,
        body.toString("utf8")
      );

    fs.writeFileSync("./removed.png", body);
  }
);
