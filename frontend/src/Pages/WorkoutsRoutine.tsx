import React from 'react'
import { target_muscles } from './WorkoutData'
import { Link } from 'react-router-dom'

// Target Muscles

// "abductors",
// "abs",
// "adductors",
// "biceps",
// "calves",
// "cardiovascular system",
// "delts",
// "forearms",
// "glutes",
// "hamstrings",
// "lats",
// "levator scapulae",
// "pectorals",
// "quads",
// "serratus anterior",
// "spine",
// "traps",
// "triceps",
// "upper back"

const WorkoutsRoutine = () => {
    return (
        <div className='mb-[8%] '>
            <div className='p-3 w-4/5 mx-auto'>

                <h2 className='text font font-bold text-6xl'>Target Areas</h2>

                <div className='mt-5 grid grid-cols-4 gap-4'>
                    {target_muscles.map((el, id) => {
                        return <div className='border rounded-[10px] overflow-hidden relative w-200 hover:cursor-pointer' key={id}>
                            <Link to={`/workout-routine/${el.target === 'cardio' ? 'cardiovascular system' : el.target}`}>
                                <div className='w-full h-full  overflow-hidden'>
                                    <img className='w-full h-full object-cover object-center transform hover:scale-125 transition duration-500' alt={el.target} src={el.img}></img>
                                </div>
                            </Link>
                            <div className="absolute bottom-[8%] left-1/2 bg-white transform -translate-x-1/2 text-2xl rounded-[200px] ">
                                <p className="bg-transparent text-center w-full py-1 px-8 cursor-pointer">{el.target}</p>
                            </div>
                            
                        </div>
                    })}

                </div>

            </div>
        </div>
    )
}

export default WorkoutsRoutine