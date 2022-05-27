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
                    aspect: 1000,
                    position: [10, -100, 0]
                }}
            >
                <Stage>
                    <Ship />
                    <OrbitControls target={[10, 0, 0]} />
                </Stage>
            </Canvas>
        </div>
    );
};

export default ExperimentThree;
