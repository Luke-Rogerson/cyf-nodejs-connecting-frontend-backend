# cyf-nodejs-connecting-frontend-backend

This is an example of connecting a frontend React app to a backend Node.js Express server.   

It was created for the [CodeYourFuture Node.js module](https://syllabus.codeyourfuture.io/node/index)

You can see an example of a component doing a POST request in `Count` and a GET request in `UsersList`.

⚠️ **Please note:** you need to be running Node 16. This code uses [Node.js 16.x.x ES6 modules](https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules).

### Getting started
1. Clone the repo
2. `cd client && npm i` to install React app dependencies
3. `cd server && npm i` to install Node/Express app dependencies
4. Run `npm start` in the `server` folder. The server will launch on http://localhost:8000
5. Run `npm start` in the `client` folder. The React app will start on http://localhost:3000
