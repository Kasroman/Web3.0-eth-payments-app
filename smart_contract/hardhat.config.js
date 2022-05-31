// https://eth-goerli.alchemyapi.io/v2/n0sv0LjB3lhz2eLSblolbyS_nt6Mh-Zv

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/n0sv0LjB3lhz2eLSblolbyS_nt6Mh-Zv',
      accounts : ['dab1953692775550507f5e451b4df0732f060751b10fa8ac99eea3143950be8e']
    }
  }
}