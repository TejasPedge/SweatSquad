import React from 'react'
import Logo from "../Assets/fitnessBLogo.png"
import logo from "../Assets/logo2.png"
// ABOUT
// Articles
// For Work
// Careers
// SUPPORT
// Help Articles
// Contact Us
// Accounts And Billing
// OFFERS
// Gift Fitbod
// Redeem Code

const FooterPage = () => {
  return (
    <div>
      <div className='bg-[#595a6e] flex justify-around pt-20 text-white p-2 font-semibold'>
        <div className='p-2'>
          <ul >
            <li className='text-[#f2305a] font-bold text-xl'>ABOUT</li>
            <li className='pt-2'>Articles</li>
            <li className='pt-2'>For Work</li>
            <li className='pt-2'>Careers</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='text-[#f2305a] font-bold text-xl'>SUPPORT</li>
            <li className='pt-2'>Help Articles</li>
            <li className='pt-2'>Contact Us</li>
            <li className='pt-2'>Accounts And Billing</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='text-[#f2305a] font-bold text-xl'>OFFERS</li>
            <li className='pt-2'>Gift fitnessB</li>
            <li className='pt-2'>Redeem Code</li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="" className='w-full h-20' />
        </div>
      </div>
      <div className='bg-[#595a6e]'>
        <div className='text-center italic font-bold  justify-center text-white text-[250px]'>
          <p className='w-full'>fitnessB</p>
        </div>
      </div>
      <div className='bg-[#f2305a] text-white font-semibold grid grid-cols-4 w-full text-center pt-5 pb-5'>
        <p>© 2023 fitnessB, Inc</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>fitnessB - Privacy Policy</p>
      </div>
    </div>
  )
}

export default FooterPage