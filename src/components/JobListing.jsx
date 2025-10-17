import React, { useState } from 'react'
import {FaLocationDot} from 'react-icons/fa6';
const JobListing = ({job}) => {

    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if(!showFullDescription){
        description = description.substring(0,90) + "...";
    }


  return (
    <>
    <div className="bg-white rounded-2xl border-2 border-indigo-300 m-2 shadow-md relative">
        <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>

                <div className="mb-5">
                    {description}
                </div>
                <button onClick={() => setShowFullDescription((prevState)=> !prevState)} className="text-gray-500 mb-5 mask-r-to-200% hover:text-gray-800 hover:shadow-xl">
                    { showFullDescription ? '..Less' : 'More..'}
                </button>

                <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

                <div className="border border-gray-300 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    
                    <div className="text-blue-950 mb-3">
                        <FaLocationDot className='inline text-lg m-1 mr-1'/>
                        {job.location}
                    </div>
                <a href={`/job/${job.id}`} 
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

export default JobListing
