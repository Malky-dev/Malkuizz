"use strict"

import React from "react";
import Login from "./widgets/Login";
import Navbar, { tPage } from "./widgets/Navbar";
import { iUser } from "./apisdk";
import Home from "./widgets/Home";
import Quizz from "./widgets/Quizz";
import Question from "./widgets/Question";
import Score from "./widgets/Score";
import User from "./widgets/User";
import Signin from "./widgets/Signin";

interface iProps {}

interface iStates {
  isConnected: boolean,
  page: tPage,
  role: string
}

export default class App extends React.Component<iProps, iStates> {

  constructor() {

    super({})

    this.state = { isConnected:false, role: 'basic', page: 'home' }

    this.handleIsConnected = this.handleIsConnected.bind(this)
    this.handleOnNavigation = this.handleOnNavigation.bind(this)

  }

  private handleIsConnected(user: iUser):void {

    this.setState({ isConnected: true, role: user.role })

  }

  private handleOnNavigation(page: tPage):void {

    this.setState({page: page})

  }

  private selectViewReturned():JSX.Element|null {

    if (!this.state.isConnected) {
      
      return (this.state.page === "signin") ? <Signin /> : <Login onConnected={ this.handleIsConnected } />

    }

    switch (this.state.page) {

      case 'quizz':

        return <Quizz />

      case 'score':

        return <Score />

      case 'addQuestion':
  
        return <Question />

      case 'editQuestion':
    
        return <Question />

      case 'editUsers':
      
        return <User />

      case 'intels':

        return <User />

      case 'logout': 

        return <Home />

      default:

        return <Home />
    }
  }

  public render():JSX.Element {

    return <><Navbar isConnected={ this.state.isConnected } role={ this.state.role } onNavigation={ this.handleOnNavigation } /> { this.selectViewReturned() } </>
  }
}