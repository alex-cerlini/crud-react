import React from 'react'
import FormRegister from './FormRegister'
import fireDb from '../database/firebase'

const Register = () => {

  const addEdit = obj => {
    fireDb.child('clientes').push(
      obj,
      error => {
        if(error){
          console.log(error)
        }
      }
    )
  }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Cadastro de Clientes</h1>
          <p className="lead">Cadastre seus clientes para melhor organização.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <FormRegister addEdit={addEdit}/>
        </div>
        <div>
          Lista de clientes que serão listados em breve
        </div>
      </div>
    </div>
  )
}

export default Register