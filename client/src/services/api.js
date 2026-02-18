// In development, use Vite's proxy (same origin, no CORS issues)
// In production, use the configured API URL
const API_BASE = import.meta.env.VITE_API_URL || ""

async function request(endpoint, options = {}) {
  const config = {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }

  const response = await fetch(`${API_BASE}${endpoint}`, config)
  const data = await response.json()

  if (!response.ok) {
    const error = new Error(data.message || "Request failed")
    error.status = response.status
    error.data = data
    throw error
  }

  return data
}

export const login = (email, password) =>
  request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })

export const register = (email, password) =>
  request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })

export const logout = () => request("/api/auth/logout", { method: "POST" })

export const getCurrentUser = () => request("/api/auth/me")

export const checkAuth = () => request("/api/auth/check")

export const verifyEmail = (token) => request(`/api/auth/verify-email/${token}`)

export const resendVerification = () =>
  request("/api/auth/resend-verification", { method: "POST" })

export const forgotPassword = (email) =>
  request("/api/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  })

export const resetPassword = (token, password) =>
  request("/api/auth/reset-password", {
    method: "POST",
    body: JSON.stringify({ token, password }),
  })
