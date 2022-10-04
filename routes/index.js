
const postRouter = require("../routes/routes.post");
const detailRouter = require("../routes/routes.detail");

function route(app) {
    app.use((req,res,next)=> {
        console.log(`${req.method} ${req.url}`);
        next();
    });

    app.use('/', postRouter);

    app.use('/detail', detailRouter);

}

module.exports = route;