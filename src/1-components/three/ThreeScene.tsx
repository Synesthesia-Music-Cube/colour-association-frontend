import { Canvas, useFrame } from '@react-three/fiber'
import { useState } from 'react'
import Cube from './Cube'
import Text from './Text'
import { OrbitControls } from '@react-three/drei'

export default function ThreeScene() {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 8])

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <pointLight position={[0, 5, 5]} />
      {/* <Cube /> */}
      <Text />
      <OrbitControls />
    </Canvas>
  )
}
