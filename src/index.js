const express = require("express");
const bodyParser = require("body-parser");
const apicache = require("apicache");
// const v1Router = require("./v1/routes");
// const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
// const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const v1_0_1WorkoutRouter = require("./v1.0.1/routes/workoutRoutes");
const { swaggerDocs: V1_0_1SwaggerDocs } = require("./v1.0.1/swagger");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

/*
app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});
*/

app.use(bodyParser.json());
app.use(cache("2 minutes"));
// app.use("/api/v1", v1Router);
// app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1.0.1/workouts", v1_0_1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    // V1SwaggerDocs(app, PORT);
    V1_0_1SwaggerDocs(app, PORT);
})