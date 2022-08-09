import React,{useState} from 'react'
import './addAdmin.css'
import FormButton from '../../Components/Form-Button'
import FormInput from '../../Components/Form-Input'
import FormLabel from '../../Components/Form-Label'

const AddAdmin = () => {

    const [adminData, setAdminData] = useState({})

    const handleAdminData=(e)=>{
        setAdminData({...adminData,[e.target.name]:e.target.value});
    }
  
    // console.log(recordsData,"recordsData");
  
    const submitAdminData=(e)=>{
      e.preventDefault();
     console.log('formData',adminData)
   
      }

  return (
    <div className='add-admin'>
<section className="formSection absolute-center">
<div className="row">
  <div className="col-md-12 column1">
  <form className='absolute-center' onSubmit={submitAdminData}>
    <h5>Welcome to Land-Registration</h5>
    <div className="form-group">
   <FormLabel content='Name : '/>
   <FormInput name="name" onChangeData={handleAdminData} />
  </div>
    <div className="form-group">
   <FormLabel content='Admin-Address : '/>
   <FormInput name="adminAddress" onChangeData={handleAdminData} />
  </div>
  <div className="form-group">
  <div className="row">
      <div className="col-md-4">
      <FormLabel content='City : '/>
      <FormInput name="city" onChangeData={handleAdminData} />
      </div>
      <div className="col-md-4">
      <FormLabel content='District : '/>
      <FormInput name="district" onChangeData={handleAdminData} />
      </div>
      <div className="col-md-4">
      <FormLabel content='State : '/>
      <FormInput name="state" onChangeData={handleAdminData} />
      </div>
    </div>
  </div>

 <FormButton content='Submit' />
</form>
  </div>
</div>
</section>
    </div>
  )
}

export default AddAdmin