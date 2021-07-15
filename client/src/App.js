import React, { Component } from "react";
import Web3 from "web3";
import MyComponent from "./MyComponent";
import { Drizzle, generateStore } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";
import supplyChain from "./contracts/supplyChain.json";
import ERC20Token from "./contracts/ERC20Token.json";
import './App.css';

const options = { 
  contracts: [supplyChain, ERC20Token], 
  web3: {
    block: false, 
    customProvider: new Web3("ws://localhost:7545"),
  },
};
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const {drizzle, drizzleState, initialized} = drizzleContext;

          if(!initialized) {
            return "Loading..."
          }

          return (
            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>

  );
}

export default App;
