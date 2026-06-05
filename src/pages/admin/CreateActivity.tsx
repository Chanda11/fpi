import { useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

const CreateActivity = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    date: "",
    location: "",
    participants: 0,
    category: "",
    program: "",
    published: true,
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "participants"
          ? Number(value)
          : value,
    });
  };

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const data = new FormData();

      data.append("file", file);
      data.append("upload_preset", "fpi-media");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/djwhaqunv/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      setForm((prev) => ({
        ...prev,
        image: result.secure_url,
      }));
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:5000/api/activities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage(
        "✅ Activity created successfully!"
      );

      setForm({
        title: "",
        description: "",
        content: "",
        image: "",
        date: "",
        location: "",
        participants: 0,
        category: "",
        program: "",
        published: true,
      });
    } catch (error) {
      console.error(error);

      setMessage(
        "❌ Failed to create activity"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold mb-8">
            Create Activity
          </h1>

          {message && (
            <div className="mb-6 p-4 rounded-lg bg-blue-50 border">
              {message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <label className="block font-medium mb-2">
                Activity Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3"
                placeholder="Enter activity title"
              />
            </div>

            {/* Program */}
            <div>
              <label className="block font-medium mb-2">
                Program
              </label>

              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3"
              >
                <option value="">
                  Select Program
                </option>

                <option value="Media Literacy">
                  Media Literacy
                </option>

                <option value="Fact Checking">
                  Fact Checking
                </option>

                <option value="Digital Safety">
                  Digital Safety
                </option>

                <option value="Journalism Training">
                  Journalism Training
                </option>

                <option value="Advocacy">
                  Advocacy
                </option>

                <option value="Research">
                  Research
                </option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium mb-2">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3"
              >
                <option value="">
                  Select Category
                </option>

                <option value="training">
                  Training
                </option>

                <option value="workshop">
                  Workshop
                </option>

                <option value="webinar">
                  Webinar
                </option>

                <option value="dialogue">
                  Dialogue
                </option>

                <option value="conference">
                  Conference
                </option>

                <option value="event">
                  Event
                </option>
              </select>
            </div>

            {/* Province */}
            <div>
              <label className="block font-medium mb-2">
                Province
              </label>

              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3"
              >
                <option value="">
                  Select Province
                </option>

                <option value="Lusaka">Lusaka</option>
                <option value="Copperbelt">Copperbelt</option>
                <option value="Central">Central</option>
                <option value="Eastern">Eastern</option>
                <option value="Western">Western</option>
                <option value="Southern">Southern</option>
                <option value="Northern">Northern</option>
                <option value="North-Western">
                  North-Western
                </option>
                <option value="Muchinga">
                  Muchinga
                </option>
                <option value="Luapula">
                  Luapula
                </option>
              </select>
            </div>

            {/* Date + Participants */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">
                  Activity Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Participants
                </label>

                <input
                  type="number"
                  name="participants"
                  value={form.participants}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block font-medium mb-2">
                Featured Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="w-full border rounded-lg p-3"
              />

              {uploading && (
                <p className="mt-3 text-blue-600">
                  Uploading image...
                </p>
              )}

              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  className="mt-4 h-64 w-full object-cover rounded-lg border"
                />
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-2">
                Short Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block font-medium mb-2">
                Full Content
              </label>

              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={8}
                required
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Published */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) =>
                  setForm({
                    ...form,
                    published: e.target.checked,
                  })
                }
              />

              <label>
                Publish Immediately
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
            >
              {loading
                ? "Saving..."
                : "Create Activity"}
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateActivity;