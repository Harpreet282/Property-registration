import React from 'react'
import './formInput.css'

const FormInput = (props) => {
  return (
    <div className='form-input'>
<input type="text" className="form-control" autoComplete='off' name={props.name} onChange={props.onChangeData} />
    </div>
  )
}

export default FormInput;