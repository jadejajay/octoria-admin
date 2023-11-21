import { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Clone,
  Image,
  Text,
} from "@react-three/drei";
import { useLocation } from "react-router-dom";
import { useControls, button } from "leva";
type ModelProps = {
  url: string;
};

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  return <Clone object={scene} position={[0, 0, 0]} />;
};
export default function App() {
  const location = useLocation()
  // const gl = useThree((state) => state.gl)
  const queryParameters = new URLSearchParams(location.search)
  const param = queryParameters.get("model") ? `${queryParameters.get("model")}`: "http://itekindia.com/octoria/models/getmodel.php?file=handle.glb";
  const param2 = queryParameters.get("env") ? `${queryParameters.get("env")}`: "http://itekindia.com/octoria/models/gethdr.php?file=old_room.exr";
  return (
    <>
          {/* <button 
          onClick={
            () => {
              const link = document.createElement('a')
              link.setAttribute('download', 'canvas.png')
              link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
              link.click()
            }
          }
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
               }} type="button">Button 2</button>*/}
      <Canvas gl={{ preserveDrawingBuffer: true }} style={{zIndex:0}} camera={{ position: [0.2, 0.2, -0.2], near: 0.025 }}>
        <Environment
          files={param2}
          background
        />
        <Scene />
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

function Scene() {
  const gl = useThree((state) => state.gl)
  useControls({
    screenshot: button(() => {
      // const link = document.createElement('a')
      // link.setAttribute('download', 'canvas.png')
      // link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      // link.click()
      const url = gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      const sharingLink = `whatsapp://send?text=${encodeURIComponent(url)}`;

      // Open the sharing link in a new window
      window.open(sharingLink, '_blank');
    })
  })
  return (
    <>
      
    </>
  )
}
// function Scene2() {
//   const gl = useThree((state) => state.gl)
  
//   return (
//     <>
//      <Button onClick={() => {
//       // const link = document.createElement('a')
//       // link.setAttribute('download', 'canvas.png')
//       // link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
//       // link.click()
//       const url = gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream')
//       const sharingLink = `whatsapp://send?text=${encodeURIComponent(url)}`;

//       // Open the sharing link in a new window
//       window.open(sharingLink, '_blank');
//     }}>
//         Click me!
//       </Button>
//        {/* <button 
//           onClick={
//             () => {
//               const link = document.createElement('a')
//               link.setAttribute('download', 'canvas.png')
//               link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
//               link.click()
//             }
//           }
//              style={{
//                position: "absolute",
//                top: "80%",
//                left: "33.33%",
//                alignItems: "center",
//                justifyContent: "space-evenly",
//                zIndex: 50
//              }} type="button">Button 1</button> */}
//     </>
//   )
// }
// const Button = ({ children, onClick }) => {
//   const [pressed, setPressed] = useState(false);

//   return (
//     <mesh
//       position={[0, 0, 0]}
//       onClick={() => {
//         setPressed(!pressed);
//         onClick();
//       }}
//     >
//       <meshPhongMaterial
//         attach="material"
//         color={pressed ? "red" : "green"}
//       />
//       <Text>{children}</Text>
//       <meshPhongMaterial attach="material" color="white" />
//     </mesh>
//   );
// };
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