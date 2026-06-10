import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  image?: string;
  category?: string;
  status?: string;
}

const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 text-center">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 text-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">

        <img
          src={
            project.image ||
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
          }
          alt={project.title}
          className="w-full h-[500px] object-cover rounded-2xl"
        />

        <div className="mt-8">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
            {project.category || "Project"}
          </span>

          <h1 className="text-5xl font-bold mt-4">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 mt-4">
            {project.description}
          </p>

          <div className="mt-10 text-gray-700 leading-8 whitespace-pre-line">
            {project.content}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;