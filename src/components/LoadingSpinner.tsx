
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
