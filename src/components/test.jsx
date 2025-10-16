import React from 'react'

const Test = () => {
  return (
    <>
    
    <div class="bg-blue-500 py-10">Full-width background

        <h1 class="text-center text-white text-3xl font-bold mb-6">
        Tailwind max-w-7xl Example
        </h1>

        <div class="max-w-7xl bg-white mx-auto p-8 rounded-2xl shadow-lg">Centered content container 
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                This is a container with <code>max-w-7xl</code>
            </h2>
            <p class="text-gray-700">
                The blue area is the full browser width, while the white box 
                has a <b>maximum width of 1280px</b> (80rem).  
                Even if your screen is very large, this box won't expand beyond 1280px.  
                On smaller screens, it becomes 100% wide — thanks to <code>w-full</code> behavior.
            </p>

            <div class="mt-6 bg-green-200 p-4 rounded-lg">
                <p class="text-gray-800">
                Try resizing your browser → the green box will stay inside the white box,
                and the white box will stay centered.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Test;
