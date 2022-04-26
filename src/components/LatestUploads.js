import React, { Component } from 'react';

class LatestUploads extends Component {
    render() {
      return (
        <div className=''>
            <div className='file-content'>
                <h1 className='text-white text-center'>Latest Uploads</h1>
                <div className='uploads'>
                    {this.props.files.map((file, key) => {
                        return(
                            <thead key={key}>
                                <div className='upload-card flex flex-1'>
                                    <h4 className='text-white'>{file.fileName}</h4>
                                    <p className='text-white'>Description: {file.fileDescription}</p>
                                    <p className='text-white'>Type: {file.fileType}</p>
                                    <a
                                        href={`https://etherscan.io/address/${file.uploader}`}
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <p className='text-white'>Uploaded By: {file.uploader.substring(0,10)}...</p>
                                    </a>
                                    <a
                                        href={`https://ipfs.infura.io/ipfs/%{file.fileHash}`}
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <p className='text-white'>Hash: {file.fileHash.substring(0,10)}...</p>
                                    </a>  
                                </div>
                            </thead>
                        )
                    })}
                </div>
            </div>
        </div>
      );
    }
}

export default LatestUploads;