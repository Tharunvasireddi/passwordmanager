import { PlusIcon, EyeIcon, KeyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from '@tanstack/react-router';
import PasswordForm from '../componens/PasswordForm';

const DashBoardPage = () => {
  const navigate = useNavigate();

  const handleAddPassword = () => {
    navigate({ to: '/add-password' });
  };

  const handleShowPasswords = () => {
    navigate({ to: '/passwords' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Password Manager</h1>
                <p className="text-sm text-gray-600">Secure your digital life</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Welcome back!</p>
                <p className="text-xs text-gray-500">Manage your passwords securely</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <KeyIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Password Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keep all your passwords safe and organized in one secure place. Add new passwords or view your existing ones.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Add Password Card */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PlusIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Add Password</h3>
                <p className="text-gray-600 mb-6">
                  Store a new password securely. Add credentials for your apps, websites, and services.
                </p>
                <button
                  onClick={handleAddPassword}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Add New Password
                </button>
              </div>
            </div>
          </div>

          {/* Show Passwords Card */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Show Passwords</h3>
                <p className="text-gray-600 mb-6">
                  View and manage all your stored passwords. Search, edit, or delete existing entries.
                </p>
                <button
                  onClick={handleShowPasswords}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View All Passwords
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">🔒</div>
                <p className="text-sm font-medium text-gray-900">Encrypted Storage</p>
                <p className="text-xs text-gray-500">All passwords are encrypted</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">🛡️</div>
                <p className="text-sm font-medium text-gray-900">Secure Access</p>
                <p className="text-xs text-gray-500">Protected by authentication</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">⚡</div>
                <p className="text-sm font-medium text-gray-900">Quick Access</p>
                <p className="text-xs text-gray-500">Find passwords instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashBoardPage };
