export function session<T = unknown>(key = '', data?: object) {
  const st = sessionStorage
  return {
    // get: () => JSON.parse(st.getItem(key)) as T,
    // set: () => st.setItem(key, JSON.stringify(data)),
    // remove: () => st.removeItem(key),
  }
}
