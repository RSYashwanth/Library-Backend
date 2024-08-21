SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'librarydb';

DROP DATABASE librarydb;
CREATE DATABASE librarydb;

\c librarydb;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(50) NOT NULL UNIQUE,
    PASSWORD VARCHAR(150),
    ADMIN BOOLEAN
  );

CREATE TABLE books (
    ID SERIAL PRIMARY KEY,
    TITLE VARCHAR(250) NOT NULL,
    OWNER VARCHAR(50) NOT NULL,
    DATE DATE
  );

INSERT INTO users (USERNAME, ADMIN)
VALUES ( 'Library', 't' );

