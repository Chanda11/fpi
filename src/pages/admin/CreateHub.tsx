import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Province {
  id: number;
  name: string;
}

const CreateHub = () => {
  const navigate = useNavigate();

  const [provinces, setProvinces] = useState<Province[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    location: "",
    coordinator: "",
    participants: 0,
    description: "",
    provinceId: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/provinces")
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/hubs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            provinceId: Number(formData.provinceId),
          }),
        }
      );

      if (response.ok) {
        navigate("/admin/hubs");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        Create Hub
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Hub Name"
          className="w-full border p-3 rounded"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Slug"
          className="w-full border p-3 rounded"
          value={formData.slug}
          onChange={(e) =>
            setFormData({
              ...formData,
              slug: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-3 rounded"
          value={formData.location}
          onChange={(e) =>
            setFormData({
              ...formData,
              location: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Coordinator"
          className="w-full border p-3 rounded"
          value={formData.coordinator}
          onChange={(e) =>
            setFormData({
              ...formData,
              coordinator: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Participants"
          className="w-full border p-3 rounded"
          value={formData.participants}
          onChange={(e) =>
            setFormData({
              ...formData,
              participants: Number(e.target.value),
            })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded h-40"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-3 rounded"
          value={formData.provinceId}
          onChange={(e) =>
            setFormData({
              ...formData,
              provinceId: e.target.value,
            })
          }
        >
          <option value="">
            Select Province
          </option>

          {provinces.map((province) => (
            <option
              key={province.id}
              value={province.id}
            >
              {province.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Save Hub
        </button>
      </form>
    </div>
  );
};

export default CreateHub;