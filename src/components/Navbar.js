import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'

class Navbar extends Component {
  render() {
    return (
      <nav className="w-full p-2">
        <div className='navbar'>
          <div className='navbar-brand justify-start'>
            <a target="_blank"
                alt=""
                className="text-white align-bottom"
                rel="noopener noreferrer"
                href="http://www.dappuniversity.com/bootcamp">
                DStorage
            </a>
          </div>
          {/* <a
            className="navbar-brand justify-start"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer">
            <img src={box} width="35" height="35" className="align-top" alt="" />
            DStorage
          </a> */}

          <div className='flex justify-end'>
            { this.props.account
                ? <img
                    alt=""
                    className='mr-2'
                    width='30'
                    height='30'
                    src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                  />
                : <span></span>
              }
            <a target="_blank"
              alt=""
              className="text-white align-bottom"
              rel="noopener noreferrer"
              href={"https://etherscan.io/address/" + this.props.account}>
              {this.props.account ? this.props.account.substring(0,6) : '0x0'}...{this.props.account ? this.props.account.substring(38,42) : '0x0'}
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;