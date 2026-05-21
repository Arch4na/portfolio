import React from "react";

function Showdata({ users }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        user list
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
           
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-700">
                {user.title}</p>
                <p className="text-sm font-semibold text-gray-700">
                {user.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showdata;