import React from 'react';
import { BarChart3, BookOpen, Users, Calendar } from 'lucide-react';
import StatCard from '../components/common/StatCard';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Books"
          value="1,234"
          icon={<BookOpen className="w-8 h-8" />}
        />
        <StatCard
          title="Active Users"
          value="567"
          icon={<Users className="w-8 h-8" />}
        />
        <StatCard
          title="Books Borrowed"
          value="89"
          icon={<BarChart3 className="w-8 h-8" />}
        />
        <StatCard
          title="Upcoming Events"
          value="12"
          icon={<Calendar className="w-8 h-8" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <p className="text-gray-600">No recent activities</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Popular Books</h2>
          <div className="space-y-4">
            <p className="text-gray-600">No books to display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;