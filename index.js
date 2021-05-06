//Find Metamask
if (typeof window.ethereum !== "undefined") {
  console.log("Metamask is isntalled");
} else {
  console.log("You should install metamask");
}

const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");
const sendEthButton = document.querySelector(".sendEthButton");
const showBalance = document.querySelector(".showBalance");

//Will Start the metamask execution
ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" }); //test list with all metamask account
  const account = accounts[0];
  showAccount.innerHTML = account;

  //Get Current Balance
  const balance = await ethereum.request({
    method: "eth_getBalance",
    params: [account, "latest"],
  });

  //Calculate balance, balance / 10 to the power of 18
  const read = parseInt(balance) / 10 ** 18;
  showBalance.innerHTML = read.toFixed(5);

  console.log("Connection to wallet and balance show are successful");

  //Sending Ethereum to an address
  sendEthButton.addEventListener("click", () => {
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: "0x0004CC0f617D0486FAAbc024C276e91FdCD8b488", //required in all transactions except for contract creation, you can change it
            value: "", //hex encoded in WEI, you can change it
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  });
}
