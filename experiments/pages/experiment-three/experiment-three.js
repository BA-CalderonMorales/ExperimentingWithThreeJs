import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";
import styles from "../../styles/ExperimentThree.module.css";
// import Box from '../experiment-one/components/Box.jsx';
// import Ship from "../../Ship.js";
// import absoluteUrl from 'next-absolute-url';

// Common files
import Floor from "../common/components/Floor.jsx";
import LightBulb from "../common/components/LightBulb.jsx";
import OrbitControls from "../common/components/OrbitControls";
import Draggable from "../common/components/DragControls";

const ExperimentThree = () => {
    const [ship, setShip] = useState(null);

    useEffect(() => {
        getShip();
    }, []);

    const getShip = async () => {
        let tempShip = null;
        tempShip = await fetch(`http://localHost:3000/experiments/public/ship.glb`).then((res) => {
            tempShip = res;
        }).then((data) => {
            setShip(data);
            ship = useGLTF(data);
        });
    }
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            {ship !== null ?
                <Canvas shadows={true} className={styles.canvas} >
                    <Suspense fallback={null}>
                        <Stage>
                            <primitive object={ship.scene} />
                        </Stage>
                    </Suspense>
                </Canvas>
                : <div>Ship has sailed.</div>
            }
        </div>
    );
};

export default ExperimentThree;
