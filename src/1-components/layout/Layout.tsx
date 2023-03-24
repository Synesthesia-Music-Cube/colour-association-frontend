import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header></header>
      <main className='bg-gray-800 md:py-0 py-10 h-full min-h-screen'>
        {children}
      </main>
      <footer></footer>
    </>
  )
}
