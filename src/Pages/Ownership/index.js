import React,{useState} from 'react'
import './ownership.css'
import FormButton from '../../Components/Form-Button'
import FormInput from '../../Components/Form-Input'
import FormLabel from '../../Components/Form-Label'
import img from '../../Assets/Images/sideImg.jpeg'

const Ownership = () => {
  const [ownershipData, setOwnershipData] = useState({})

  const handleOwnershipData=(e)=>{
    setOwnershipData({...ownershipData,[e.target.name]:e.target.value});
  }

    // console.log(ownershipData,"ownershipData")
    
  const submitOwnershipData=(e)=>{
    e.preventDefault();
 console.log('formData',ownershipData)
    }
  return (
    <div className='ownership-page'>
      <section className="formSection absolute-center">
<div className="row">
  <div className="col-md-5 column1">
<div className="imageContainer">
  <img src={img} alt="form" />
</div>
  </div>
  <div className="col-md-7 column2">
  <form className='absolute-center' onSubmit={submitOwnershipData}>
    <h5>Please fill the details</h5>
    <div className="form-group">
   <FormLabel content='Property-ID : '/>
   <FormInput name="property-id" onChangeData={handleOwnershipData} />
  </div>
  <div className="form-group">
   <FormLabel content='Purchased-by : '/>
   <FormInput name="purchased-by" onChangeData={handleOwnershipData} />
  </div>
  <div className="form-group">
   <FormLabel content='new-Owner : '/>
   <FormInput name="new-owner" onChangeData={handleOwnershipData}  />
  </div>
  <div className="form-group">
   <FormLabel content='Land-Price : '/>
   <FormInput name="land-price" onChangeData={handleOwnershipData} />
  </div>

  {/* <div className="form-group">
  <div className="row">
      <div className="col-md-6">
      <FormLabel content='Property-ID : '/>
      <FormInput />
      </div>
      <div className="col-md-6">
      <FormLabel content='Purchased-by : '/>
      <FormInput />
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="row">
      <div className="col-md-6">
      <FormLabel content='New-Owner : '/>
      <FormInput />
      </div>
      <div className="col-md-6">
      <FormLabel content='Land-Price : '/>
      <FormInput />
      </div>
    </div>
  </div> */}
 <FormButton content='Submit' />
</form>
  </div>
</div>
</section>
    </div>
  )
}

export default Ownership