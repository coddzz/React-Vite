import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
const HomeCards = () => {
  return (
    <>
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <Card bg='bg-violet-200'>
                    <h2 className="text-2xl font-bold text-violet-700">For Users</h2>
                    <p className="mt-2 mb-4 text-gray-900">
                    Connect with friends, share your moments, and explore trending posts
                    from around the world.
                    </p>
                    <Link
                    to="/"
                    className="inline-block bg-violet-600 text-white rounded-lg px-4 py-2 hover:bg-violet-700 transition">
                    Go to Feed
                    </Link>
                </Card>
                <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-blue-700">For Creators</h2>
                    <p className="mt-2 mb-4 text-gray-900">
                    Build your audience, post your content, and grow your influence on our
                    social platform.
                    </p>
                    <Link
                    to="/"
                    className="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition">
                    Create Post
                    </Link>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">For Developers</h2>
                    <p className="mt-2 mb-4">
                    Browse our React jobs and start your career today
                    </p>
                    <Link
                    to="/"
                    className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                    Browse Jobs
                    </Link>
                </div>
                <div className="bg-sky-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">For Employers</h2>
                    <p className="mt-2 mb-4">
                    List your job to find the perfect developer for the role
                    </p>
                    <Link
                    to="/"
                    className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                    Add Jobs
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeCards
