import React from "react";

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
      <h1 className="text-3xl font-bold mb-2">We'll be back soon!</h1>
      <p className="text-lg text-gray-600">
        Our site is currently undergoing scheduled maintenance.
        <br />
        We appreciate your patience and will be back online shortly.
      </p>
    </div>
  );
};

export default Maintenance;
