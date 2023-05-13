import React, { useEffect, useState } from 'react';
// import HomeBanner from "../Assets/homeBanner.mp4";
import SIgnIn from "../Assets/signin.mp4";
import fitnessB from "../Assets/fitnessB-transformed.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Login } from '../Redux/Login/action';
import Toast from './Toast';

type FormErrors = {
  email?: string;
  password?: string;
};


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState<any>("")
  const [messageType, setMessageType] = useState<any>("")
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };
  const token: string = useSelector((state: any) => {
    console.log(state, "line38")
    return state.LoginReducer.token
  })
  const result: string = useSelector((state: any) => {
    return state.LoginReducer.result
  })
  useEffect(() => {
    if (token) {
      const SuccessMessage = "Sign In Successful!!!";
      setShowToast(true);
      setMessage(SuccessMessage);
      setMessageType("success");
      <Toast message={message} type="success" />
      setTimeout(() => {
        setShowToast(false);
        navigate("/")
        window.location.reload()
      }, 1000);
    }

  }, [token])

  useEffect(() => {
    if (result === "Wrong Credentials") {
      const FailureMessage = "Wrong Credentials!!!";
      setShowToast(true);
      setMessage(FailureMessage)
      setMessageType("error");
      <Toast message={message} type="error" />
      setTimeout(() => {
        setShowToast(false);
        window.location.reload()
        navigate("/signin")
      }, 1000);
    }
  }, [result])
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Submit form data to server
      let data: any = {
        email, password
      }
      dispatch(Login(data))


    } else {
      setFormErrors(errors);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name + "-" + value)
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  return (
    <div className='w-full'> <div className='fixed top-0 right-10 w-50 z-30 '>{showToast && <Toast message={message} type={messageType} />} </div>
      <div className='w-full h-full'>

        <div className='relative w-full h-full object-cover' style={{ backgroundColor: 'black' }}>
          <video
            autoPlay
            loop

            controls={false}
            muted
            src={SIgnIn}
            className='opacity-30 w-full'
          >
          </video>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold'>
            {/* form start here */}
            <div className="flex flex-1 flex-col justify-center lg:px-8 w-screen">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} >
                  <div>
                    <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        type="email"
                        value={email}
                        // autoComplete="email"
                        required
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      />
                      <p className='text-sm text-[#f2305a]'>{formErrors.password && <span className="error">{formErrors.password}</span>}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Password
                      </label>
                      <div className="text-sm">
                        <Link to="#" className="font-semibold text-[#f2305a] hover:text-[#F8446B]">
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleInputChange}
                        // autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-2 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      />
                      <p className='text-sm text-[#f2305a]'>{formErrors.password && <span className="error">{formErrors.password}</span>}</p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#f2305a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F8446B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-white">
                  Not a member?{'     '}
                  <Link to="/signup" className="font-semibold leading-6 text-[#f2305a] hover:text-[#F8446B]">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>

          </div>
          <div className='absolute top-[5%] left-[5%] flex font-bold'>
            <Link to="/">
              <img
                src={fitnessB}
                alt="fitnessb"
                style={{
                  width: "250px",
                }}
              />
            </Link>
          </div>
        </div>
      </div >
    </div>
  )
}

export default SignIn;
