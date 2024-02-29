import Web3 from "web3"

async function mint() {
  if (!window.ethereum) throw new Error("No MetaMask was found!")

  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.requestAccounts()
  if (!accounts || !accounts.length) throw new Error("No account allowed")

  return accounts[0]
}

export { mint }
