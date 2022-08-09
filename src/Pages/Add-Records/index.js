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
   <FormInput name="areaAddress" onChangeData={handleRecords} />
  </div>
  <div className="form-group">
  <div className="row">
      <div className="col-md-6">
      <FormLabel content='Property-Area-Sqaure-Ft : '/>
      <FormInput name="area_sq" onChangeData={handleRecords} />
      </div>
      <div className="col-md-6">
      <FormLabel content='Property-Price : '/>
      <FormInput name="landPrice" onChangeData={handleRecords} />
      </div>
    </div>
   
  </div>
  <div className="form-group">
  <div className="row">
      <div className="col-md-6">
      <FormLabel content='Current-Owner : '/>
      <FormInput name="ownerName" onChangeData={handleRecords} />
      </div>
      <div className="col-md-6">
      <FormLabel content='Owner-Address : '/>
      <FormInput name="ownerAddress" onChangeData={handleRecords} />
      </div>
    </div>
  </div>
  

  <div className="form-group">
  <div className="row">
      <div className="col-md-6">
      <FormLabel content='Previous-Owner: '/>
      <FormInput name="ownerName" onChangeData={handleRecords} />
      </div>
      <div className="col-md-6">
      <FormLabel content='Previous-Owner-Address : '/>
      <FormInput name="purchasedBy" onChangeData={handleRecords} />
      </div>
    </div>
  </div>

  <div className="form-group">
    <div className="row">
      <div className="col-md-6">
      <FormLabel content='MobileNumber : '/>
      <FormInput name="mobile" onChangeData={handleRecords} />
      </div>
      <div className="col-md-6">
      <FormLabel content='Pincode : '/>
      <FormInput name="pincode" onChangeData={handleRecords} />
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