# User Migration Scripts

These scripts are used to migrate users between two MySQL databases and to register users in a XenForo community using XenForo's API.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Replace all placeholders in the scripts with your actual database credentials and the XenForo API key.

## Merge.js

This script first connects to a MySQL database, fetches user data, and then uses the XenForo API to register these users in a XenForo community.

Run this script with `node Merge.js`.

## Update.js

This script connects to two MySQL databases: a source database and a destination database. It fetches username-password pairs from the source database, then updates the corresponding user data in the destination database with these passwords.

Run this script with `node Update.js`.

Please note that you need to handle the data carefully as it contains sensitive user information.
