function apiUrl(url) {
  let baseUrl = ""
  if (process.env.NODE_ENV === "development") {
    baseUrl = "http://localhost:2000"
  }
  else {
    baseUrl = "https://api.bikenumbers.dev/"
  }
  return `${baseUrl}/${url}`
}

export default apiUrl;