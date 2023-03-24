import { Center, Text3D } from '@react-three/drei'

export default function Text() {
  return (
    <Center>
      <Text3D font={'./fonts/roboto.json'}>
        HN
        <meshPhysicalMaterial color='white' />
      </Text3D>
    </Center>
  )
}
