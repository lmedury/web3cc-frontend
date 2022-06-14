import { IPFS_URL } from 'assets/js/constants';
import ipfsAPI from 'ipfs-http-client';
import { data } from 'assets/data/profiles';
const config = require('./config.json');
const Web3 = require('web3');
const ipfs = ipfsAPI.create('https://ipfs.infura.io:5001');



let address;
let web3;
let contract;

window.ethereum.enable().then(result => {
    web3 = new Web3(window.ethereum);
    if(web3) {
        web3.eth.getAccounts().then(accounts => {
            address = accounts[0];
            contract = new web3.eth.Contract(config.ABI, config.CONTRACT);
        });
    }
});

export async function setupContract() {
    
}


export async function uploadToIpfs(data) {
    return await ipfs.add(data);
}


export async function registerProfile(profile, metadata, avatar, banner) {
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(config.ABI, config.CONTRACT);
    try{
        if(!address) {
            const accounts = await new Web3(window.ethereum).eth.getAccounts();
            address = accounts[0];
        }
        
        await contract.methods.createProfile(profile, metadata, avatar, banner).send({from: address});
    }catch(err) {
        console.log(err);
    } finally {
        return ({success: true})
    }
    
}

export async function getNumberOfCreators() {
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(config.ABI, config.CONTRACT);
    return await contract.methods.getNumberOfCreators().call();
}

export async function getProfiles(){
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(config.ABI, config.CONTRACT);
    const count = await contract.methods.getNumberOfCreators().call();
    const profiles = [];
    for(let i=0; i<count; i++) {
        const details = await getProfile(i);
        profiles.push(details);
    }
    return profiles;   
}

export async function getProfile(id) {
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(config.ABI, config.CONTRACT);
    const info = await contract.methods.getProfileInfo(id).call();
    const details = {}
    details.profile = info[0];
    let metadataInfo = await fetch(`${IPFS_URL}/${info[1]}`);
    metadataInfo = await metadataInfo.json();
    details.metadata = {
        "about": metadataInfo['about'] ? metadataInfo['about'] : 'Video Creator',
        "activity": metadataInfo['activity'] ? metadataInfo['activity'] : 'I post videos all the time'
    }
    details.avatar = info[2];
    details.banner = info[3];
    return details;
}