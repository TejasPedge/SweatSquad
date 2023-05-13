import React from 'react'
import { useParams } from 'react-router-dom'
import useTrack from '../Custom Hookes/useTrack';
import {useState, useEffect} from 'react'


const SinglePageStartExercise = () => {

    const {id,target} = useParams();

    const url = `${process.env.REACT_APP_BASE_URL}/products/exercise/${target}/${id}` || '';
    
    const [data,isLoading,isErr] = useTrack(url);

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
    if(minutes === 1 ) {
        calories = 8
    }else if (minutes === 2) {
        calories = 23
    }else if (minutes === 3) {
        calories = 41
    }else if (minutes === 4) {
        calories = 63
    }else if (minutes === 5) {
        calories = 91
    }


    console.log(minutes, 'minutes');

    


    console.log(data,'workout start page');

    const Start = () => {

        setTimer(true);
        setSeconds(0);
    }

    if(isLoading) {

        return <div className='bg-slate-200 h-screen flex justify-center items-center'>
            <img alt = 'loading' src = 'https://icon-library.com/images/gif-loading-icon/gif-loading-icon-20.jpg' className='w-60'></img>
        </div>
    }

    if(isErr){
        return <h1>Something went wrong</h1>
    }

return (
    <div>
        {typeof(data) === 'object' && <div className='w-4/5 mx-auto mt-3 flex gap-2'>
            <div className='border border-cyan-500 w-1/2'>
                <div>
                    <img  alt = {data.name} src = {data.gifUrl}></img>
                </div>

            </div>
            <div className='w-1/2 '>

                    <p className='font font-bold mb-2 text-red-800'>{data.name.toUpperCase()}</p>
                    <p className='mb-2'>Equipment : {data.equipment}</p>
                    <div className='flex content-center'>
                        <p className='border-2 bg-rose-100 inline-block px-2 mb-2 mr-8 mt-2'>{minutes} / 5 done</p>
                        {startTimer && <div className="flex items-center justify-center px-10 rounded-full">
                            <div className="">
                                {minutes.toString().padStart(1, '0')} : {displaySeconds.toString().padStart(2, '0')}
                            </div>
                        </div>}
                    </div>

                

                <div className={`flex px-6 py-2 rounded-xl justify-between mb-3 ${minutes >= 1 ? 'bg-green-400' : 'bg-slate-100'}`}>
                    <div className='flex'>
                        <p>1</p>
                    </div>
                    
                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 1 ? 'bg-green-300' : 'bg-slate-200'}`}>5</p>
                        <p>KG</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 1 ? 'bg-green-300' : 'bg-slate-200'}`}>8</p>
                        <p>Cal</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 1 ? 'bg-green-300' : 'bg-slate-200'}`}>15</p>
                        <p>Reps</p>
                    </div>
                </div>

                <div className= {`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 2 ? 'bg-green-400' : 'bg-slate-100'}`}>
                    <div className='flex'>
                        <p>2</p>
                    </div>
                    
                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 2 ? 'bg-green-300' : 'bg-slate-100'}`}>10</p>
                        <p>KG</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 2 ? 'bg-green-300' : 'bg-slate-200'}`}>15</p>
                        <p>Cal</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 2 ? 'bg-green-300' : 'bg-slate-100'}`}>20</p>
                        <p>Reps</p>
                    </div>
                </div>

                <div className= {`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 3 ? 'bg-green-400' : 'bg-slate-100'}`}>
                    <div className='flex'>
                        <p>3</p>
                    </div>
                    
                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 3 ? 'bg-green-300' : 'bg-slate-100'}`}>15</p>
                        <p>KG</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 3 ? 'bg-green-300' : 'bg-slate-200'}`}>18</p>
                        <p>Cal</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 3 ? 'bg-green-300' : 'bg-slate-100'}`}>25</p>
                        <p>Reps</p>
                    </div>
                </div>

                <div className= {`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 4 ? 'bg-green-400' : 'bg-slate-100'}`}>
                    <div className='flex'>
                        <p>4</p>
                    </div>
                    
                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 4 ? 'bg-green-300' : 'bg-slate-100'}`}>20</p>
                        <p>KG</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 4 ? 'bg-green-300' : 'bg-slate-200'}`}>22</p>
                        <p>Cal</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 4 ? 'bg-green-300' : 'bg-slate-100'}`}>30</p>
                        <p>Reps</p>
                    </div>
                </div>


                <div className= {`flex px-6 py-2 rounded-xl bg-slate-100 justify-between mb-3 ${minutes >= 5 ? 'bg-green-400' : 'bg-slate-100'}`}>
                    <div className='flex'>
                        <p>5</p>
                    </div>
                    
                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 5 ? 'bg-green-300' : 'bg-slate-100'}`}>25</p>
                        <p>KG</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 5 ? 'bg-green-300' : 'bg-slate-200'}`}>28</p>
                        <p>Cal</p>
                    </div>

                    <div className='flex'>
                        <p className={`px-3 bg-slate-200 rounded-xl mr-3 ${minutes >= 5 ? 'bg-green-300' : 'bg-slate-100'}`}>35</p>
                        <p>Reps</p>
                    </div>
                </div>

            </div>
        </div>}

        <div className='w-4/5 mx-auto mt-11 flex justify-center content-center'>
            <button onClick = {Start} className='px-4 py-2 bg-green-300 rounded-md font-bold text-xl'>START</button>
            <p className='px-4 py-2'>Calories Burnt : 🔥 {calories}</p>
        </div>
    </div>
)
}

export default SinglePageStartExercise