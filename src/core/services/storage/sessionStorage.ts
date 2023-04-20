// save item in sessionStorage
const setSessionItem = (key: string, value: any) => {
  sessionStorage.setItem(key, value)
}

// get an item from sessionStorage with its key
const getSessionItem = (key: string) => {
  if (sessionStorage.getItem(key)) return sessionStorage.getItem(key)
  return false
}

// remove specific item with its key from sessionStorage
const removeSessionItem = (key: string) => {
  if (getSessionItem(key) === false) return false
  sessionStorage.removeItem(key)
}

// cleare all sessionStorage of this site
const clearSessionStorage = () => {
  sessionStorage.clear()
}

// setItem("cart", JSON.stringify([]));
export { setSessionItem, getSessionItem, removeSessionItem, clearSessionStorage }
