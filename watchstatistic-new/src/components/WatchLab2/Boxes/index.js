import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Physics, usePlane } from "@react-three/cannon";
import WhiteBox from "../../../assets/WhiteBox";

import React, { useRef } from "react";

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

function Plane2(props) {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
	return (
		<mesh ref={ref} receiveShadow>
			<planeBufferGeometry attach="geometry" args={[1009, 1000]} />
			<meshLambertMaterial attach="material" color="red" />
		</mesh>
	);
}

export default function WatchBoxesMain() {
	return (
		<Canvas
			shadowMap
			sRGB
			gl={{ alpha: false }}
			camera={{ position: [100, 100, 200], fov: 2 }}
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
			<spotLight
				position={[-10, 30, 10]}
				angle={0.3}
				penumbra={1}
				intensity={2}
				castShadow
			/>
			<Physics>
				<Plane2 />
				<WhiteBox />
			</Physics>
		</Canvas>
	);
}
