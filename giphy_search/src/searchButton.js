import React, { Component } from 'react'
class searchButton extends Component {
  render() {
    return (
      <>
        <li>
          {' '}
          {
            <input
              type="button"
              onclick="alert('Button is Working!"
              value="Search"
            ></input>
          }{' '}
        </li>
      </>
    )
  }
}
export default searchButton
