# Martial Arts Gym Webkit 

This application was built to create an easily adjustable design so it can be fitted for different gym businesses.

## To Start

Use ``` npm start ``` in client folder for frontend.

Use ``` npm start ``` in backend folder for backend.

## Frontend 

--Inside ./client

The Frontend consists of React, React-Router, SASS, a UUID generator, and Typescript.

./client/src/app - Contains the header, body, footer components, and routes. Body changes depending on route while header/footer stay the same.

./client/src/app/body - Contais all the page content. Pages are located in folders (Ex: home, classes, about). In these folders are a page-level component and children components that make those pages.

## Backend 

--Inside ./backend

Not yet implemented in deployment. This is a NODEjs backend that connects to an AWS RDS database. 

### Routes

./backend/routes/AWS_CONNECTION - connects to AWS database

./backend/routes/createAccount - uses get and post requests and strings formed into MySQL Queries to send input to AWD for account creation.

./backend/routes/login - uses get and post requests and strings formed into MySQL Queries to find accounts in database.

