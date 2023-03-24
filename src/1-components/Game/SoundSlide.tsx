import { Key, useEffect, useState } from 'react'

import { Post } from 'types/generated/graphql'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import ColorCard from './ColorCard'
import { useUpdatePostColorsCount } from 'api/hooks/posts/useUpdatePostColorsCount'

export interface SoundSlideProps {
  id: Post['databaseId']
  title: Post['title']
  colors: Post['colors']
  colorsCount: any
  sound: {
    __typename?: 'Post_Sound'
    sound?: { __typename?: 'MediaItem'; title?: string; mediaItemUrl?: string }
  } // dunno why but generated type is wrong so I had to do this - sadface
  handleNextSlide: () => void
}

export default function SoundSlide({
  id,
  title,
  sound,
  colors,
  colorsCount,
  handleNextSlide,
}: SoundSlideProps) {
  // if false user can't click on any colors yet
  const [playedSound, setPlayedSound] = useState<boolean>(false)
  // if true user can't click again on any color on slide
  const [cardClicked, setCardClicked] = useState<boolean>(false)
  /* number of colors on the slide = size of this array. It stores how many times users clicked on each color.
   [1, 0, 0] = 3 colors on the slide, users clicked on the first color once and 0 times on these 2 */
  const [curColorsCount, setColorsCount] = useState<number[]>(
    Object.values(colorsCount)
  )
  const { mutate } = useUpdatePostColorsCount(id, curColorsCount)

  // if user clicked, update the data in database
  useEffect(() => {
    // console.log(curColorsCount)
  }, [curColorsCount])

  useEffect(() => {
    setColorsCount(Object.values(colorsCount))
  }, [colorsCount])

  useEffect(() => {}, [id])

  const resetStates = (): void => {
    setPlayedSound(false)
    setCardClicked(false)
  }

  /**
   *
   * @param e
   * @param cardIdx Index of colour to update the proper colorCount
   */
  const handleColorCardClick = (e, cardIdx: number): void => {
    if (!playedSound) {
      alert('Play the sound first, please')
      return
    }

    // console.log(`clicked on ${title} with id ${id}`)

    // prevent user clicking multiple times in one slide
    if (cardClicked) return
    setCardClicked(true)

    // update colors count
    let colorsCount = [...curColorsCount]
    colorsCount[cardIdx] += 1
    setColorsCount(colorsCount)

    mutate(
      { postId: id, colorsCount: curColorsCount },
      {
        onError(error, variables, context) {
          // console.log(error)
        },
        onSuccess(data, variables, context) {
          resetStates()
          handleNextSlide()
        },
      }
    )
  }

  return (
    <>
      <AudioPlayer
        className={'bg-gray-800 shadow-none mb-10'}
        src={sound.sound?.mediaItemUrl}
        onPlay={() => setPlayedSound(true)}
        showJumpControls={false}
        showDownloadProgress={false}
        showSkipControls={false}
        loop={false}
        autoPlayAfterSrcChange={false}
      />
      <div className='sm:grid sm:grid-cols-4 flex justify-center gap-3.5 flex-wrap px-10'>
        {Object.values(colors).map((color, key: Key) => (
          <ColorCard
            handleClick={handleColorCardClick}
            key={key}
            idx={key}
            color={color}
          />
        ))}
      </div>
    </>
  )
}
