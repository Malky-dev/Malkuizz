"use strict"

import React from "react";

interface iProps {
  onConnected: () => void
}

export default class Login extends React.Component<iProps> {
  
  getToken(name: string): string|null {
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

  render():JSX.Element {
    
    if (this.getToken("Malkuizz")) {
      return <h1>Token oui</h1>
    }

    return (
      <div>
        <h1>Hello!!</h1>
        <h2>Token non</h2>
      </div>
    );
  }
}