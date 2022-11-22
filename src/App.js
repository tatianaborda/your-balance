import './App.css'
import { DAppProvider, Goerli, Mainnet } from '@usedapp/core'
import Wallet from './components/Wallet.js'
import { getDefaultProvider } from 'ethers'


function App() {
  const config = {
    network: [Goerli],
    readOnlyChainId: Goerli.chainId,
    readOnlyUrls: {
      [Goerli.chainId]: 'https://goerli.infura.io/v3/97bea50f2bd64a0fa7e01b1b0d6b6cae',
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
    },
    notifications: {
      expirationPeriod: 1000, //miliseconds
      checkInterval: 1000 //miliseconds
    }

  }
  return (
    <DAppProvider config={config}>
      <div className="App">
        <header className="App-header">
          <Wallet/>
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
