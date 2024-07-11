import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene); //taking animations directly from the original 3D scene
    const { actions } = useAnimations(animations, ref); //referencing the animations

    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play(); //turning on the plane
        } else {
            actions['Take 001'].stop();
        }
    }, [actions, isRotating]);

    return (
        <mesh {...props} ref={ref}> {/* Passing in the destructered props */}
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane;