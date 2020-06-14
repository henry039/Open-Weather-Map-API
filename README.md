# Weather API
Built with Typescrip, NodeJS, Express, JWT, MongoDB, Docker

# Prerequisites
- use node version > 8 
- docker (optional)

# Getting started on local
1. `npm install` to install all required dependencies
2. create `.env` that base on `.sample.env`
3. `npm run test` to have a basic testing
4. `npm run dev` to run the program on local

# Deployment
1. `docker-compose build`
2. `docker-compose push`

# Usage
- POST `http://localhost:3000/user/signUp`  
e.g create user named `Terry` & password `123455`  
`curl -d '{"name":"Terry", "password":"123455"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user/signUp`
- POST `http://localhost:3000/user/login`  
e.g login user to get the access token  
`curl -d '{"name":"Terry", "password":"123455"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user/login`
- GET `http://localhost:3000/weather/getInfo`  
e.g by providing the valid jwt to retrieve the lastest info of 'HK' weather  
`curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}"  GET http://localhost:3000/weather/getInfo`

# Dependencies
- [NodeJS](https://nodejs.org/) - Javascript runtime environment
- [Express](https://expressjs.com/) - NodeJS web framework
- [JWT](https://jwt.io/) - JSON Web Token library
- [OpenWeatherAPI](https://openweathermap.org/) - Data API
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
