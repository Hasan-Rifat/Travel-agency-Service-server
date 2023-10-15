### Live Link: https://build-a-book-catallog-backend.onrender.com

### Application Routes:

#### User

- /api/v1/auth/signup (POST)
- /api/v1/auth/signin (POST)
- /api/v1/users (GET)
- /api/v1/users/:id (Single GET) Include an id that is saved in your database
- /api/v1/users/:id (PATCH)
- /api/v1/users/:id (DELETE) Include an id that is saved in your database
- /api/v1/profile (GET) Profile

### Category

- /api/v1/categories/create-category (POST)
- /api/v1/categories (GET)
- /api/v1/categories/:id (Single GET) Include an id that is saved in your database
- /api/v1/categories/:id (PATCH)
- /api/v1/categories/:id (DELETE) Include an id that is saved in your database

### Books

- /api/v1/books/create-book (POST)
- /api/v1/books (GET)
- /api/v1/books/:categoryId/category (GET)
- /api/v1/books/:id (GET)
- /api/v1/books/:id (PATCH)
- /api/v1/books/:id (DELETE)

### Orders

- /api/v1/orders/create-order (POST)
- /api/v1/orders (GET)
- /api/v1/orders/:orderId (GET Order For Admin)
- api/v1/orders/449b28b6-f9eb-430b-b248-aaf627714a71/customer (GET Order For customer)
# Travel-agency-Service-server
# Travel-agency-Service-server
