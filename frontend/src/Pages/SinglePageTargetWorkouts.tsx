import React from 'react'
import { useParams } from 'react-router-dom'
import { Queryopt } from './../Custom Hookes/useApi';
import useApi from './../Custom Hookes/useApi';
import { Link } from 'react-router-dom';


const SinglePageTargetWorkouts = () => {
    const {target}= useParams();
    
    // const queryParam : Queryopt = {target : target};

    // const url = `https://fitnessb-backend.onrender.com/products/exercise/${target}`

    const url = `${process.env.REACT_APP_BASE_URL}/products/exercise/${target}` || '';
    
    const [data,isLoading,isErr] = useApi(url);

    console.log(data,'dff');

    if(isLoading) {

        return <div className='bg-slate-200 h-screen flex justify-center items-center'>
            <img alt = 'loading' src = 'https://icon-library.com/images/gif-loading-icon/gif-loading-icon-20.jpg' className='w-60'></img>
        </div>
    }

    if(isErr){
        return <h1>Something went wrong</h1>
    }

return (
    <div className='bg-blue-950 text-cyan-300'>
        
        <div className='w-4/5 mx-auto'>
            <h2 className='py-3 text-2xl font-bold'>{target} exercises</h2>
            <div className='grid grid-cols-4 gap-3 mt-2'>
                {Array.isArray(data) && data.map((el) => { 
                    return <Link to = {`${el._id}`}>  <div className='pb-3 rounded-md bg-blue-900'>
                                <div>
                                    <div className='py-7'>
                                        <img className=' w-4/5 mx-auto rounded-md' src = {el.gifUrl} alt = {el.name}></img>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div>  <p className='text-center font-bold pb-2'>{el.name}</p></div>
                                        <div> <p className='text-center rounded-md text-green-400 inline-block mx-auto px-2 bg-blue-700'>Eqipment : {el.equipment}</p></div>
                                    </div>
                                </div>
                            </div>
                    </Link>
                })}
            </div>
        </div>
    </div>
)
}

export default SinglePageTargetWorkouts