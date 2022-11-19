const redis = require("redis");
const client = redis.createClient();

client.connect();
client.on("connect", (err) => {
    console.log("Connection Successfully Done")
});

client.on("error", (err) => {
    console.log("error");
});

module.exports = client
