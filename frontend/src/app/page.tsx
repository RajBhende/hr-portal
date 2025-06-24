'use client';

import React from 'react';

const HomePage = (): React.JSX.Element => {
  return (
    <main className="flex-1 bg-[#F8FAFC]">
      <section className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-10">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3e0.png"
              alt="Home"
              className="w-20 h-20 mb-4"
            />
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">
              Welcome to Tayog Official Home Page
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              This is your starting point for an amazing web experience. Explore features, connect with the community, and get started on your journey!
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      <h1>This is home Page</h1>
      <p>Welcome to the home page of our application!</p>
    </main>
  );
};

export default HomePage;
