# Welcome to the Workout Log!

This is the server side of a user generated workout log. It follows the MVC pattern and uses Postgres as the database management system. This log also utilizes key concepts such as session tokens and password encryption. Please see the below images of the different endpoints.

# Endpoints

### User register: POST http://<span></span>localhost:3000/user/register
![user-register](https://user-images.githubusercontent.com/73909880/106180605-86260b80-616a-11eb-8d11-5c95d2637e6e.png)

### User login: POST http://<span></span>localhost:3000/user/login
![user-login](https://user-images.githubusercontent.com/73909880/106180624-89b99280-616a-11eb-947e-013ebc0e0c6c.png)

### Log create: POST http://<span></span>localhost:3000/log
![log-create](https://user-images.githubusercontent.com/73909880/106180632-8d4d1980-616a-11eb-9af0-b5a6d02dbc02.png)

### Get all logs for individual user: GET http://<span></span>localhost:3000/log
![user-all-logs](https://user-images.githubusercontent.com/73909880/106180642-90e0a080-616a-11eb-83f6-ecebfaabd082.png)

### Get logs by ID: GET http://<span></span>localhost:3000/log/id
![user-logs-id](https://user-images.githubusercontent.com/73909880/106180649-9342fa80-616a-11eb-8d71-e7025179c372.png)

### Edit a log: PUT: http://<span></span>localhost:3000/log/id
![log-edit](https://user-images.githubusercontent.com/73909880/106182309-a8208d80-616c-11eb-8393-e9be43503e4f.png)

### Delete a log: DELETE: http://<span></span>localhost:3000/log/id
![log-delete](https://user-images.githubusercontent.com/73909880/106182999-a60afe80-616d-11eb-8f4e-87a8995cfc6f.png)
