import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Queryopt } from './../Custom Hookes/useApi';
import useApi from './../Custom Hookes/useApi';
import { Link } from 'react-router-dom';
import logo from "../Assets/fitnessBLogo.png"

type targetType = {
    target: any
}
const Navbar = () => {
    let token = localStorage.getItem("token") || "";
    const [userName, setUserName] = useState<any>("Try fitnessB for free")
    useEffect(() => {
        let user = localStorage.getItem("UserName") || "Default User";
        if (user !== "Default User") {
            let user_name = `Hello - ${user}`
            setUserName(user_name)
        }
    }, [token])
    return (
        <div className={`fixed w-full h-30 z-50 bg-[#191923]`}>
            <nav className="flex items-center justify-between p-4 ">
                <div className="text-white">
                    <Link to="/"> <img src={logo} alt="logo" width={"200px"} height="10px" style={{ filter: 'brightness(0%) invert(100%)' }} /></Link>
                </div>
                <ul className="flex items-center">
                    <li className="mx-4">
                        <a href="/" className="text-white">
                            Workouts
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href="/" className="text-white">
                            Products
                        </a>
                    </li>
                    <li className="mx-4">
                        <a href={token !== "" ? "/signin" : ""} className="text-white" >
                            <button className="bg-[#f2305a] py-2 px-3 rounded-lg font-bold"> {userName.replace(/["']/g, '')}</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
const SinglePageTargetWorkouts = () => {
    const { target } = useParams<targetType>();

    // const queryParam : Queryopt = {target : target};

    // const url = `https://fitnessb-backend.onrender.com/products/exercise/${target}`

    const url = `${process.env.REACT_APP_BASE_URL}/products/exercise/${target}` || '';

    const [data, isLoading, isErr] = useApi(url);

    console.log(data, 'dff');

    if (isLoading) {

        return <div className='bg-slate-200 h-screen flex justify-center items-center'>
            <img alt='loading' src='https://icon-library.com/images/gif-loading-icon/gif-loading-icon-20.jpg' className='w-60'></img>
        </div>
    }

    if (isErr) {
        return <h1>Something went wrong</h1>
    }
    return (
        <div> <div><Navbar /></div>
            <div className='pt-[6%]'>

                <div className='w-4/5 mx-auto'>
                    <h2 className='py-3 text-5xl font-bold text-[#f2305a]'>{target.charAt(0).toUpperCase() + target.slice(1)} exercises</h2>
                    <div className='grid grid-cols-4 gap-3 mt-2'>
                        {Array.isArray(data) && data.map((el) => {
                            return <Link to={`${el._id}`}> <div className='pb-3 rounded-md relative mb-[45%]' >
                                <div>
                                    <div className='py-7'>
                                        <img className=' w-4/5 mx-auto rounded-md' src={el.gifUrl} alt={el.name}></img>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div>  <p className='text-center text-xl font-bold pb-2'>{el.name}</p></div>

                                        <div className="top-[100%] absolute bottom-0">  <Link to="" className="text-white" >
                                            <button className="bg-[#f2305a] py-2 w-[200px] px-6 rounded-lg font-bold">a{el.equipment}</button>
                                        </Link></div>
                                        {/* <div> <p className='text-center rounded-md  inline-block mx-auto px-2 bg-blue-700'>Eqipment : </p></div> */}
                                    </div>
                                </div>
                            </div>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePageTargetWorkouts