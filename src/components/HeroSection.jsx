import React from 'react'

const HeroSection = () => {
  return (
    <>
    <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-2xl font-extrabold text-white md:text-3xl lg:text-5xl">
                    Create Your Designs &#10024;
                </h1>
                <p className="my-4 text-sm text-white sm:text-md lg:text-lg ">
                    {"<Description>"}
                </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection
