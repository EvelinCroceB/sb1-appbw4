import React from 'react';
import { CommunityEvent } from '../types';

const Events: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Community Events</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search events..."
              className="px-4 py-2 border rounded-lg w-64"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Create Event
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600">No events available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;