import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch(console.error);
  }, [id]);

  if (!project) {
    return (
      <div className="py-32 text-center">
        Loading project...
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="max-w-6xl mx-auto px-4">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[500px] object-cover rounded-xl"
        />

        <h1 className="text-5xl font-bold mt-8">
          {project.title}
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          {project.description}
        </p>

        <div className="mt-8 prose max-w-none">
          {project.content}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;