
const HomePage = () =>{
    
    return(
        <div className="bg-gray-300">
            <div className="flex bg-gray-400 rounded-3xl">
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
                            src="/img/building.jpg"
                            alt="Modern building architecture"
                        />
                        </div>
                        <div class="p-8">
                        <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                        <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                            Incredible accommodation for your team
                        </a>
                        <p class="mt-2 text-gray-500">
                            Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                            places to do just that.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomePage;