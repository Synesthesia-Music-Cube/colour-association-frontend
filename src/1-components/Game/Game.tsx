import { useEffect, useState } from 'react'
import SoundSlide from './SoundSlide'
import Loader from '1-components/Loader'
import { useAllPosts } from 'api/hooks/posts/useAllPosts'
import FinishedGame from './FinishedGame'

export default function Game() {
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false)
  const { isLoading, data } = useAllPosts()
  const [curPosts, setCurPosts] = useState(data?.posts?.edges)
  // keep track of the current index of post
  const [curIdx, setCurIdx] = useState<number>(0)

  useEffect(() => {
    setCurPosts(data?.posts?.edges)
  }, [data])

  if (isLoading) {
    return <Loader />
  }

  const handleNextSlide = () => {
    let newIdx = curIdx

    newIdx += 1

    if (newIdx >= curPosts?.length) {
      handleGameFinished()
      return
    }

    setCurIdx(newIdx)
  }

  const handleGameFinished = () => {
    setIsGameFinished(true)

    let playedCount: number = localStorage.getItem('playedCount')
      ? Number(localStorage.getItem('playedCount'))
      : 0

    playedCount++

    localStorage.setItem('playedCount', String(playedCount))
  }

  if (isGameFinished) {
    return <FinishedGame />
  }

  return (
    <>
      <h2 className='text-4xl text-center text-white mb-10  '>
        {curIdx + 1} / {curPosts?.length}
      </h2>
      {curPosts && (
        <SoundSlide
          id={curPosts[curIdx]?.node.databaseId}
          title={curPosts[curIdx]?.node.title}
          colors={curPosts[curIdx]?.node.colors}
          sound={curPosts[curIdx]?.node.sound}
          colorsCount={curPosts[curIdx]?.node.colorsCount}
          handleNextSlide={handleNextSlide}
        />
      )}
    </>
  )
}
