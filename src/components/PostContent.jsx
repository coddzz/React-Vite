import React from 'react'
import earth from "../assets/earth.png";
import { useParams } from 'react-router-dom';


export const PostContent = () => {

    const {id} = useParams();


  return (
    <>
        <div>
            <h1 className="m-3 py-2 px-4 border-2 border-black bg-blue-300">
                Post {id} ...
            </h1>
        </div>
        <div className="flex bg-blue-950 rounded-3xl">
            <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div>
                    <div class="text-xl font-medium text-gray-800 dark:text-blue-50">
                        ChatBook
                    </div>
                    <div>
                        <p class="text-gray-500 dark:text-gray-200">You have a new message!</p>
                        <button class="m-2 p-2 rounded-2xl text-gray-100 bg-sky-700 hover:bg-sky-800">
                            All Notifications
                        </button>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                        <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking- ">Whats New..</h3>
                        <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        </p>
                        <div>
                            <button className="m-2 p-2 bg-sky-700 hover:bg-sky-800 text-white rounded-2xl">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                    <img
                        class="h-48 w-full object-cover md:h-full md:w-48"
                        Img src={earth}
                        alt="Earth picture"
                    />
                    </div>
                    <div class="p-8">
                    <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Blue Planet</div>
                    <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                        EARTH
                    </a>
                    <p class="mt-2 text-gray-500">
                        🌍 Earth is the only known planet that supports life, with diverse ecosystems and rich natural resources.
                        🌱 It is our shared home, often called the "Blue Planet" because of its vast oceans.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
