SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'librarydb';

DROP DATABASE librarydb;
CREATE DATABASE librarydb;

\c librarydb;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(50) NOT NULL UNIQUE,
    PASSWORD VARCHAR(150) NOT NULL,
    ADMIN BOOLEAN
  );
