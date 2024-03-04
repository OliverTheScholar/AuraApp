

1. Seed DB

Create a MongoAtlas account.

Install mongo tools on your machine

Download this file[link_to_file].

Seed the database with the contents of the file.

mongoimport --uri mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.rinullf.mongodb.net/<DATABASE_NAME> --collection patients --type json --file <PATH_TO_JSON_FILE>


2. Clone this repo.

3. Execute docker compose command to build images and run app.

4. Visit http://localhost:3000




