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

export const getAllFilters = () => request("/api/filters")

export const createFilter = (name, chapters) =>
  request("/api/filters", {
    method: "POST",
    body: JSON.stringify({ name, chapters }),
  })

export const updateFilter = (filterId, name, chapters) =>
  request(`/api/filters/${filterId}`, {
    method: "PUT",
    body: JSON.stringify({ name, chapters }),
  })

export const deleteFilter = (filterId) =>
  request(`/api/filters/${filterId}`, {
    method: "DELETE",
  })
