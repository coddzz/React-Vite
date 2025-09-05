export default function CreatePost() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <textarea
        placeholder="What's on your mind?"
        className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Post
      </button>
    </div>
  );
}