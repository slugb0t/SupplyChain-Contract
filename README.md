# Supply Chain dApp
Supply chain contract with front end web page using Drizzle

Create Product Details and Particpants who will be stored onto the blockchain ledger
Built using truffle and solidity
![Front End](frontEndDisplay.png)


## Installation

1. Install Truffle and Ganache CLI globally. If you prefer, the graphical version of Ganache works as well
```javascript
npm install -g truffle
npm install -g ganache-cli
```

2. Download the box. This also takes care of installing the necessary depenencies.
```javascript
truffle unbox drizzle
```

3. Run the development blockchain
```javascript
ganache-cli
```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
```javascript
compile
migrate --reset
```

5. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
```javascript
// Serves the front-end on http://localhost:3000
npm run start
```
