# begoproject

Bego is a web application that allows user to create their own start-up projects and connect them with people with same interest and location. Bego will also allow users to define tasks of a project, invite people with the same field interest, and rank the tasks.

### Prerequisites
Install mongo daemon
```
$ brew install mongodb
```

### Run the program

This app will run on localhost:3000
Set working directory to be begoproject and install any dependencies
```
$ npm install
```
```
$ npm start
```

Run localhost:3000 on web browsers.

## Running the tests
Ensure that the application is running on localhost:3000
```
$ npm start
```
Start mongo daemon
```
$ mongod
```
Run the test
```
$ npm test
```
## Deployment
Start Heroku
```
$ heroku login
$ heroku create [appname]
```
If you have access to Bego’s heroku credentials, 
```
$ heroku git:remote -a begoproject  
```
Otherwise, create new random appname
```
$ heroku create
```
Send your files to the new instance 
```
$ git push heroku master
```
Run the server
```
$ heroku ps:scale web=1
```
Check on the server status
```
$ heroku ps
```
Check web service by navigating the URL or typing
```
$ heroku open
```
* [Deployed on heroku](https://begoproject.herokuapp.com/)

## Built With

* Node.JS
* Express
* MongoDb

## Versioning

Version 1.0.0

## Contributors

* **Adi Santoso**
* **Amelita Putri Karunia**
