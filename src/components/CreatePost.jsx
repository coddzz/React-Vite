
export const CreatePost = () =>{

    return(

        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <textarea
                placeholder="What's on your mind?"
                className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring focus:ring-gray-500"
            />
            <button className="mt-3 py-2 px-4 bg-blue-800 text-white rounded-xl hover:bg-sky-800">
                Post
            </button>        
        </div>
    )
};