import Web3 from "web3"
import ABI from "./abi.json"

const CONTRACT_ADDRESS = `${process.env.REACT_APP_CONTRACT_ADDRESS}`

async function mint() {
  if (!window.ethereum) throw new Error("No MetaMask was found!")

  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.requestAccounts()
  if (!accounts || !accounts.length) throw new Error("No account allowed")

  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS, {
    from: accounts[0],
  })
  const tx = await contract.methods.mint().send()

  console.log(tx.transactionHash)
  return tx.transactionHash
}

export { mint }
