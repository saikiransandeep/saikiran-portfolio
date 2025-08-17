
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card rounded-lg p-6 border border-border" style={{ boxShadow: 'var(--card-shadow)' }}>
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[hsl(var(--pastel-blue-foreground))]"></div>
          <span className="text-foreground font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
