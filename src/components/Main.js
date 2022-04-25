import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid p-5 justify-center">
          <main role="main">
            <div className="content">
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

            {/* Create Table*/}
            <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
              {/* Set table columns */}
              {/* Mapping rows... */}
            </table>

          </div>
        </main>
      </div>
    );
  }
}

export default Main;