// Authentication utility functions

export const isAuthenticated = () => {
    const token = localStorage.getItem('token')
    return !!token
}

export const getUserFromToken = () => {
    const token = localStorage.getItem('token')
    if (!token) return null
    
    try {
        // Decode JWT token to get user info (basic implementation)
        const payload = JSON.parse(atob(token.split('.')[1]))
        return payload
    } catch (error) {
        console.error('Error decoding token:', error)
        return null
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    // Redirect to home page after logout
    window.location.href = '/'
}
