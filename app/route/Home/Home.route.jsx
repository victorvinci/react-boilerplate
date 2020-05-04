import React, { Component } from 'react';
import { Button } from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() { 
    return ( 
      <main>
        <h1>Welcome</h1>
        <Button />
      </main>
    );
  }
}