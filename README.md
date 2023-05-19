# Task Management API

This repository contains the code for a Task Management API. The API allows you to create, read, update, and delete tasks.

## Prerequisites

Before running the API, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-management-api.git
   ```

2. **Install the dependencies:**

   ```
   cd task-management-api
   npm install
   ```

3. **Set up the environment variables:**

   Create a .env file in the root directory.
   Add the following variables to the .env file:

   ```
   DB_PASSWORD=your-mongodb-password
   ```

4. **Start the API server:**

   ```
   npm start
   ```

   The API server will start running on http://localhost:3000.

## API Endpoints

### POST /tasks: Create a new task.

### GET /tasks: Get all tasks.

### PUT /tasks/:taskId: Update a task by ID.

### DELETE /tasks/:taskId: Delete a task by ID.

For detailed information on the API endpoints, refer to the API Documentation.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgements
Express - Fast, unopinionated, minimalist web framework for Node.js.
Mongoose - Elegant MongoDB object modeling for Node.js.
dotenv - Loads environment variables from a .env file into process.env.
OpenAPI Specification - Open standard for defining and documenting APIs.

# Documentation

## API Endpoints

### Create a Task

- Method: POST
- URL: /tasks
- Request Body:
  - title (string, required): The title of the task.
  - description (string): The description of the task.
  - completed (boolean): The completion status of the task.
  - deadline (string): The deadline of the task.
  - urgency (string): The urgency level of the task.
- Success Response:
  - Status Code: 201
  - Response Body: JSON object representing the created task.
- Error Response:
  - Status Code: 500
  - Response Body: JSON object with an error message.

### Get All Tasks

- Method: GET
- URL: /tasks
- Success Response:
  - Status Code: 200
  - Response Body: JSON array containing all tasks.
- Error Response:
  - Status Code: 500
  - Response Body: JSON object with an error message.

### Update a Task

- Method: PUT
- URL: /tasks/:taskId
- URL Parameters:
  - taskId (string, required): The ID of the task to update.
- Request Body: JSON object containing the fields to update.
- Success Response:
  -Status Code: 200
  - Response Body: JSON object representing the updated task.
- Error Response:
  -Status Code: 500
  -Response Body: JSON object with an error message.

### Delete a Task

- Method: DELETE
- URL: /tasks/:taskId
- URL Parameters:
  - taskId (string, required): The ID of the task to delete.
- Success Response:
  - Status Code: 200
  - Response Body: JSON object representing the deleted task.
- Error Response:
  - Status Code: 500
  - Response Body: JSON object with an error message.

## Running the API

1. Ensure that you have Node.js and MongoDB installed.
2. Connect to your MongoDB database by setting up the appropriate environment variables.
3. Start the API server by running the command node app.js or npm start.
4. The API will be accessible at http://localhost:3000.

Please note that you may need to customize the code and configuration based on your specific needs and environment.

Feel free to further document the API with additional details, such as authentication, request/response examples, and any other relevant information for your users.
