import React from "react"

const Fields = ({name, email, index}) => {
  return (
    <div className='dataValue'>
    <h4>{name}</h4>
    <h4>{email}</h4>
    <h4>Remove</h4>
   </div>
  )
}

export default Fields
