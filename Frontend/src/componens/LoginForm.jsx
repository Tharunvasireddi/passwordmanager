import { useState } from "react"
import { Link } from "@tanstack/react-router"
import {useMutation} from "@tanstack/react-query"
import { loginUser } from "../utils/helper"
import { useNavigate } from "@tanstack/react-router"
const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log("Login successful:", data)
            // Check if login was successful
            if(data && (data.success === true || data.status === true || data.message === "Login successful")){
                navigate({ to: "/dashboard" })
            }
            else{
                alert(data?.message || "Login failed")
            }
        },
        onError: (error) => {
            console.error("Login failed:", error)
            // Handle different error formats
            const errorMessage = error?.message || error?.error || "Login failed. Please try again."
            alert(errorMessage)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        loginMutation.mutate({username:formData.username,password:formData.password})
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-2xl text-white">🔐</span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600">
                        Sign in to access your secure password vault
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 pl-12"
                                    placeholder="Enter your username"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-400 text-lg">👤</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 pl-12 pr-12"
                                    placeholder="Enter your password"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-400 text-lg">🔒</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    <span className="text-lg">{showPassword ? "👁️" : "🙈"}</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-500 font-medium">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            Sign In
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/register"
                                className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200"
                            >
                                Create a new account
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="text-center text-sm text-gray-600 bg-blue-50 rounded-lg p-4">
                    <span className="text-blue-600 font-medium">🔒 Secure Login:</span> Your credentials are protected with end-to-end encryption
                </div>
            </div>
        </div>
    )
}

export { LoginForm }