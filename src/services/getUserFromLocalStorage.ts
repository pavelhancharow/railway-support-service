export function getUserFromLocalStorage(user: string) {
  return localStorage.getItem(user);
}
