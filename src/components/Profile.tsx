import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex gap-2 items-center bg-zinc-700 p-2 rounded w-60">
      <Image
        src="https://github.com/rodrigomsrocha.png"
        width={60}
        height={60}
        alt="rodrigo"
        className="rounded"
      />
      <p>
        Rodrigo
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
