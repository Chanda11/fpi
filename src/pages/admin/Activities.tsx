import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";

interface Activity {
  id: number;
  title: string;
  program?: string;
  category: string;
  location: string;
  date: string;
  published?: boolean;
}

const Activities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/activities"
      );

      const data = await response.json();

      setActivities(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this activity?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/activities/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setActivities((prev) =>
        prev.filter((activity) => activity.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete activity");
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Activities
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all published activities
          </p>
        </div>

        <Link
          to="/admin/activities/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Create Activity
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            Loading...
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Program
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Province
                </th>

                <th className="p-4 text-left">
                  Published
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {activities.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {activity.title}
                  </td>

                  <td className="p-4">
                    {activity.program || "-"}
                  </td>

                  <td className="p-4 capitalize">
                    {activity.category}
                  </td>

                  <td className="p-4">
                    {activity.location}
                  </td>

                  <td className="p-4">
                    {activity.published ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Published
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        Draft
                      </span>
                    )}
                  </td>

                  <td className="p-4">
                    {new Date(
                      activity.date
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <Link
                        to={`/admin/activities/${activity.id}/edit`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(activity.id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
};

export default Activities;