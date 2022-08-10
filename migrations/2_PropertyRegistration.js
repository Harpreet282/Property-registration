const Property_Registration = artifacts.require("PropertyRegistration");

module.exports = function(deployer) {
  deployer.deploy(Property_Registration);
};
