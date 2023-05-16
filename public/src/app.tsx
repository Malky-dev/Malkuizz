"use strict"

import React from "react";
import Login from "./Login";

interface iProps {}

interface iStates {
  isConnected:boolean
}

export default class App extends React.Component<iProps, iStates> {

  constructor() {
    super({})
    this.state = { isConnected:false }
    this.handleIsConnected = this.handleIsConnected.bind(this)
  }

  private handleIsConnected():void {
    this.setState({isConnected:true})
  }

  public render():JSX.Element {

    if (!this.state.isConnected) {
      return <Login onConnected={this.handleIsConnected}/>
    }

    return <p>vous etes connecté</p>
  }
}