
import React from 'react';

const Home = () => {
  return (
    <div className="mt-16 mb-20 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="text-center my-16">
        <h1 className="sm:text-5xl text-3xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-indigo-600">Placement Talk</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A dedicated platform for students and professionals to share experiences, 
          insights, and resources related to placements, internships, and career growth.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition font-medium">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 transition font-medium">
            Explore Blogs
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="my-16 bg-indigo-50 rounded-2xl py-12 px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">500+</h3>
            <p className="text-gray-700 font-medium">Success Stories</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">200+</h3>
            <p className="text-gray-700 font-medium">Companies Covered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">10K+</h3>
            <p className="text-gray-700 font-medium">Active Readers</p>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="my-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cracking the Amazon SDE Interview
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Step-by-step journey of preparing for Amazon's Software Development Engineer interview.
              Tips, coding practice, and mindset shared by successful candidates.
            </p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline">
              Read More →
            </button>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Top 10 DSA Questions for Placements
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              A curated list of the most frequently asked Data Structures & Algorithms problems 
              in top tech companies with explanations and resources.
            </p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline">
              Read More →
            </button>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Resume Building Hacks for Freshers
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Learn how to craft a resume that stands out to recruiters. Includes free templates 
              and best practices for different industries.
            </p>
            <button className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline">
              Read More →
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="my-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Explore by Categories
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer border border-indigo-200">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold text-indigo-900 text-lg">Interview Experiences</h4>
            <p className="text-indigo-700 text-sm mt-2">Real stories from successful candidates</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer border border-indigo-200">
            <div className="text-4xl mb-3">📚</div>
            <h4 className="font-bold text-indigo-900 text-lg">Coding Resources</h4>
            <p className="text-indigo-700 text-sm mt-2">Curated learning materials & guides</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer border border-indigo-200">
            <div className="text-4xl mb-3">🧮</div>
            <h4 className="font-bold text-indigo-900 text-lg">Aptitude Prep</h4>
            <p className="text-indigo-700 text-sm mt-2">Practice tests & problem-solving tips</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer border border-indigo-200">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="font-bold text-indigo-900 text-lg">Career Guidance</h4>
            <p className="text-indigo-700 text-sm mt-2">Expert advice for your journey</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="my-20 bg-gray-50 rounded-2xl py-16 px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          What Our Readers Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of students who have successfully landed their dream jobs with our guidance
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-4 italic">
              "The interview experiences shared here gave me the confidence to ace my Google interview. 
              The detailed breakdown of rounds was incredibly helpful!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                P
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                <p className="text-sm text-gray-600">SDE at Google</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-4 italic">
              "The DSA resources and company-specific preparation guides are gold. 
              I got placed in Microsoft thanks to the strategies I learned here."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                R
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">Rahul Verma</h4>
                <p className="text-sm text-gray-600">SDE II at Microsoft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="my-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          About Placement Talk
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Placement Talk is more than just a blogging site. It's a community-driven space 
          where students and professionals share authentic experiences, resources, and 
          tips to help the next generation of graduates land their dream jobs. Whether you 
          are preparing for internships, off-campus drives, or tech giants, you'll find 
          value here.
        </p>
        <button className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition font-medium">
          Learn More About Us
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-12 pb-8 mt-20">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Placement Talk</h3>
            <p className="text-gray-600 text-sm">
              Your trusted companion for placement preparation and career success.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">Home</a></li>
              <li><a href="#" className="hover:text-indigo-600">Articles</a></li>
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
              <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">Interview Experiences</a></li>
              <li><a href="#" className="hover:text-indigo-600">Coding Resources</a></li>
              <li><a href="#" className="hover:text-indigo-600">Aptitude Prep</a></li>
              <li><a href="#" className="hover:text-indigo-600">Career Guidance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-600">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-600">Instagram</a></li>
              <li><a href="#" className="hover:text-indigo-600">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Placement Talk. Built with ❤️ by Shubham Deshmukh.
        </div>
      </footer>
    </div>
  );
};

export default Home;