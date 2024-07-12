import { Canvas } from "@react-three/fiber"; //A React DOM 3D component Renderer for 3JS
import { Suspense, useState, useEffect, useRef } from "react"; //for laoding state rebdering

import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, settIsPlayingMusic] = useState(true);

  useEffect(() => { //handles all state change of music
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43]; //x,y,z axes respectively
    let rotation = [0.1, 4.7, 0]; //rotation angles of the model

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; //smaller scale of the model
    } else {
      screenScale = [1, 1, 1]; //full scale of the model
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      > {/*objects nearer than 0.1 wrt to camera/view/screen will not be rendered & same for objects farther than 1000*/}
        <Suspense fallback={<Loader />}>
          {/* Lightings */}
          <directionalLight position={[1, 1, 1]} intensity={2} /> {/* simulate light from distance. eg: sunlight */}
          <ambientLight intensity={0.5} /> {/* Illuminates all objects equally without casting shadows */}
          <hemisphereLight skyColor="b1e1ff" groundColor="#000000" intensity={0.8} /> {/* Illuminates the scene with a gradient */}

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => settIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home