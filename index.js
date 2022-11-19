const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const app = express();
require('./database/connection');
const DemoRoute = require("./routes/demoRoute");

const RedisStore = connectRedis(session)
const client = redis.createClient();


app.use(session({
    store: new RedisStore({ client: client }),
    secret: 'secret$%^134',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
    }
}))


app.use(express.json())

app.use("/auth", DemoRoute);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});
