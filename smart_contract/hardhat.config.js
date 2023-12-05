// https://eth-goerli.g.alchemy.com/v2/7iWStfDecZLFvNmSxuXp6nPauNa3xb_F

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/7iWStfDecZLFvNmSxuXp6nPauNa3xb_F',
      accounts: ['5fb1f7559fb4713bdf91da2cb21c6448d3be7e51d8030fcce3b9d41b28197398']
    },

  },
}