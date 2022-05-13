import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "../../styles/ExperimentOne.module.css";
import Box from "./components/Box.jsx";

// Common files
import Floor from "../common/components/Floor.jsx";
import LightBulb from "../common/components/LightBulb.jsx";
import OrbitControls from "../common/components/OrbitControls";
import Draggable from "../common/components/DragControls";

const ExperimentOne = () => {
return (
    <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
        position: [-6, 7, 7],
        }}
        >
            <ambientLight color={"white"} intensity={0.3} />
            <LightBulb position={[0, 3, 0]} />
            <Suspense fallback={null}>
                <Draggable>
                    <Box rotateX={3} rotateY={0.2} />
                </Draggable>
            </Suspense>
            <OrbitControls />
            <Floor position={[0, -3, 0]} />
        </Canvas>
    </div>
    );
};

export default ExperimentOne;
