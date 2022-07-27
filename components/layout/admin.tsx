import { LayoutProps } from '@/models'
import Link from 'next/link'
import * as React from 'react'
import { Auth } from '@/components/common'
import { useAuth } from '@/hooks'

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth()
  async function handleLogoutClick() {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log(`failed to logout: ${error}`)
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <h2>Sidebar</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <p>Profile: {JSON.stringify(profile)}</p>
      <button onClick={handleLogoutClick}>Log out</button>
      <div>{children}</div>
    </Auth>
  )
}
