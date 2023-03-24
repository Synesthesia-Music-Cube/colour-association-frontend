import { useWelcomePage } from 'api/hooks/pages/useWelcomePage'
import getInnerHTML from 'helpers/getInnerHTML'
import Loader from './Loader'

export interface WelcomeProps {
  startGame: () => void
}

export default function Welcome({ startGame }: WelcomeProps) {
  const { data, isLoading } = useWelcomePage()

  if (isLoading) {
    return <Loader />
  }

  return (
    <article className='article'>
      <h1 className='text-white'>{data.page.title}</h1>
      <div
        className='text-white content'
        dangerouslySetInnerHTML={getInnerHTML(data.page.content)}
      ></div>
      <button
        onClick={startGame}
        className='bg-gray-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded mt-5 w-full md:w-max '
      >
        Start the game!
      </button>
    </article>
  )
}
