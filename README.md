# Walmart Shop Demo

A walmart shop attempt with a small server(to avoid CORS of walmart api)
## How to use
You can run the app by docker or npm way.
### With Docker

```sh
git clone git@github.com:eferhatg/walmart-shop-demo.git
cd walmart-shop-demo
docker-compose up --build
```
Explore http://localhost:3000
### With NPM
1. Clone the app
```sh
git clone git@github.com:eferhatg/walmart-shop-demo.git
cd walmart-shop-demo
```
2. Start the server
```sh
# at the root folder of app
cd server
npm install
npm run dev || npm start
```
3. Start the client
in a new terminal window
```sh
# at the root folder of app
cd client
npm install
npm start
```
Explore http://localhost:8080

---

## How to test
simply;
```sh
# at the root folder of app
cd client
npm test
```
