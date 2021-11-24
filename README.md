# READ ME

## Abstract

This project was made for applying on a test for Refera.

## Description

Welcome to Refera's Fullstack code challenge! The goal of this challenge is to create a web application to manage maintanence orders from Refera, following the **Acceptance criteria**. The frontend of application has only one page and the backend contains a simple REST API service and has a connection with a database. By the end of the challenge, we will be able to create new orders and list them through the web application that comunicates with our backend service to read and store the data in a database.

We use React and Django in our real application, feel comfortable to chose the appropriate technology you are familiar with. Elaborate briefly the architectural decisions, design patterns and frameworks you used on your solution.

## Acceptance criteria

- Provide clear instructions on how to run the application in development mode
- Provide clear instructions on how the application would run in a production environment
- Describe how you would implement an authentication layer for the web application (don't need to implement)
- RESTful API allowing CRUD and list operations on the orders
  - Endpoint to create/retrieve/update/delete order
  - Endpoint to list order
- RESTful API allowing CRUD operations on the categories
  - Endpoint to create/retrieve/update/delete category
  - Endpoint to list categories
- Database to store data from the following resources
  - Order
  - Category
- Describe how you would structure the database to account for
  - Real estate agency registration data
  - Company registration data
  - Contact registration data
  - Describe what needs to be changed on the API you implemeted
- One web page, following the low fidelity prototype presented on the **Resources**
  - Table with orders data, allowing the user to order the results by each column
  - Button to open modal to create new order
  - Allow row click to open modal to visualize order details
- Modal to input data to create new order
  - Form with appropriate inputs to handle each type of data
  - Allow selection of registered cateories from the database
  - Save button to hit backend service and store the data
- Modal to read only the order details

## What did I used?

### Frontend

- Reactjs
- Context api
- Custom hooks
- Styled-components
- Axios

### Backend

- Nestjs
- TypeORM

### Database

- SQLite

## Installation

Clone this repository  
`https://github.com/samuellevy/fullstack-challenge`

Install project dependencies

- For backend
  `cd backend && yarn`
- For frontend
  `cd frontend && yarn`

## Usage manuals

- [Frontend](frontend/README.md)
- [Backend](backend/README.md)

## How to run?

**Alternative 1**

- Open your terminal and execute  
  `sh install.sh && sh run.sh`

**Alternative 2**

- Open this folder in a terminal and execute  
  `cd backend && yarn start:dev`
- Open this folder in another terminal and execute  
  `cd frontend && yarn run`

## For production

**Backend**  
You can execute `npm run start:prod` using a Node container.

**Frontend**  
**STEP 1**

- Execute `yarn build`

**STEP 2**

- You can use `build/` folder has created and send to a server  
  Or
- use `yarn global add serve`
- `serve -s build`
