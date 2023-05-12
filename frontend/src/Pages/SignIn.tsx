import React from 'react'
import HomeBanner from "../Assets/homeBanner.mp4";
import SIgnIn from "../Assets/signin.mp4"
import fitnessB from "../Assets/fitnessB-transformed.png"
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <div>
      <div className='w-full h-full flex items-start'>
        <div className='relative w-full h-full flex flex-col object-cover ' style={{ backgroundColor: 'black' }}>
          <video
            autoPlay
            loop
            controls={false}
            muted
            src={SIgnIn}
            className='opacity-30'
          // style={{
          //   // opacity: 0.5,
          //   backgroundColor: 'rgba(0,0,0,0.5)'
          // }}
          >
          </video>
          <div className='absolute top-[5%] text-white  left-[5%] flex font-bold'>
            <Link to="/">
              <img src={fitnessB} alt="fitnessb"
                style={{
                  filter: 'brightness(0%) invert(100%)',
                  width: "200px"
                }}
              />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default SignIn