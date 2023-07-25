import { getUser } from '@/app/lib/auth'
import Image from 'next/image'

export function Profile() {
  const user = getUser()
  console.log(user)

  return (
    <div className="flex gap-2 items-center bg-zinc-700 p-2 rounded w-60">
      <Image
        src={user.avatarUrl}
        width={60}
        height={60}
        alt="rodrigo"
        className="rounded"
      />
      <p>
        {user.name}
        <a
          className="block text-red-400 transition-colors hover:text-red-500"
          href="#"
        >
          Log out
        </a>
      </p>
    </div>
  )
}
