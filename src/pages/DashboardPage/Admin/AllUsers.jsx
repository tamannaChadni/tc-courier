

import  { useState, useEffect } from 'react';
import axios from 'axios';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleMakeDeliveryMan = async (userId) => {
    const confirmChange = window.confirm('Are you sure you want to make this user a Delivery Man?');
    if (confirmChange) {
      try {
        await axios.patch(`/users/${userId}`, { role: 'delivery-man' });
        setUsers(users.map(user => user.id === userId ? { ...user, role: 'delivery-man' } : user));
      } catch (error) {
        console.error('Error updating user role:', error);
      }
    }
  };

  const handleMakeAdmin = async (userId) => {
    const confirmChange = window.confirm('Are you sure you want to make this user an Admin?');
    if (confirmChange) {
      try {
        await axios.patch(`/users/${userId}`, { role: 'admin' });
        setUsers(users.map(user => user.id === userId ? { ...user, role: 'admin' } : user));
      } catch (error) {
        console.error('Error updating user role:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">User’s Name</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2">Number of Parcels Booked</th>
            <th className="py-2">Total Spent Amount</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.phoneNumber}</td>
              <td className="border px-4 py-2">{user.parcelCount}</td>
              <td className="border px-4 py-2">{user.totalSpent || 'N/A'}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleMakeDeliveryMan(user.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  disabled={user.role === 'delivery-man'}
                >
                  Make Delivery Man
                </button>
                <button
                  onClick={() => handleMakeAdmin(user.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  disabled={user.role === 'admin'}
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
