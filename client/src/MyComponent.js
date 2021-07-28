import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
    return (
        <div className="App">
            <div>
                <h1>Supply Chain</h1>
            </div>

            <div>
                <h2>ACTIVE ACCOUNT</h2>
                <AccountData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    accountIndex={0}
                    units="ether"
                    precision={3}
                />

                <div>
                    <h2>Create Participant</h2>
                    <p>
                        <ContractForm 
                            drizzle={drizzle} 
                            contract="supplyChain" 
                            method="createParticipant"
                            labels={["Username", "Password", "Participant Address", "Participant Type"]}
                        />
                    </p>
                    <h3>Create Product</h3>
                    <ContractForm
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="supplyChain"
                        method="createProduct"
                        labels={["Owner ID", "Model Number", "Part Number", "Serial Number", "Product Cost"]}
                    />
                </div>

                <div>
                    <p>
                    <strong>Total Supply: </strong>
                    <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="ERC20Token"
                        method="balanceOf"
                        methodArgs={[drizzleState.accounts[0]]}
                        
                    />
                    </p>
                </div>

                <div>
                    <h3>Transfer To Someone</h3>
                    <ContractForm
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="ERC20Token"
                        method="transfer"
                        labels={["To Address", "Amount to Send"]}
                    />
                </div>
                <div>
                    <p>
                        <strong>{drizzleState.accounts[3]} Balance: </strong>
                        <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="ERC20Token"
                        method="balanceOf"
                        methodArgs={[drizzleState.accounts[3]]}
                        
                    />
                    </p>
                </div>

                <div>
                    <h2>Get Participant Details</h2>
                   

                    <h3>Get Product Details</h3>
                    
                    
                </div>



            </div>
        </div>
    )
}