import React from 'react'
import {jobs} from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {

  const recentJobs = jobs.slice(0, 3);

  return (
    <>
    <h2 className='mx-15 my-5 px-4 py-2 bg-sky-200 text-gray-800 font-extrabold text-xl shadow-md'>Start Your Career Today.. &#128395; </h2>
    <div className='mx-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {recentJobs.map((job) => (
        <JobListing key={job.id} job={job}/>
        ))}
    </div>
    </>
  )
}

export default JobListings
