## Description

Backend API created with [Nest](https://github.com/nestjs/nest) framework, using TypeScript and SQLite.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Curls

### ORDERS

_List all orders_

```curl
curl --location --request GET 'http://localhost:3333/orders'
```

_Create new order_

```curl
curl --location --request POST 'http://localhost:3333/orders' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contactName": "Samuel Levy",
    "contactPhone": "21969430426",
    "agency": "SL LTDA",
    "orderDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "company": "NOKENGO",
    "category": "tech",
    "deadline": "2021/12/30"
}'
```

_Read a order_

```curl
curl --location --request GET 'http://localhost:3333/orders/1'
```

_Update a order_

```curl
curl --location --request PATCH 'http://localhost:3333/orders/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contactName": "Samuel Levy",
    "contactPhone": "21969430426",
    "agency": "SL LTDA",
    "orderDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "company": "NOKENGO",
    "category": "tech",
    "deadline": "2021/12/30"
}'
```

_Delete order_

```curl
curl --location --request DELETE 'http://localhost:3333/orders/1' \
--data-raw ''
```

### Categories

_List all categories_

```curl
curl --location --request GET 'http://localhost:3333/categories'
```

_Create new order_

```curl
curl --location --request POST 'http://localhost:3333/categories' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "technology",
}'
```

_Update a category_

```curl
curl --location --request PATCH 'http://localhost:3333/categories/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "technology",
}'
```

_Delete category_

```curl
curl --location --request DELETE 'http://localhost:3333/categories/1' \
--data-raw ''
```
