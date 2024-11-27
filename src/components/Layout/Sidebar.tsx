import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  ClipboardList,
  BarChart
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const { hasPermission } = useAuthStore();

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4">
      <nav className="space-y-2">
        {hasPermission(['admin', 'librarian']) && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
              }`
            }
          >
            <BarChart className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>
        )}

        <NavLink
          to="/books"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
            }`
          }
        >
          <BookOpen className="w-5 h-5" />
          <span>Books</span>
        </NavLink>

        {hasPermission(['admin', 'librarian']) && (
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
              }`
            }
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </NavLink>
        )}

        <NavLink
          to="/loans"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
            }`
          }
        >
          <ClipboardList className="w-5 h-5" />
          <span>Loans</span>
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
            }`
          }
        >
          <Calendar className="w-5 h-5" />
          <span>Community Events</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;