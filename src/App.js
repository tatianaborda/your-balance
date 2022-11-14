import './App.css';
import { useState, useEffect } from 'react'
import Web3 from 'web3';

function App() {

  const [account, setAccount] = useState()
  const [network, setNetwork] = useState()
  const [balance, setBalance] = useState()

  const web3 = new Web3(Web3.givenProvider || 'https://localhost:8545')
  
  useEffect(()=>{
    loadAccounts()  
  })

  useEffect(()=>{
    loadBalance()
  }, [account])

  async function loadBalance(){
    const network = await web3.eth.net.getNetworkType()
    const balance = await web3.eth.getBalance(account, "latest")

    setNetwork(network)
    setBalance((balance/1e18).toFixed(4))
  }

  async function loadAccounts(){
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0])
  }

  return (
    <div className="App">
      <header className="App-header">
        Descentralized App 
        <p>Your account: {account}</p>
        <p>Your balance ({network}) : {balance}</p>
      </header>
    </div>
  );
}

export default App;
