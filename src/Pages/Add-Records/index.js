import React,{useState} from 'react'
import './addRecords.css'
import FormLabel from '../../Components/Form-Label'
import FormButton from '../../Components/Form-Button'
import FormInput from '../../Components/Form-Input'

const AddRecords = () => {

  const [recordsData, setRecordsData] = useState({})

  const handleRecords=(e)=>{
    setRecordsData({...recordsData,[e.target.name]:e.target.value});
  }

  // console.log(recordsData,"recordsData");

  const submitRecords=(e)=>{
    e.preventDefault();
   console.log('formData',recordsData)
 
    }

  return (
    <div className='add-Records'>
<section className="formSection absolute-center">
<div className="row">
  <div className="col-md-12 column2">
  <form className='absolute-center' onSubmit={submitRecords}>
    <h5>Welcome to Land-Registration</h5>
    <div className="form-group">
   <FormLabel content='Property-Address : '/>
   <FormInput name="property-address" onChangeData={handleRecords} />
  </div>
  <div className="form-group">
  <div className="row">
      <div className="col-md-6">
      <FormLabel content='Property-Area : '/>
      <FormInput name="property-area" onChangeData={handleRecords} />
      </div>
      <div className="col-md-6">
      <FormLabel content='Property-Price : '/>
      <FormInput name="property-price" onChangeData={handleRecords} />
      </div>
    </div>
   
  </div>
  <div className="form-group">
    <div className="row">
      <div className="col-md-6">
      <FormLabel content='State : '/>
      <FormInput name="state" onChangeData={handleRecords} />
      </div>
      <div className="col-md-6">
      <FormLabel content='City : '/>
      <FormInput name="city" onChangeData={handleRecords} />
      </div>
    </div>
  </div>
 
  <div className="form-group">
    <div className="row">
      <div className="col-md-6">
      <FormLabel content='Current-Owner : '/>
      <FormInput name="current-owner" onChangeData={handleRecords} />
      </div>
      <div className="col-md-6">
      <FormLabel content='Purchased-by : '/>
      <FormInput name="purchased-by" onChangeData={handleRecords} />
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

export default AddRecords