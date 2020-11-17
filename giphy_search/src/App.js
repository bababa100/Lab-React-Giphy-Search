import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import searchButton from './searchButton'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      giphys: [],
    }
  }

  // setGiphys = (giphys) => {
  //   this
  // }
  render() {
    return (
      <>
        <li>
          <ls> 'Hello World 123!'</ls>,
          <ls>
            <searchButton />
          </ls>
        </li>
      </>
    )
  }
}

export default App
