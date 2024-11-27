import React from 'react';

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, icon }) => (
  <div className="flex flex-col items-center justify-center p-8 text-gray-500">
    {icon && <div className="mb-4">{icon}</div>}
    <p>{message}</p>
  </div>
);

export default EmptyState;