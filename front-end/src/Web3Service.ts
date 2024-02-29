import axios from "axios"
import Web3 from "web3"

async function mint() {
  if (!window.ethereum) throw new Error("No MetaMask was found!")

  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.requestAccounts()
  if (!accounts || !accounts.length) throw new Error("No account allowed")

  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/mint/${accounts[0]}`
  )
  return res.data
}

export { mint }
