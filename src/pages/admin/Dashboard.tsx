import AdminLayout from "../../components/admin/AdminLayout";
import { Link } from "react-router-dom";
import {
  FolderKanban,
  CalendarDays,
  Users,
  MapPinned,
  Plus,
} from "lucide-react";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to the FPI Zambia Admin Panel
        </p>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Projects
              </p>

              <h2 className="text-4xl font-bold mt-2">
                0
              </h2>
            </div>

            <FolderKanban className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Activities
              </p>

              <h2 className="text-4xl font-bold mt-2">
                0
              </h2>
            </div>

            <CalendarDays className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Hubs
              </p>

              <h2 className="text-4xl font-bold mt-2">
                0
              </h2>
            </div>

            <MapPinned className="w-10 h-10 text-orange-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Team Members
              </p>

              <h2 className="text-4xl font-bold mt-2">
                0
              </h2>
            </div>

            <Users className="w-10 h-10 text-purple-600" />
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          <Link
            to="/admin/projects/create"
            className="bg-[#C9293A] text-white rounded-xl p-4 flex items-center justify-center hover:opacity-90"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Link>

          <Link
            to="/admin/activities/create"
            className="bg-blue-600 text-white rounded-xl p-4 flex items-center justify-center hover:opacity-90"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Activity
          </Link>

          <Link
            to="/admin/hubs/create"
            className="bg-green-600 text-white rounded-xl p-4 flex items-center justify-center hover:opacity-90"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Hub
          </Link>

          <Link
            to="/admin/team"
            className="bg-purple-600 text-white rounded-xl p-4 flex items-center justify-center hover:opacity-90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Team Members
          </Link>

        </div>

      </div>

      {/* Management Links */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Content Management
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <Link
            to="/admin/projects"
            className="border rounded-xl p-4 hover:bg-gray-50"
          >
            Manage Projects
          </Link>

          <Link
            to="/admin/activities"
            className="border rounded-xl p-4 hover:bg-gray-50"
          >
            Manage Activities
          </Link>

          <Link
            to="/admin/hubs"
            className="border rounded-xl p-4 hover:bg-gray-50"
          >
            Manage Hubs
          </Link>

          <Link
            to="/admin/provinces"
            className="border rounded-xl p-4 hover:bg-gray-50"
          >
            Manage Provinces
          </Link>

        </div>

      </div>

    </AdminLayout>
  );
};

export default Dashboard;