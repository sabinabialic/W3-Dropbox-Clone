import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {
  render() {
    return (
      <div className="justify-center">
        <div className="main-content">
          <div className="card white-glassmorphism">
            <h2 className='text-white text-center'>Save File</h2>
            <form onSubmit={(event) => {
              event.preventDefault()
              const description = this.fileDescription.value
              this.props.uploadFile(description)
            }} >
            <div className="form-group pt-2">
              <br></br>
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