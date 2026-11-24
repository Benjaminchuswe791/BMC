# Campus Maintenance Requests API

ICT 251 Activity 7 backend. The API uses Express and PostgreSQL and starts with nine fictional maintenance requests on a fresh database.

## Run locally

1. Create a PostgreSQL database named `maintenance` and use a database account that can create tables in it.
2. Copy `.env.example` to `.env`. Set `DATABASE_URL` to the connection string for that database.
3. Run `npm ci`, then `npm start`.
4. Open [the API guide](http://localhost:3000/) for the endpoint list and sample request. Check [database readiness](http://localhost:3000/health) and [the seed records](http://localhost:3000/api/records).

The server creates and seeds the table on first startup. Subsequent starts preserve saved records.

## Hosted configuration

Set `DATABASE_URL` to the hosted PostgreSQL connection string and configure `DATABASE_SSL` for that connection. Set `PUBLIC_BASE_URL` to the API's public HTTPS URL and `CLIENT_ORIGINS` to the frontend origins allowed to call it from a browser. Use `/health` as the service health-check path.

The CRUD routes are open for the classroom demo. Use fictional data only.
