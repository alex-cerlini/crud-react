import React, {useState, useEffect} from 'react'
import FormRegister from './FormRegister'
import fireDb from '../database/firebase'

const Register = () => {

  let [dataClientes, setDataClientes] = useState({})

  let [currentId, setCurrentId] = useState('')

  useEffect( () => {
    fireDb.child('clientes').on('value', dbSnapShot => {
      if(dbSnapShot.val() != null){
        setDataClientes({
          ...dbSnapShot.val()
        })
      } else {
        setDataClientes({})
      }
    })
  },[])

  const addEdit = obj => {
    if(currentId === ''){
      console.log(obj)
      fireDb.child('clientes').push(
        obj,
        error => {
          if(error){
            console.log(error)
          }
        }
      )
    } else {
      fireDb.child(`clientes/${currentId}`).set(
        obj,
        error => {
          if(error){
            console.log(error)
          }
        }
      )
    }
  }

  const deleteCliente = key => {
    if(window.confirm('Confirma a exclusão deste cliente?')){
      fireDb.child(`clientes/${key}`).remove(
        error => {
          if(error){
            console.log(error)
          }
        }
      )
    }
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
          <FormRegister {...({addEdit, currentId, dataClientes})} />
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

            <tbody>
              {
                Object.keys(dataClientes).map(id => {
                  return <tr key={id}>
                    <td>{dataClientes[id].fullName}</td>
                    <td>{dataClientes[id].phoneNumber}</td>
                    <td>{dataClientes[id].email}</td>

                    <td>

                      <button 
                        className="btn btn-primary action-button"
                        onClick={ () => {setCurrentId(id)}}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </button>

                      <button
                      className="btn btn-danger action-button"
                      onClick={ () => deleteCliente(id) }>
                        <i className="fas fa-trash-alt"></i>
                      </button>

                    </td>
                  </tr>
                })
              }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Register