/* eslint-disable react-hooks/exhaustive-deps */
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
  const param = queryParameters.get("model") ? `https://ibaisindia.co.in/octoria/api/products/model/getmodel.php?file=${queryParameters.get("model")}`: "https://ibaisindia.co.in/octoria/api/products/model/getmodel.php?file=handle.glb";
  const param2 = queryParameters.get("env") ? `https://ibaisindia.co.in/octoria/api/products/model/gethdr.php?file=${queryParameters.get("env")}`: "https://ibaisindia.co.in/octoria/api/products/model/gethdr.php?file=old_room.exr";
  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }} style={{zIndex:0}} camera={{ position: [0.2, 0.2, -0.2], near: 0.025 }}>
        <Environment
          files={param2}
          background
        />
        <Suspense>
          <pointLight position={[10, 10, -10]} intensity={1000} />
          <pointLight position={[10, -10, 10]} intensity={1000} />
          <pointLight position={[-10, 10, 10]} intensity={1000} />
          <Model url={param} />
          <Image url="https://ibaisindia.co.in/octoria/api/products/model/getimage.php?file=logo_big.png" transparent position={[0, 0, -5]} />
          <Image url="https://ibaisindia.co.in/octoria/api/products/model/getimage.php?file=logo.png" transparent position={[0, 0, 5]} />
        </Suspense>
        <OrbitControls autoRotate={false} />
      </Canvas>
    </>
  );
}

