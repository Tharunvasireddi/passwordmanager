import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { isAuthenticated, getUserFromToken, logout } from "../utils/auth"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLogout = () => {
        logout()
        setIsLoggedIn(false)
        setUser(null)
        setIsMenuOpen(false) // Close the menu after logout
    }

    // Check authentication status on component mount and when localStorage changes
    useEffect(() => {
        const checkAuth = () => {
            const authStatus = isAuthenticated()
            setIsLoggedIn(authStatus)
            if (authStatus) {
                setUser(getUserFromToken())
            } else {
                setUser(null)
            }
        }

        checkAuth()

        // Listen for storage changes (when user logs in/out in another tab)
        // This ensures the navbar updates if auth status changes elsewhere
        const handleStorageChange = (event) => {
            if (event.key === 'token' || event.key === 'user') { // Only react to relevant keys
                checkAuth()
            }
        }

        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200">
                            <span className="text-2xl">🔐</span>
                            <h1 className="text-xl font-bold tracking-tight">PasswordManager</h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        {isLoggedIn && (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/passwords"
                                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    My Passwords
                                </Link>
                                <Link
                                    to="/add-password"
                                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    Add Password
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Auth Buttons/User Info - Desktop */}
                    <div className="hidden md:flex items-center space-x-3">
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-3">
                                {user && (
                                    <span className="text-white text-sm font-medium">Hello, {user.username || 'User'}!</span>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="text-white border border-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-white border border-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-md"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition-colors duration-200"
                            aria-label="Toggle navigation menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen
                    ? 'max-h-screen opacity-100 py-2' // Increased max-h for more content
                    : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 bg-opacity-95">
                    <Link
                        to="/"
                        className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>

                    {isLoggedIn && (
                        <>
                            <Link
                                to="/dashboard"
                                className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/passwords"
                                className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                My Passwords
                            </Link>
                            <Link
                                to="/add-password"
                                className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                Add Password
                            </Link>
                            <div className="pt-4 pb-2 border-t border-blue-500">
                                {user && (
                                    <span className="text-white text-base px-3 py-2 block">Hello, {user.username || 'User'}!</span>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    )}

                    {!isLoggedIn && (
                        <div className="pt-4 pb-2 border-t border-blue-500">
                            <Link
                                to="/login"
                                className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar