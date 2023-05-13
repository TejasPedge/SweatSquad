import React from 'react'
import transformation2 from "../Assets/bodytranformation2.jpeg"
import transformation3 from "../Assets/bodytranformation3.jpeg"
import transformation4 from "../Assets/bodytranformation4.jpeg"
const Testimonials = () => {
    return (
        <div className='mb-[10%]'>
            <div className='pl-[10%] mb-[8%] font-bold text-6xl'>Experience the power <br /> of personalized fitness with fitnessB.</div>
            <div className='grid grid-cols-3 gap-10 w-[80%] m-auto'>
                <div className='text-[#666679] overflow-hidden'>
                    <div><img src={transformation2} alt="transformation2" className='rounded-[20px] h-[300px] transform hover:scale-125 transition duration-500' /></div>
                    <div className='mt-3'><p className='italic font-bold text-4xl text-black'>Progress</p></div>
                    <div className='mt-4 text-justify font-semibold'><p>"I have been struggling with my weight for years and tried various diets, but nothing seemed to work. When I joined a weight loss program, I was skeptical, but after a few weeks, I started seeing results. Not only did I lose weight, but I also feel more energetic and confident. It's amazing how a few lifestyle changes can make such a big difference. I would definitely recommend this program to anyone who wants to improve their health and wellbeing."</p>
                        <p className='text-[#f2305a] font-bold mt-3 italic'>- John, 32 years old:</p>
                    </div>
                </div>
                <div className='text-[#666679] overflow-hidden '>
                    <div><img src={transformation3} alt="transformation2" className='rounded-[20px] h-[300px] transform hover:scale-125 transition duration-500' /></div>
                    <div className='mt-3'><p className='italic font-bold text-4xl text-black'>Confidence</p></div>
                    <div className='mt-4 text-justify font-semibold'><p>"I have always been self-conscious about my body, but I never had the motivation to do something about it. When I signed up for a weight loss program, I was nervous, but the support from the coaches and the community helped me stay on track. It wasn't easy, but seeing the numbers on the scale go down and feeling more comfortable in my own skin was worth it. I am so grateful for this program and the positive impact it had on my life."</p>
                        <p className='text-[#f2305a] font-bold mt-3 italic'>- Sarah, 27 years old:</p>
                    </div>
                </div>
                <div className='text-[#666679] overflow-hidden'>
                    <div><img src={transformation4} alt="transformation2" className='rounded-[20px] h-[300px] transform hover:scale-125 transition duration-500 ' /></div>
                    <div className='mt-3'><p className='italic font-bold text-4xl text-black'>Motivation</p></div>
                    <div className='mt-4 text-justify font-semibold'><p>"I have always been self-conscious about my body, but I never had the motivation to do something about it. When I signed up for a weight loss program, I was nervous, but the support from the coaches and the community helped me stay on track. It wasn't easy, but seeing the numbers on the scale go down and feeling more comfortable in my own skin was worth it. I am so grateful for this program and the positive impact it had on my life."</p>
                        <p className='text-[#f2305a] font-bold mt-3 italic'>- Mike, 40 years old</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-[5%] text-white'> <button className="bg-[#f2305a] py-4 px-3 w-[350px] rounded-lg font-bold">View all success stories</button></div>
        </div>
    )
}

export default Testimonials
