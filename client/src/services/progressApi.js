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

export const getAllProgress = () => request("/api/progress")

export const updateChapterRating = (chapterSlug, level) =>
  request(`/api/progress/${chapterSlug}`, {
    method: "POST",
    body: JSON.stringify({ level }),
  })

export const removeChapterRating = (chapterSlug) =>
  request(`/api/progress/${chapterSlug}`, {
    method: "DELETE",
  })
