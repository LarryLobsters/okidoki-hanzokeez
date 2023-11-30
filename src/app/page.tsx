import { CreatePost } from '@/app/_components/create-post'
import { getServerAuthSession } from '@/server/auth'
import { api } from '@/trpc/server'
import SignInComponent from './_components/SignInComponent'

export default async function Home() {
  const hello = await api.post.hello.query({ text: 'from tRPC' })
  const session = await getServerAuthSession()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white'>
      <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-[5rem]'>
          Create <span className='text-[hsl(280,100%,70%)]'>T3</span> App
        </h1>
        <div className=''>
          <SignInComponent />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-2xl text-white'>{hello ? hello.greeting : 'Loading tRPC query...'}</p>

          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-center text-2xl text-white'>
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>
  )
}

async function CrudShowcase() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  const latestPost = await api.post.getLatest.query()

  return (
    <div className='w-full max-w-xs'>
      {latestPost ? (
        <p className='truncate'>Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  )
}