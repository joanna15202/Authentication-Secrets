## 👋 Introduction 

#### This project is a website simulating the "whisper app" for users to post anonymous opinions. To store the username and password of each user anonymously, it implements 6 levels of authentication in each commit.   


## 👀 Overview

Take a look at this project's `app.js` file and the commit history for authentications including mongoose plain text authentication, mongoose-encryption, environment vars, hashing with md5, hashing and Salting with bcrypt, Cookies and Sessions, and OAuth.  

## 🔑 Level 1 - Username and Password Only

Username and password are stored in plain string in our `MongoDB` database. The security level is the lowest.

## 🔑 Level 2 - Encryption

We use `mongoose-encrypion` package to encrypt the password field.

## 🔑 Add Environment Vars

Leverage `dotenv` and create an `.env`, `.gitignore` file mask the secret information like API keys or so.

## 🔑 Level 3 - Hashing with md5

Increase the password security level with `md5`.

## 🔑 Level 4 - Hashing and Salting with bcrypt

md5 is strong enough but if the user's password is short or easy to guess (e.g. 123456 or qwerty), it is still easy to be hacked. In this level we increased the security level by implementing `bcrypt` package and add salting to make the hash more complex.

## 🔑 Level 5 - Cookies and Sessions

Leverage `express-session`, `passport`, and `passport-local-mongoose` for cookies. So if the user logged in but head over to other websites for a while; when they come back, our website will search through their cookies and authenticate them without need to log in again.

## 🔑 Level 6 - Google OAuth 2.0

Allow users to log in from their Google account. In this case, the username and password information are saved in Google server instead of ours. Our burden to maintain or secure password will be reduced. 
