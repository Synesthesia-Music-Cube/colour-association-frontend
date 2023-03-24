export interface ColorCardProps {
  color: string
  idx: number
}

export default function ColorCard({ color, handleClick, idx }) {
  return (
    <div
      className='transition-all max-w-sm p-6 border border-white bg-white cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-32 md:h-48 w-24 min-[310px]:w-20 min-[450px]:w-24 sm:w-28 hover:scale-110'
      style={{ background: color }}
      onClick={(e) => handleClick(e, idx)}
    ></div>
  )
}
