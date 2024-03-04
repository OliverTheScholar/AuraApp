## Setup Instructions

### 1. Seed the Database

- **Create a MongoAtlas Account:** Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
  
- **Install MongoDB Tools:** Ensure you have the MongoDB command line tools installed on your machine. You can find the installation guide on the [MongoDB Manual](https://docs.mongodb.com/manual/administration/install-community/).

- **Download the Seed File:** Download the necessary JSON file for seeding the database. [Download Here](https://drive.google.com/file/d/1ESL2hL5z31ZaB3lgjVMFdw94jn-qPbMh/view).

- **Seed the Database:** Use the `mongoimport` tool to seed your database with the contents of the file. Replace `<USERNAME>`, `<PASSWORD>`, `<DATABASE_NAME>`, and `<PATH_TO_JSON_FILE>` with your actual details.

  ```sh
  mongoimport --uri mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.rinullf.mongodb.net/<DATABASE_NAME> --collection patients --type json --file <PATH_TO_JSON_FILE>
  ```

### 2. Clone the Repository Including Its Submodules
```sh
git clone --recurse-submodules https://github.com/OliverTheScholar/AuraApp.git
```

### 3. Initialize Environment Variables
Create an .env file in the root directory and add the mongo URI.
```sh
MONGO_URI=<YOUR_MONGO_URI>
```

### 4. Build Images and Run the App
```sh
docker-compose up --build
```

### 5. Access The App
After the containers are up and running, visit the application at [http://localhost:3000](http://localhost:3000)

