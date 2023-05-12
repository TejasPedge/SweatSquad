import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageBanner from "../Assets/homePage_Banner.mp4"

type Props = {};

const Video = () => {
    const [width, setWidth] = useState("full");

    useEffect(() => {
        setTimeout(() => {
            setWidth("1/2");
        }, 2000);
    }, []);

    return (
        <div
            className={`w-${width} h-full bg-fit  bg-no-repeat`}
            style={{
                transition: "all 2s ease-in-out",
            }}
        >
            <video
                autoPlay
                loop
                controls={false}
                muted
                src={HomePageBanner}
                // className="h-full"
                style={{ height: "100vh" }}
            >
            </video>
        </div>
    );
};


const Navbar = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 2000);
    }, []);

    return (
        <div
            className={`fixed w-full ${show ? "bottom-0 right-0" : "top-full -right-full"
                }`}
            style={{ transition: "all 2s ease-in-out" }}
        >
            <nav className="flex items-center justify-between p-4 bg-gray-900">
                <div className="text-white">Logo</div>
                <ul className="flex items-center">
                    <li className="mx-4">
                        <Link to="#" className="text-white">
                            Link 1
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="#" className="text-white">
                            Link 2
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link to="#" className="text-white">
                            Link 3
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const HomePage: React.FC<Props> = () => {
    return (
        <div className="flex">
            {/* <div> <Navbar /> </div> */}
            <div>
                <Video />
            </div>

        </div>
    )
}

export default HomePage