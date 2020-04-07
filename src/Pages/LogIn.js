import React, { useState, Component} from 'react';
import {withRouter} from 'react-router-dom';

class Foo extends Component {
    constructor(props) {
      super(props)
      this.goHome = this.goHome.bind(this)
    }
    goHome() {
      this.props.history.push('/dashboard')
    }
  
    render() {
        return(
      <div className="foo">
          <h1 className = 'Log'>LogIn Page</h1>
          <header>
          <label>Name
              <input type = 'string' name = 'name'></input>
          </label>
          </header>
          <header>
          <label>Email
              <input type = 'email' name = 'Email'></input>
          </label>
          </header>
          <header>
          <label>Mobile No
              <input type = 'number' name = 'Phone Number'></input>
          </label>
          </header>
          <body>
        <button onClick={this.goHome}>Submit</button>
        </body>
      </div>
        );
    }
  }
  
  export default withRouter(Foo);