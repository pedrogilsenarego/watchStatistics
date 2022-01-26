import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
//import { TextureLoader } from "three/src/loaders/TextureLoader";
import Loading from "../Loading/";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Watch from "./Solid";
//import test from "../../../assets/teste.jpg";

import React, { useRef, Suspense } from "react";

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

const MyMesh = () => {
	return (
		<mesh receiveShadow castShadow position={[0, -0.2, 0]}>
			<Watch />
		</mesh>
	);
};

const Boxes = () => {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			shadowMap
			sRGB
			colorManagement
			camera={{ position: [30, 50, 200], fov: 1 }}
		>
			<Suspense fallback={<Loading />}>
				<ambientLight intensity={0.3} />
				<directionalLight
					position={[0, 30, 20]}
					angle={0.3}
					penumbra={1}
					intensity={2}
					castShadow
				/>
				<spotLight
					position={[10, 0, 0]}
					angle={0.3}
					penumbra={1}
					intensity={2}
					castShadow
				/>

				<MyMesh />
				<CameraControls />
			</Suspense>
		</Canvas>
	);
};
export default Boxes;
