const express = require('express');
const axios = require('axios');
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const app = express();

// Replace with your own BSC API key and wallet mnemonic
// const apiKey = 'YOUR_BSC_API_KEY';
// const mnemonic = 'YOUR_WALLET_MNEMONIC';

// BSC token contract address
const tokenAddress = '0x2749C9f2f8568d389BBF61ed77784A43C3cD3E19';

// BSC endpoint
const bscEndpoint = 'https://bsc-dataseed.binance.org/';

// List of addresses to subtract from the total supply
const excludedAddresses = [
    '0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE',
    '0xAf967C1A979D4600AffCE6BffBaeACFd165A1a2A',
    '0x2DdFdA4a037836bb5F78075D6bc356d6AE06Fd9b',
    '0x079ef53e8533fAc72079930A34b380145f797471',
];

const web3 = new Web3(new HDWalletProvider(mnemonic, bscEndpoint));

// Endpoint to get the total supply
app.get('/totalSupply', async (req, res) => {
    try {
        const totalSupply = await web3.eth.call({
            to: tokenAddress,
            data: '0x18160ddd',
        });

        res.json({ totalSupply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to get the circulating supply
app.get('/circulatingSupply', async (req, res) => {
    try {
        // Get total supply
        const totalSupply = await web3.eth.call({
            to: tokenAddress,
            data: '0x18160ddd',
        });

        // Get balances of excluded addresses
        const balances = await Promise.all(
            excludedAddresses.map(async (address) => {
                return web3.eth.call({
                    to: tokenAddress,
                    data: '0x70a08231000000000000000000000000' + address.substring(2),
                });
            })
        );

        // Calculate circulating supply
        const circulatingSupply = balances.reduce(
            (acc, balance) => acc - Number(balance),
            Number(totalSupply)
        );

        res.json({ circulatingSupply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});