# User Migration and Registration Scripts

These scripts are designed to perform two key tasks: migrating users between two MySQL databases and registering users in a XenForo community using XenForo's API.

## Setup

1. Clone this repository.
2. Run `npm install` to install all necessary dependencies.
3. Replace all placeholders in the scripts with your actual database credentials and the XenForo API key.

## Register.js

This script connects to a MySQL database to fetch user data (including username, password, and email), and then uses the XenForo API to register these users in a XenForo community.

### How It Works:
1. Connects to the MySQL database specified in the configuration.
2. Fetches user data from a specified table in the database.
3. For each user, sends a POST request to the XenForo API to create a new account using the retrieved username, password, and email.
4. Logs the response from the API for each user, including any errors encountered during the registration process.

### Usage:
Run this script with the following command:

```bash
node Register.js
```
