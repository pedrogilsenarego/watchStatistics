import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useBox, Physics, usePlane } from "@react-three/cannon";

import React, { useState, useRef } from "react";

extend({ OrbitControls });

function CameraControls() {
	const {
		camera,
		gl: { domElement }
	} = useThree();

	const controlsRef = useRef();
	useFrame(() => controlsRef.current.update());

	return (
		<orbitControls
			ref={controlsRef}
			args={[camera, domElement]}
			autoRotate
			autoRotateSpeed={-0.2}
		/>
	);
}

function Plane(props) {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
	return (
		<mesh ref={ref} receiveShadow>
			<planeBufferGeometry attach="geometry" args={[1009, 1000]} />
			<meshLambertMaterial attach="material" color="blue" />
		</mesh>
	);
}

function Cube(props) {
	const [ref, api] = useBox(() => ({
		mass: 1,
		position: [0, 5, 0],
		rotation: [0.4, 0.2, 0.5],
		...props
	}));
	const [colorCube, setColorCube] = useState("green");
	return (
		<mesh
			onClick={() => {
				api.velocity.set(0, 5, 0);
				setColorCube("red");
			}}
			receiveShadow
			castShadow
			ref={ref}
		>
			<boxBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color={colorCube} />
		</mesh>
	);
}

export default function WatchBoxesMain() {
	return (
		<Canvas
			shadowMap
			sRGB
			gl={{ alpha: false }}
			camera={{ position: [100, 50, 0], fov: 5 }}
		>
			<CameraControls />
			<ambientLight intensity={0.5} />
			<spotLight
				position={[10, 15, 10]}
				angle={0.3}
				penumbra={1}
				intensity={2}
				castShadow
			/>
			<Physics>
				<Cube />
				<Cube position={[0, 10, -2]} />
				<Cube position={[0, 20, -2]} />
				<Plane />
			</Physics>
		</Canvas>
	);
}
