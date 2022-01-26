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

const MyMesh = (configWatch) => {
	const ref = useRef();
	useFrame((state) => {
		const t = state.clock.getElapsedTime();

		ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
		ref.current.rotation.y = Math.sin(t / 4) / 8;
		ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
		ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
	});
	return (
		<mesh ref={ref} receiveShadow castShadow position={[0, -0.2, 0]}>
			<Watch {...configWatch} />
		</mesh>
	);
};

const Boxes = (configWatch) => {
	return (
		<Canvas shadows dpr={[1, 2]} camera={{ position: [30, 50, 200], fov: 1 }}>
			<Suspense fallback={<Loading />}>
				<ambientLight intensity={0.3} />

				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					shadow-mapSize={[512, 512]}
					castShadow
				/>

				<MyMesh {...configWatch} />
				<CameraControls />
			</Suspense>
		</Canvas>
	);
};
export default Boxes;
