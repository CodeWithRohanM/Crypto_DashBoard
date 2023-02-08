import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const ErrorPage = () => {


    return <>

        {/* Main Container*/}
        <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:px-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">

                    <div className="mb-10 md:mb-20 text-gray-600 font-light">
                        <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
                        <p>The page you're looking for isn't available.</p>
                        <p>Try searching again or use the Go Back button below.</p>
                    </div>
                    <div className="mb-20 md:mb-0">
                        <NavLink to="/" className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"><i className="mdi mdi-arrow-left mr-2"></i>⬅️ Go Back</NavLink>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <img src="/images/error.png"></img>
                </div>
            </div>
            <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>


    </>
};

export default ErrorPage;