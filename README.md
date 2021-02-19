# Trip In

Backend code for a fullstack (MERN) ecommerce project

Frontend Link - [Medico](https://med-front.vercel.app/)

For frontend check this repo - [Click Here](https://github.com/lakshay-saini-au8/med-front)

API Link - [Medico](https://medfprt.herokuapp.com/)

---
## Developer
**Lakshay Saini**
- Github: [@lakshay-saini-au8](https://github.com/lakshay-saini-au8)
- Linkedin: [@lakshay-saini-dev](https://www.linkedin.com/in/lakshay-saini-dev/)
---
## Requirements
For development, you will only need Node.js and a node global package installed in your environement.

### Project Installation
```
$ git clone git@github.com:lakshay-saini-au8/medico-backend.git
$ cd medico-backend
```
**Run npm install**
```
$ npm i
```
---

### Running The Project

```
$ npm run dev
```
---

## Configuration for the App
### For backend
 **.env** file in the root and edit it with your credentials. You will need:

- PORT = 9999
- MONGODB_CLOUD_URL=`Your Database Address`
- SECRET_KEY=`your secret key`

---
## BackEnd NPM Packages Used -
- ##### `bcrypt` - We are using bcrypt module to hash password of the user. It's an npm module that you can find it out here at [bcrypt](https://www.npmjs.com/package/bcrypt).
- ##### `cors` - It is used as a middleware in Node.JS. Check it out here - [cors](https://www.npmjs.com/package/cors).
- ##### `dotenv` - It is used to load environment variables from a .env file into process.env. You can find it out here - [dotenv](https://www.npmjs.com/package/dotenv).
- ##### `express` - It's the web framework for Node.js that we used to structure our web application. You can find more details here [express](https://www.npmjs.com/package/express).
- ##### `jsonwebtoken` - We used to create access tokens for our application. For more details check here - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).
- ##### `mongoose` - We used Mongoose because it provides a schema-based solution to model our application data with MongoDB. Which has many features to use example - validation of user's data. For more details check here - [mongoose](https://www.npmjs.com/package/mongoose).
- ##### `joi` - we have used this for validating data --> data sent in req.body. - [joi](https://www.npmjs.com/package/joi).
- ##### `morgan` - it is a logger middleware, which basically logs api call with status on the terminal and helps us (developers) to know that which api was called- [morgan](https://www.npmjs.com/package/morgan).
---
