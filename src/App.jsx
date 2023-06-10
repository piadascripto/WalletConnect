import React, { useEffect, useState } from "react"
import "./styles/App.css"
//import "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
import { ethers } from "ethers"
import contractName from "./utils/MyEpicNFT.json" //Change this ABI

const contracName = "MyEpicNFT" //Change here 
const contractAddress = "0x793414D4816A95389D9491cFDa9D1bFDad7e" //Change this contract address

const App = () => {

	const [currentAccount, setCurrentAccount] = useState("")
  
	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window
		if (!ethereum) {
			console.log("Install wallet")
			return
		} else {
			console.log("Wallet is installed", ethereum)
		}

    	const accounts = await ethereum.request({ method: "eth_accounts" })

		if (accounts.length !== 0) {
			//First walllet found is OK
			const account = accounts[0]
			console.log("Authorized wallet:", account)
			setCurrentAccount(account)
			rememberWallet()
		} else {
		  console.log("No authorized wallet yet")
		}
	}
	
	const connectWallet = async () => {
	    try {
			const { ethereum } = window
			if (!ethereum) {
				alert("Please install Metamask!")
			return
			}
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			})
			console.log("Connected to", accounts[0])
			setCurrentAccount(accounts[0])
			rememberWallet()
	    } catch (error) {
	      console.log(error)
	    }
	}

	const rememberWallet = async () => {
	    try {
			const { ethereum } = window	
			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const connectedContract = new ethers.Contract(contractAddress, contractName.abi, signer)
			} else {
				console.log("Install a wallet")
	    	}
	    } catch (error) {
			console.log(error)
	    }
	}

	useEffect(() => { checkIfWalletIsConnected() }, [])
	
  // Renders content
	const renderNotConnectedContainer = () => (
		<div>
			<button onClick={connectWallet} className="cta-button connect-wallet-button">Connect wallet</button>
		</div>
  	) 
	const renderConnectedContainer = () => (
		<div>
			<p>Wallet {currentAccount} Connected</p>
		</div>	
		
	)



  return (
      <div className="">
          {currentAccount === "" ? (renderNotConnectedContainer()) : (renderConnectedContainer())}
      </div>
  )
}

export default App