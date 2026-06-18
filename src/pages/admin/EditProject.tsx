import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

interface Project {
  title: string;
  description: string;
  content: string;
  image?: string;
  category?: string;
  status?: string;
}

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState<Project>({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/projects/${id}`
        );

        const data = await res.json();

        setFormData({
          title: data.title || "",
          description: data.description || "",
          content: data.content || "",
          image: data.image || "",
          category: data.category || "",
          status: data.status || "",
        });
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setSaving(true);

      const response = await fetch(
        `http://localhost:5000/api/projects/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update project");
      }

      alert("Project updated successfully");

      navigate("/admin/projects");
    } catch (error) {
      console.error(error);
      alert("Error updating project");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading project...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Edit Project
            </h1>

            <p className="text-gray-500 mt-2">
              Update project details and content
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/projects")}
            className="flex items-center text-gray-600 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8"
        >

          {/* TITLE */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Project Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Short Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          {/* CATEGORY + STATUS */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <div>
              <label className="block font-semibold mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">
                  Select Category
                </option>

                <option value="Advocacy">
                  Advocacy
                </option>

                <option value="Media Literacy">
                  Media Literacy
                </option>

                <option value="Research">
                  Research
                </option>

                <option value="Capacity Building">
                  Capacity Building
                </option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">
                  Select Status
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Completed">
                  Completed
                </option>

                <option value="Upcoming">
                  Upcoming
                </option>
              </select>
            </div>

          </div>

          {/* IMAGE */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Project Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* CONTENT */}
          <div className="mb-8">
            <label className="block font-semibold mb-2">
              Project Content
            </label>

            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">

            <button
              type="submit"
              disabled={saving}
              className="bg-[#C9293A] text-white px-8 py-3 rounded-xl hover:bg-red-700 transition flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />

              {saving
                ? "Updating..."
                : "Update Project"}
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/admin/projects")
              }
              className="border px-8 py-3 rounded-xl"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProject;