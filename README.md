# ElifTech

## Description
On the client side, technologies such as TypeScript, React, Redux-toolkit, Redux-persist, React-router-dom, React-hook-form, React-icons and React-hot-toast were used.

And the server side was based on Nest.js, MongoDB + Mongoose + the project was placed in a docker container and the instructions were described in the Мakefile.

The server was rendered and the client was netlify. You can visit the live page at this link --> https://storied-llama-bb013b.netlify.app/

Server repo --> https://github.com/mamamamamaa/elif_tech_back

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

## Client
To start the client, you need to follow these instructions:
* Clone repo:
```
git clone [https://github.com/mamamamamaa/elif_tech_back.git](https://github.com/mamamamamaa/elif_tech.git)
```
* Initialize the project:
```
npm install \ yarn install
```
* Create `.env` file and add the url of your server:
```
VITE_SERVER=<your_server_url>
```
* Start client:
```
npm run dev \ yarn dev
```
