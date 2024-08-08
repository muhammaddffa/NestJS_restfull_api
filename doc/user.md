# User API Spec

## Register User

Endpoint: POST/api/users

Request Body:

```json
{
  "username": "Muhammad",
  "password": "daffa",
  "name": "Muhammad Daffa"
}
```

Response Body (success) :

```json
{
  "data": {
    "username": "Muhammad",
    "name": "daffa"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "username is already"
}
```

# Login User

Endpoint: POST/api/users/login

Request Body:

```json
{
  "username": "Muhammad",
  "password": "daffa",
  "name": "Muhammad Daffa"
}
```

Response Body (success) :

```json
{
  "data": {
    "username": "Muhammad",
    "name": "daffa",
    "token": "session_id_generated"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "username is already"
}
```

## Get User

Endpoint: GET/api/users/current

Headers :

- Authorization: token

Response Body (success) :

```json
{
    "data":{
        "username": "Muhammad",
        "name": "daffa",
`    }
}
```

Response Body (failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint: PATCH/api/current

Headers :

- Auhtorization: token

Request Body:

```json
{
  "password": "daffa", //optional if want to change password
  "name": "Muhammad Daffa" //optinonal if want to change name
}
```

Response Body (success) :

```json
{
  "data": {
    "username": "Muhammad",
    "name": "daffa"
  }
}
```

Response Body (failed) :

```json
{
  "errors": "username is already"
}
```

## Delete User

Endpoint: DELETE/api/current

Headers :

- Auhtorization: token

Request Body:

```json
{
  "password": "daffa", //optional if want to change password
  "name": "Muhammad Daffa" //optinonal if want to change name
}
```

Response Body (success) :

```json
{
  "data": "true"
}
```
