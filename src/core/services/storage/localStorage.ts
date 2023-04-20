// save item in localStorage
const setItem = (key:string, value:any) => {
  localStorage.setItem(key, value);
};

// get an item from localStorage with its key
const getItem = (key:string) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};

// remove specific item with its key from localStorage
const removeItem = (key:string) => {
  if (getItem(key) === false) return false;
  localStorage.removeItem(key);
};

// cleare all localStorage of this site
const clearStorage = () => {
  localStorage.clear();
};
// setItem("cart", JSON.stringify([]));
export { setItem, getItem, removeItem, clearStorage };
