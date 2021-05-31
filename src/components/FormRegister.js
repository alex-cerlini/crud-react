import React, { useEffect, useState } from 'react'

const FormRegister = (props) => {

  const initialFieldsValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    birthDate: ''
  }

  let [values, setValues] = useState(initialFieldsValues)

  useEffect( () => {
    if(props.currentId == ''){
      setValues({
        ...initialFieldsValues
      })
    } else {
      setValues({
        ...props.dataClientes[props.currentId]
      })
    }
  }, [props.currentId, props.dataClientes])

  const handleInputChange = e => {
    let { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    props.addEdit(values)
  }

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit} >

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>

      <input
        className="form-control"
        placeholder="Nome Completo"
        name="fullName"
        value={values.fullName}
        onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-phone-alt"></i>
          </div>
        </div>

      <input
        className="form-control"
        placeholder="Número de telefone"
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-envelope"></i>
          </div>
        </div>

      <input
        className="form-control"
        placeholder="Coloque seu e-mail"
        name="email"
        value={values.email}
        onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-birthday-cake"></i>
          </div>
        </div>

      <input
        className="form-control"
        placeholder="Data de Nascimento"
        name="birthDate"
        value={values.birthDate}
        onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value="Salvar"
          className="btn btn-primary btn-block"
        />
      </div>

    </form>
  )
}

export default FormRegister