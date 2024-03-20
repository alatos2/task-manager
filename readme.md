#  CRUD App with MongoDB | Task Manager

Simple app to create, read, update and delete data from MongoDB

## Table of Contents

* [About](#crud-app-with-mongodb)
* [Required Features](#required-features)
* [Heroku Deployment](#heroku-deployment)
* [Routes Test with Postman](#routes-test-with-postman)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

## Required Features

* App can connect to the database.
* App can create payload { message: String, data: Objects }. 
* App can get the data created.
* App can update the data created.
* App can delete the created data.

## Heroku Deployment
* coming soon

## Routes Test with Postman
```shell
    {
        "name": "shake&bake",
        "completed": "false"
    }
```
| METHOD | DESCRIPTION                             | ENDPOINTS
| ------ | --------------------------------------- | -------------------------
| GET    | Get all data in the database            | `http://localhost:5000/api/v1/tasks`
| POST   | Store data in the database              | `http://localhost:5000/api/v1/tasks`
| PATCH  | Update data in the database             | `coming soon`
| DELETE | Delete data from the database           | `coming soon`

## Acknowledgements

* coming soon

## Author

* [Alabi Tosin](https://github.com/alatos2)

