# Random Quotes OOP with API

Welcome to the Random Quotes app.
This project consist of a client-side Vanilla JavaScript app and server-side Express Node.js app.

## Running the App in Development mode

### Run server

1. Navigate to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependencies by running following command:
   `npm install`
5. Run server in the development mode with hot reload feature:
   `npm run dev`
6. Server will be running at the http://localhost:3000

### Run client

1. Open new terminal window in the root of the project
2. Run client in the development mode with hot reload:
   `npx live-server client`
3. Client will be running at the http://localhost:8080

## Running the App in Production mode

### Run server

1. Navigate to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`
4. Install server dependencies by running following command:
   `npm install`
5. Run server in the production mode with hot reload feature:
   `npm start`
6. Configure hosting server where you run application to forward all requests to the
   http://localhost:3000
7. Take assigned by the hosting provider URL for your backend API server.
   For example https://random-quotes-api.com

### Run client

1. There no need to build the client as it already contents HTML, CSS and JS files.
2. In the `client/src/config.js` replace http://localhost:3000 with URL assigned to the server API in the step 7. of server section. For example https://random-quotes-api.com
3. Host all client files from the `client` subfolder on the public web server
4. Get assigned by the hosting provider URL for your client frontend application. For example https://random-quotes-frontend.com
5. Open https://random-quotes-frontend.com in the web browser.
