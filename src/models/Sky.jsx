import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta; //roattion speed of thhe sky, relative to the scene
    }
  })

  return (
    <mesh ref={skyRef}> {/* For rendering primitive/non-primitive 3D objects */}
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky