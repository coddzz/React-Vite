import earth from "../assets/earth.png"

const HomePage = () =>{
    
    return(
        <div className="bg-gray-300">
            <div className="flex bg-sky-600 rounded-3xl">
                <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <div>
                        <div class="text-xl font-medium text-gray-800 dark:text-blue-50">
                            ChitChat
                        </div>
                        <div>
                            <p class="text-gray-500 dark:text-gray-200">You have a new message!</p>
                            <button class=" bg-sky-700 hover:bg-sky-500">
                                Message
                            </button>
                        </div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                            <div>
                                <button class="btn-primary">Save changes</button>
                            </div>
                            <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking- ">Writes upside-down</h3>
                            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                            </p>
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
            <div className="text-blue-700">DaisyUi Themes</div>
            <button class="btn btn-accent btn-outline bg-white">Daisyui button</button>
            <button class="btn rounded-full hover:bg-gray-800 active:bg-black">Rounded-full</button>
        </div>
  )
}
export default HomePage;