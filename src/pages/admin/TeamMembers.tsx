import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  email?: string;
  image?: string;
}

const TeamMembers = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/team")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Team Members
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Member
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Photo</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t">
                <td className="p-4">
                  <img
                    src={
                      member.image ||
                      "https://via.placeholder.com/60"
                    }
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>

                <td className="p-4">{member.name}</td>
                <td className="p-4">{member.position}</td>
                <td className="p-4">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default TeamMembers;