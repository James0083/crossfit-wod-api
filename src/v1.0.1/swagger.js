const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Crossfit WOD API", version: "1.0.1" },
    },
    apis: ["./src/v1.0.1/routes/workoutRoutes.js", "./src/v1.0.1/database/Workout.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Setup docs
const swaggerDocs = (app, port) => {
    app.use("/api/v1.0.1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1.0.1/docs.json", (req, res) => {
        res.setHeadler("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Version 1.0.1 Docs are available on http://localhost:${port}/api/v1.0.1/docs`
    );
};

module.exports = { swaggerDocs };