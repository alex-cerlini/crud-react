import React, { useState } from 'react'

const FormRegister = () => {

  const initialFieldsValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    birthDate: ''
  }

  let [values, setValues] = useState(initialFieldsValues)

  const handleInputChange = e => {
    let { fullName, value } = e.target

    setValues({
      ...values,
      [fullName]: value
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
  }

  return (
    <form autoComplete="off" submit={handleFormSubmit} >

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
        name="email"
        value={values.birthDate}
        />
      </div>

    </form>
  )
}

export default FormRegister