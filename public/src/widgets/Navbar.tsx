"use strict"

import React from "react";

interface iProps {
  isConnected:boolean
  role: string
  onNavigation: (page: tPage) => void
}

interface iState {
  page: tPage
}

export type tPage = "home" | "quizz" | "score" | "addQuestion" | "editQuestion" | "editUsers" | "intels" | "logout" | "login" | "signin"

export default class Navbar extends React.Component<iProps, iState> {

  constructor (props: iProps) {

    super(props)

    this.state = { page: "home" } 

    this.handleChangePage = this.handleChangePage.bind(this)
    
  }

  // check and load the page from URL
  public componentDidMount(): void {

    const currentPage: "" | tPage = window.location.hash.replace("#", "") as "" | tPage

    if (currentPage !== 'home' && currentPage !== "") {

      this.props.onNavigation(currentPage)

      this.setState({page: currentPage})
      
    }

  }

  private handleChangePage(e: React.MouseEvent<HTMLAnchorElement>):void {

    const url: URL = new URL(e.currentTarget.href)
    const currentPage: tPage = url.hash.replace("#", "") as tPage

    if (currentPage === "logout") {

      document.cookie = "Malkuizz=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      window.location.reload()

      return
      
    }

    this.props.onNavigation(currentPage)

    this.setState({page: currentPage})

  }

  public render():JSX.Element {
    
    return <nav className="navbar navbar-expand-lg navbar-light justify-content-between secondaryBackgroundColor">    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="flex-row justify-content-start">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              <img src="https://picsum.photos/100/50" className="d-inline-block align-top" alt="malkuizz" />
            </a>
          </li>
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#home" onClick={this.handleChangePage}> Accueil </a>
          </li>}
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#quizz" onClick={this.handleChangePage}> Faire un quizz </a>
          </li>}
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#score" onClick={this.handleChangePage}> Voir mes scores </a>
          </li>}
          {this.props.role !== 'basic' && <li className="nav-item">
            <a className="nav-link" href="#addQuestion" onClick={this.handleChangePage}> Ajouter une question </a>
          </li>}
          {this.props.role !== 'basic' && <li className="nav-item">
            <a className="nav-link" href="#editQuestion" onClick={this.handleChangePage}> Gérer les questions </a>
          </li>}
          {this.props.role === 'admin' && <li className="nav-item">
            <a className="nav-link" href="#editUsers" onClick={this.handleChangePage}> Gérer les utilisateurs </a>
          </li>}
        </ul>
      </div>
      <div className="flex-row justify-content-end">
        <ul className="navbar-nav">
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#intels" onClick={this.handleChangePage}> Mes informations </a>
          </li>}
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#logout" onClick={this.handleChangePage}> Se déconnecter </a>
          </li>}
          {!this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#login" onClick={this.handleChangePage}> Se connecter </a>
          </li>}
          {!this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#signin" onClick={this.handleChangePage}> S'inscrire </a>
          </li>}
        </ul>
      </div>
    </nav>
  }
}