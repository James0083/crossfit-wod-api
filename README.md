# Description

## crossfit-wod-api
First Practice of Node.js(freeCodeCamp REST API Design)

Clone Coding of  [REST API Design Best Practices Handbook – How to Build a REST API with JavaScript, Node.js, and Express.js](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/#our-example-project)

CRUD project 

# Running the app

```bash
# development
$ npm run dev
```

# API docs

http://localhost:3000/api/v1.0.1/docs

# Get API URI

[Get All workouts](http://localhost:3000/api/v1.0.1/workouts) (http://<hi>localhost:3000/api/v1.0.1/workouts)    
[Get One Data by ID example](http://localhost:3000/api/v1.0.1/workouts/4a3d9aaa-608c-49a7-a004-66305ad4ab50) (http://<hi>localhost:3000/api/v1.0.1/workouts/:workoutId)    
Create New Workout (POST http://<hi>localhost:3000/api/v1.0.1/workouts/)
Update One Workout (PATCH http://<hi>localhost:3000/api/v1.0.1/workouts/:workoutId)
Delete One Workout (DELETE http://<hi>localhost:3000/api/v1.0.1/workouts/:workoutId)

#### create/update Workout Body example
```
{
  "name": "Core Buster",
  "mode": "AMRAP 20",
  "equipment": [
    "rack",
    "barbell",
    "abmat"
  ],
  "exercises": [
    "15 toes to bars",
    "10 thrusters",
    "30 abmat sit-ups"
  ],
  "trainerTips": [
    "Split your toes to bars into two sets maximum",
    "Go unbroken on the thrusters",
    "Take the abmat sit-ups as a chance to normalize your breath"
  ]
}
```


