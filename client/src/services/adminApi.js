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

export const getAllUsersProgress = () => request("/api/admin/progress")

export const getUserProgress = (userId) =>
  request(`/api/admin/progress/${userId}`)

export const getStats = () => request("/api/admin/stats")
