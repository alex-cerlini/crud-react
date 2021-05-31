import React, { useState } from 'react'

const FormRegister = () => {

  const initialFieldsValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    birthDate: ''
  }

  let [value, setValues] = useState(initialFieldsValues)

  return (
    <h1>FormRegister</h1>
  )
}

export default FormRegister