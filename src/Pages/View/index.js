import React from 'react'
import './view.css'

const View = () => {

const data=[
  {
    id:1,
    heading:"Residential Land",
    subHeading:"10 Properties",
    img:"https://static.99acres.com/universalapp/img/d_hp_property_type_3.webp",
  },
  {
    id:2,
    heading:"Residential Apartment",
    subHeading:"10+ Properties",
    img:"https://static.99acres.com/universalapp/img/d_hp_property_type_1.webp",
  },
  {
    id:3,
    heading:"Independent House/ Villa ",
    subHeading:"10 Properties",
    img:"https://static.99acres.com/universalapp/img/d_hp_property_type_2.webp",
  }
]

  return (
    <div className='view'>
<div className="container">
<div className="searchBarSection absolute-center">
  <h2 className=''>Search any Property here!!</h2>
<form className="form-inline py-5 my-2 my-lg-0 center-from-div">
  <div className="row">
    <div className="col-md-9 column">
    <input className="form-control mr-sm-2" type="search" placeholder="🔍Search city, locality, project / society, landmarks..." aria-label="Search"/>
    </div>
    <div className="col-md-3 column">
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
  </div>
    </form>
    <div className="row map-row mx-4">
      {data.map((i)=>
      <div className='col-md-4 column px-4' key={i.id}>
<div className="imgContainer">
<img src={i.img} alt="" />
<div className="text-container">
<h6>{i.heading}</h6>
<p>{i.subHeading}</p>
</div>
</div>
      </div>
      )}
    </div>
</div>
</div>
    </div>
  )
}

export default View