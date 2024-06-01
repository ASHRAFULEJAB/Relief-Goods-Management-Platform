- Live Link:: https://relief-fund-management.netlify.app/

# Relief Goods Management Platform 


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

```
Response json

{
    "success": true,
    "message": "Login successful",
    "token": "<JWT token>"
}
```

#### POST `/api/auth/register`

Registers a new user.

Request json

```
{
    "name": "John",
    "email": "example@email.com",
    "password": "password"
}
```

Response json

```
{
"success": true,
"message": "User registered successfully"
}
```

### Supply Posts

### GET `/api/supply`

Retrieves all supply posts.

Response json

```
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

Request json

```
{
"title": "Clothing Supplies",
"category": "Clothing",
"amount": "500 units"
}
```

Response json

```
{
"success": true,
"message": "Supply post created successfully"
}
```

### PUT `/api/supply/:id`

Updates an existing supply post.

Request json

```
{
"title": "Updated Food Supplies",
"category": "Food",
"amount": "1500 units"
}
```

Response json

```
{
"success": true,
"message": "Supply post updated successfully"
}
```

### DELETE `/api/supply/:id`

Deletes a supply post.

Response json

```
{
"success": true,
"message": "Supply post deleted successfully"
}

```


Dependencies
bcrypt: Library for hashing passwords.
cors: Express middleware for enabling CORS.
dotenv: Loads environment variables from .env file.
express: Web framework for Node.js.
jsonwebtoken: Library for generating and verifying JWT tokens.
mongodb: MongoDB driver for Node.js.
nodemon: Utility for automatically restarting the server during development.
