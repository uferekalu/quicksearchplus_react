export async function fetchFromGoogleSearch(query, startIndex, setIsLoading) {
  const apiKey = process.env.API_KEY
  const searchEngineId = process.env.SEARCH_ENGINE_ID

  const num = 10
  const results = []

  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(
    query,
  )}&start=${startIndex}&num=${num}`

  try {
    setIsLoading(true)
    const response = await fetch(url)

    if (!response.ok) {
      console.error(`HTTP error, status = ${response.status}`)
      setIsLoading(false)
      return null
    }

    const data = await response.json()
    setIsLoading(false)

    if (data.items && data.items.length > 0) {
      results.push(...data.items)
    }
  } catch (error) {
    setIsLoading(false)
    return null
  }

  return results
}
