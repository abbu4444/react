import {Component} from 'react'

import './index.css'

class BrowserHistory extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history"
            alt="app logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              className="input"
              type="search"
              placeholder="search history"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
