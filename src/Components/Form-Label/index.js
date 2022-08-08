import React from 'react'
import './formLabel.css'

const FormLabel = (props) => {
  return (
    <div className='form-label'>
 <label>{props.content}</label>
    </div>
  )
}

export default FormLabel;