import sqlite from "better-sqlite3";
// import path from "path";

const dbPath = "./mydatabase.db";

export const db = sqlite(dbPath);

// Create the tables if they do not exist
db.exec(`CREATE TABLE IF NOT EXISTS user (
    id TEXT NOT NULL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)`);

// Export the DatabaseUser interface
export interface DatabaseUser {
  id: string;
  username: string;
  password: string;
}
