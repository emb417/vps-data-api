# vps-data-api

Data service providing REST API access to VPS data

## Endpoints

### 1. GET /

Returns a message indicating that the VPS Data Service is up and running.

- Example Usage

```bash
curl http://localhost:5080/api/v1/
```

- Response:

```json
"VPS Data Service is up and running..."
```

### 2. GET /games

Returns a list of all games in the VPS data.

- Example Usage

```bash
curl http://localhost:5080/api/v1/games
```

- Response:

```json
[
  {
    "name": "Game 1",
    "tableFiles": [...]
  },
  {
    "name": "Game 2",
    "tableFiles": [...]
  },
  ...
]
```

### 3. GET /games/:name

Returns a list of games that match the specified name. The name is case-insensitive and supports partial matches.

- Example Usage

```bash
curl http://localhost:5080/api/v1/games/Game%201
```

- Response:

```json
[
  {
    "name": "Game 1",
    "tableFiles": [...]
  }
]
```

### 4. GET /games/tables/:vpsId

Returns a single game that has a table file with the specified VPS ID. If no game is found, an empty object is returned.

- Example Usage

```bash
curl http://localhost:5080/api/v1/games/tables/12345
```

- Response:

```json
{
  "name": "Game 1",
  "table": {
    "id": 12345,
    ...
  }
}
```

Note that I've assumed the API is running on `http://localhost:5080/api/v1/` based on the `src/index.js` file. You may need to adjust the URL accordingly.
