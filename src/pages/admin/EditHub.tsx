import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditHub = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    coordinator: "",
    description: "",
    participants: 0,
  });

  useEffect(() => {
fetch(`http://localhost:5000/api/hubs/id/${id}`)      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name || "",
          location: data.location || "",
          coordinator: data.coordinator || "",
          description: data.description || "",
          participants: data.participants || 0,
        });
      })
      .catch(console.error);
  }, [id]);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]:
      e.target.name === "participants"
        ? Number(e.target.value)
        : e.target.value,
  });
};

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await fetch(
        `http://localhost:5000/api/hubs/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Hub updated successfully");

      navigate("/admin/hubs");
    } catch (error) {
      console.error(error);
      alert("Failed to update hub");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Edit Hub
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Hub Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="coordinator"
          placeholder="Coordinator"
          value={formData.coordinator}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="participants"
          placeholder="Participants"
          value={formData.participants}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={6}
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
  );
};

export default EditHub;