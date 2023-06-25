import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header/>

      <header className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Welcome to My Landing Page
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Start building your awesome product or service here.
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 py-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              Features Section
            </h2>
            <p className="mt-2 text-gray-600">
              Showcase the key features of your product or service here.
            </p>
          </div>
        </div>
      </main>

    <Footer/>
    </div>
  );
};

export default LandingPage;
