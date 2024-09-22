import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">Oops! The page you are looking for does not exist.</p>
      <svg
        className="w-64 h-64 mt-6 text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm1 17.414L17.414 12 18 12.586 13.586 17 13 17.414zm-2-2.828L6.586 12 6 12.586 10.414 17 11 16.586zM12 1c6.075 0 11 4.925 11 11S18.075 23 12 23 1 18.075 1 12 5.925 1 12 1z" />
      </svg>
      <a href="/" className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
