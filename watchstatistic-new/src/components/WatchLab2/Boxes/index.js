import { Canvas, extend, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Physics } from "@react-three/cannon";
import WhiteBox from "../../../assets/WhiteBox";

import React, { useRef } from "react";

extend({ OrbitControls });

const MyMesh = () => {
	const mesh = useRef();

	useFrame(() => {
		// rotates the object
		mesh.current.rotation.y = mesh.current.rotation.y += 0.005;
	});
	return (
		<mesh ref={mesh} receiveShadow castShadow position={[0, -1, 0]}>
			<WhiteBox />
		</mesh>
	);
};

const Boxes = () => {
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
				position={[10, 0, 0]}
				angle={0.3}
				penumbra={1}
				intensity={2}
				castShadow
			/>
			<Physics>
				<MyMesh />
			</Physics>
		</Canvas>
	);
};
export default Boxes;
/* <mesh ref={ref} position={[0, -0.8, 0]}>
	<WhiteBox />
</mesh>; */
