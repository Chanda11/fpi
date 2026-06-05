import AdminLayout from "../../components/admin/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Activities
          </h3>

          <p className="text-3xl font-bold">
            1
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Reports
          </h3>

          <p className="text-3xl font-bold">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Downloads
          </h3>

          <p className="text-3xl font-bold">
            0
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;