import { Canvas } from "@react-three/fiber"; //A React DOM 3D component Renderer for 3JS
import { Suspense } from "react"; //for laoding state rebdering
import Loader from "../components/Loader";
import Island from "../models/Island";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43]; //x,y,z axes respectively
    let rotation = [0.1, 4.7, 0]; //rotation angles of the model

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; //smaller scale of the model
    } else {
      screenScale = [0.9, 0.9, 0.9]; //full scale of the model
    }

    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          POPUP
      </div>*/}

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      > {/*objects nearer than 0.1 wrt to camera/view/screen will not be rendered & same for objects farther than 1000*/}
        <Suspense fallback={<Loader />}>
          {/* Lightings */}
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home