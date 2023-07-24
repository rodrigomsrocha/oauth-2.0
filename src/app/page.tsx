import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/Signin'

export default function Home() {
  const isAuthenticated = false
  return (
    <div className="min-h-screen flex items-center justify-center">
      {isAuthenticated ? <Profile /> : <SignIn />}
    </div>
  )
}
