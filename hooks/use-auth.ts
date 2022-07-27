import { authApi } from '@/api'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

// Auth -> protected pages
// <Auth>{children}</Auth>
export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 3600000, // 1 hour
    revalidateOnFocus: false,
    // revalidateOnMount: false,
    ...options,
  })

  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authApi.login({
      username: 'admin',
      password: '123123',
    })
    await mutate()
  }

  async function logout() {
    await authApi.logout()
    mutate({}, false)
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  }
}
