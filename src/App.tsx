import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Clone,
  Image,
} from "@react-three/drei";
import { useLoaderData } from "react-router-dom";

type ModelProps = {
  url: string;
};

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  return <Clone object={scene} position={[0, 0, 0]} />;
};
export default function App() {
  const param = useLoaderData()  as any;
  
  return (
    <>
      <Canvas camera={{ position: [0.2, 0.2, -0.2], near: 0.025 }}>
        <Environment
          files="http://itekindia.com/octoria/models/gethdr.php?file=old_room.exr"
          background
        />
        <Suspense>
          <pointLight position={[10, 10, -10]} intensity={1000} />
          <pointLight position={[10, -10, 10]} intensity={1000} />
          <pointLight position={[-10, 10, 10]} intensity={1000} />
          <Model url={param?.url} />
          <Image url="http://itekindia.com/octoria/models/getimage.php?file=logo_big.png" transparent position={[0, 0, -5]} />
          <Image url="http://itekindia.com/octoria/models/getimage.php?file=logo.png" transparent position={[0, 0, 5]} />
        </Suspense>
        <OrbitControls autoRotate={false} />
      </Canvas>
    </>
  );
}
// Models[0].url
// const Models = [
//   {
//     title: "Drill",
//     url: "handle.glb",
//   },
//   {
//     title: "Drill",
//     url: "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/models/hammer.glb",
//   },
// ];