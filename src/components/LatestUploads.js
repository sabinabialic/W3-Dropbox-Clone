import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class LatestUploads extends Component {
    render() {
      return (
          <div className="flex flex-col items-center">
            <div className='flex flex-col'>
              {this.props.account ? (
                <h1 className='uploads-header'>Latest Uploads</h1>
              ) : (
                <h1 className='uploads-header'>Connect Your Account to See the Latest Uploads</h1>
                )}

                <div className='flex flex-wrap text-white uploads'>
                  { this.props.files.map((file, key) => {
                    
                    return(
                      <div className="upload-card">
                        <div className='flex flex-col items-center w-full mt-3'>
                          <div className='flex w-full mb-6 p-2'>
                            <h3 className='text-white text-center'>{file.fileDescription}</h3>
                            <p className='text-white'><b>File Type:</b> {file.fileType}</p>
                            <p className='text-white'><b>File Size:</b> {convertBytes(file.fileSize)}</p>
                            <p className='text-white'><b>Upload Date:</b> {moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</p>
                            <a href={"https://etherscan.io/address/" + file.uploader} target='_blank' rel='noopener noreferrer'>
                              <p className='text-white'><b>Uploader: </b>{file.uploader.substring(0,6)}...{file.uploader.substring(38,42)}</p>
                            </a>
                          </div>

                          <div className='p-3 px-5 w-max shadow-5xl timestamp-border'>
                            <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash} target='_blank' rel='noopener noreferrer'>
                              <p className='text-white text-center'><b>File Hash: </b>{file.fileHash.substring(0,16)}...</p>
                            </a>
                          </div>

                        </div>                        
                        {/* <thead key={key}>
                          <tr>
                            <td>{file.fileId}</td>
                            <td>{file.fileName}</td>
                            <td className='pr-2'>{file.fileDescription}</td>
                            <td className='pr-2'>{file.fileType}</td>
                            <td className='pr-2'>{convertBytes(file.fileSize)}</td>
                            <td className='pr-2'>{moment.unix(file.uploadTime).format('h:mm A M/D/Y')}</td>
                            <td className='pr-2'>
                              <a
                                href={"https://etherscan.io/address/" + file.uploader}
                                rel="noopener noreferrer"
                                target="_blank">
                                {file.uploader.substring(0,6)}...{file.uploader.substring(38,42)}
                              </a>
                            </td>
                            <td className='pr-2'>
                              <a
                                href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                                rel="noopener noreferrer"
                                target="_blank">
                                {file.fileHash.substring(0,10)}...
                              </a>
                            </td>
                          </tr>
                        </thead> */}
                      </div>
                    )
                  })}
                </div>
          </div>
      </div>
      );
    }
}

export default LatestUploads;