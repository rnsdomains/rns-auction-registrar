const fs = require('fs');

const addresses = require('./addresses');

const tokenRegistrarBuild = require('./build/contracts/TokenRegistrar');

const tokenRegistrarData = {
  abi: tokenRegistrarBuild.abi,
  bytecode: tokenRegistrarBuild.bytecode,
  address: {
    rskMainnet: addresses.TokenRegistrar.rskMainnet,
    rskTestnet: addresses.TokenRegistrar.rskTestnet,
  },
};

fs.writeFileSync('./TokenRegistrarData.json', JSON.stringify(tokenRegistrarData));