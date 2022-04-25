import DStorage from '../abis/DStorage.json'
import React, { Component } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import Web3 from 'web3';
import './App.css';

//Make a connection to IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: 'ipfs.infura.io', port: 5001, protocol: 'https'})

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  // Connect to the blockchain
  async loadWeb3() {
    //Setting up Web3 with MetaMask
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert("Non-Ethereum browser detected. You should consider using MetaMask!");
    }
  }

  async loadBlockchainData() {
    //Declare Web3
    const web3 = window.web3;
    //console.log(web3)

    //Load account
    const accounts = await web3.eth.getAccounts()
    //console.log(accounts)
    //Save the account to the state
    this.setState({account: accounts[0]})
    
    //Fetch the network ID we're connected to inside MetaMask
    const networkId = await web3.eth.net.getId()
    const networkData = DStorage.networks[networkId]

    //IF got connection, get data from contracts
    if (networkData) {
      //Assign contract
      const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address)
      this.setState({dstorage})

      //Get the number of files
      const fileCount = await dstorage.methods.fileCount().call()
      this.setState({fileCount})

      //Load files and sort by the newest
      for (var i=fileCount; i>=1; i--) {
        const file = await dstorage.methods.files(i).call()
        this.setState({files: [...this.state.files, file]})
      }
    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
    this.setState({loading: false})
  }

  // Get file from user
  captureFile = event => {
    event.preventDefault()

    // Get the file from the form
    const file = event.target.files[0]
    const reader = new window.FileReader()
    // Convert the file to a buffer
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result), type: file.type, name: file.name
      })
      console.log('buffer', this.state.buffer)
    }
  }


  //Upload File
  uploadFile = description => {
    console.log('Submitting the file to IPFS...')
    //Add file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result.size)
    })
      //Check If error
        //Return error

      //Set state to loading

      //Assign value for the file without extension

      //Call smart contract uploadFile function 

  }

  //Set states
  constructor(props) {
    super(props)
    this.state = {
    }

    //Bind functions
  }

  render() {
    return (
      <div className='background'>
        <Navbar account={this.state.account} />
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
          : <Main
              files={this.state.files}
              captureFile={this.captureFile}
              uploadFile={this.uploadFile}
            />
        }
      </div>
    );
  }
}

export default App;