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

export const getAllClasses = () => request("/api/classes")

export const createClass = (name) =>
  request("/api/classes", {
    method: "POST",
    body: JSON.stringify({ name }),
  })

export const deleteClass = (classId) =>
  request(`/api/classes/${classId}`, {
    method: "DELETE",
  })

export const getClassUsers = (classId) =>
  request(`/api/classes/${classId}/users`)

export const assignUserToClass = (userId, classId) =>
  request(`/api/classes/users/${userId}/class`, {
    method: "PATCH",
    body: JSON.stringify({ classId }),
  })
