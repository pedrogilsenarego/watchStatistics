import { Canvas, extend, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Physics, useBox } from "@react-three/cannon";
import WhiteBox from "../../../assets/WhiteBox";

import React, { useRef, useState } from "react";

extend({ OrbitControls });

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
	const ref = useRef();
	//useFrame(() => (ref.current.rotation.y += 0.01));

	return (
		<Canvas
			shadowMap
			sRGB
			colorManagement
			camera={{ position: [30, 50, 200], fov: 1.5 }} //position: [100, 100, 200], fov: 2
		>
			<ambientLight intensity={0.3} />
			<directionalLight
				position={[10, 15, 10]}
				angle={0.3}
				penumbra={1}
				intensity={2}
				castShadow
			/>
			<spotLight
				position={[1000, 0, 0]}
				angle={0.3}
				penumbra={1}
				intensity={2}
				castShadow
			/>
			<Physics>
				<Cube />
				<mesh ref={ref} position={[0, -0.8, 0]}>
					<WhiteBox />
				</mesh>
			</Physics>
		</Canvas>
	);
}
