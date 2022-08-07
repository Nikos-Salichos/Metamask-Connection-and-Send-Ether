import React, { useState } from 'react'
import { ethers } from 'ethers'


const SendEther = () => {

    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    async function sendEthereum() {
        try {
            if (!window.ethereum) {
                throw new Error('No metamask found, please install it')
            }
            console.log('Metamask Connected')
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const formattedAddress = ethers.utils.getAddress(address)
            const tx = await signer.sendTransaction({
                to: formattedAddress,
                value: ethers.utils.parseEther(amount)
            })
            console.log(tx.to)
            console.log(tx.value.toString() + 'wei')
        } catch (error) {
            console.log(error)
        }
    }



    const validateAmount = (e) => {
        const regex = /^[+-]?\d+(\.\d+)?$/;
        if (regex.test(e.target.value)) {
            setAmount(e.target.value)
        } else {
            setAmount('')
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Addess</label>
                <br></br>
                <input
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Receiver address"
                    required>
                </input>
                <br></br>
                <label >Amount</label>
                <br></br>
                <input
                    type='number'
                    pattern="[0-9]*"
                    value={amount}
                    min="0"
                    onChange={(e) => validateAmount(e)}
                    placeholder="Amount to send"
                    required>
                </input>
                <br></br>
                <button onClick={sendEthereum}>Send Ethereum</button>
            </form>
        </div>
    )
}

export default SendEther