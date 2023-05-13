import React, { useState } from 'react'
// import Notification from './Notification';
import Timer from './Timer';
import Toast from './Toast';
import Form from './Form';
const Notification = () => {
   const [weight,setWeight] = useState('')
   const [showToast,setToast]=useState(false)
   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setWeight(e.target.value)
   }
   const handleSubmit=()=>{
    setToast(true)
   }
   console.log(weight,"weight")
  return (
    <div className='bg'>
        {/* <input type="text" value={weight} onChange={handleChange} className='border border-2 rounded-md bg-red-200' /> */}
      {/* {showToast &&  <Toast  message  = {weight} type = 'success' />}  */}
        {/* <button onClick={handleSubmit}>Submit</button> */}
        {
          <Form/>
        }
    </div>
  )
}

export default Notification