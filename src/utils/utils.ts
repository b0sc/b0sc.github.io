// Format the date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return new Date(date).toLocaleDateString(undefined, options)
}

// Capitalize the first letter
function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
function getReadTime(wordCount: number) {
  const wordsPerMinute = 200
  const minutes = wordCount / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} min read`
}
export { formatDate, capitalize, getReadTime }
