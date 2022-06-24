# Weather Journal API

An API to store weather information about a city in your travel journal.

## Endpoints

### /api/search

---

#### POST /api/search

This endpoint will retrieve all the current weather information about a city from the open weather API.

##### Payload

```json
{
  "city": "London"
}
```

### /api/journals

---

#### GET /api/journals

This endpoint will retrieve all the travel journals from the MySQL database.

#### GET /api/journals/:id

This endpoint will retrieve a specific travel journal from the MySQL database.

#### POST /api/journals

This endpoint will create a new travel journal in the MySQL database.

##### Payload

```json
{
  "name": "Summer Trip",
  "imageUrl": "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "startDate": "Mon Jun 20 2022 18:06:28 GMT+0100 (British Summer Time)",
  "endDate": "Mon Jun 27 2022 18:06:28 GMT+0100 (British Summer Time)"
}
```

#### PUT /api/journals/:id

This endpoint will update specific fields in a journal in the MySQL database.

```json
{
  "name": "Summer Trip 2022",
  "imageUrl": "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "startDate": "Mon Jun 20 2022 18:06:28 GMT+0100 (British Summer Time)",
  "endDate": "Mon Jun 27 2022 18:06:28 GMT+0100 (British Summer Time)"
}
```

#### DELETE /api/journals/:id

This endpoint will delete a specific journal in the MySQL database.

### /api/journals/:id/cities

---

#### GET /api/journals/:id/cities

This endpoint will retrieve all the weather information of the cities in a specific journal from the MySQL database.

#### POST /api/journals/:id/cities

This endpoint will add a new city's weather information to a specific journal in the MySQL database.

```json
{
  "name": "London",
  "temperature": 25,
  "humidity": 10,
  "windSpeed": 20,
  "description": "Clear skies",
  "countryCode": "gb"
}
```

#### DELETE /api/journals/:id/cities/:id

This endpoint will remove a specific city from a specific journal in the MySQL database.
