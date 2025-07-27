// Authentication utility functions

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    try {
        // Check if token is expired by parsing JWT payload
        const payload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Date.now() / 1000;
        
        // If token is expired, remove it and return false
        if (payload.exp && payload.exp < currentTime) {
            localStorage.removeItem('token');
            return false;
        }
        
        return true;
    } catch (error) {
        // If token is malformed, remove it
        localStorage.removeItem('token');
        return false;
    }
};

export const getUserFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.isUserExisted || null;
    } catch (error) {
        return null;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    // Redirect to home page after logout
    window.location.href = '/';
};
