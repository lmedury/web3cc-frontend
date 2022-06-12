import { IPFS_URL } from 'assets/js/constants';
import ipfsAPI from 'ipfs-http-client';
const config = require('./config.json');
const Web3 = require('web3');
const ipfs = ipfsAPI.create('https://ipfs.infura.io:5001');


let address;

export async function uploadToIpfs(data) {
    return await ipfs.add(data);
}

export async function getContract() {
    
    try{
        const web3 = new Web3(window.ethereum);
        if(web3) {
            web3.eth.getAccounts().then(accounts => {
                address = accounts[0];
            });
        }
        return new web3.eth.Contract(config.ABI, config.CONTRACT);
    }catch (err) {
        console.log(err);
    } finally {

    }
}

export async function registerProfile(profile, metadata, avatar, banner) {
    try{
        const contract = await getContract();
        if(!address) {
            const accounts = await new Web3(window.ethereum).eth.getAccounts();
            console.log(accounts);
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
    const contract = await getContract();
    return await contract.methods.getNumberOfCreators().call();
}

export async function getProfiles(){
    const contract = await getContract();
    const count = await contract.methods.getNumberOfCreators().call();
    const profiles = [];
    for(let i=0; i<count; i++) {
        const info = await contract.methods.getProfileInfo(i).call();
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
        profiles.push(details);
    }
    return profiles;
    
}