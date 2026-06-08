import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category?: string;
  status?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>

        <Link
          to="/admin/projects/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Project
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{project.title}</td>
                <td className="p-3">{project.category || "-"}</td>
                <td className="p-3">{project.status || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {projects.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No projects found
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;