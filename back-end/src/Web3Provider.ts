import Web3 from "web3"

const ABI = require("./abi.json")

const web3 = new Web3(`${process.env.NODE_URL}`)

const account = web3.eth.accounts.privateKeyToAccount(
  `0x${process.env.PRIVATE_KEY}`
)
web3.eth.accounts.wallet.add(account)

export async function mintAndTransfer(to: string): Promise<string> {
  const contract = new web3.eth.Contract(
    ABI,
    `${process.env.CONTRACT_ADDRESS}`,
    {
      from: `${process.env.WALLET}`,
    }
  )

  const tx = await contract.methods.mint(to).send()
  return tx.transactionHash
}
