import sqlite from "better-sqlite3";

// Path to your SQLite database file
const dbPath = "./mydatabase.db";

// Open the SQLite database connection
const db = sqlite(dbPath);

const userId = "p1pczcq94xsbdcj";

// Function to print all entries from the user table
function printAllUsers() {
  const users = db.prepare("SELECT * FROM user").all();
  console.log("All Users:");
  console.table(users);
}

// Disable foreign key constraints
db.pragma("foreign_keys = OFF");

// Perform the delete operation
const result = db.prepare("DELETE FROM user WHERE id = ?").run(userId);

// Re-enable foreign key constraints
db.pragma("foreign_keys = ON");

// Function to delete a user by ID
function deleteUserById(userId) {
  const result = db.prepare("DELETE FROM user WHERE id = ?").run(userId);
  if (result.changes > 0) {
    console.log(`User with ID ${userId} deleted successfully.`);
  } else {
    console.log(`No user found with ID ${userId}.`);
  }
}

// Example usage:
printAllUsers();
deleteUserById(userId);
