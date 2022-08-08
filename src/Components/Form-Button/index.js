import React from 'react'
import './formButton.css'

const FormButton = (props) => {
  return (
    <div className='form-button'>
  <button type="submit" className="btn center-from-div">{props.content}</button>
    </div>
  )
}

export default FormButton;