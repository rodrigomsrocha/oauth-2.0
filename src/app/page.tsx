import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/Signin'
import { cookies } from 'next/headers'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isAuthenticated ? <Profile /> : <SignIn />}
    </div>
  )
}
