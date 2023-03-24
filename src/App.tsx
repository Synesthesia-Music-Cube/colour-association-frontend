import Layout from '1-components/layout/Layout'
import Game from '1-components/Game/Game'
import Welcome from '1-components/Welcome'

import 'index.css'
import { useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import queryClient from 'api/client'

function App() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Layout>
        {!isGameStarted ? (
          <div className='container min-h-screen grid mx-auto h-full bg-gray-800 rounded-xl shadow-border md:place-content-center px-5 md:px-0'>
            <Welcome startGame={() => setIsGameStarted(true)} />
          </div>
        ) : (
          <div className='container max-h-screen md:min-h-screen grid mx-auto h-full bg-gray-800 rounded-xl shadow-border place-content-start md:place-content-center px-5 md:px-0'>
            <Game />
          </div>
        )}
      </Layout>
    </QueryClientProvider>
  )
}

export default App
