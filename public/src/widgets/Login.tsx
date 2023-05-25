"use strict"

import React from "react";
import { iUser, login, getToken } from "../apisdk"

interface iProps {
  onConnected: (user: iUser) => void
}
interface iStates {
  email: string,
  password: string,
  isCheckingToken: boolean,
  isCheckingLogin: boolean
}
export default class Login extends React.Component<iProps, iStates> {
  
  constructor ( props: any ) {

    super(props)

    this.state = {
      email: '',
      password: '',
      isCheckingToken: true,
      isCheckingLogin: false
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  public componentDidMount(): void {

    const token: string | null = this.getToken("Malkuizz")

    if (token) {

      getToken(token)

      .then ((user: iUser): void => {

        this.props.onConnected(user)

      })
      .catch((err: Error): void => {

        alert(err.message ? err.message : err)        
        this.setState({isCheckingToken: false})

      })
    } else {

      this.setState({isCheckingToken: false})

    }
  }

  private handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>):void {

    e.preventDefault()
    e.stopPropagation()
    this.setState({email: e.target.value})

  }

  private handleChangePassword(e: React.ChangeEvent<HTMLInputElement>):void {

    e.preventDefault()
    e.stopPropagation()
    this.setState({password: e.target.value})

  }

  private handleSubmit(e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>):void {

    e.preventDefault()
    e.stopPropagation()

    // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
    //   alert("email alerte aux gogoles")
    //   return
    // }
    
    // // Regex password : Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    // if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.state.password)) {
    //   alert("password alerte aux gogoles")
    //   return
    // }

    this.setState({ isCheckingLogin: true })

    login(this.state.email, this.state.password)

    .then((token: string): Promise<iUser> => {

      return getToken(token)

    })
    .then((user: iUser): void => {

      this.props.onConnected(user)

    } )
    .catch((err: Error): void => {

      alert(err.message ? err.message : err)
      this.setState({isCheckingLogin: false})

    })
  }

  private getToken(name: string): string|null {

    const nameLength:number = (name.length + 1)

    return document.cookie

      .split(';')
      .map((c:string):string => {

        return c.trim()

      })
      .filter((cookie:string):boolean => {

        return cookie.substring(0, nameLength) === `${name}=`

      })
      .map((cookie:string):string => {

        return decodeURIComponent(cookie.substring(nameLength))

      })[0] || null;

  }

  public render():JSX.Element {
    
    if (this.state.isCheckingToken) {

      return <p>Vérification de la session en cours</p>
      
    }

    return <div className="container">
      <div className="justify-content-center">
        <div className="col-md-12 col-lg-10">
          <div className="wrap d-md-flex">
            <div className="w-100 loginImg">
            </div>
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4">Se connecter</h3>
                </div>
              </div>
              <form action="#" className="signin-form" onSubmit={this.handleSubmit}>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="name">Adresse email</label>
                  <input type="email" className="form-control" required value={this.state.email} onChange={this.handleChangeEmail} disabled={this.state.isCheckingLogin}/>
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="password">Mot de passe</label>
                  <input type="password" className="form-control" required value={this.state.password} onChange={this.handleChangePassword} disabled={this.state.isCheckingLogin} />
                </div>
                <div className="form-group">
                  {!this.state.isCheckingLogin && <button type="submit" className="form-control btn rounded submit px-3 secondaryBackgroundColor loginSubmitButton">Se connecter</button>}
                  {this.state.isCheckingLogin && <p>Vérification des informations de connexion en cours</p>}
                </div>
                <div className="text-md-right mt-3">
                  <a href="#">Mot de passe oublié</a>
                </div>
              </form>
              <div className="mt-3">
                <p className="text-center">Vous n'avez pas de compte ? <a data-toggle="tab" href="#signup">S'inscrire</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}