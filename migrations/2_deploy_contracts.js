var MumbaiVoting = artifacts.require("./MumbaiVoting.sol");
var KolkataVoting = artifacts.require("./KolkataVoting.sol");

module.exports = function(deployer) {
  deployer.deploy(MumbaiVoting);
  deployer.deploy(KolkataVoting);
};
