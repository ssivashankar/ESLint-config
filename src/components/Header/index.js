import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Nav extends Component{
  state = { activeItem: 'home', loggedIn: false }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent =() => {
    if (this.state.loggedIn) {
      return <div className="ui secondary pointing menu">
        <Link className="item" to='/users'>
      Users
        </Link>
        <Link className="item" to='/groups'>
      Groups
        </Link>
      </div>
    }
  }

  fakeAuth = () => {
    if (this.state.loggedIn) {
      return 'Welcome John'
    } else {
      return 'Login'
    }
  }

  render() {
    const { activeItem, loggedIn } = this.state
    console.log(activeItem, loggedIn)

    return (
      <div>
        <div className="ui segment header-wrap">
          <div className="ui secondary menu">
            <h3> USERS </h3>
            <div className="right menu">
              <Link className="ui item" to='/'>
                {
                  this.fakeAuth()
                }
              </Link>
            </div>
          </div>
        </div>
        {this.renderContent()}
      </div>
    )
  }
}
