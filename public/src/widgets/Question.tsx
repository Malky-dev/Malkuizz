"use strict"

import React from "react";

export default class Question extends React.Component {
  
  constructor () {

    super({})
    
  }

  public render():JSX.Element {
    
    return <div className="container">
      <form className="mt-5">
        <div className="form-group">
          <input type="text" className="form-control" id="question" placeholder="Libellé de la question" />
        </div>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Bonne réponse" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Mauvaise réponse 1" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Mauvaise réponse 2" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Mauvaise réponse 3" />
          </div>
        </div>
        <div className="d-flex justify-content-center flex-row">
          <div className="mr-2 ml-2">Catégories</div>
          <div className="d-flex justify-content-center flex-row">
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="cinema" />
              <label className="form-check-label" htmlFor="cinema">Cinéma</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="geography" />
              <label className="form-check-label" htmlFor="geography">Géographie</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="history" />
              <label className="form-check-label" htmlFor="history">Histoire</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="videogames" />
              <label className="form-check-label" htmlFor="videogames">jeux vidéos</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="litterature" />
              <label className="form-check-label" htmlFor="litterature">Littérature</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="comics" />
              <label className="form-check-label" htmlFor="comics">Mangas et comics</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="music" />
              <label className="form-check-label" htmlFor="music">Musique</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="sciences" />
              <label className="form-check-label" htmlFor="sciences">Sciences</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="shows" />
              <label className="form-check-label" htmlFor="shows">Séries télé</label>
            </div>
            <div className="form-check mr-2 ml-2">
              <input className="form-check-input" name="categories" type="checkbox" id="sports" />
              <label className="form-check-label" htmlFor="sports">Sport et arts martiaux</label>
            </div>
          </div>
        </div>
        <button type="submit" className="form-control btn rounded submit px-3 secondaryBackgroundColor loginSubmitButton">Valider</button>
      </form>
    </div>
  }
}