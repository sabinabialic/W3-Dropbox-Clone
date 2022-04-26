import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {
  render() {
    return (
      <div className="flex container w-full">
        <div className='main-content'>
          <h1 className="text-white text-4xl py-5">
            Upload and Store Files!
          </h1>
          <p className="text-white mb-5">
            Easily upload and store files on the blockchain using MetaMask
          </p>

          <div className="card white-glassmorphism mb-5">
                {/* <h2 className='text-white text-center'>Browse or Drop a File</h2> */}
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const description = this.fileDescription.value
                  this.props.uploadFile(description)
                }} >
                <div className="form-group pt-2">
                    <input
                      id="fileDescription"
                      type="text"
                      ref={(input) => { this.fileDescription = input }}
                      className='form-control text-center'
                      placeholder="DESCRIPTION"
                      required />
                </div>
                <div className='btn-group pt-2'>
                  <input type="file" onChange={this.props.captureFile} className="text-white mr-3"/>
                  <button type="submit" className="glass-btn">Upload</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;