import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { useEffect } from 'react'

export function Auth({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { profile, firstLoading } = useAuth()
  useEffect(() => {
    if (!firstLoading && !profile?.username) {
      router.push('/login')
    }
  }, [router, profile, firstLoading])
  if (!profile?.username) {
    return <h3>Loading...</h3>
  }
  return <div>{children}</div>
}
