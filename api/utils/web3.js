const WEB3 = require('web3');
const InfoSafeTokenABI = require('../../build/contracts/InfoSafeToken');

const contractAddr = InfoSafeTokenABI.networks[Object.keys(InfoSafeTokenABI.networks)[0]].address;
let web3 = {};
let web3Conn;
let InfoSafeToken;

web3.init = () => {
    if (typeof web3Conn !== 'undefined') {
        web3Conn = new WEB3(web3Conn.currentProvider);
    } else {
        web3Conn = new WEB3(new WEB3.providers.HttpProvider("http://localhost:8545"));
        InfoSafeToken = new web3Conn.eth.Contract(InfoSafeTokenABI.abi, contractAddr);
    }
};

web3.getEthBalance = async (account) => {
    return await web3Conn.eth.getBalance(account);
};

web3.sendEthToFallback = async (from, gas, value) => {
    web3Conn = new WEB3(new WEB3.providers.HttpProvider("http://localhost:8545"));
    let unlock = await web3Conn.eth.personal.unlockAccount(from, '', 1000);
    return await web3Conn.eth.sendTransaction({
        from: from,
        to: contractAddr,
        gas: gas,
        value: value
    });
};

web3.getTokenBalance = async (account) => {
    return await InfoSafeToken.methods.balanceOf(account).call();
};

module.exports = web3;
