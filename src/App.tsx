import { useState } from "react"
import { mint } from "./Web3Service"

function App() {
  const [message, setMessage] = useState("")

  function onBtnClick() {
    setMessage("Requesting your tokens... Wait!")
    mint()
      .then((txHash) => setMessage(`Your tokens were sent. Tx: ${txHash}`))
      .catch((err) => setMessage(err.message))
  }
  return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">ProtoCoin faucet</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
              href="/"
            >
              Home
            </a>
            <a className="nav-link fw-bold py-1 px-0" href="/about">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Get your ProtoCoins.</h1>
        <p
          className="lead"
          style={{ paddingInline: "64px", paddingBlock: "16px" }}
        >
          Onde a day, earn 100 coins for free just connecting your MetaMask
          below.
        </p>
        <p className="lead">
          <a
            href="#"
            className="btn btn-lg btn-light fw-bold border-white bg-white"
            onClick={onBtnClick}
          >
            <img
              src="/assets/metamask.svg"
              alt="MetaMask logo"
              width={28}
              style={{ marginRight: "8px" }}
            />
            Connect wallet
          </a>
        </p>
        <p className="lead">{message}</p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>
          Built by{" "}
          <a href="https://twitter.com/r4topunk" className="text-white">
            @r4topunk
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

export default App
