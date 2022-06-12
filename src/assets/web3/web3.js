import ipfsAPI from 'ipfs-http-client';
const config = require('./config.json');
const Web3 = require('web3');
const ipfs = ipfsAPI.create('https://ipfs.infura.io:5001');

let web3 = new Web3(window.ethereum);
let contract;
let address;

window.ethereum.enable().then(function(){
    web3.eth.getAccounts((err, accounts) => {
        address = accounts[0]
        contract = new web3.eth.Contract(config.ABI, config.CONTRACT);
    })

});

export async function uploadToIpfs(data) {
    return await ipfs.add(data);
}

export function getContract() {
    console.log(contract);
    console.log(address);
}

export async function registerProfile(profile, metadata, avatar, banner) {
    const txn = await contract.methods.createProfile(profile, metadata, avatar, banner).send({from: address});
    return ({txn: txn, success: true});
} 