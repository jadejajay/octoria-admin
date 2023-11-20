import { Suspense, useRef } from "react";
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
  const captureRef = useRef<typeof Canvas|null>(null);
  const queryParameters = new URLSearchParams(location.search)
  const param = queryParameters.get("model") ? `${queryParameters.get("model")}`: "http://itekindia.com/octoria/models/getmodel.php?file=handle.glb";
  const param2 = queryParameters.get("env") ? `${queryParameters.get("env")}`: "http://itekindia.com/octoria/models/gethdr.php?file=old_room.exr";

  const handleCapture = () => {
    if (captureRef.current) {
      const image = captureRef.current?.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "my-image.png";
      link.href = image;
      link.click();
    }
  }
  
  return (
    <>
          <button 
             onClick={handleCapture}
             style={{
               position: "absolute",
               top: "80%",
               left: "33.33%",
               alignItems: "center",
               justifyContent: "space-evenly",
               zIndex: 50
             }} type="button">Button 1</button>
          <button 
               style={{
                 position: "absolute",
                 top: "80%",
                 right: "33.33%",
                 alignItems: "center",
                 justifyContent: "space-evenly",
                 zIndex: 50
               }} type="button">Button 2</button>
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