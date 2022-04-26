import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'

class Navbar extends Component {
  render() {
    return (
      <nav className='w-full mr-2 ml-2 navbar'>
        <div className='navbar-brand'>
            <a target="_blank"
                alt=""
                className="text-white align-bottom"
                rel="noopener noreferrer"
                href="http://www.dappuniversity.com/bootcamp">
                DStorage
            </a>
        </div>

        <div className='flex justify-end'>
            { this.props.account
                ? <img
                    alt=""
                    className='mr-2'
                    width='28'
                    height='28'
                    src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                  />
                : <span></span>
              }
            <a target="_blank"
              alt=""
              className="navbar-account align-bottom"
              rel="noopener noreferrer"
              href={"https://etherscan.io/address/" + this.props.account}>
              {this.props.account ? this.props.account.substring(0,6) : '0x0'}...{this.props.account ? this.props.account.substring(38,42) : '0x0'}
            </a>
          </div>

      </nav>
    );
  }
}

export default Navbar;