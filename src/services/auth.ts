export function useAuth() {
  return {
    isAuthenticated: true,
    user: null,
    loading: false,
    login: async () => {},
    logout: async () => {}
  }
}
