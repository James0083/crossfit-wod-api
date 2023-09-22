const express = require("express");
// const apicache = require("apicache");
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");
const workoutController = require("../controllers/workoutController");
const recordController = require("../controllers/recordController");

const router = express.Router();
// const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/workouts:
 *  get:
 *      tags:
 *        - Workouts
 *      parameters:
 *        - in: query
 *          name: mode
 *          schema:
 *              type: string
 *          description: The mode of a workout
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                                  example: OK
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      oneOf:
 *                                        - $ref: "#/components/schemas/Workout"
 *                                        - $ref: "#/components/schemas/Workout-2"
 *          5XX:
 *              description: FAILED
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status: 
 *                                  type: string
 *                                  example: FAILED
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      error:
 *                                          type: string 
 *                                          example: "Some error message"
 */
router.get("/", workoutController.getAllWorkouts);
// router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

/**
 * @openapi
 * /api/v1/workouts/{workoutId}:
 *  get:
 *      tags:
 *          - Workouts
 *      parameters:
 *        - in: path
 *          name: workoutId
 *          schema:
 *              type: string
 *          description: Id of a workout
 *          example: 4a3d9aaa-608c-49a7-a004-66305ad4ab50
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                                  example: OK
 *                              data:
 *                                  $ref: "#/components/schemas/Workout-2"
 *          400:
 *              description: FAILED
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                                  example: FAILED
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      error:
 *                                          type: string
 *                                          example: "Parameter ':workoutId' can not be empty"
 *          5XX:
 *              description: FAILED
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status: 
 *                                  type: string
 *                                  example: FAILED
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      error:
 *                                          type: string 
 *                                          example: "Some error message"
 */
router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);
// router.post("/", authenticate, authorize, workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
