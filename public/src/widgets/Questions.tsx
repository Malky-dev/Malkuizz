"use strict"

import React from "react";

export default class Questions extends React.Component {
  
  constructor () {

    super({})
    
  }

  public render():JSX.Element {
    
    return <div className="container">    
      <div className="d-flex justify-content-center mt-3">
        <a className="btn btn-primary" href="#question"> Ajouter une nouvelle question </a>
      </div>
      <div className="d-flex justify-content-center mt-1 mb-1">
        <h2 className="m-5">Liste des questions</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>QUESTION</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo molestias nesciunt voluptas, aliquam laboriosam quo et quidem quaerat voluptate quos, voluptates ea? Iusto porro accusamus omnis aperiam quam iste incidunt!</td>
            <td><a href="#"><img src="/public/img/edit24.png" alt="edit" /></a></td>
            <td><a href="#"><img src="/public/img/delete24.png" alt="delete" /></a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea tempora quis officiis quisquam quae autem ullam quasi reiciendis sint ad magnam, veritatis alias nulla illum eveniet. Laboriosam blanditiis fuga reiciendis.</td>
            <td><a href="#"><img src="/public/img/edit24.png" alt="edit" /></a></td>
            <td><a href="#"><img src="/public/img/delete24.png" alt="delete" /></a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, assumenda accusamus quaerat sapiente maiores, numquam ratione dicta sunt ducimus accusantium officia dolore cum adipisci reiciendis eos iure voluptates unde voluptatibus?</td>
            <td><a href="#"><img src="/public/img/edit24.png" alt="edit" /></a></td>
            <td><a href="#"><img src="/public/img/delete24.png" alt="delete" /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}