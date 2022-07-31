import './App.css';
import ConnectMetamask from './components/ConnectMetamask';
import SendEtherButton from './components/SendEtherButton';

function App() {
  return (
    <div className="App">
      <ConnectMetamask></ConnectMetamask>
      <SendEtherButton></SendEtherButton>
    </div>
  );
}

export default App;
