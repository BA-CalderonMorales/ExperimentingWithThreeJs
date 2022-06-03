import React, { Suspense, Fragment } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "../../styles/ExperimentFour.module.css";
import * as THREE from 'three';

// Common files
import Box from "../common/components/Box.jsx";
import Floor from "../common/components/Floor.jsx";
import LightBulb from "../common/components/LightBulb.jsx";
import OrbitControls from "../common/components/OrbitControls";
import Draggable from "../common/components/DragControls";

const ExperimentFour = () => {
    /*
        Positioning start.
    */

    // Move the box to the center of the screen
    let boxPosition = [0, 0, 0];
    const boxRotation = [0, 0, 0];
    const boxScale = [1, 1, 1];

    // Move the camera position to the away and to towards the top of the screen.
    const cameraPosition = [0, -5, 10];
    const cameraRotation = [10, -5, 10];

    // Move the light position to the top of the scene.
    const lightPosition = [0, 10, 0];
    const lightRotation = [0, 0, 0];
    const lightScale = [0.5, 0.5, 0.5];

    // Move the floor to the bottom of the scene.
    const floorPosition = [0, -1, 0];
    const floorRotation = [0, 0, 0];
    const floorScale = [10, 1, 10];

    /*
        Positioning end.
    */

    /*
        Mesh start.
    */
    const boxGeometry = "BoxGeometry";
    const boxMaterial = "MeshWroughtIronMaterial";
    const boxColor = '';

    // Change the floor to a plane.
    const floorGeometry = "PlaneGeometry";
    const floorMaterial = "MeshBasicMaterial";
    const floorColor = 0xffffff;

    // Change the light bulb to a sphere.
    const lightBulbGeometry = "SphereGeometry";
    const lightBulbMaterial = "MeshBasicMaterial";
    const lightBulbColor = 0xffffff;

    /*
        Mesh end.
    */

    /*
        Physics and Styling/mesh start.
    */

    // Apply gravity to the scene.
    const gravity = -9.8;

    // Use the gravity to make the box fall.
    const boxMass = 1;
    const boxFriction = 0.5;
    const boxRestitution = 0.5;

    // Update the floor with the new gravity value.
    const floorMass = 0;
    const floorFriction = 0.5;
    const floorRestitution = 0.5;

    // Update the lightbulb with the new gravity value.
    const lightBulbMass = 0;
    const lightBulbFriction = 0.5;
    const lightBulbRestitution = 0.5;

    // Update the camera with the new gravity value.
    const cameraMass = 0;
    const cameraFriction = 0.5;
    const cameraRestitution = 0.5;

    // Update the scene objects drag with the new gravity value.
    const boxLinearDrag = 0.5;
    const floorLinearDrag = 0.5;
    const lightBulbLinearDrag = 0.5;
    const cameraLinearDrag = 0.5;

    // Use the boxMesh's bounding boxes to detect intersections with other boxMeshs' bounding boxes.
    let boxCollisionGroup = 1;
    let boxCollisionMask = 1;

    // Update the boxMesh with the new physics values.
    const boxMesh = {
        geometry: boxGeometry,
        material: boxMaterial,
        color: boxColor,
        position: boxPosition,
        rotation: boxRotation,
        scale: boxScale,
        receiveShadow: true,
        castShadow: true,
        mass: boxMass,
        friction: boxFriction,
        restitution: boxRestitution,
        linearDrag: boxLinearDrag,
        collisionGroup: boxCollisionGroup,
        collisionMask: boxCollisionMask
    };

    // This is a box that is used along with boxMesh to create a cube.
    const box = (key, color, collisionGroup, collisionMask) => {
        // Base the color of the box from the incoming props.
        const finalColor = color ? color : boxMesh.color;
        const finalCollisionGroup = collisionGroup ? collisionGroup : boxMesh.collisionGroup;
        const finalCollisionMask = collisionMask ? collisionMask : boxMesh.collisionMask;

        return (
            <Box
                key={key}
                color={finalColor}
                collisionGroup={finalCollisionGroup}
                collisionMask={finalCollisionMask}
                {...boxMesh}
            />
        );
    };

    // Update the floor mesh with the new values.
    const floorMesh = {
        geometry: floorGeometry,
        material: floorMaterial,
        color: floorColor,
        position: floorPosition,
        rotation: floorRotation,
        scale: floorScale,
        receiveShadow: true,
        castShadow: true,
        mass: floorMass,
        friction: floorFriction,
        restitution: floorRestitution,
        linearDrag: floorLinearDrag
    };

    // This is a floor that is used along with floorMesh to create a plane.
    const floor = (
        <Floor {...floorMesh} />
    );

    // Update the light bulb mesh with the new values.
    const lightBulbMesh = {
        geometry: lightBulbGeometry,
        material: lightBulbMaterial,
        color: lightBulbColor,
        position: lightPosition,
        rotation: lightRotation,
        scale: lightScale,
        receiveShadow: true,
        castShadow: true,
        mass: lightBulbMass,
        friction: lightBulbFriction,
        restitution: lightBulbRestitution,
        linearDrag: lightBulbLinearDrag
    };

    const lightBulb = (
        <LightBulb {...lightBulbMesh} />
    );

    // Update the camera with the new values.
    const cameraMesh = {
        geometry: "Camera",
        material: "MeshBasicMaterial",
        color: 0xffffff,
        position: cameraPosition,
        rotation: cameraRotation,
        mass: cameraMass,
        friction: cameraFriction,
        restitution: cameraRestitution,
        linearDrag: cameraLinearDrag
    };

    const camera = (
        <Draggable {...cameraMesh} />
    );

    // Create an array of box objects to be rendered.
    const boxArray = [
        box(0, '#ff0000', 1, 1),
        box(1, '#00ff00', 2, 2),
        box(2, '#0000ff', 3, 3),
        box(3, '#ffff00', 1, 4),
        box(4, '#ff00ff', 5, 2)
    ];

    // Use draggable and orbitControls to move multiple box objects around the scene.
    const draggable = (
        <Draggable {...boxMesh}>
            {boxArray}
        </Draggable>
    );

    const orbitControls = (
        <OrbitControls {...cameraMesh} />
    );

    // Create a box object.
    const scene = (
        <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            {floor}
            {lightBulb}
            {draggable}
            {orbitControls}
        </Suspense>
    );

    /*
        Physics and Styling/mesh end.
    */

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas
                shadows={true}
                className={styles.canvas}
                camera={camera}
            >
                {scene}
            </Canvas>
        </div>
    );
}

export default ExperimentFour;