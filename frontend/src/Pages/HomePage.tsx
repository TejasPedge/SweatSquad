import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageBanner from "../Assets/homePage_Banner.mp4"
import logo from "../Assets/fitnessBLogo.png"
import WorkoutsRoutine from "./WorkoutsRoutine";
import FooterPage from "./FooterPage";
import Testimonials from "./Testimonials";

type Props = {};

const Video = () => {
    return (
        <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundColor: 'black' }}
        >
            <video
                autoPlay
                loop
                controls={false}
                muted
                src={HomePageBanner}
                className="h-full w-[100%]"
                style={{ opacity: "0.5" }}
            >
            </video>
            <div className="absolute top-[40%] left-[5%] z-50">
                <div><p className="text-6xl font-bold text-[#f2305a] italic font-mono">No pain, no gain.</p></div><p className="text-5xl w-[50%] text-white mt-10" >You don't have to be great to start, but you have to start to be great.</p>
                <div className="mt-10">  <Link to="/sigin" className="text-white" >
                    <button className="bg-[#f2305a] py-4 px-8 rounded-lg font-bold">Try fitnessB for free</button>
                </Link></div>
            </div>
        </div>
    );
};
// interface NavbarProps {
//     backgColor: string;  React.FC<NavbarProps> = (backgColor) bg-[${backgColor}]
// }
const Navbar = () => {
    let token = localStorage.getItem("token") || "";
    const [userName, setUserName] = useState<any>("Try fitnessB for free")
    const [bgColor, setBgColor] = useState("transparent");

    useEffect(() => {
        let user = localStorage.getItem("UserName") || "Default User";
        if (user !== "Default User") {
            let user_name = `Hello - ${user}`
            setUserName(user_name)
        }
    }, [token])
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 700) {
                setBgColor("#191923");
            } else {
                setBgColor("transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed w-full z-[1000] bg-[${bgColor}] transition-colors duration-800`} >
            <nav className="flex items-center justify-between p-4 ">
                <div className="text-white">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            width={"200px"}
                            height="10px"
                            style={{ filter: "brightness(0%) invert(100%)" }}
                        />
                    </Link>
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
                        <Link to="#" className="text-white">
                            Success
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to={token !== "" ? "/signin" : ""} className="text-white">
                            <button className="bg-[#f2305a] py-2 px-3 rounded-lg font-bold">
                                {userName.replace(/["']/g, '')}
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const MainBody = () => {
    return (
        <div className={`mt-[2%]`} >
            <div><p className="pl-[5%] font-bold text-7xl">
                Discover a personalized <br /> approach to fitness with FitnessB, <br /> tailored to your unique needs and goals.</p></div>
            <div className="grid grid-cols-3 gap-10 m-20">
                <div className="w-full relative">
                    <img src="https://images.unsplash.com/photo-1604563906225-598785ab66ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80" className="rounded-[40px]" alt="" width={"100%"} height={"100vh"} />
                    <div className="absolute top-[8%] left-1/2 bg-transparent transform -translate-x-1/2 text-white text-3xl">
                        <p className="bg-transparent text-center border-white border rounded-2xl font-semibold py-1 px-4">Tracking</p>
                    </div>
                    <div className="absolute top-[50%] left-[50%] bg-transparent transform -translate-x-1/2 text-[#F8F8F8] text-3xl">
                        <p className="bg-transparent text-center rounded-2xl ">
                            <p className="font-bold text-5xl">fitnessB</p>
                            <p className="w-[1000px] font-bold text-5xl pt-2">Band: Body Data</p>
                            <p className="w-full font-bold text-5xl pt-2">Insights</p>
                        </p>
                    </div>
                    <div className="absolute bottom-[8%] left-1/2 bg-white transform -translate-x-1/2 text-2xl rounded-[200px] ">
                        <p className="bg-transparent text-center  py-2 px-6 cursor-pointer">Learn More</p>
                    </div>
                </div>
                <div className="w-full relative">
                    <img src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="rounded-[40px]" alt="" width={"100%"} height={"100vh"} />
                    <div className="absolute top-[8%] left-1/2 bg-transparent transform -translate-x-1/2 text-white text-3xl">
                        <p className="bg-transparent text-center border-white border rounded-2xl font-semibold py-1 px-4">Guidance</p>
                    </div>
                    <div className="absolute top-[50%] left-[50%] bg-transparent transform -translate-x-1/2 text-[#F8F8F8] text-3xl">
                        <p className="bg-transparent text-center rounded-2xl ">
                            <p className="font-bold text-5xl">fitnessB</p>
                            <p className="w-[1000px] font-bold text-5xl pt-2">Personal Health</p>
                            <p className="w-full font-bold text-5xl pt-2">Coach</p>
                        </p>
                    </div>
                    <div className="absolute bottom-[8%] left-1/2 bg-white transform -translate-x-1/2 text-2xl rounded-[200px] ">
                        <p className="bg-transparent text-center  py-2 px-6 cursor-pointer">Learn More</p>
                    </div>
                </div>
                <div className="w-full relative">
                    <img src="https://images.pexels.com/photos/11883246/pexels-photo-11883246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-[40px]" alt="" width={"100%"} height={"100vh"} />
                    <div className="absolute top-[8%] left-1/2 bg-transparent transform -translate-x-1/2 text-white text-3xl">
                        <p className="bg-transparent text-center border-white border rounded-2xl font-semibold py-1 px-4">Personalization</p>
                    </div>
                    <div className="absolute top-[50%] left-[50%] bg-transparent transform -translate-x-1/2 text-[#F8F8F8] text-3xl">
                        <p className="bg-transparent text-center rounded-2xl ">
                            <p className="font-bold text-5xl">fitnessB</p>
                            <p className="w-[1000px] font-bold text-5xl pt-2">Health Coaching</p>
                            <p className="w-full font-bold text-5xl pt-2">App</p>
                        </p>
                    </div>
                    <div className="absolute bottom-[8%] left-1/2 bg-white transform -translate-x-1/2 text-2xl rounded-[200px] ">
                        <p className="bg-transparent text-center  py-2 px-6 cursor-pointer">Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const HomePage: React.FC<Props> = () => {



    return (
        <div className="w-screen overflow-x-hidden">
            <div> <Navbar /> </div>
            <div>
                <Video />
            </div>
            <div >
                <MainBody />
            </div>
            <div >
                <WorkoutsRoutine />
            </div>
            <div>
                <Testimonials />
            </div>
            <div>
                <FooterPage />
            </div>
        </div>
    );
};

export default HomePage