import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";

const EditActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    program: "",
    category: "",
    location: "",
    participants: 0,
    date: "",
    published: true,
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/activities/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          ...data,
          date: data.date
            ? data.date.split("T")[0]
            : "",
        });
      })
      .catch(console.error);
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "participants"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/activities/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      alert("Activity updated successfully");

      navigate("/admin/activities");
    } catch (error) {
      console.error(error);
      alert("Failed to update activity");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Edit Activity
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Full Content"
            rows={8}
            className="w-full border p-3 rounded"
          />

          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-3 rounded"
          />

          <input
            name="program"
            value={formData.program}
            onChange={handleChange}
            placeholder="Program"
            className="w-full border p-3 rounded"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border p-3 rounded"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            placeholder="Participants"
            className="w-full border p-3 rounded"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditActivity;