import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ARButton, XR, Controllers, Hands, VRButton } from '@react-three/xr'
import {
  OrbitControls,
  Environment,
  useGLTF,
  Clone
} from '@react-three/drei'
// import { useControls } from 'leva'
const Models = [
  {
    title: 'Octoria Handle',
    url:
      'handle.glb'
  },
  {
    title: 'Drill',
    url:
      'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/models/hammer.glb'
  },
  {
    title: 'Hammer',
    url:
      'http://itekindia.com/octoria/models/getmodel.php?file=hammer.glb'
  }
]

type ModelProps = {
  url: string
}

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  return <Clone object={scene} />
}

export default function App() {
  // const { title } = useControls({
  //   title: {
  //     options: Models.map(({ title }) => title)
  //   }
  // })

  return (
    <>
     <VRButton style={{position:'absolute',top:100,left:100,zIndex:10}}/>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Environment
          files="room.exr"
          background
        />
        <Suspense>
          <XR onSessionStart={(ev)=>alert(`${ev}<======================`)}>
          <Controllers />
          <Hands />
          {/* <Model url={Models[Models.findIndex((m) => m.title === title)].url} /> */}
          <Model url={Models[0].url} />
          </XR>
        </Suspense>
        <OrbitControls autoRotate={false} />
      </Canvas>
     <ARButton />
    </>
  )
}
