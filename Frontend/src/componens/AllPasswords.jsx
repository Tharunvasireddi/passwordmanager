import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllPasswords } from '../utils/helper'
import { 
    EyeIcon, 
    EyeSlashIcon, 
    MagnifyingGlassIcon,
    KeyIcon,
    ClipboardDocumentIcon,
    ShieldCheckIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const AllPasswords = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [visiblePasswords, setVisiblePasswords] = useState(new Set())
    const [copiedId, setCopiedId] = useState(null)

    const { data: passwordsData, isLoading, error, refetch } = useQuery({
        queryKey: ['passwords'],
        queryFn: getAllPasswords,
        retry: 2
    })

    const passwords = passwordsData?.passwords || []

    const filteredPasswords = passwords.filter(password =>
        password.appname.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const togglePasswordVisibility = (passwordId) => {
        setVisiblePasswords(prev => {
            const newSet = new Set(prev)
            if (newSet.has(passwordId)) {
                newSet.delete(passwordId)
            } else {
                newSet.add(passwordId)
            }
            return newSet
        })
    }

    const copyToClipboard = async (password, passwordId) => {
        try {
            await navigator.clipboard.writeText(password)
            setCopiedId(passwordId)
            setTimeout(() => setCopiedId(null), 2000)
        } catch (err) {
            console.error('Failed to copy password:', err)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading your passwords...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-6">
                    <ExclamationTriangleIcon className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Passwords</h2>
                    <p className="text-gray-600 mb-4">{error?.message || 'Failed to load passwords'}</p>
                    <button
                        onClick={() => refetch()}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <ShieldCheckIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Password Vault</h1>
                                <p className="text-gray-600">Manage your saved passwords securely</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Total Passwords</p>
                            <p className="text-2xl font-bold text-blue-600">{passwords.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <div className="relative max-w-md">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search passwords by app name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {filteredPasswords.length === 0 ? (
                    <div className="text-center py-12">
                        <KeyIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {searchTerm ? 'No passwords found' : 'No passwords saved yet'}
                        </h3>
                        <p className="text-gray-600">   
                            {searchTerm 
                                ? 'Try adjusting your search terms' 
                                : 'Start by adding your first password to the vault'
                            }
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPasswords.map((password) => {
                            const isVisible = visiblePasswords.has(password._id)
                            const isCopied = copiedId === password._id
                            
                            return (
                                <div
                                    key={password._id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                                            {password.appname}
                                        </h3>
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">
                                                {password.appname.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={isVisible ? 'text' : 'password'}
                                                value={password.password}
                                                readOnly
                                                className="w-full pr-20 py-2 px-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-mono text-sm"
                                            />
                                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                                                    <button
                                                    onClick={() => togglePasswordVisibility(password._id)}
                                                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                                                    title={isVisible ? 'Hide password' : 'Show password'}
                                                >
                                                    {isVisible ? (
                                                        <EyeSlashIcon className="h-4 w-4" />
                                                    ) : (
                                                        <EyeIcon className="h-4 w-4" />
                                                    )}
                                                </button>
                                                
                                                {/* Copy to Clipboard */}
                                                <button
                                                    onClick={() => copyToClipboard(password.password, password._id)}
                                                    className={`p-1 transition-colors ${
                                                        isCopied 
                                                            ? 'text-green-600' 
                                                            : 'text-gray-500 hover:text-gray-700'
                                                    }`}
                                                    title="Copy password"
                                                >
                                                    <ClipboardDocumentIcon className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                        {isCopied && (
                                            <p className="text-xs text-green-600 mt-1">Copied to clipboard!</p>
                                        )}
                                    </div>

                                        <div className="text-xs text-gray-500">
                                        <p>Added: {new Date(password.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllPasswords
