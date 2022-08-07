import './App.css';
import ConnectMetamask from './components/ConnectMetamask';
import SendEther from './components/SendEther';


//f2 to replace

function App() {
  return (
    <div className="App">
      <p>Wallet Address</p>
      <p>{process.env.REACT_APP_WALLET_ADDRESS}</p>
      <ConnectMetamask></ConnectMetamask>
      <SendEther></SendEther>
    </div>
  );
}

export default App;
