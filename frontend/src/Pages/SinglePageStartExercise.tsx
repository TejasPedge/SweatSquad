import React from 'react'
import { useParams } from 'react-router-dom'
import useTrack from '../Custom Hookes/useTrack';
import { useState, useEffect } from 'react'
import logo from "../Assets/fitnessBLogo.png"
import { Link } from 'react-router-dom';
import { FcAlarmClock } from "react-icons/fc";
import FooterPage from './FooterPage';
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
        <div className={`fixed w-full top-0 h-30 z-50 bg-[#191923]`}>
            <nav className="flex items-center justify-between p-4 ">
                <div className="text-white">
                    <Link to="/"> <img src={logo} alt="logo" width={"200px"} height="10px" style={{ filter: 'brightness(0%) invert(100%)' }} /></Link>
                </div>
                <ul className="flex items-center">
                    <li className="mx-4">
                        <Link to="#" className="text-white">
                            Workouts
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="#" className="text-white">
                            Products
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/signin" className="text-white" >
                            <button className="bg-[#f2305a] py-2 px-3 rounded-lg font-bold"> {userName.replace(/["']/g, '')}</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const SinglePageStartExercise = () => {

    const { id, target } = useParams();

    const url = `${process.env.REACT_APP_BASE_URL}/products/exercise/${target}/${id}` || '';

    const [data, isLoading, isErr] = useTrack(url);

    const [startTimer, setTimer] = useState(false);

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds >= 300) {
                clearInterval(interval);
            } else {
                setSeconds(prevSeconds => prevSeconds + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    let calories = 0;
    console.log(calories);
    if (minutes === 1) {
        calories = 8
    } else if (minutes === 2) {
        calories = 23
    } else if (minutes === 3) {
        calories = 41
    } else if (minutes === 4) {
        calories = 63
    } else if (minutes === 5) {
        calories = 91
    }


    console.log(minutes, 'minutes');




    console.log(data, 'workout start page');

    const Start = () => {

        setTimer(true);
        setSeconds(0);
    }

    if (isLoading) {

        return <div className='bg-slate-200 h-screen flex justify-center items-center'>
            <img alt='loading' src='https://icon-library.com/images/gif-loading-icon/gif-loading-icon-20.jpg' className='w-60'></img>
        </div>
    }

    if (isErr) {
        return <h1>Something went wrong</h1>
    }

    return (
        <div><div><Navbar /></div>
            <div className='mt-[10%]'>
                {typeof (data) === 'object' && <div className='w-4/5 mx-auto mt-3 flex gap-2'>
                    <div className=' w-1/2'>
                        <div>
                            <img alt={data.name} src={data.gifUrl}></img>
                        </div>

                    </div>
                    <div className='w-1/2 '>

                        <p className='font font-bold mb-2 text-[#f2305a] text-4xl'>{data.name.toUpperCase()}</p>
                        <p className='mb-2 text-black font-bold text-2xl'>Equipment : {data.equipment}</p>
                        <div className='flex content-center mt-10'>
                            <div>  <p className='border-2 bg-[#191923] text-white rounded-[10px] text-2xl inline-block px-8 py-3 mb-2 mr-8 mt-2'>{minutes} / 5 done</p></div>
                            {startTimer && <div className="flex items-center justify-center px-10 rounded-full">
                                <div className="mb-[50px]">
                                    <p className='text-6xl'> {minutes.toString().padStart(1, '0')} : {displaySeconds.toString().padStart(2, '0')}</p>
                                </div>
                            </div>}
                        </div>
                        <div className={`flex px-6 py-2 rounded-xl justify-between mt-5 mb-3 ${minutes >= 1 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>
                            <div className='flex'>
                                <p>1</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 1 ? 'bg-[#f2305a]' : 'bg-slate-200'}`}>5</p>
                                <p>KG</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 1 ? 'bg-[#f2305a]' : 'bg-slate-200'}`}>8</p>
                                <p>Cal</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 1 ? 'bg-[#f2305a]' : 'bg-slate-200'}`}>15</p>
                                <p>Reps</p>
                            </div>
                        </div>

                        <div className={`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 2 ? 'bg-green-400' : 'bg-slate-100'}`}>
                            <div className='flex'>
                                <p>2</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 2 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>10</p>
                                <p>KG</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 2 ? 'bg-[#f2305a]' : 'bg-slate-200'}`}>15</p>
                                <p>Cal</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 2 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>20</p>
                                <p>Reps</p>
                            </div>
                        </div>

                        <div className={`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 3 ? 'bg-green-400' : 'bg-slate-100'}`}>
                            <div className='flex'>
                                <p>3</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 3 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>15</p>
                                <p>KG</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 3 ? 'bg-[#f2305a]' : 'bg-slate-200'}`}>18</p>
                                <p>Cal</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 3 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>25</p>
                                <p>Reps</p>
                            </div>
                        </div>

                        <div className={`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 4 ? 'bg-green-400' : 'bg-slate-100'}`}>
                            <div className='flex'>
                                <p>4</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 4 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>20</p>
                                <p>KG</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 4 ? 'bg-[#f2305a]' : 'bg-slate-200'}`}>22</p>
                                <p>Cal</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 4 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>30</p>
                                <p>Reps</p>
                            </div>
                        </div>


                        <div className={`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 5 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>
                            <div className='flex'>
                                <p>5</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 5 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>25</p>
                                <p>KG</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 5 ? 'bg-[#f2305a]' : 'bg-slate-200'}`}>28</p>
                                <p>Cal</p>
                            </div>

                            <div className='flex'>
                                <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 5 ? 'bg-[#f2305a]' : 'bg-slate-100'}`}>35</p>
                                <p>Reps</p>
                            </div>
                        </div>
                        <div>
                            <div className='mt-11 flex justify-center content-center'>
                                <button onClick={Start} className='px-4 py-2 bg-[#f2305a] w-1/2 text-white rounded-md font-bold text-xl'>START</button>
                                <div className='absolute top-[30%] right-[10%] text-2xl border rounded-[50px] flex'>
                                    <div><p className='px-4 py-2'>Calories Burnt : 🔥 {calories} </p></div>
                                    <div className='pt-4 pr-5'>
                                        <FcAlarmClock />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}


            </div>
            <div className='mt-[10%]'><FooterPage /></div>
        </div>
    )
}

export default SinglePageStartExercise