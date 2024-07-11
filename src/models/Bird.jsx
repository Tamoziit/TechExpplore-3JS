import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame(({clock, camera}) => {
        //Updating the position along y-axis to simulate the flight of the bird moving in a sin wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2; //time dependent sin wave with amplifying factor

        if(birdRef.current.position.x > camera.position.x + 10) {//out of camera angle
            birdRef.current.rotation.y = Math.PI; //rotating the bird to come back (180deg)
        } else if(birdRef.current.position.x < camera.position.x - 10) { //still inside camera view
            birdRef.current.rotation.y = 0
        }

        //Changing other axes
        if (birdRef.current.rotation.y === 0) { //forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else { //backward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });

    return (
        <mesh
            ref={birdRef}
            position={[-5, 2, 1]}
            scale={[0.003, 0.003, 0.003]}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird;