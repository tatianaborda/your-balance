import React from 'react'
import { Goerli, Mainnet, useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from 'ethers/lib/utils'


const Wallet = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  const goerliBalance = useEtherBalance(account, {chainId: Goerli.chainId})
  const mainnetBalance = useEtherBalance(account, {chainId: Mainnet.chainId}) 
  return (
    <div>
      <h3>dApp Wallet</h3>
      {
        account 
          ? <div>
              <p>Your account: {account}</p><br/>
              <button onClick={()=> deactivate()}
              className='btn'>
              Disconnect</button>
              <hr/>
              <div style={{display: 'flex', justifyContent: 'center', gap: '25px 20px'}}>
                { 
                  goerliBalance &&
                  <div className='bal'>
                    <h4>Goerli Balance: </h4>
                      {formatEther(goerliBalance)}
                  </div>  
                }
                { 
                  mainnetBalance &&
                  <div className='bal'>
                    <h4>Mainnet Balance: </h4>
                      {formatEther(mainnetBalance)}
                  </div>  
                }
              </div>
            </div>
          :<div>
            <p>Please connect your wallet </p> <br/>
            <button onClick={()=> activateBrowserWallet()}
            className='btn'>
            Connect</button>
          </div>
      }
    </div>
  )
}

export default Wallet