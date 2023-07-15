const mysql = require("mysql");

const sourceDB = mysql.createConnection({
  host: "your_source_database_host",
  user: "your_source_database_user",
  password: "your_source_database_password",
  database: "your_source_database",
});

const destinationDB = mysql.createConnection({
  host: "your_destination_database_host",
  user: "your_destination_database_user",
  password: "your_destination_database_password",
  database: "your_destination_database",
});

sourceDB.connect((err) => {
  if (err) throw err;
  console.log("Connected to source MySQL Database");
});

destinationDB.connect((err) => {
  if (err) throw err;
  console.log("Connected to destination MySQL Database");
});

const getPasswords = () => {
  return new Promise((resolve, reject) => {
    sourceDB.query(
      "SELECT username, password FROM your_source_table",
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

const updatePasswords = async () => {
  const passwords = await getPasswords();
  for (const password of passwords) {
    try {
      const hashedPassword = password.password;
      const dataString = `a:1:{s:4:"hash";s:60:"${hashedPassword}";}`;
      const updateQuery = `UPDATE your_table SET data = ? WHERE username = ?`;

      destinationDB.query(
        updateQuery,
        [dataString, password.username],
        (err, result) => {
          if (err) throw err;
          console.log(
            `Rows affected: ${result.affectedRows} Updating ${password.username} with data ${dataString}`
          );
        }
      );
    } catch (error) {
      console.error(`Error updating password ${password.data}: ${error}`);
    }
  }
};

updatePasswords();
