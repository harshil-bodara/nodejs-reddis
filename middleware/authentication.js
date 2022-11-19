exports.cache = (req, res, next) => {
    try {
        const Token = "Dynamic Token"
        const data = JSON.parse(Buffer.from(Token, 'base64').toString())
        req.user = data.passport.user;
        next();
    } catch (err) {
        res.send({
            error: err.message,
            status: 404
        })
    }
}
