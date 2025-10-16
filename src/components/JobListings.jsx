import React from 'react'

const JobListings = () => {
  return (
    <>
    <div className="bg-white rounded-2xl border-2 border-indigo-300 m-2 shadow-md relative">
        <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">Front-End Engineer</h3>

                <div className="mb-5">
                    Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
                </div>

                <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div className="border border-gray-300 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-blue-950 mb-3">
                        Miami, FL
                    </div>
                <a href="" 
                className="h-[36px] bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default JobListings
