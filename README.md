<h1 align="center"><B> MVC Meal Logger API</B></h1> 
The purpose of the application is to demonstrate a basic, clean backend API using the MVC architecture.

This minimalist backend application is built with Node.js and Express, featuring a clean architecture with the MVC (Model-View-Controller) pattern, including models, controllers, and routes.
It provides a lightweight foundational structure for handling simple data operations.

The application is a meal logger, enabling users to log their meals into the app and edit them, it has 2 objects: users and meals.
<br>

<h2><B>Key Components:</B></h2> 

- **Routes:** Establishes the API endpoints and connects them to the corresponding controllers.
- **Controllers:** Handles the business logic and orchestrates data flow.
- **Models:** Defines the data structure and interacts with the database.
- **Middlewares:** Implement additional functionalities in the request-response cycle. </B>
- **Server:** `server.js` - The entry point for starting the server.
- **Application Configuration:** `app.js` - Initializes and configures the Express application.
- **Package Configuration:** `package.json` - Describes your Node.js project, including dependencies and scripts.

<h2><B>Usage:</B></h2> 

* Easily extendable for small to medium-sized projects.

* Provides a structured approach to handling data with separation of concerns.
  
* Ideal for quick prototyping and building lightweight APIs.

<h2><B>Getting Started:</B></h2> 

1. Clone the repository.

2. Install dependencies using npm install.
   
4. Configure your database connection.
   
6. Start the server with npm start.

<h2><B>Project Structure:</B></h2> 

`├── models/` <br>             
               
`├── controllers/`

`├── routes/`

`├── app.js`

`├── server.js`

`├── package.json` 

<h2><B>API Endpoints:</B></h2> 
<B>'/api/meals'</B> 

<B>'/api/users'</B>

(GET, POST, PUT, DELETE): Perform basic CRUD operations.

<h2><B>Contributing:</B></h2> 
Feel free to contribute and enhance the simplicity and functionality of this project. Fork the repository, make your changes, and submit a pull request.

<h2><B>License:</B></h2> 
This project is licensed under the MIT License.
