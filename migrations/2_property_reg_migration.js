const PropertyRegistration = artifacts.require("PropertyRegistration");

module.exports = function(deployer) {
  deployer.deploy(PropertyRegistration);
};
