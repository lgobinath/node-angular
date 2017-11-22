# Angular to Node HTTP GET

A sample project to demostrate HTTP request from Angular to web service running on Node server

------

Start the Node server using the following commands:
```
cd server
node server.js
```
To test the server, send a GET request to `https://node-angular-lgobinath.c9users.io:8081/api`

Start the Angular project using the following commands in another terminal
```
cd client
npm start
```
If you do not like `npm start`, use the following command instead:
```
ng serve --proxy-config proxy.conf.json --host 0.0.0.0 --port 8080 --disableHostCheck
```

See the [commits](https://github.com/lgobinath/node-angular/commits/master) for step by step guidance: