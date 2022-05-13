import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import styles from "../../styles/ExperimentThree.module.css";
import Ship from "../../Ship";

// Common files
import Floor from "../common/components/Floor.jsx";
import LightBulb from "../common/components/LightBulb.jsx";
import OrbitControls from "../common/components/OrbitControls";
import Draggable from "../common/components/DragControls";

const ExperimentThree = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas
                shadows={true}
                className={styles.canvas}
                camera={{
                    position: [1, 0, 3]
                }}
            >
                <Suspense fallback={null}>
                    <Stage>
                        <LightBulb
                            position={[0, 3, 0]}
                        />
                                <Ship />
                        <OrbitControls />
                        <Floor position={[0, -3, 0]}/>
                    </Stage>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ExperimentThree;
