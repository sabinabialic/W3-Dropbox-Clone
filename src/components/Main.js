import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="flex container w-full">
        <div className='main-content'>
          <h1 className="text-white text-4xl pt-5">
            Upload and Store Files!
          </h1>
          <p className="text-white pt-3">
            Easily upload and store files on the blockchain using MetaMask
          </p>

          <div className="upload-content">
            <form onSubmit={(event) => {
              event.preventDefault()
              const description = this.fileDescription.value
              this.props.uploadFile(description)
            }} >
              
            <div className="card white-glassmorphism mb-5">
              <div className='files'>
                <input type="file" onChange={this.props.captureFile} className="text-white mr-3"/>
              </div>
            </div>

            <div className='btn-group pt-2'>
              <input
                  id="fileDescription"
                  type="text"
                  ref={(input) => { this.fileDescription = input }}
                  className='form-control text-center'
                  placeholder="DESCRIPTION"
                  required />
              <button type="submit" className="glass-btn">Upload</button>
            </div>
            </form>
            
            {/* <h2 className='text-white text-center'>Browse or Drop a File</h2> */}
            {/* <form onSubmit={(event) => {
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
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;