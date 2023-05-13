import React, { useState } from 'react'
// import Notification from './Notification';
const Notification = () => {
   const [weight,setWeight] = useState('')
   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setWeight(e.target.value)
   }
   console.log(weight,"weight")
  return (
    <div>
        <input type="text" value={weight} onChange={handleChange} />
    </div>
  )
}

export default Notification