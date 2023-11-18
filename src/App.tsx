import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Clone,
  Image,
} from "@react-three/drei";
import { useLocation } from "react-router-dom";

type ModelProps = {
  url: string;
};

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  return <Clone object={scene} position={[0, 0, 0]} />;
};
export default function App() {
  const location = useLocation()
  const queryParameters = new URLSearchParams(location.search)
  const param = queryParameters.get("model") ? `http://itekindia.com/octoria/models/getmodel.php?file=${queryParameters.get("model")}`: "http://itekindia.com/octoria/models/getmodel.php?file=shoe-draco.glb";
  const param2 = queryParameters.get("env") ? `http://itekindia.com/octoria/models/gethdr.php?file=${queryParameters.get("env")}`: "http://itekindia.com/octoria/models/gethdr.php?file=old_room.exr";
  
  return (
    <>
      <Canvas camera={{ position: [0.2, 0.2, -0.2], near: 0.025 }}>
        <Environment
          files={param2}
          background
        />
        <Suspense>
          <pointLight position={[10, 10, -10]} intensity={1000} />
          <pointLight position={[10, -10, 10]} intensity={1000} />
          <pointLight position={[-10, 10, 10]} intensity={1000} />
          <Model url={param} />
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