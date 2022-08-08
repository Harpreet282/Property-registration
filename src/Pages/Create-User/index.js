import React,{useState} from 'react'
import './createUser.css'
import FormButton from '../../Components/Form-Button'
import FormInput from '../../Components/Form-Input'
import FormLabel from '../../Components/Form-Label'

const CreateUser = () => {

  const [formData, setFormData] = useState({})

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  // console.log(formData,"formData")


  const handleSubmit=(e)=>{
    e.preventDefault();
 console.log('formData',formData)
    }

  return (
    <div className='create-user'>
    <section className="formSection absolute-center">
<div className="row">
<div className="col-md-7 column2">
<form className='absolute-center' onSubmit={handleSubmit}>
  <h5>Enter User's details to create new-user : </h5>
  <div className="form-group">
 <FormLabel content='Name : '/>
 <FormInput name="name" onChangeData={handleChange} />
</div>
<div className="form-group">
 <FormLabel content='User-ID : '/>
 <FormInput name="User-id" onChangeData={handleChange} />
</div>
<div className="form-group">
  <div className="row">
    <div className="col-md-6">
    <FormLabel content='State : '/>
    <FormInput name="state" onChangeData={handleChange} />
    </div>
    <div className="col-md-6">
    <FormLabel content='City : '/>
    <FormInput name="city" onChangeData={handleChange} />
    </div>
  </div>
</div>
<div className="form-group">
 <FormLabel content='Address : '/>
 <FormInput name="address" onChangeData={handleChange} />
</div>
<FormButton content='Submit' />
</form>
</div>
<div className="col-md-5 column1">
<div className="imageContainer">
<img src="https://media.istockphoto.com/photos/concept-of-security-network-security-data-and-password-login-on-by-picture-id1386241240?b=1&k=20&m=1386241240&s=170667a&w=0&h=27SYi8MMTLT9ZNBTb_hL5p1c7Jspc7QUFJNfoDg9LS0=" alt="form" />
</div>
</div>
</div>
</section>
  </div>
  )
}

export default CreateUser