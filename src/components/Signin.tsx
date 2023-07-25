import { LuGithub } from 'react-icons/lu'

export function SignIn() {
  return (
    <div>
      <a
        className="bg-zinc-500 text-lg py-2 px-4 rounded flex gap-2 items-center transition-colors hover:bg-zinc-600"
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      >
        <LuGithub className="text-2xl" />
        Login with GitHub
      </a>
    </div>
  )
}
