import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

interface User {
  name: string
  avatarUrl: string
}

export function getUser() {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated')
  }

  const user = jwt.verify(token, 'shhhhh')

  return user as User
}
