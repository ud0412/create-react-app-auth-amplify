import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
import  {Button} from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color='primary'>Show the answer</Button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
