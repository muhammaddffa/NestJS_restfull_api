# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:contactdId/addresss

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "jalan panggung",
  "city": "Tegal",
  "province": "Jawa Tengah",
  "country": "Indonesia",
  "postal_code": "12334"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "street": "jalan panggung",
    "city": "Tegal",
    "province": "Jawa Tengah",
    "country": "Indonesia",
    "postal_code": "12334"
  }
}
```

## Get Address

Endpoint : GET /api/contacts/:contactdId/addresss/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "jalan panggung",
  "city": "Tegal",
  "province": "Jawa Tengah",
  "country": "Indonesia",
  "postal_code": "12334"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "street": "jalan panggung",
    "city": "Tegal",
    "province": "Jawa Tengah",
    "country": "Indonesia",
    "postal_code": "12334"
  }
}
```

## Update Address

Endpoint : PUT /api/contacts/:contactdId/addresss/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "jalan panggung",
  "city": "Tegal",
  "province": "Jawa Tengah",
  "country": "Indonesia",
  "postal_code": "12334"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "street": "jalan panggung",
    "city": "Tegal",
    "province": "Jawa Tengah",
    "country": "Indonesia",
    "postal_code": "12334"
  }
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:contactdId/addresss/:addressId

Headers :

- Authorization : token

Response Body :

```json
{
  "data": "true"
}
```

## List Address

Endpoint : GET /api/contacts/:contactdId/addresss

Headers :

- Authorization : token

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "street": "jalan panggung",
      "city": "Tegal",
      "province": "Jawa Tengah",
      "country": "Indonesia",
      "postal_code": "12334"
    },
    {
      "id": 2,
      "street": "jalan panggung",
      "city": "Tegal",
      "province": "Jawa Tengah",
      "country": "Indonesia",
      "postal_code": "12334"
    }
  ]
}
```
