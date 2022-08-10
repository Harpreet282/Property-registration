import React from 'react'
import "./loader.css";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <div className="loader">
    <FadeLoader
      // size={20}
      color="#01527D"
    />
  </div>
  )
}

export default Loader