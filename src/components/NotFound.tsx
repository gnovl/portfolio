import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
          {/* Error Icon */}
          <div className="mb-6">
            <FaExclamationTriangle className="text-6xl text-yellow-500 mx-auto" />
          </div>

          {/* Error Code */}
          <h1 className="text-8xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <FaHome className="text-lg" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
