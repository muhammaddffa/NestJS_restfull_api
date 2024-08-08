# Contact API Spec

## Create Contact

Endpoint : POST/api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Muhammad",
  "last_name": "daffa",
  "email": "daffa@examle.com",
  "phone": "234567890"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "first_name": "Muhammad",
    "last_name": "daffa",
    "email": "daffa@examle.com",
    "phone": "234567890"
  }
}
```

## Get Contact

Endpoint : GET/api/contacts/:contactId

Headers :

- Authorization : token

Response Body :

```json
{
  "data": {
    "id": 1,
    "first_name": "Muhammad",
    "last_name": "daffa",
    "email": "daffa@examle.com",
    "phone": "234567890"
  }
}
```

## Update Contact

Endpoint : PUT/api/contacts/:contactId

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Muhammad",
  "last_name": "daffa",
  "email": "daffa@examle.com",
  "phone": "234567890"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "first_name": "Muhammad",
    "last_name": "daffa",
    "email": "daffa@examle.com",
    "phone": "234567890"
  }
}
```

## Remove Contact

Endpoint : DELETE/api/contacts/:contactsId

Headers :

- Authorization : token

Response Body :

```json
{
  "data": "true"
}
```

## Search Contact

Endpoint : POST/api/contacts

Headers :

- Authorization : token

Query Params :

- name: string , contact firts_name or contact last_name, optional
- phone: string, contact phone, optional
- email: string, contact email, optional
- page: number, deafult 1,
- size: number, default 10

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Muhammad",
      "last_name": "daffa",
      "email": "daffa@examle.com",
      "phone": "234567890"
    },
     {
      "id": 2,
      "first_name": "Muhammad",
      "last_name": "daffa",
      "email": "daffa@examle.com",
      "phone": "234567890"
    }
  ],
  "pagging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```
