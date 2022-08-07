import React, { useState } from 'react'
import { ethers } from 'ethers'


const ConnectMetamask = function () {
    const [walletAddress, setWalletAddress] = useState('');
    let [balance, setBalance] = useState('');

    async function requestAccount() {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                setWalletAddress(accounts[0])
                return accounts[0];
            } else {
                alert('Install metamask')
            }
        } catch (error) {
            console.log('Error in connecting')
        }
    }

    async function connectWallet() {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const account = await requestAccount();
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                balance = await provider.getBalance(account);
                let formattedBalance = ethers.utils.formatEther(balance);
                setBalance(formattedBalance);
            } else {
                alert('Install metamask')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <button onClick={connectWallet} >Request Account</button>
            <div>
                <h1>Address</h1>
                <p> {walletAddress}</p>
            </div>
            <div>
                <h1>Balance</h1>
                <p>{balance}</p>
            </div>
        </div>
    )
}

export default ConnectMetamask


