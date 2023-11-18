import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { XR, ARButton, Controllers } from '@react-three/xr'
import {
  OrbitControls,
  Environment,
  useGLTF,
  Clone,
  Image,
} from "@react-three/drei";
// import { useControls } from 'leva'
const Models = [
  {
    title: "Drill",
    url: "handle.glb",
  },
  {
    title: "Drill",
    url: "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/models/hammer.glb",
  },
  // {
  //   title: 'Hammer',
  //   url:
  //     'http://itekindia.com/octoria/models/getmodel.php?file=hammer.glb'
  // }
];
type ModelProps = {
  url: string;
};

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  return <Clone object={scene} position={[0, 0, 0]} />;
};
export default function App() {
  // const { title } = useControls({
  //   title: {
  //     options: Models.map(({ title }) => title)
  //   }
  // })
  return (
    <>
    <ARButton />
      {/* <VRButton style={{position:'absolute',top:100,left:100,zIndex:10}}/> */}
      <Canvas camera={{ position: [0.2, 0.2, -0.2], near: 0.025 }}>
        <Environment
          files="old_room.exr"
          background
        />
        <Suspense>
          {/* <Hands /> */}
          {/* <Model url={Models[Models.findIndex((m) => m.title === title)].url} /> */}
          {/* <XR referenceSpace="local"> */}
          {/* <ambientLight color={'red'} intensity={1} position={[10, 10, -10]} /> */}
          <pointLight position={[10, 10, -10]} intensity={1000} />
          <pointLight position={[10, -10, 10]} intensity={1000} />
          <pointLight position={[-10, 10, 10]} intensity={1000} />
          <XR referenceSpace="local">
          <Model url={Models[0].url} />
          <Controllers />
          </XR>
          <Image url="logo_big.png" transparent position={[0, 0, -1]} />
          <Image url="logo.png" transparent position={[0, 0, 1]} />
        </Suspense>
        <OrbitControls autoRotate={false} />
      </Canvas>
    </>
  );
}
