import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
        <div className="p-5 justify-center">
          <div className="content">
            <div className='card white-glassmorphism'>
              <h2 className='text-white'>Share File</h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.fileDescription.value
                this.props.uploadFile(description)
              }}>

                <div className='form-group'>
                  <br/>
                  <input
                    id='fileDescription'
                    type='text'
                    ref={(input) => {this.fileDescription = input}}
                    className='form-control text-center'
                    placeholder='description'
                    required />
                </div>
                <input type='file' onChange={this.props.caputreFile} className='text-white'/>
                <button type='submit' className='btn-primary btn-black'>Upload</button>
              </form>
            </div>
            {/* Create Table*/}
            <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
            {/* Set table columns */}
              {/* Mapping rows... */}
            </table>
          </div>
        </div>
    );
  }
}

export default Main;