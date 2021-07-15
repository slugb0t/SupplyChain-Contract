var erc20Token = artifacts.require("./erc20token.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20Token, 10000, "Void Token", 18, "VOID");
    deployer.deploy(SupplyChain);
};