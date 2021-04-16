# Node.js Express JWT Authentication with Postgre #

## About ##

* User can signup new account, or login with username and password
* User information will be stored in PostgreSQL database
* By user's role(admin, moderator, user), we authorize the user to access resources

### API's ###

Methods  | Url's               | Actions
-------- | ------------------- | ----------------------------
POST     |  /api/auth/signup   | signup new account
POST     |  /api/auth/signin   | login an account
GET      |  /api/test/all      | retrieve public content
GET      |  /api/test/user     | access user content
GET      |  /api/test/mod      | access moderator's content
GET      | /api/test/admin     | access admin's content

### Technologies ###

* [Express](https://expressjs.com/en/starter/installing.html)
* [bcryptjs](https://www.npmjs.com/package/bcrypt)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [sequelize](https://www.npmjs.com/package/sequelize)
* [PostgreSQL](https://www.npmjs.com/package/pg)
