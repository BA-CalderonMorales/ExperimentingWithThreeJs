import React from 'react';

const Sphere = (props) => {
    return (
        <mesh {...props} recieveShadow={true} castShadow={true}>
            <sphereBufferGeometry />
            <meshPhysicalMaterial color={"white"} />
        </mesh>
    );
}

export default Sphere;