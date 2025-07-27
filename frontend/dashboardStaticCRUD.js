import { useState } from "react";
import { Button } from "./components/ui/button";
import { Trash2, Pencil, Plus } from "lucide-react";

export default function StaticCrud() {
  const [users, setUsers] = useState([
    { id: 1, name: "Abhay", email: "abhay@example.com" },
    { id: 2, name: "Neha", email: "neha@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!newUser.name || !newUser.email) return;
    if (editingId) {
      setUsers(users.map((u) => (u.id === editingId ? { ...u, ...newUser } : u)));
      setEditingId(null);
    } else {
      setUsers([...users, { id: Date.now(), ...newUser }]);
    }
    setNewUser({ name: "", email: "" });
  };

  const handleEdit = (user) => {
    setNewUser({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">User Management (Static CRUD)</h2>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button onClick={handleAddOrUpdate} className="w-full md:w-auto mt-2 md:mt-0">
            <Plus className="mr-2 h-4 w-4" /> {editingId ? "Update" : "Add"} User
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-indigo-700">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 flex gap-2">
                  <Button onClick={() => handleEdit(user)} className="bg-yellow-500 hover:bg-yellow-600">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
