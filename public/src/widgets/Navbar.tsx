"use strict"

import React from "react";

interface iProps {
  isConnected:boolean
  role: string
}

export default class Navbar extends React.Component<iProps> {

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
          {this.props.isConnected && <li className="nav-item active">
          <a className="nav-link" href="/public/home">Accueil</a>
          </li>}
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#">Faire un quizz</a>
          </li>}
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#">Voir mes scores</a>
          </li>}
          {this.props.role !== 'basic' && <li className="nav-item">
            <a className="nav-link" href="#">Ajouter une question</a>
          </li>}
          {this.props.role !== 'basic' && <li className="nav-item">
            <a className="nav-link" href="#">Editer une question</a>
          </li>}
          {this.props.role === 'admin' && <li className="nav-item">
            <a className="nav-link" href="#">Gérer les utilisateurs</a>
          </li>}
        </ul>
      </div>
      <div className="flex-row justify-content-end">
        <ul className="navbar-nav">
          {this.props.isConnected && <li className="nav-item active">
            <a className="nav-link" href="#"> Mes informations </a>
          </li>}
          {this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#"> Se déconnecter </a>
          </li>}
          {!this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#"> Se connecter </a>
          </li>}
          {!this.props.isConnected && <li className="nav-item">
            <a className="nav-link" href="#"> S'inscrire </a>
          </li>}
        </ul>
      </div>
    </nav>
  }
}