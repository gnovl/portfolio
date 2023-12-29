import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center ">
    <div className="md:mx-auto text-center lg:pt-4 p-4 w-full lg:w-full pt-20 max-w-6xl ">
    <div className="border-gray-400 border-t my-2"></div>
    <div className="bg-customBGHeader text-customColorHeader border rounded-md flex items-center justify-center mb-2">
       
        <h2 className="text-2xl font-semibold">🛑 PAGE NOT FOUND ⚠️</h2>
      </div>
      <div className="border-gray-400 border-t my-2"></div>
      <div className='bg-white border rounded-lg shadow-xl p-2 lg:p-6 min-h-screen '>

      <p>
      💀 What are you doing!?
      </p>
      <p className='mb-4'>
      <span>🧛‍♂️ EXIT ⬇️ </span>
      </p>
      <p>
      <span className=' hover:text-blue-500'><a href="/">🔗 Back to Home</a></span>
      </p>  
      </div>
    </div>
  </div>

  );
};

export default NotFound;