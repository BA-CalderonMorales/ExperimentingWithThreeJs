import React from 'react';

const Box = (props) => {
    return (
        <mesh {...props} recieveShadow={true} castShadow={true}>
            <boxBufferGeometry />
            <meshPhysicalMaterial color={"white"} />
        </mesh>
    );
}

export default Box