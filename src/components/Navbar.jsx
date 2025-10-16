import React from 'react'
import logo from "../images/logo.svg"

const Navbar = () => {
  return (
    <>
      <nav className="bg-indigo-700 border-b-4 border-indigo-400">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a className="flex flex-shrink-0 items-center mr-1" href="/reacttest.html">
                <img 
                className="md:h-10 h-7 w-auto"
                src={logo} 
                alt="reacttest" />
              </a>
              <span className="hidden md:block text-white text-2xl font-bold ml-2">React</span>
              <span className="md:hidden text-white text-2xl font-bold ">R</span>
              <div className="md:ml-auto">
                <div className="flex space-x-6 ml-10">
                  <a href="/hm.html"
                  className="text-white px-3 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-bl hover:from-indigo-700 hover:to-indigo-500 border-1 border-indigo-500 hover:border-indigo-500 hover:shadow-md hover:shadow-blue-900">Home</a>
                  <a href="/contact.html" 
                  className="text-white px-3 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-indigo-700 hover:to-indigo-500 border-1 border-indigo-700 hover:border-indigo-500 hover:shadow-md hover:shadow-blue-900">Contact</a>
                  <a href="/about.html"
                  className="text-white px-3 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-500 border-1 border-indigo-700 hover:border-indigo-500 hover:shadow-md hover:shadow-blue-900">About</a>
                  <a href="/noti"
                  className="text-white px-3 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-indigo-700 hover:to-indigo-500 border-1 border-indigo-700 hover:border-indigo-500 hover:shadow-md hover:shadow-blue-900">Notifications</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
