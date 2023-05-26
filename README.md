# ElifTech

## Description
On the client side, technologies such as TypeScript, React, Redux-toolkit, Redux-persist, React-router-dom, React-hook-form, React-icons and React-hot-toast were used. And the server side was based on Nest.js, MongoDB + Mongoose + the project was placed in a docker container and the instructions were described in the Мakefile.

## Server
To start the server, you need to follow these instructions:
* Clone repo:
```
git clone https://github.com/mamamamamaa/elif_tech_back.git
```
* Initialize the project:
```
npm install \ yarn install
```
* Create `.env` file, add the uri of your Mongo database and port:
```
PORT=<your_port>
DB=<your_uri>
```
* Start server:
```
npm run start:dev \ yarn start:dev
```
