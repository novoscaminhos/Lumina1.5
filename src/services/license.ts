export function useLicense() {
  return {
    isValid: true,
    plan: 'free',
    check: async () => true
  }
}
