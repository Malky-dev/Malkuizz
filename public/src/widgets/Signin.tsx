"use strict"

import React from "react";
import { signin } from "../apisdk";

interface iProps {
  onRegistered: () => void
}
interface iStates {
  nickname: string,
  email: string,
  password: string,
  passwordTest: string,
  isRunning: boolean
}

export default class Signin extends React.Component<iProps, iStates> {
  
  constructor (props: iProps) {

    super(props)

    this.state = {
      nickname: '',
      email: '',
      password: '',
      passwordTest: '',
      isRunning: false
    }

    this.handleChangeNickname = this.handleChangeNickname.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangePasswordTest = this.handleChangePasswordTest.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  private handleChangeNickname(e: React.ChangeEvent<HTMLInputElement>):void {

    e.preventDefault()
    e.stopPropagation()
    this.setState({nickname: e.target.value})

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

  private handleChangePasswordTest(e: React.ChangeEvent<HTMLInputElement>):void {

    e.preventDefault()
    e.stopPropagation()
    this.setState({passwordTest: e.target.value})

  }

  private handleSubmit(e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>):void {

    e.preventDefault()
    e.stopPropagation()

    if (this.state.nickname === '') {
      alert("pseudo alerte aux gogoles")
      return
    }

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
      alert("email alerte aux gogoles")
      return
    }
    
    // Regex password : Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.state.password)) {
      alert("password alerte aux gogoles")
      return
    }

    if (this.state.password !== this.state.passwordTest) {
      alert("password verif alerte aux gogoles")
      return
    }

    this.setState({isRunning: true})

    signin(this.state.nickname, this.state.email, this.state.password)
    
    .then(():void => {
      
      alert("c'est bon, tu peux te connecter maintenant")
      this.props.onRegistered()

    })

    .catch((err: Error): void => {

      alert(err.message ? err.message : err)

    })

    .finally((): void => this.setState({isRunning: false}))

  }

  public render():JSX.Element {
    
    return <div className="container">
      <div className="justify-content-center">
        <div className="col-md-12 col-lg-10">
          <div className="wrap d-md-flex">
            <div className="w-100 loginImg">
            </div>
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4">S'inscrire</h3>
                </div>
              </div>
              <form action="#" className="signin-form" onSubmit={this.handleSubmit}>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="nickname">Mon pseudo</label>
                  <input id="nickname" type="text" className="form-control" required value={this.state.nickname} onChange={this.handleChangeNickname} disabled={this.state.isRunning} />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="email">Adresse email</label>
                  <input id="email" type="email" className="form-control" required value={this.state.email} onChange={this.handleChangeEmail} disabled={this.state.isRunning} />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="password">Mot de passe</label>
                  <input id="password" type="password" className="form-control" required value={this.state.password} onChange={this.handleChangePassword} disabled={this.state.isRunning} />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="passwordTest">Vérification du mot de passe</label>
                  <input id="passwordTest" type="password" className="form-control" required value={this.state.passwordTest} onChange={this.handleChangePasswordTest} disabled={this.state.isRunning} />
                </div>
                <button type="submit" className="form-control btn rounded submit px-3 secondaryBackgroundColor loginSubmitButton"  disabled={this.state.isRunning}>S'inscrire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}