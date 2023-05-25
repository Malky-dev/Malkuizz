"use strict"

import React from "react";
import Login from "./widgets/Login";
import Navbar from "./widgets/Navbar";
import { iUser } from "./apisdk";

interface iProps {}

interface iStates {
  isConnected: boolean,
  role: string
}

export default class App extends React.Component<iProps, iStates> {

  constructor() {

    super({})

    this.state = { isConnected:false, role: 'basic' }

    this.handleIsConnected = this.handleIsConnected.bind(this)

  }

  private handleIsConnected(user: iUser):void {

    this.setState({isConnected:true, role: user.role})

  }

  private selectViewReturned():JSX.Element|null {

    if (!this.state.isConnected) {

      return <> <Login onConnected={this.handleIsConnected} /></>
    }

    return null

  }

  public render():JSX.Element {
    return <><Navbar isConnected={this.state.isConnected} role={this.state.role} /> {this.selectViewReturned()} </>
  }
}