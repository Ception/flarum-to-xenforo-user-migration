const axios = require("axios");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "your_database_host",
  user: "your_database_user",
  password: "your_database_password",
  database: "your_database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

const getUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT username, password, email FROM your_table",
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

const registerUsers = async () => {
  const users = await getUsers();
  const apiKey = "your_xenforo_api_key";
  for (const user of users) {
    try {
      const data = new URLSearchParams();
      data.append("username", user.username);
      data.append("password", user.password);
      data.append("email", user.email);

      const response = await axios.post("your_xenforo_api_endpoint", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "XF-Api-Key": apiKey,
        },
      });
      console.log(response.data);
      console.log(`Registered user ${user.username}`);
    } catch (error) {
      console.error(`Error registering user ${user.username}: ${error}`);
    }
  }
};

registerUsers();
