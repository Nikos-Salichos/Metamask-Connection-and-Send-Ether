import React from 'react'
import { ethers } from 'ethers'
import { useState } from 'react';


const ConnectMetamask = () => {

    const [walletAddress, setWalletAddress] = useState("");
    const [balance, setBalance] = useState("");

    async function requestAccount() {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                setWalletAddress(accounts[0])

                await getBalanceFromMetamask(accounts, setBalance);
            } else {
                alert('Install metamask')
            }
        } catch (error) {
            console.log('Problem connecting ' + error)
        }
    }


    async function getBalanceFromMetamask(accounts, setBalance) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let balance = await provider.getBalance(accounts[0]);
        let formattedBalance = ethers.utils.formatEther(balance);
        setBalance(formattedBalance);
    }


    return (
        <div>
            <button onClick={requestAccount} >Request Account</button>
            <div>
                <h1>Address</h1>
                <p> {walletAddress}</p>
            </div>
            <h1>Balance</h1>
            <p>{balance}</p>
        </div>
    )
}

export default ConnectMetamask


