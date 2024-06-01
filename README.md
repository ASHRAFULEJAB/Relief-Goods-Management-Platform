- Live Link:: https://relief-fund-management.netlify.app/

# Relief Goods Management Platform
## Project Overview

The Distribution of Relief Goods Management Platform is designed to facilitate the coordination and management of relief goods distribution in post-disaster scenarios. Using modern web technologies, this platform aims to ensure timely and effective delivery of relief goods to affected communities.

## Installation

### Clone the repository:

```sh
git clone https://github.com/your-repository-url.git
cd your-repository-directory
```

### Install dependencies:
```sh

npm install
Rename .env.example to .env:
mv .env.example .env
```
### Run the server:
```sh

npm run dev
```
### Before Pushing Code
### Before pushing your code to the remote repository, ensure that you have run the following command in your terminal (Git Bash):

```sh
rm -rf .git
```
## Configuration
### Environment Variables
* PORT: Port number the server listens on. Default: 3000
* MONGODB_URI: URI for MongoDB database.
* JWT_SECRET: Secret key for JWT token generation.
* EXPIRES_IN: Token expiration time.

## User EndPoints

### POST `/api/auth/login`

Authenticates a user and returns a JWT token.

#### Request

```json
{
  "email": "example@email.com",
  "password": "password"
}
```

### Response json

```json
{
    "success": true,
    "message": "Login successful",
    "token": "<JWT token>"
}
```

#### POST `/api/auth/register`

Registers a new user.

### Request json

```json
{
    "name": "John",
    "email": "example@email.com",
    "password": "password"
}
```

### Response json

```json
{
"success": true,
"message": "User registered successfully"
}
```

### Supply Posts

### GET `/api/supply`

Retrieves all supply posts.

### Response json

```json
[
{
"id": 1,
"title": "Food Supplies",
"category": "Food",
"amount": "1000 units"
},
{
"id": 2,
"title": "Shelter Kits",
"category": "Shelter",
"amount": "50 kits"
},
...
]
```

### POST `/api/supply`

Creates a new supply post.

### Request json

```json
{
"title": "Clothing Supplies",
"category": "Clothing",
"amount": "500 units"
}
```

### Response json

```json
{
"success": true,
"message": "Supply post created successfully"
}
```

### PUT `/api/supply/:id`

Updates an existing supply post.

### Request json

```json
{
"title": "Updated Food Supplies",
"category": "Food",
"amount": "1500 units"
}
```

### Response json

```json
{
"success": true,
"message": "Supply post updated successfully"
}
```

### DELETE `/api/supply/:id`

Deletes a supply post.

### Response json

```json
{
"success": true,
"message": "Supply post deleted successfully"
}

```

#### Dependencies
- bcrypt: Library for hashing passwords.
- cors: Express middleware for enabling CORS.
- dotenv: Loads environment variables from .env file.
- express: Web framework for Node.js.
- jsonwebtoken: Library for generating and verifying JWT tokens.
- mongodb: MongoDB driver for Node.js.
- nodemon: Utility for automatically restarting the server during development.
