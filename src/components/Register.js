import React, {useState, useEffect} from 'react'
import FormRegister from './FormRegister'
import fireDb from '../database/firebase'

const Register = () => {

  let [dataClientes, setDataClientes] = useState({

  })

  useEffect( () => {
    fireDb.child('clientes').on('value', dbSnapShot => {
      if(dbSnapShot.val() != null){
        setDataClientes({
          ...dbSnapShot.val()
        })
      }
    })
  })

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
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Nome Completo</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Register