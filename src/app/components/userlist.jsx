"use client";
import React, { useEffect, useState } from 'react';

const getUsers = async () => {
  try {
    const res = await fetch('/api/users', {
      cache: 'no-store',
    });

    console.log('Fetch URL: /api/users'); // Log the fetch URL
    console.log(`Fetch response status: ${res.status}`); // Log the response status

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    console.log('Fetched users:', data.users); // Log the fetched users

    return data.users || [];
  } catch (error) {
    console.error('Error loading users:', error);
    throw error; // Rethrow the error to handle it further up the call stack
  }
};

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table className="table w-full rounded-lg shadow-md overflow-hidden">
      <thead>
        <tr className="bg-gray-100 text-gray-600 font-medium">
          <th className="py-4 px-6">Name</th>
          <th className="py-4 px-6">Number</th>
          <th className="py-4 px-6">Stream</th>
          <th className="py-4 px-6" />
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.slice().reverse().map((rs) => (
            <tr key={rs._id} className="hover bg-white border-b border-gray-200">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{rs.name}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">{rs.phoneNumber}</td>
              <td className="py-4 px-6">{rs.stream}</td>
              <td className="py-4 px-6" />
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="py-4 px-6 text-center">
              No users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
