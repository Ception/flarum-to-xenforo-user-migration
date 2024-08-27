# User Migration and Password Update Scripts

These scripts are designed to perform two key tasks: registering users in a XenForo community using the XenForo API and updating user passwords between two MySQL databases.

## Setup

1. Clone this repository.
2. Run `npm install` to install all necessary dependencies.
3. Replace all placeholders in the scripts with your actual database credentials and the XenForo API key.

## Scripts Overview

### 1. `Merge.js`

This script connects to a MySQL database to fetch user data (including username, password, and email) and then uses the XenForo API to register these users in a XenForo community.

#### How It Works:
- **Database Connection:** Connects to a MySQL database specified in the configuration.
- **User Data Retrieval:** Fetches user data from a specified table in the database.
- **API Interaction:** For each user, sends a POST request to the XenForo API to create a new account using the retrieved username, password, and email.
- **Logging:** Logs the response from the API for each user, including any errors encountered during the registration process.

#### Usage:
Run this script with the following command:

```bash
node Merge.js
```

### 2. `Update.js`

This script connects to two MySQL databases: a source database and a destination database. It retrieves username-password pairs from the source database and updates the corresponding user data in the destination database with these passwords.

#### How It Works:
- **Source Database Connection:** Connects to the source MySQL database specified in the configuration.
- **Destination Database Connection:** Connects to the destination MySQL database specified in the configuration.
- **Password Data Retrieval:** Fetches username and password data from a specified table in the source database.
- **Data Update:** Constructs a data string that includes the password hash and updates the corresponding record in the destination database with this data.
- **Logging:** Logs the number of rows affected for each update operation and any errors encountered.

#### Usage:
Run this script with the following command:

```bash
node Update.js
```

#### Important Notes:

* **Sensitive Data:** These scripts handle sensitive user information, such as usernames, passwords, and emails. Ensure that they are executed in a secure environment and that appropriate data protection measures are implemented.
* **Database Connectivity:** Both scripts rely on correct and secure database connection configurations. Make sure the database credentials and host information are accurate.
* **API Interaction:** The `Merge.js` script interacts with the XenForo API. Ensure that the XenForo API key is correctly configured and that the API endpoint is accessible.
* **Error Handling:** The scripts include basic error handling to manage issues such as duplicate entries and connection failures. Review and customize error handling as needed for your specific environment.

Before running these scripts in a production environment, thoroughly test them in a controlled setting to ensure they work as expected and handle all edge cases.
