import { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

export default function Cube() {
  const ref = useRef<Mesh>(null!)

  useFrame(() => {
    if (!ref.current) {
      return
    }

    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}
