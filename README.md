# Library Application Backend

This is the backend application for the Library Manager

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)

## Introduction

A simple backend built on RESTful principles using NodeJS, ExpressJS, and PostgreSQL. Uses JWT and OAUTH based user authentication.

## Features

- User/Admin authentication using jsonwebtokens and OAUTH2
- RESTful API
- Robust endpoints with error handling
- Provides endpoints for Admins and Users

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/RSYashwanth/Library-Backend.git
   ```
2. Build a docker image:
   ```sh
   docker build -t <ImageName> .
   ```
3. Run docker
   ```sh
   docker run -p 8081:8081 <ImageName>
   ```
4. Follow instructions to run Client application
   
