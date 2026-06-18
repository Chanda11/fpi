import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Report {
  id: number;
  title: string;
  category?: string;
  published_at?: string;
}

const Reports = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reports")
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/reports/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete report");
      }

      setReports(
        reports.filter((report) => report.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete report");
    }
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Reports
          </h1>

          <p className="text-gray-500">
            Manage research reports and publications
          </p>
        </div>

        <Link
          to="/admin/reports/create"
          className="bg-[#C9293A] text-white px-5 py-3 rounded-xl hover:bg-red-700"
        >
          Add Report
        </Link>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-4">
                Title
              </th>

              <th className="text-left p-4">
                Category
              </th>

              <th className="text-left p-4">
                Date
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  {report.title}
                </td>

                <td className="p-4">
                  {report.category || "-"}
                </td>

                <td className="p-4">
                  {report.published_at || "-"}
                </td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                    >
                      View
                    </button>

                    <Link
                      to={`/admin/reports/${report.id}/edit`}
                      className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(report.id)
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>

                  </div>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

        {reports.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No reports found
          </div>
        )}

      </div>

    </div>
  );
};

export default Reports;