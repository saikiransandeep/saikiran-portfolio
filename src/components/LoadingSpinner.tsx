
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(75, 56, 50, 0.5)' }}>
      <div className="p-6 shadow-xl rounded-lg" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: '#D2691E' }}></div>
          <span className="font-medium" style={{ color: '#3E2723' }}>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
