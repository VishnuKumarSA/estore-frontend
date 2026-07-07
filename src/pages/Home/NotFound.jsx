import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-blue-600">404</h1>
                <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-600">
                    The page you are looking for doesn't exist.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                >
                    Go to Dashboard
                </Link>
            </div>
        </div>
    )
}

export default NotFound
