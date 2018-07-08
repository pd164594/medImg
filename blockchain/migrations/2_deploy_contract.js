var dxpTokenContract = artifacts.require("DiagnosisProtocol");

module.exports = function(deployer) {
  deployer.deploy(dxpTokenContract, 9999999, "DXPToken", "DXP");
};
