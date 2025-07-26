import { Link } from "@tanstack/react-router"

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Secure Your Digital Life with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-2">
                Advanced Password Management
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Store and manage all your passwords in one secure vault. 
              Never forget a password again with military-grade encryption.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <Link 
                to="/login" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Sign In
              </Link>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {/* Feature 1 */}
            {/* <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your passwords are protected with AES-256 encryption, the same standard used by banks and governments.
              </p>
            </div> */}
            
            {/* Feature 2 */}
            {/* <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Fill & Sync</h3>
              <p className="text-gray-600">
                Seamlessly fill passwords across all your devices. Access your vault anywhere, anytime.
              </p>
            </div>
             */}
           {/* Feature 3 */}
          {/* <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Password Generator</h3>
              <p className="text-gray-600">
                Create strong, unique passwords instantly. Never use weak or repeated passwords again.
              </p>
            </div>
          </div>   */}
          
          {/* Stats Section */}
          {/* <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Thousands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                <div className="text-gray-600">Passwords Secured</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div> */}
          
          {/* Final CTA */}
          {/* <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Life?</h2>
            {/* <p className="text-xl mb-8 opacity-90">
              Join thousands of users who trust us with their most important passwords.
            </p>*/}
            
            {/* <Link 
              to="/register" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Free Trial
            </Link> */}
            </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
